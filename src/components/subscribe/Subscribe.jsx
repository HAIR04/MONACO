const Subscribe = () =>{
    return(
        <div className="w-full mx-auto bg-popular flex rounded-2.5xl relative">
  <input  
    placeholder="Enter your email here"
    className="w-full py-[17px] rounded-2.5xl pl-5 tracking-tight
     placeholder:text-base 
    focus:outline-none focus:border-none focus:text-black"/>
  
  <button 
    className="w-[40%] h-full  absolute right-0  rounded-2.5xl 
     bg-popular text-white font-medium
    active:bg-opacity-90
    hover:scale-[0.95] transition-all duration-500">
    Subscribe
  </button>
</div>

    )
}

export default Subscribe