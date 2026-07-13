import React,{ createContext, useState, useRef } from "react";
import runChart from "../config/gemini";

const Context = createContext();
export default Context;

export const ContextProvider = (props) => {

  const [input, setinput] = useState("");
  const [recentPrompt, setrecentPrompt] = useState("");
  const [prevPrompt, setprevPrompt] = useState([]);
  const [showResult, setshowResult] = useState(false);
  const [loading, setloading] = useState(false);
  const [resultData, setresultData] = useState("");

  // ✅ track all timeouts
  const timeoutsRef = useRef([]);

  // ✅ unique request lock
  const requestIdRef = useRef(0);

  const delayPara = (index, nextWord, requestId) => {
    const timeoutId = setTimeout(() => {
      // 🔒 only latest request can write
      if (requestId === requestIdRef.current) {
        setresultData(prev => prev + nextWord);
      }
    }, 20 * index);

    timeoutsRef.current.push(timeoutId);
  };

  const newChat = () => {
    setloading(false);
    setshowResult(false);
  };

  const onSend = async (prompt) => {

    // 🔒 increment request ID
    requestIdRef.current += 1;
    const currentRequestId = requestIdRef.current;

    // 🧹 clear previous animations
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];

    if (loading) return;

    setresultData("");
    setloading(true);
    setshowResult(true);

    let response;
    if (prompt !== undefined) {
      response = await runChart(prompt);
      setrecentPrompt(prompt);
    } else {
      setprevPrompt(prev => [...prev, input]);
      setrecentPrompt(input);
      response = await runChart(input);
    }

    const responseArray = response.split("**");
    let newResponse = "";

    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponse += responseArray[i];
      } else {
        newResponse += "<b>" + responseArray[i] + "</b>";
      }
    }

    let newResponse2 = newResponse.split("*").join("</br>");
    let newResponseArray = newResponse2.split(" ");

    for (let i = 0; i < newResponseArray.length; i++) {
      const nextWord = newResponseArray[i] + " ";
      delayPara(i, nextWord, currentRequestId);
    }

    setTimeout(() => {
      if (currentRequestId === requestIdRef.current) {
        setloading(false);
      }
    }, newResponseArray.length * 20);

    setinput("");
  };

  const contextValue = {
    prevPrompt,
    setprevPrompt,
    onSend,
    setrecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setinput,
    newChat
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};
