import { FaArrowRight, FaArrowLeft, FaGoogle, FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";

const Registration = () => {

    if(step === 1) {
      return (
        <div className="min-h-screen w-full relative flex flex-col items-center justify-center  bg-black">
            <div className="w-full flex gap-5 justify-center items-center ">
                <h1 className="text-white font-bold text-4xl border border-white rounded-lg p-1 px-4 cursor-pointer"><FaArrowLeft size={30}/></h1> 
                <h1 className="text-3xl font-bold text-white"> Sign Up - wiedic</h1>
            </div>    
            <p className="text-sm m-5 text-gray-500 font-bold ">SignUp With any of The Following</p>
        <div className="flex flex-col items-center w-[95%] max-w-md bg-black px-8 py-10 ">
          <div className="flex justify-center items-center gap-5">
            <FaGoogle className=" bg-gray-900 cursor-pointer text-white border rounded-lg border-white text-5xl w-32 p-2"/>
            <FaApple className="text-white cursor-pointer border rounded-lg bg-gray-900 text-5xl w-32 p-2"/>
          </div>  
            <form 
            className="flex flex-col w-full mt-10 gap-2">
                <div className="flex flex-col gap-6">
                   <div className="">
                        <input 
                        type="text"
                        name="FirstName"
                        placeholder="FirstName"
                        className="w-full border-b-2 text-white border-gray-200 focus:border-2 focus:border-pink-700 focus:outline-none px-3 py-2"
                        />
                    </div>    
                    <div>
                        <input 
                        type="text"
                        name="LastName"
                        placeholder="LastName"
                        className="w-full text-white border-b-2 border-gray-200 focus:border-2 focus:border-pink-700 focus:outline-none px-3 py-2"
                        />
                    </div>    
                </div>
                <button
                  className="bg-pink-700 font-bold text-white text-[1.5rem] px-4 py-2 mt-12 m-auto rounded-lg w-56 hover:bg-white hover:text-pink-700 transition-all ease-in-out duration-300 cursor-pointer"
                  type="submit"
                >
                <FaArrowRight size={30} className="text-center m-auto"/>
                </button>
            </form>
        </div>

        <div className="flex flex-col justify-center items-center gap-3 p-5">
           <p
            className="text-gray-500 text-sm">
           Already have an account?{" "} <Link to="/" className="text-white">Log In</Link></p> 
        </div>
    </div>
    )
}

  if( step === 2 ){
    return (
         <div className="min-h-screen w-full relative flex flex-col items-center justify-center  bg-black">
            <div className="w-full flex gap-5 justify-center items-center ">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Wedic-Connect</h1>
            </div>    
           <div className="flex flex-col items-center w-[95%] max-w-md bg-black px-8 py-10 ">
            <form 
            className="flex flex-col w-full mt-10 gap-2">
                <div className="flex flex-col gap-6">
                   <div className="">
                        <input 
                        type="text"
                        name="FirstName"
                        placeholder="FirstName"
                        className="w-full border-b-2 text-white border-gray-200 focus:border-2 focus:border-pink-700 focus:outline-none px-3 py-2"
                        />
                    </div>    
                    <div>
                        <input 
                        type="text"
                        name="LastName"
                        placeholder="LastName"
                        className="w-full text-white border-b-2 border-gray-200 focus:border-2 focus:border-pink-700 focus:outline-none px-3 py-2"
                        />
                    </div>    
                </div>
                <button
                  className="bg-pink-700 font-bold text-white text-[1.5rem] px-4 py-2 mt-12 m-auto rounded-lg w-56 hover:bg-white hover:text-pink-700 transition-all ease-in-out duration-300 cursor-pointer"
                  type="submit"
                >
                <FaArrowRight size={30} className="text-center m-auto"/>
                </button>
            </form>
          

        </div>
        <div className="flex flex-col justify-center items-center gap-3 mt-3 p-5">
           <p
            className="text-gray-500 text-sm">
           Already have an account?{" "} <Link to="/" className="text-white">Log In</Link></p> 
        </div>
    </div>
    )
  }
}

export default Registration