import React from 'react';
import "./styles.css";

export default function App() {
  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
    margin: 'auto',
    width: '250px',
    height: '225px',
    padding: '2rem',
  };

  const inputStyle = {
    width: '100%',
    paddingBlock: '0.5rem',
    border: '1px solid black',
    borderRadius: '5px',
  };

  const submitBtnStyle = {
    width: '100%',
    backgroundColor: 'black',
    color: 'white',
    paddingBlock: '0.5rem',
    fontSize: '1.035rem',
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <form style={formStyle}>
        <h1>Register Form</h1>
        <input type="text" placeholder="Name" style={inputStyle} />
        <input type="email" placeholder="Email" style={inputStyle} />
        <input type="password" placeholder="Password" style={inputStyle} />
        <button style={submitBtnStyle}>Submit</button>
      </form>
    </div>
  );
}
