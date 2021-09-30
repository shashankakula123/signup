import React from 'react';

import db from './firebase';
const Form = ({last,email,phone,first,password,setFirst,setLast,setEmail,setPassword,setPhone,setData,data}) => {
    const handleSubmit=(e)=>{
       e.preventDefault();
       setData([...data,{firstName:first,lastName:last,contact:phone,mail:email,password:password,id:Math.random()*10}]);
       db.collection('data').add({data});

       
       setEmail("");
       setFirst("");
       setLast("");
       setPassword("");
       setPhone("");

     

alert('Thanks your data has been submited')
    }
    return ( 
        <form>
        <div className="form">

            <label>First Name</label>
            <input value={first} onChange={(e)=>{setFirst(e.target.value)}} type="text"/>
  <br/>
        <br/>
            <label>Last Name</label>
            <input value={last} onChange={(e)=>{setLast(e.target.value)}} type="text"/>

            <br/>
        <br/>

            <label>Phone Number</label>
            <input value={phone} onChange={(e)=>{setPhone(e.target.value)}} type="text"/>

            <br/>
        <br/>
            <label>Email</label>
            <input value={email}onChange={(e)=>{setEmail(e.target.value)}} type="email"/>

            <br/>
        <br/>
            <label>Password</label>
            <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password"/>

            <br/>
        <br/>
        <button onClick={handleSubmit} className="submit">Submit</button>


            </div>
            </form>
     );
}
 
export default Form;