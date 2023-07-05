import React from 'react'

export const Sidemenu = ({menuOpen, handleMenu}) => {
  return (
    <div className={`sm:w-[20%] z-[2] h-full bg-bgPrimary/[0.95] min-w-[260px] p-3 duration-100 transition-all ${menuOpen ? '-translate-x-0 sm:relative absolute w-full' : '-translate-x-[100%] absolute'} `}>
      <div className='flex justify-between space-x-2'> 
        <div className='w-full duration-200 transition-all cursor-pointer hover:bg-bgSecundary/80 border rounded-xl border-zinc-600 p-2 flex items-center space-x-2'>          
          <span class="material-icons cursor-pointer">
            add
          </span>
          <span>Nova conversa</span>
        </div>
        <div className={`${menuOpen ? 'flex' : 'translate-x-16 ss:flex hidden rotate-180'} duration-100 transition-all cursor-pointer hover:bg-bgSecundary/80 border rounded-xl border-zinc-600 p-2 items-center`}>          
          <span 
            onClick={() => handleMenu()}
            class="material-icons cursor-pointer"
          >
            menu_open
          </span>
        </div>
      </div>
    </div>
  )
}
