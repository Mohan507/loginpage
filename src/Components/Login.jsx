import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log( email, password);
  };
  return (
    <div className="container">
      <div className="form-container">
        <h2 className='register'>Login</h2>
      
      <div className="form-floating mb-3">
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={email} onChange={(e)=>setEmail(e.target.value)} />
          <label htmlFor="floatingInput">Email</label>
        </div>
       
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className='buttonsubmit'>
        <button type='button'className="btn btn-success " onClick={handleSubmit}>Submit</button>
        <Link to="/"><button type='button'className="btn btn-success " >Register</button></Link>
        </div>
      </div>
     
    </div>
  );
}
