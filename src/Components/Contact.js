import React from 'react'
import { useNavigate } from 'react-router-dom';

function Contact() {
    const navigate=useNavigate()
    const Back=()=>{
        navigate("/")
    }
    return (
        <>
        <div className='text-9xl flex flex-row justify-center w-full'>Contact</div>
        <button onClick={Back}> GO Back</button>
        </>
    //   <div className="w-[100%] h-[100%] md:p-10 xs:p-2 bg-slate-100">
    //     {/* <div> */}
    //     <div className="w-[100%] h-[100%] xs:mt-12">
    //       <div className="md:text-5xl xs:text-2xl text-center font-roboto font-bold">Contact</div>
    //       <div className="flex justify-center">
    //         <div className="text-lg font-roboto text-center text-gray-500 w-[60%] mt-8">
    //           Feel free to Contact me by submitting the form below and I will get
    //           back to you as soon as possible
    //         </div>
    //       </div>
    //       <div className="lg:w-full  h-[100%] flex  justify-center lg:p-36 md:p-10 xs:p-5">
    //         <div className="flex flex-col gap-10 w-fit p-10 bg-white rounded-lg">
    //           <div>
    //             <div className="font-roboto text-slate-500 font-bold">Name</div>
    //             <div>
    //               <input type="text" className='w-full bg-gray-200 p-4 text-lg'/>
    //             </div>
    //           </div>
    //           <div>
    //             <div className="font-roboto text-slate-500 font-bold">Email</div>
    //             <div>
    //             <input type="text" className='w-full bg-gray-200 p-4 text-lg'/>
    //             </div>
    //           </div>
    //           <div>
    //             <div className="font-roboto text-slate-500 font-bold">Message</div>
    //             <div>
    //             <input type="text" className='w-full bg-gray-200 p-4 text-lg'/>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     {/* </div> */}
    //   </div>
    );
  }

export default Contact