export const MessageInput = () => {
  return (
    <div className="max-h-[25%] p-5 flex space-x-10 items-center">
      <textarea className="p-5 w-full min-h-[80px] max-h-[110px] rounded-xl focus:outline-none bg-bgThird hover:bg-bgThird/90">
        oi
      </textarea>
      <button className="group p-3 flex items-center rounded-lg bg-greenPrimary hover:opacity-[0.95]">
        <span class="material-icons group-hover:-translate-y-[0.09rem] duration-200 transition-all">
          arrow_upward
        </span>
      </button>
    </div>
  )
}
