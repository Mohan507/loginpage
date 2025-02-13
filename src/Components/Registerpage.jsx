import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function RegisterPage() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [area, setArea] = useState("");
  const [password, setPassword] = useState("");
 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fullname, email, phone, area, password);
  };
  return (
    <div className="container">
      <div className="form-container">
        <h2 className='register'>Register</h2>
      <div className="form-floating mb-3">
          <input type="text" className="form-control" id="floatingInput" placeholder="Full Name" value={fullname} onChange={(e)=>setFullname(e.target.value)} />
          <label htmlFor="floatingInput">Full Name</label>
        </div>
      <div className="form-floating mb-3">
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={email} onChange={(e)=>setEmail(e.target.value)} />
          <label htmlFor="floatingInput">Email</label>
        </div>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="floatingInput" placeholder="Aream" value={area} onChange={(e)=>setArea(e.target.value)} />
          <label htmlFor="floatingInput">Area</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className='buttonsubmit'>
        <button type='button'className="btn btn-success " onClick={handleSubmit}>Register</button>
        <Link  to="/login" className='loginlink'> Back</Link>
        </div>
        
      </div>
     
    </div>
  );
}
