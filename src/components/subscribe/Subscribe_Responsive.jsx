import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; 
const Subscribe_Responsive = () =>{
    return(
      <div>
        <div className="w-full mx-auto bg-popular flex rounded-2.5xl relative">
  <input  
    placeholder="Enter your email here"
    className="w-full py-2 rounded-2.5xl pl-5 tracking-tight
     placeholder:text-base 
    focus:outline-none focus:border-none focus:text-black"/>
</div>
<button 
    className="w-[100%] mt-5 py-2 rounded-2.5xl pl-5 tracking-tight
     placeholder:text-base 
     bg-popular text-white font-medium
    active:bg-opacity-90
    hover:scale-[0.95] transition-all duration-500">
    <FontAwesomeIcon icon={faEnvelope} /> Subscribe
  </button>
      </div>
        


    )
}

export default Subscribe_Responsive