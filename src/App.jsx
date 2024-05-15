import { useState } from "react";
function App (){
   const Frame = ()=>{
    return <div className="frame"><p>FitNet is Launching Soon</p></div>
   }
   const Hero = ()=>{
    return <div className="hero">
             <p className="p1">Join our waitlist for <br /> <span >FitNet</span></p>
             <p className='p2'>Join our fitness community! Find your next workout, connect with trainers, and track your progress - all at your fingertips</p>
           </div>
   }



   const Form = ()=>{
            const [emailVal,setEmailVal] = useState(null);
       return <form onSubmit={(event)=>{event.preventDefault();
       const elements= event.target.elements;
       const {email}= elements;
       const value = email.value;
       setEmailVal(value);
       }} action=''>
               <div >

                <input name="email" type="text" placeholder='Email address ' />
                <img className="jj" src="../src/assets/mail.png" alt="" />




                </div>
               <><button style={{cursor:'pointer'}} type="submit">join the waitlist</button> </>
             </form>
   }
   return <>
         <Frame />
         <Hero />
         <Form />
       </>
}
export default App;
