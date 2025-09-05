// import { useState } from "react"
// import { useNavigate } from "react-router-dom"

// const Registration = () => {
//     return (
//   const navigate = useNavigate()
//   //step state
//   const [step, setStep] = useState(1)

//   const [error, setError] = useState("")

// //   // Email registration handlers
// //   const handleEmailNext = (e) => {
// //     e.preventDefault()
// //     if(!email) return setError("Please enter your email")
// //      setError("")
// //     setStep(2) 
// //   };

//   const handleUsernameNext = (e) => {
//     e.preventDefault()
//     if(!username || !password || !userType) return setError("Please fill all fields")
//       setError("");
//       setStep(3);
//   }
  
//    const backRegistrationPage = (e) => {
//     e.preventDefault()
//       if(step === 1.5 ) setStep(1)
//        if(step === 2) setStep(1.5)
//         else if (step > 2 ) setStep(step - 1)
//    }
  
//   // Step 1: choose registration method
//   if (step === 1){
//     return (
//       <section className="flex items-center justify-center min-h-[85vh]  bg-white md:min-h-screen">
//         <div className="bg-[#0077b6] p-8 rounded-[1rem] shadow-md w-full max-w-[95vw] md:max-w-md min-h-[350px]">
//           <div className="flex flex-col items-center justify-center gap-4">
//           <h2 className="text-2xl font-bold mb-6 text-center font-[cursive] text-white">Register to weidicJobs</h2>
//          {error && <div className="text-red-500 mb-4">{error}</div>}
//          <button
//           onClick={handleGoogleRegister}
//           className="flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 font-bold py-2 px-4 rounded-[2rem] w-full hover:bg-gray-100 mb-3">
//             <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
//             Register with Google
//           </button>
//           <button
//             onClick={handleAppleRegister}
//             className="flex items-center justify-center gap-2 bg-black text-white font-bold py-2 px-4 rounded-[2rem] w-full hover:bg-gray-900 mb-3"
//           >
//             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//             <path d="M16.365 1.43c0 1.14-.93 2.07-2.07 2.07-.06 0-.12 0-.18-.01.01-.13.02-.26.02-.39 0-1.14.93-2.07 2.07-2.07.06 0 .12 0 .18.01-.01.13-.02.26-.02.39zm3.47 4.13c-1.87-2.23-5.09-2.01-6.37-2.01-1.28 0-4.5-.22-6.37 2.01-2.18 2.6-1.81 7.44 1.72 11.13 1.23 1.33 2.7 2.81 4.65 2.81 1.95 0 3.42-1.48 4.65-2.81 3.53-3.69 3.9-8.53 1.72-11.13zm-6.37 15.44c-1.13 0-2.25-.37-3.13-1.09-.25-.2-.29-.57-.09-.82.2-.25.57-.29.82-.09.7.56 1.62.87 2.4.87.78 0 1.7-.31 2.4-.87.25-.2.62-.16.82.09.2.25.16.62-.09.82-.88.72-2 .09-3.13 1.09z"/>
//             </svg>
//             Register with Apple
//           </button>
//           <button
//            onClick={() => setStep(1.5)}
//            className="bg-[#03045e] hover:bg-[#20228b] text-white font-bold py-2 px-4 rounded-[2rem] w-full"
//           >
//            Register with Email
//           </button>
//           </div>
//         </div>
//       </section>
//     )
//   }
//   // step 1.5 Enter email
//   if(step === 1.5){
//     return (
//       <section className="flex items-center justify-center min-h-[85vh] bg-white">
//         <form onSubmit={handleEmailNext} className="bg-[#0077b6] flex flex-col items-center justify-center p-4 rounded-[2rem] shadow-md w-full max-w-[95vw] md:max-w-md min-h-[350px] mb-10">
//           <h2 className="text-2xl font-bold mb-6 text-center text-white">Enter Your Email</h2>
//           {error && <div className="text-red-500 mb-4">{error}</div> } 
//           <input 
//            type="email"
//            className="border rounded-[2rem] w-full py-2 px-3 mb-4"
//            placeholder="Email"
//            value={email}
//            onChange={e => setEmail(e.target.value)}
//            required
//            />
//            <div className="flex justify-between mt-2 gap-4 ">
//             <button onClick={backRegistrationPage}
//              className="bg-[#03045e] hover:bg-[#20228b] text-white font-bold py-2 px-4 rounded-[2rem] lg:min-w-[10vw] min-w-[30vw]"> Back </button>
//              <button className="bg-[#03045e] hover:bg-[#20228b] text-white font-bold py-2 px-4 rounded-[2rem] lg:min-w-[10vw] min-w-[30vw]" type="submit">
//               Next
//              </button>
//            </div>
          
