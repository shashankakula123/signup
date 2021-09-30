
import './App.css';
import React, { useState } from 'react';
import Form from './Form';

function App() {
  const [data,setData]=useState([]);
  const [first,setFirst]=useState("");
  const [last,setLast]=useState("");
  const [phone,setPhone]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");


  return (
    <div className="App">
      <h3>manage all your lottery efficently</h3>

<Form last={last} setLast={setLast} data={data} setData={setData} first={first} setFirst={setFirst} phone={phone} setPhone={setPhone} email={email} setEmail={setEmail} password={password} setPassword={setPassword} />

      </div>
  );
}

export default App;
