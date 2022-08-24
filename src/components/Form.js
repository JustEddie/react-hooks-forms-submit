import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("Eddie");
  const [lastName, setLastName] = useState("Holmberg");
  const [submittedData, setSubmittedData] = useState([]);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }
  
  const [errors,setErrors] =useState([]);
  const displayDataArray = [];
  function handleSubmit(event){
    event.preventDefault();
    if(firstName){
    const formData = {
      firstName : firstName,
      lastName : lastName
    };
    const dataArray = [...submittedData, formData]
    setSubmittedData(dataArray);
    setFirstName("");
    setLastName("");
    setErrors([])
    displayDataArray.push(...dataArray)
    console.log(displayDataArray)} 
    
    else {
      setErrors(["First name is required!"])
    }
  }

    const listOfSubmissions = submittedData.map((data,index)=>{
      return(
        <div key={index}>
          {data.firstName} {data.lastName}
        </div>
      )
    })

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
    {errors.length > 0 ?
    errors.map((error, index)=>(
      <p key={index} style={{color:"red"}}>{error}</p>
    )): null
  }
    <h3>Submissions</h3>
    {displayDataArray > 0 ? 
    displayDataArray.map((name, index)=>{
      <p key={index} style={{color:"green"}}>{name}</p>
    }):null}
    </div>
  );
}

export default Form;
