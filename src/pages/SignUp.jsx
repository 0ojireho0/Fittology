import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'



//Designs
import Logo from "../assets/Logo.png"
import { Input, Card } from '@material-tailwind/react'

import axios from 'axios'




const SignUp = () => {
    const navigate = useNavigate()
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:3001/signup/', {userName, email, password})
        .then(result=>{
            console.log(result)
            if(result.data === "Exist"){
                alert("The email is existed")
                navigate("/signup")
            }else if(result.data === "Not Exist"){
                alert("Register Success")
                navigate("/")
            }
        })
        .catch((err)=>{
            console.log(err)
        })
        
        
    }

    const handleLogin = () =>{
        navigate('/')
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
                    <h3>Create new account<span className='text-[#F7813C] '>.</span></h3>
                </div>
                <div className='ml-44 mt-5 poppins_extralight'>
                    <p>Already Have An Account? <span className='text-[#F7813C] cursor-pointer' onClick={handleLogin}>Log In Here</span></p>
                </div>
                <Card shadow={false}>
                    <form onSubmit={handleSubmit}>
                        <div className="w-96 ml-44 mt-5 bg-[#D9D9D9] rounded ">
                            <Input label="Username" variant='outlined' className='rounded-2xl' color='black' onChange={(e) =>{setUserName(e.target.value)}}/>
                        </div>
                        <div className="w-96 ml-44 mt-5 bg-[#D9D9D9] rounded ">
                            <Input label="Email" variant='outlined' className='rounded-2xl' color='black' onChange={(e) => {setEmail(e.target.value)}} />
                        </div>
                        <div className="w-96 ml-44 mt-5 bg-[#D9D9D9] rounded ">
                            <Input label="Password" type='password' variant='outlined' className='rounded-2xl' color='black' onChange={(e)=> {setPassword(e.target.value)}} />
                        </div>
                        <div className='ml-44 w-96 text-center mt-5   '>
                            <button className='bg-[#94C9D8] text-white w-48 h-12 rounded-[15px]' type='submit'>Create Account</button>
                        </div>

                    </form>
                </Card>
                

                
                {/* Footer */}
                <div className='bottom-0 absolute h-10 w-full bg-[#94C9D8] rounded-tl-[35px] '></div>
            </div>
            <div className=' w-[35rem] h-screen z-10 rounded-tl-[60px] sidebackgroundLogin  bg-cover '>
                <div className='w-60 inter text-sm font-thin italic ml-64 mt-24 '>
                    <h3>Unleash your potential with personalized routines designed to help you shed those extra pounds or pack on some muscle. It's like having a personal trainer in your pocket, but way more fun! 🔥</h3>
                </div>
            </div>
        </div>
        
       
    </div>

    
    
    
    
    </>
  )
}

export default SignUp
