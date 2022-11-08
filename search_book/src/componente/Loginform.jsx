
import React, { useState } from 'react';
export default function Loginform() {

    const [email, setemail] = useState("");
    const [Password, setPassword] = useState("");

    
    let emailChange=(event) => {setemail(event.target.value)}
    let PasswordChange=(event) => {setPassword(event.target.value)}
    

  return (
    <div>
        <>
        <form action="" style={{width:"300px"}} >
        <label htmlFor="">Email</label>
        <input type="text" onChange={emailChange} value={email}/>
        <br/>
        <label htmlFor="">Password</label>
        <input type="Password" onChange={PasswordChange} value={Password}/>
        <br/>
        <input type="submit" />
      </form>
        </>
      <h1>Email : {email}</h1>
      <h1>Password :{Password}</h1>
    </div>
  );
}
