import React from 'react'

export const Header = ({handleMenu}) => {
  return (
    <header className='p-5 z-[1] ss:hidden fixed flex items-center justify-between bg-bgThird w-full h-8 border-b border-b-zinc-500'>
        <span 
            onClick={() => handleMenu()}
            class="material-icons cursor-pointer">
            menu
        </span>
        <span class="material-icons cursor-pointer">
            add
        </span>
    </header>

  )

}
