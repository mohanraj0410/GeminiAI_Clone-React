import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { context } from '../../context/Context'

const Main = () => {

    const { onSent, recentPrompt, showResult, loading, resultData, input, setInput } = useContext(context)

    const handleClick = () => {
        onSent()
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            onSent()
        }
    };

    return (
        <div className='main'>
            <div className='nav'>
                <p>Gemini AI</p>
                <img src={assets.user_icon} alt='user_icon' />
            </div>
            <div className='main-container'>
                {
                    showResult ?
                        <div className='result'>
                            <div className='result-title'>
                                <img src={assets.user_icon} alt='user-icon' />
                                <p>{recentPrompt}</p>
                            </div>
                            <div className='result-data'>
                                <img src={assets.gemini_icon} alt='gemini_icon' />
                                {
                                    loading ?
                                        <div className='loader'>
                                            <hr />
                                            <hr />
                                            <hr />
                                        </div> :
                                        <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                                }

                            </div>
                        </div> :
                        <>
                            <div className='greet'>
                                <p><span>Hello, Dev.</span></p>
                                <p>How can I help you today ?</p>
                            </div>
                            <div className='cards'>
                                <div className='card-container'>
                                    <p>Suggest beautiful place to see on an upcoming road trip</p>
                                    <img src={assets.compass_icon} alt='compass_icon' />
                                </div>
                                <div className='card-container'>
                                    <p>Briefly summarize this concepts: urban planning</p>
                                    <img src={assets.bulb_icon} alt='bulb_icon' />
                                </div>
                                <div className='card-container'>
                                    <p>Brainstorm team bonding activities for our work retreat</p>
                                    <img src={assets.message_icon} alt='message_icon' />
                                </div>
                                <div className='card-container'>
                                    <p>Improve the readability of the following code</p>
                                    <img src={assets.code_icon} alt='code_icon' />
                                </div>
                            </div>
                        </>
                }
                <div className='main-bottom'>
                    <div className='bottom-input'>
                        <input onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyDown} value={input} type='text' placeholder='Enter a prompt here' />
                        <div>
                            <img src={assets.gallery_icon} alt='gallery_icon' />
                            <img src={assets.mic_icon} alt='mic_icon' />
                            {input && <img onClick={handleClick} src={assets.send_icon} alt='send_icon' />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main

