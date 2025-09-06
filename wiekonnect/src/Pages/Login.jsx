import { FaArrowRight, FaGoogle, FaApple } from "react-icons/fa";
import Registration from "./Registration";

const Login = () => {
    return (
        <div className="min-h-screen w-full relative flex flex-col items-center justify-center  bg-black">
            <div className="w-full ml-14 lg:ml-0 lg:text-center ">
                <h1 className="text-3xl font-bold text-white mb-6">Log In - wiedic</h1>
                <p className="text-sm text-gray-500 font-bold ">Log In With One of The Following</p>
            </div>    
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
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="w-full border-b-2 text-gray-200 border-gray-200 focus:border-2 focus:border-pink-700 focus:outline-none px-3 py-2"
                        />
                    </div>    
                    <div>
                        <input 
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="w-full border-b-2 text-gray-200 border-gray-200 focus:border-2 focus:border-pink-700 focus:outline-none px-3 py-2"
                        />
                    </div>    
                </div>
                <button
               className="bg-pink-700 font-bold text-white text-[1.5rem] px-4 py-2 mt-12 m-auto rounded-lg w-56 hover:bg-white hover:text-pink-700 transition-all ease-in-out duration-300 cursor-pointer"
               type="submit"
              >
                Login
            </button>
            </form>
          

        </div>
        <div className="flex flex-col justify-center items-center gap-3 mt-3 p-5">
           <p
            className="text-gray-500 text-sm">
           Don't have an account? <a href="/Registration" className="text-white">Create Account</a></p> 
            <a
             href="/"
             className="text-white text-sm"
             >forget password?</a>
           <a href=""></a>
        </div>
    </div>
    )
}

export default Login