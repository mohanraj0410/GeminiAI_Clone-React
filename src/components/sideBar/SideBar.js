import React, { useContext, useState } from 'react'
import { assets } from "../../assets/assets"
import { context } from '../../context/Context'

const SideBar = () => {

    const { onSent, prevPrompt, setRecentPrompt, newChat } = useContext(context)



    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='sideBar'>
            <div className='top'>
                <img className='menu' onClick={() => setIsOpen(!isOpen)} src={assets.menu_icon} alt='menu_icon' />
                <div onClick={() => newChat()} className='new-chat'>
                    <img src={assets.plus_icon} alt='plus_icon' />
                    {isOpen && <p>New Chat</p>}
                </div>
                {
                    isOpen &&
                    <div className='recent'>
                        <p className='recent-title'>Recent</p>
                        {
                            prevPrompt && prevPrompt.map((data, index) => {
                                return (
                                    <div key={index} className='recent-entry'>
                                        <img src={assets.message_icon} alt='message_icon' />
                                        <p>{data.slice(0, 18)}...</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                }
            </div>
            <div className='bottom'>
                <div className='bottom-item recent-entry'>
                    <img src={assets.question_icon} alt='question_icon' />
                    {isOpen && <p>Help</p>}
                </div>
                <div className='bottom-item recent-entry'>
                    <img src={assets.history_icon} alt='history_icon' />
                    {isOpen && <p>Activity</p>}
                </div>
                <div className='bottom-item recent-entry'>
                    <img src={assets.setting_icon} alt='setting_icon' />
                    {isOpen && <p>Settings</p>}
                </div>
            </div>
        </div>
    )
}

export default SideBar