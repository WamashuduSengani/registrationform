import { useState } from 'react';
 
export default function Form() {
 
  // States for registration
  const [name, setName] = useState("");
  const [LastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Confirmpassword, setConfirmPassword] = useState("");
 
  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
 
    
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };
    
  
  const handleLastName = (e) => {
        setLastName(e.target.value)
        setSubmitted(false)
    }
 
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };
 

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };
    
    
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    setSubmitted(false);
    };
    
 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || LastName === "" || email === "" || password === "" || Confirmpassword === "") {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };
 
    
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}>
        <h1> You have successfully registered {name} {LastName} </h1>
      </div>
    );
  };
 
    
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}>
        <h1>Please enter all the fields</h1>
      </div>
    );
  };
 
  return (
    
    <div className="form">
      <div>
        <h1>Registration Form</h1>
      </div>
 
      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
 
      <form>
        {/* Labels and inputs for form data */}
        <label className="label">Name</label>
        <input onChange={handleName} className="input"
                  value={name} type="text" />
              
        <label className="label">Last Name</label>
        <input onChange={handleLastName} className="input"
                  value={LastName} type="text" />
 
        <label className="label">Email</label>
        <input onChange={handleEmail} className="input"
                 value={email} type="email" />
 
        <label className="label">Password</label>
        <input onChange={handlePassword} className="input"
                  value={password} type="password" />
              
        <label className="label">Re-enter Password</label>
        <input onChange={handleConfirmPassword} className="input"
               value={Confirmpassword} type="password" />
 
        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}