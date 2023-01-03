import Axios, * as others from 'axios'
import React from 'react'
import { useState } from 'react'

function PostForm() {
    const url = "http://localhost:5000/subscribers/create "
    const [data, setData] = useState({
        name: "",
        pwd:" ",
        matchPwd:""
    })

    function submit(e) {
      e.preventDefault()
      Axios.post(url, {
        name: data.name,
        pwd: data.pwd,
        matchPwd: data.matchPwd
      })
      .then(res=>{
        console.log(res.data);
      })
    }

    function handle(e) {
      const newdata = {...data}
      newdata[e.target.id] = e.target.value
      setData(newdata)
      console.log(newdata);
    }
  return (
    <div>
        <section>
      <h1>REGISTER</h1>
        <form onSubmit={submit}>
         {/* <label  >
           Username:
         </label>  */}
         <input
         onChange={(e) => handle(e)} 
          id="name"
          value = {data.name}
          placeholder='Username..' 
          // name="name"
          type="text" 
          // autoComplete="off"
          // required
        />
          {/* <label  >
            Password:
          </label> */}
          <input
            onChange= {(e) => handle(e)}
            id="pwd"
            value={data.pwd}
            placeholder='password..' 
            // name="pwd"
            type="password"
            // required
          />
          {/* <label  >
            Confirm Password:
          </label> */}
          <input
            onChange= {(e) => handle(e)} 
            id="matchPwd" 
            value={data.matchPwd}
            placeholder='Retype password..'
            // name="matchPwd"
            type="password"
            // required
          />
          <button >Sign Up</button>
          </form>
          <p>
            Already registered?<br />
              <span className="line">
                {/*put router link here*/}
                <a href="#">Sign In</a>
              </span>
          </p>
    </section>
    
      
    </div>
  )
}

export default PostForm
