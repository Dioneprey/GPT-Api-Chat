import { useEffect, useRef } from 'react'
import smoothscroll from 'smoothscroll-polyfill'

import GPTIcon from '../assets/gpt.jpg'
import UserIcon from '../assets/user.jpg'


export const MessageList = ({messages, typingIndicator}) => {
    const messagesEndRef = useRef(null)

    useEffect(() => {
        smoothscroll.polyfill()
            messagesEndRef?.current?.scrollIntoView({ 
                behavior: 'smooth',
            })  
            
    }, [messages])

    return (
    <div className="h-[75%] overflow-auto">    
        {messages?.map((messageObject, i) => {
            return (
                <div key={i} className={`ss:mt-0 mt-10 flex items-center p-10 ss:text-base text-[14px] lg:px-32 xl:px-72 ss:px-16 px-2 ${
                    messageObject.sender === 'ChatGPT' 
                            ? "flex-row bg-bgThird" 
                            : "flex-row-reverse"
                    }
                    `}
                >
                    <div className='relative'>
                        <div className='h-14 w-14'>
                            <img 
                                src={
                                    messageObject.sender === 'ChatGPT' 
                                    ? GPTIcon 
                                    : UserIcon
                                } 
                                alt="Icon"
                                className={`h-full w-full rounded-2xl`}
                            />
                        </div>
                        {messageObject.error && 
                            <span class="text-white p h-5 w-5 flex items-center justify-center border border-white bg-red-500 rounded-full absolute -bottom-2 right-3">
                               !
                            </span>
                        }
                    </div>
                    <span className={`${messageObject.error && 'p-5 border border-red-500 bg-red-500/20 rounded-xl'} 
                        ${
                            messageObject.sender != 'ChatGPT' 
                            ? "mr-5" 
                            : "ml-5"
                        }`
                    }>
                        {messageObject.message}
                    </span>
                </div>
            )
        })}
        { typingIndicator && 
            <div 
                className="flex items-center bg-bgThird p-10 flex-row lg:px-32 xl:px-72 ss:px-16 px-2">
                <img 
                        src={GPTIcon} 
                        alt="Icon"
                        className="h-14 rounded-2xl mr-5"
                    />
                <div className='py-3 px-1 bg-white pulseFast'/>
            </div>
        }
        <div className='mt-10' ref={messagesEndRef}/>
    </div>
    )
}
