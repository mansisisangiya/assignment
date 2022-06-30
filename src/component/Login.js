import React ,{useState,useEffect} from 'react'
import { useNavigate} from 'react-router-dom'

export default function Login() {

  const [password,setPassword] =useState("")
  const [email,setEmail] =useState("")
  const navigate = useNavigate();

  async function login(){
    console.log(email,password)
    let item =[email,Object]
    let result = await fetch("http://restapi.adequateshop.com/api/authaccount/login",{
      method:'POST',
      header:{
        ContentType: "application/json",
        Accept: 'application/json',

      },
      body:JSON.stringify(item),

    });
    result= await result.JSON();
    console.log(result)
    localStorage.setItem("user-info",JSON.stringify(result))
    navigate("/Dashboard")


  }

  return (
    <div className="col-sm-6 offset-sm-3">
      <h1>Sign In</h1>
      <label>
          <p>Name</p>
      <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="mail@website.com"/>
      </label>
      <br/>
        <label><p>password</p>
      <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}className="form-control" placeholder="Min .8 character"/>
      </label>
      <br/>
      <br/>

      <button onClick={login} className="btn btn-primary"> Sign In</button>

    </div>
  )
}
