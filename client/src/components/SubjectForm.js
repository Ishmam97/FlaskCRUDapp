import React , {useState} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {createSubject} from '../api/subject'
const SubjectForm = (props) => {

  const [subject , setSubject] = useState({
    subName: ''
  })
  const handleSubChange = (evt)=>{
    setSubject({
      ...subject,
      [evt.target.name]: evt.target.value,
    });
    console.log(subject)
  }
  const subSubmit = (evt)=>{
    evt.preventDefault()
    createSubject(subject)
    console.log("submitted subject " , subject)
    document.getElementById("sub-form").reset();
  }
  return (
    <Form style={{
        width:'30rem',                  
        margin:'5px 15px',
        border:'2px solid black',
        boxSizing:'content-box',
      }} className='p-5' id='sub-form'> 
      <FormGroup>
        <Label for="sub">Subject Name</Label>
        <Input type="text" name="subName" id="subName" placeholder="Enter Subject Name" onChange={handleSubChange}/>
      </FormGroup>      


      <Button onClick={subSubmit}>Add Subject to DB</Button>
    </Form>
  );
}

export default SubjectForm;
