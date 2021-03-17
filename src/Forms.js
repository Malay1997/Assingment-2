import React, { useRef, useState } from 'react';
import './Forms.css';

function Forms(props) {
  const nameEl = useRef(null);
  const passwordEl = useRef(null);
  const rememberMeEl = useRef(null);
  
  const[username, setUsername] = useState('');
  const[password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      username: nameEl.current.value,
      password: passwordEl.current.value,
      rememberMe: rememberMeEl.current.checked,
    }
    console.log(formData);
    
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="username" value={username} ref={nameEl} onChange={e => setUsername(e.target.value)} />
        <input type="password" placeholder="password" value={password} ref={passwordEl} onChange={e => setPassword(e.target.value)}/>
        <label>
          <input type="checkbox" ref={rememberMeEl} />
          Remember me
        </label>  
        <button type="submit" className="myButton">Login</button>
        <p>Username: {username}</p>
        <p>Password: {password}</p>
      </form>
    </>
   );
}
export default Forms;
