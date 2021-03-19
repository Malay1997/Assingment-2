import React, { useRef, useState } from 'react';
import './Forms.css';

function Forms(props) {
  const fname = useRef(null);
  const lname = useRef(null);
  const email = useRef(null);
  const passwordEl = useRef(null);
  const conPasswordEl = useRef(null);
  
  
  const[firstName, setfirstName] = useState('');
  const[lastName, setlastName] = useState('');
  const[emailId, setemail] = useState('');
  const[password, setPassword] = useState('');
  const[conPassword, setconPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      firstName: fname.current.value,
      lastName: lname.current.value,
      emailId: email.current.value,
      password: passwordEl.current.value,
      
    }
    console.log(formData);
    
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1> Please complete the Form</h1>
        <input type="text"  class="column" placeholder="First" value={firstName} ref={fname} onChange={e => setfirstName(e.target.value)} />
        <input type="text"  class="column" placeholder="Last" value={lastName} ref={lname} onChange={e => setlastName(e.target.value)} />
        <input type="text"  class="column" placeholder="Email" value={emailId} ref={email} onChange={e => setemail(e.target.value)} />
        <input type="password" class="column" placeholder="password" value={password} ref={passwordEl} onChange={e => setPassword(e.target.value)}/>
        <input type="password" class="column" placeholder="Confirm password" value={conPassword} ref={conPasswordEl} onChange={e => setconPassword(e.target.value)}/>
        
        {/* <label>
          <input type="checkbox" ref={rememberMeEl} />
          Remember me
        </label>   */}
        <br></br>
        <button type="submit" class="reg" >Register</button>
        
        <h2>Here I am showing the data</h2>

        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {emailId}</p>
        <p>Password: {password}</p>
        <p>Confirmed Password: {conPassword}</p>

        
      </form>
    </>
   );
}
export default Forms;
