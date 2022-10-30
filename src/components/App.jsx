import React, { useState } from "react";

function App() {  //with fName, lName and email.
  const [contact, setContact] = useState({
    fName: " ",
    lName: " ",
    email: " "
  });
  function handleChange(event) {// Handing events
    const { name, value } = event.target;  // Using JS Objects with state.

    setContact((prevValue) => {    // Making use of previous state when changing state.
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  return (// Working with forms in React.
    <div className="container"> 
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>  
      <form> 
        <input
          onChange={handleChange} // Handing events
          // value={contact.fName}
          name="fName"
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          // value={contact.lName}
          name="lName"
          placeholder="Last Name"
        />
        <input
          onChange={handleChange}
          // value={contact.email}
          name="email"
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
