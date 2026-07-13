// src/components/Sidebar.jsx
import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import Context from "../../context/context";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { onSend, prevPrompt, setrecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setrecentPrompt(prompt);
    await onSend(prompt);
  };

  return (
    <div
      className={`fixed top-16 left-0 h-[calc(100%-4rem)] bg-gray-900 text-gray-100 flex flex-col justify-between transition-all duration-300 z-20 ${
        extended ? "w-64" : "w-16"
      }`}
    >
      {/* Top Section */}
      <div className="flex flex-col">
        <div
          onClick={() => setExtended((prev) => !prev)}
          className="p-4 cursor-pointer hover:bg-gray-800 flex items-center justify-center"
        >
          <img src={assets.menu_icon} alt="Menu" className="w-6 h-6 bg-gray-300" />
        </div>

        {/* New Chat */}
        <div
          onClick={() => newChat()}
          className="flex items-center gap-2 p-4 cursor-pointer hover:bg-gray-800"
        >
          <img src={assets.plus_icon} alt="New Chat" className="w-5 h-5" />
          {extended && <p className="font-medium">New Chat</p>}
        </div>

        {/* Recent Prompts */}
        {extended && prevPrompt.length > 0 && (
          <div className="mt-6 px-4">
            <p className="text-gray-400 text-sm font-semibold mb-2">Recent</p>
            <div className="flex flex-col gap-2">
              {prevPrompt.map((item, index) => (
                <div
                  key={index}
                  onClick={() => loadPrompt(item)}
                  className="flex items-center gap-2 p-2 rounded hover:bg-gray-800 cursor-pointer"
                >
                  <img src={assets.message_icon} alt="Prompt" className="w-4 h-4" />
                  <p className="text-sm truncate">{item}...</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col gap-2 mb-4 px-2">
        <div className="flex items-center gap-2 p-2 rounded hover:bg-gray-800 cursor-pointer">
          <img src={assets.question_icon} alt="Help" className="w-5 h-5" />
          {extended && <p className="text-sm">Help</p>}
        </div>

        <div className="flex items-center gap-2 p-2 rounded hover:bg-gray-800 cursor-pointer">
          <img src={assets.history_icon} alt="Activity" className="w-5 h-5" />
          {extended && <p className="text-sm">Activity</p>}
        </div>

        <div className="flex items-center gap-2 p-2 rounded hover:bg-gray-800 cursor-pointer">
          <img src={assets.setting_icon} alt="Settings" className="w-5 h-5" />
          {extended && <p className="text-sm">Settings</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
