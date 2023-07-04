import GPTIcon from '../assets/gpt.jpg'
import UserIcon from '../assets/user.jpg'

export const MessageList = ({messages, typingIndicator}) => {

        console.log(messages)
  return (
    <div className="h-[75%] space-y-5 overflow-auto">
        {messages?.map((messageObject, i) => {
            console.log(messageObject.sender)
            return (
                <div key={i} className={`flex items-center  p-10 ${
                    messageObject.sender === 'ChatGPT' 
                            ? "flex-row bg-bgThird" 
                            : "flex-row-reverse"
                    }
                    `}
                >
                    <img 
                        src={
                            messageObject.sender === 'ChatGPT' 
                            ? GPTIcon 
                            : UserIcon
                        } 
                        alt="Icon"
                        className={`h-14 rounded-2xl
                        ${
                            messageObject.sender === 'ChatGPT' 
                                    ? "mr-5" 
                                    : "ml-5"
                            }
                        `}
                    />
                    <span>
                        {messageObject.message}
                    </span>
                </div>
            )
        })}
        { !typingIndicator && 
            <div className="flex items-center bg-bgThird p-10 flex-row">
                <img 
                        src={GPTIcon} 
                        alt="Icon"
                        className="h-14 rounded-2xl mr-5"
                    />
                <div className='py-3 px-1 bg-white pulseFast'/>
            </div>
        }
    </div>
  )
}
