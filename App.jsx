import React, { useState } from 'react'
const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: 'bold',
  color: 'white',
  background: 'black',
  padding: '20px',
  borderRadius: '10px',
  fontFamily: 'Digital-7 Mono, monospace', 
  fontSize: '6em',
  letterSpacing: '5px',
  textShadow: '0 9px 12px rgba(0, 0, 0, 0.8)',
  margin: '20vh auto',
  width: '70%', 
  textAlign: 'center', 
};


const App = () => {
  let time =new Date().toLocaleTimeString();
  const [ctime,settime]=useState(time);

  const UpdateTime=()=>{
    time = new Date().toLocaleTimeString();
    settime(time);

  };
  setInterval(UpdateTime,1000);
  return (
    <>
     
     <h1 style={style} >
      {ctime}
      </h1>
      </>
  )
}

export default App