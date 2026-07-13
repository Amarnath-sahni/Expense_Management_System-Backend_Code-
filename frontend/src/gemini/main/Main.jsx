import React, { useContext } from 'react'
import './Main.css';
import { assets } from '../../assets/assets';
import Context from '../../context/context';



 function Main() {
    const {onSend, recentPrompt, showResult, loading, resultData,setinput, input} = useContext(Context);

    const handleCardClick = (text) => {
        setinput(text);
        onSend(text);
    }

  return (
    <>
    <div className="main">
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt=''/>
        </div>

        {!showResult ?<>
        {/* <div className="greet">
                <p><span>Hello, Dev.</span></p>
                <p>How can I help you today</p>
            </div> */}
            <div className="cards">
               
        <div className="card" onClick={() => handleCardClick("How can I start investing with a small amount of money?")}>
    <p>How can I start investing with a small amount of money?</p>
    <img src={assets.compass_icon} alt='' />
  </div>

  <div className="card" onClick={() => handleCardClick("What is a SIP and how does it work?")}>
    <p>What is a SIP and how does it work?</p>
    <img src={assets.bulb_icon} alt='' />
  </div>

  <div className="card" onClick={() => handleCardClick("How do I choose between different investment options like stocks, mutual funds, and fixed deposits?")}>
    <p>How do I choose between different investment options like stocks, mutual funds, and fixed deposits?</p>
    <img src={assets.message_icon} alt='' />
  </div>

  <div className="card" onClick={() => handleCardClick("How can I plan my finances to achieve long-term goals like buying a house or retirement?")}>
    <p>How can I plan my finances to achieve long-term goals like buying a house or retirement?</p>
    <img src={assets.code_icon} alt='' />
  </div>
  
</div>

        </>
        : <div className="result"> 
            <div className="result-title">
                <img src={assets.user_icon} alt=''/>
                <p>{recentPrompt}</p>
            </div>

            <div className="result-data">
                <img src={assets.gemini_icon} alt=''/>
                {loading? <div className='loader'>
                    <hr/>
                    <hr/>
                    <hr/>
                </div> :   <p dangerouslySetInnerHTML={{__html:resultData}}></p>}
            </div>
        </div>
        }

        <div className="main-container">
            

            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e)=>setinput(e.target.value)}  type='text' placeholder='Enter a prompt here' />
                    <div>
                        <img src={assets.gallery_icon} alt='' /> 
                         <img src={assets.mic_icon} alt='' /> 
                          {input?<img onClick={()=>onSend()} src={assets.send_icon} alt='' /> :null}
                    </div>
                </div>
                <p className="bottom-info">
                    AI may inaccurate info, including about people, double-cj
                </p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Main
