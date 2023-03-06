import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

const Register = () => {
    const [inputs, setInputs] = useState({
        email:"",
        password:"",
    })

const handleChange = e =>{
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
}

const handleSubmit = async e => {
    e.preventDefault()
    try{
        const res = await axios.post("http://localhost:8800/api/auth/register/", inputs)
        console.log(res)
    }
    catch(err){
        console.log(err.response.data)
    }
    
}

    return(
        <>
          <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-grey">
                                Create an account
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                                    <input type="email" name="email" id="email" onChange={handleChange} className="border border-gray-300  block w-full p-2.5" placeholder="name@company.com" required="" />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                    <input type="password" name="password" id="password" onChange={handleChange} placeholder="••••••••" className="border border-gray-300 text-gray-900 block w-full p-2.5" required="" />
                                </div>

                                <button onClick={handleSubmit}className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign in</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account? <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}
export default Register