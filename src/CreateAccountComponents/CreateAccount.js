import React, {useState} from 'react'
import {Link} from "react-router-dom"
import "./CreateAccount.css"
import { useCreateAccountHook } from '../Hooks/useCreateAccountHook'


export default function CreateAccount() {
    
    //const [result, setresult] = useState([])
   
    const [name, setname ] =useState([])
    const [username, setusername ] =useState([])
    const [email, setemail ] =useState([])
    const [password, setpassword ] =useState([])
    //const { signin, error, isLoading } = useSignInHook()
    const { createAccount, result, status, isLoading } = useCreateAccountHook()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await createAccount(name, username, email, password)
    }
    return (
        <div className='body'> 
            <div>
                <div className='titlediv2'>
                    <header>
                        <strong className='title'>
                            Lang Build
                        </strong>
                    </header>
                </div>
            </div>
            <div className='container4'>
                <header>
                    <strong>
                        Create Account
                    </strong>
                </header>
                
                {
                    result && 
                        <div className={status}>
                            {result}
                        </div>
                     
                    
                }
                
                
                <form className='create_account_form' 
                onSubmit={handleSubmit}
                > 
                    <div className='field'>
                        <div className='label name'>Full Name</div>
                        <div className='description name'>
                            (First and Last)
                        </div>
                        <input type="text"
                        placeholder='Full Name'
                        value={name} 
                        onChange={(e)=> setname(e.target.value)}
                        />
                    </div>
                    <br/>
                    <div className='field'>
                        <div className='label username'>Username</div>
                        <div className='description username'>
                            (This is name that your students see)
                        </div>
                        <input type="text"
                        placeholder='Username'
                        value={username} 
                        onChange={(e)=> setusername(e.target.value)}
                        
                        />
                    </div>
                    <br/>
                    <div className='field'>
                        <div className='label email'>Email</div>
                        <input type="text"
                        placeholder='Email'
                        value={email} 
                        onChange={(e)=> setemail(e.target.value)}
                        
                        />
                    </div>
                    
                    <br/>
                    <div className='field'>
                        <div className='label password'>Password</div>
                        <div className='description password'>
                            <div>- 8 or more characters</div> 
                            <div>- 1 Uppercase</div> 
                            <div>- 1 Lowercase</div>  
                            <div>- 1 Number</div>  
                            <div>- 1 Special Character</div> 
                        </div>
                        <input type="password"
                        placeholder='Password'
                        value={password} 
                        onChange={(e)=> setpassword(e.target.value)}
                        
                        />
                    </div>
                    <br/>
                    <div className='submit'>
                        <button 
                        onClick={()=>handleSubmit()}
                        disabled={isLoading}
                        >
                            Create Account
                        </button>
                    </div>
                </form>
                <div>
                    <Link to="/">Sign In</Link>
                </div>
            </div>
        </div>
    )
}