//         </form>
//       </section>
//     )
//   }
//    // step 2: username, password, user type
//    if(step === 2){
//     return (
//       <section className="flex items-center justify-center min-h-[85vh] bg-white">
//         <form onSubmit={handleUsernameNext} className="bg-[#0077b6] flex flex-col items-center justify-center p-8 rounded-[2rem] shadow-md w-full max-w-[95vw] md:max-w-md min-h-[350px] mb-10">
//           <h2 className="text-2xl font-bold mb-6 text-center text-white">Create Account</h2>
//           {error && <div className="text-red-500 mb-4">{error}</div>}
//           <input
//             type="text"
//             className="border rounded-[2rem] w-full py-2 px-3 mb-4"
//             placeholder="Username"
//             value={username}
//             onChange={e => setUsername(e.target.value)}
//             required
//           /> 
//              <input
//             type="password"
//             className="border rounded-[2rem] w-full py-2 px-3 mb-4"
//             placeholder="Password"
//             value={password}
//             onChange={e => setPassword(e.target.value)}
//             required
//           />

//             <select
//             className="border rounded-[2rem] w-full py-2 px-3 mb-4"
//             value={userType}
//             onChange={e => setUserType(e.target.value)}
//             required
//             >
//             <option value="">Are you looking for a job or hiring?</option>
//             <option value="jobseeker">Looking for a job</option>
//             <option value="employer">Employer / CEO</option>
//           </select>
//             <div className="flex justify-between mt-2 gap-4 ">
//             <button onClick={backRegistrationPage}
//              className="bg-[#03045e] hover:bg-[#20228b] text-white font-bold py-2 px-4 rounded-[2rem] lg:min-w-[10vw] min-w-[30vw]">
//                Back 
//                </button>
//              <button className="bg-[#03045e] hover:bg-[#20228b] text-white font-bold py-2 px-4 rounded-[2rem] lg:min-w-[10vw] min-w-[30vw]" type="submit">
//               Next
//              </button>
//            </div>
//         </form>
//       </section>
//     )
//    }
   
//   // Step 3
//   if (step === 3) {
//     return (
//       <section className="flex items-center justify-center min-h-[85vh] bg-white">
//         <form onSubmit={handleFinalSubmit} className="bg-[#0077b6] flex flex-col items-center justify-center p-8 rounded-[2rem] shadow-md w-full max-w-[95vw] md:max-w-md min-h-[350px] mb-10">
//           <label htmlFor="" className="text-left text-white font-bold text-lg mb-2">Re-enter password</label>
//           <input type="password" 
//            className = "border rounded-[2rem] w-full py-2 px-3 mb-4"
//            placeholder="re-enter password"
//            value={confirmPassword}
//            onChange={e => setConfirmPassword(e.target.value)}
//            required

//           />
//            <div className="flex justify-between mt-2 gap-4 ">
//             <button onClick={backRegistrationPage}
//              className="bg-[#03045e] hover:bg-[#20228b] text-white font-bold py-2 px-4 rounded-[2rem] lg:min-w-[10vw] min-w-[30vw]">
//                Back 
//                </button>
//              <button className="bg-[#03045e] hover:bg-[#20228b] text-white font-bold py-2 px-4 rounded-[2rem] lg:min-w-[10vw] min-w-[30vw]" type="submit">
//               Submit
//              </button>
//            </div>
//          </form>
//       </section>
//     );
//   }
//     return null; // fallback if no step matches    
//     )
// }

// export default Registration