import { useState } from "react"

export const MessageInput = ({onSender, typingIndicator, placeHolder, language}) => {
  const [message, setMessage] = useState()
  const [system, setSystem] = useState('default')
  const [gptVersion, setGptVersion] = useState('gpt-3.5-turbo')
  
  const handleSender = (messageField) => {
    if (messageField.length > 0 && messageField != "") {
      onSender(message, system, gptVersion)
    }
  }

  return (
    <div className="max-h-[25%] space-y-5 p-5 flex flex-col lg:px-32 xl:px-72 px-16">
      <div className="flex space-x-5">
        <select 
          onChange={(e) => setSystem(e.target.value)}
          className="p-2 bg-bgThird border border-zinc-600 rounded-lg outline-none"
        >
          <option value="default">
            {language === 'pt-BR' ? 'Padrão' : 'Default'}
          </option>
          <option value="evil">
            {language === 'pt-BR' ? 'Maligno' : 'Evil'}
          </option>
          <option value="laid-back">
            {language === 'pt-BR' ? 'Descontraído' : 'Laid-Back'}
          </option>
        </select>

        <select 
          onChange={(e) => setGptVersion(e.target.value)}
          className="p-2 bg-bgThird border border-zinc-600 rounded-lg outline-none"
        >
          <option value="gpt-3.5-turbo">GPT-3.5-Turbo</option>
          <option 
            disabled
            value="gpt-4">GPT-4</option>
        </select>
      </div>
      <div className="flex space-x-10 items-center">
        <textarea
          placeholder={placeHolder}
          onKeyUp={(e) => {
            if(e.code === 'Enter' || e.code === 'NumpadEnter') {
              handleSender(message)
              setMessage("")
            }
          }}
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          className="p-5 w-full min-h-[80px] max-h-[110px] rounded-xl focus:outline-none bg-bgThird hover:bg-bgThird/90">
        </textarea>
        <button 
          disabled={typingIndicator || message?.length < 1 && message == ""}
          onClick={() => {
            handleSender(message)
            setMessage("")
          }}
          className={`${typingIndicator || message?.length < 1 && message == "" ? 'bg-zinc-600' : 'bg-greenPrimary'} duration-200 transition-all group p-3 flex items-center rounded-lg hover:opacity-[0.95]`}>
          <span class="material-icons group-hover:translate-x-[0.09rem] duration-200 transition-all">
            send
          </span>
        </button>
      </div>
    </div>
  )
}
