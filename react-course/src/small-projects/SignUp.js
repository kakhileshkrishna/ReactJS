import React, {useState} from 'react'

const SignUp = ()=> {
    const [data, setData] = useState({
        username:'',
        email:'',
        password:'',
        confirmPassword:''
    })

    const {username, password, email, confirmPassword} = data;

    const changeHandler = e => {
        setData({...data, [e.target.name]: e.target.value })
      }
    
    const submitHandler = e => {
      e.preventDefault();
      if(username.length <= 5){
        alert("Username less than 5 chars");
      }
      else if(password !== confirmPassword){
        alert("Password not matching");
      }
      else{
        console.log(data);
      }

    }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="username" name="username" value={username} onChange={changeHandler}/><br/>
        <input type="email" name="email" placeholder="email" value={email} onChange={changeHandler}/><br/>
        <input type="password" name="password" placeholder="password" value={password} onChange={changeHandler}/><br/>
        <input type="password" name="confirmPassword" placeholder="confirmPassword" value={confirmPassword} onChange={changeHandler}/><br/>
        {password !== confirmPassword ? <p style={{"color": "red"}}>Password Not Matching</p>:null}
        <button type="submit" value="submit">Submit</button>

      </form>
    </div>
  )
}

export default SignUp
