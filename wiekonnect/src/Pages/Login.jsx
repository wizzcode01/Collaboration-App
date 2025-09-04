import { FaArrowRight, FaGoogle, FaApple } from "react-icons/fa";

const Login = () => {
    return (
        <div className="min-h-screen w-full relative flex flex-col items-center justify-center  bg-black">
            <div className="w-full ml-14">
                <h1 className="text-3xl font-bold text-white mb-6">Log In - wiedic</h1>
                <p className="text-sm text-gray-500 font-bold ">Log In With One of The Following</p>
            </div>    
        <div className="flex flex-col items-center w-[95%] max-w-md bg-black px-8 py-10 ">
          <div className="flex justify-center items-center gap-5">
            <FaGoogle className=" bg-gray-900 text-white border-2 rounded-lg border-white text-5xl w-32 p-2"/>
            <FaApple className="text-white border-2 rounded-lg bg-gray-900 text-5xl w-32 p-2"/>
          </div>  
            <form 
            className="flex flex-col w-full mt-10 gap-2">
                <div className="flex flex-col gap-6">
                   <div className="">
                        <input 
                        type="email"
                        name="email"
                        placeholder="email"
                        className="w-full border-b-2 border-gray-200 focus:border focus:border-pink-700 focus:outline-none py-2"
                        />
                    </div>    
                    <div>
                        <input 
                        type="password"
                        name="password"
                        placeholder="********"
                        className="w-full border-b-2 border-gray-200 focus:border focus:border-pink-700 focus:outline-none py-2"
                        />
                    </div>    
                </div>
                <button
               className="bg-pink-700 font-bold text-white text-lg px-4 py-2 mt-12 m-auto rounded-lg w-56"
               type="submit"
              >
                Login
            </button>
            </form>
          

        </div>
        <div className="flex flex-col justify-center items-center gap-3 mt-3 p-5">
           <p
            to="/Registration"
            className="text-gray-500 text-sm">
           Don't have an account? <a className="text-white">Create Account</a></p> 
            <a
             to="/forgetPassowrd"
             className="text-white text-sm"
             >forget password?</a>
           
        </div>
    </div>
    )
}

export default Login