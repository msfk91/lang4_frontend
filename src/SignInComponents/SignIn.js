import React, {useState, useEffect } from 'react'
import {Link} from "react-router-dom"
import "./SignIn.css"
import { useSignInHook } from '../Hooks/useSignInHook'
import { useAuthHook } from '../Hooks/useAuthHook'
import { useLogOutHook } from '../Hooks/useLogoutHook'
import { useGetCoursesHook } from '../Hooks/useGetCoursesHook'

export default function SignIn() {
  //const [result, setresult] = useState([])
  const [email, setemail] = useState([])
  const [password, setpassword] = useState([])
 
  const {signin, isLoading} = useSignInHook()
  const {user} = useAuthHook()
  const {logout} = useLogOutHook()

  const {getCourses} = useGetCoursesHook()

  const handleSubmit = async (e) => {
    //e.preventDefault()
    await signin(email, password)   
  }
    
  useEffect(()=>{
    if(user && user.status==="success"){
      const userID = user.user._id      
      getCourses(userID)
      window.location.replace("http://localhost:3000/mycourses")
    }
  })
  return (
    <div>
      <div className='headerBody'>
          <div className='titlediv2'>
            <header>
              <strong className='title'>
                Lang Build
              </strong>
            </header>
            {user &&
              (user.status==="success") && 
                  <div className='signOutDiv'>
                    <div className='signOutButton' 
                    onClick={()=>{logout()}}
                    > 
                      Sign Out
                    </div>   
                  </div>
              
            }
          </div>
      </div>
      
      <div className='body'>
          <div >
            <div className='container4'>
                <header>
                  <strong>
                    Sign In
                  </strong>
                </header>
                
                {user && <div className={user.status}> {user.message} </div>}

                { (user===null || !user|| user.status==='error') &&
                  <div>
                      
                      <div>
                          <div className='label email'>Email</div>
                          <input type="text"
                          placeholder='Email'
                          value={email}
                          onChange={(e)=> setemail(e.target.value)}
                          />
                      </div>
                      <br/>
                      <div>
                          <div className='label password'>Password</div>
                          <input type="password"
                          placeholder='Password'
                          value={password}
                          onChange={(e)=> setpassword(e.target.value)}
                          />
                      </div>
                      <br/>
                      
                      <div className='submit'>
                        <button 
                        disabled={isLoading}
                        onClick={()=>handleSubmit()}
                        >
                          Sign In
                        </button>
                      </div>
                    
                    <div>
                        <Link to="/create_account">Create Account</Link>             
                    </div>
                  </div>
                }
            </div>
          </div>
        </div> 
    </div> 
  )
}
// 