import React ,{useState} from 'react'
import {useNavigate} from 'react-router-dom'

export default function Registration() {

    const [name,setName] = useState("")
    const [password,setPassword] =useState("")
    const [email,setEmail] =useState("")
    const navigate = useNavigate();
    async function signUp(){  

      let item ={name,password,email}
        console.log(item)
        console.log(JSON.stringify(item))
        let result= await fetch("https://cors-anywhere.herokuapp.com/http://restapi.adequateshop.com/api/authaccount/registration",
      { method:"POST",
        body:JSON.stringify(item),
        headers:{

          "Content-Type": 'application/json\n',
          "Accept": 'application/json',

        }


        })
        result = await result.JSON()
        console.log(result)
        localStorage.setItem("user-info",JSON.stringify(result))
          navigate("/Login")
    }

  return (
    <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
      <h1>Sign Up</h1>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="Name"/>
      <br/>
      <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="mail@website.com"/>
      <br/>
      <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}className="form-control" placeholder="Min .8 character"/>
      <br/>
      <button onClick={signUp} className="btn btn-primary"> Sign Up</button>



    </div>
  )
}
