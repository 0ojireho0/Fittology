import React from 'react'
import { useNavigate } from 'react-router-dom'

//Designs
import SideBackgroundLogin from "../assets/SideBackground-Login.jpg"
import Logo from "../assets/Logo.png"
import { Input, Card, Button } from '@material-tailwind/react'


const Login = () => {

    const navigate = useNavigate()

    const handleSignup = () =>{
        navigate('/signup')
    }



  return (
    <>
    <div className='w-screen h-screen'>
        
        <div className='flex'>
            <div className='bg-white w-[65rem] h-[43rem] '>
                <div className='w-24 text-center ml-3 mt-2'>
                    <img src={Logo} alt="" />
                    <h3 className='text-[#F7813C] fugazOne '>FITTOLOGY</h3>
                </div>
                <div className='poppins text-4xl ml-44 mt-12'>
                    <h3>Welcome<span className='text-[#F7813C] '>!</span></h3>
                </div>
                <div className='ml-44 mt-5 poppins_extralight'>
                    <p>Don’t Have An Account? <span className='text-[#F7813C] cursor-pointer' onClick={handleSignup}>Sign up here</span></p>
                </div>
                <Card shadow={false}>
                    <form>
                        <div className="w-96 ml-44 mt-5 bg-[#D9D9D9] rounded ">
                            <Input label="Username" variant='outlined' className='rounded-2xl' color='black' />
                        </div>
                        <div className="w-96 ml-44 mt-5 bg-[#D9D9D9] rounded ">
                            <Input label="Email" variant='outlined' className='rounded-2xl' color='black' />
                        </div>
                        <div className="w-96 ml-44 mt-5 bg-[#D9D9D9] rounded ">
                            <Input label="Password" variant='outlined' className='rounded-2xl' color='black' />
                        </div>
                        <div className='ml-44 w-96 text-center mt-5   '>
                            <button className='bg-[#94C9D8] text-white w-48 h-12 rounded-[15px]'>Log in</button>
                        </div>

                    </form>
                </Card>
                

                
                {/* Footer */}
                <div className='bottom-0 absolute h-10 w-full bg-[#94C9D8] rounded-tl-[35px] '></div>
            </div>
            <div className='bg-blue-600 w-[35rem] h-screen z-10 rounded-tl-[60px] sidebackgroundLogin  bg-cover '>
                <div className='w-60 inter text-sm font-thin italic ml-64 mt-24 '>
                    <h3>Unleash your potential with personalized routines designed to help you shed those extra pounds or pack on some muscle. It's like having a personal trainer in your pocket, but way more fun! 🔥</h3>
                </div>
            </div>
        </div>
        
       
    </div>

    
    
    
    
    </>
  )
}

export default Login
