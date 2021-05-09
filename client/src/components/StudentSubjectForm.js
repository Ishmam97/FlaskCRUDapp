import React, { useState , useEffect } from 'react'
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { getStudents } from "../api/student";
import { getSubjects , addSubtoStud } from "../api/subject";


function StudentSubjectForm() {

  const [students , setStudents] = useState([])
  const [subjects , setSubjects] = useState([])
  const [formData , setFormData] = useState({
    student:'',
    subject:''
  })
  
  const handleformChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    });
    console.log("formdata " , formData)
  };

  async function studentfetchData(){
    var res = await getStudents()
    var loadedStudents = res.data.students
    var t =  [];
    loadedStudents.forEach((std , index )=>{
        t.push( {
          'stName': std.stName,
          'stId' : std._id
        })
        
    })
    setStudents(t)
  }
  async function subjectfetchData(){
    console.log(`inside fetchsubs`)
    var res = await getSubjects()
    var t = []
    var loadedsubs = res.data.subjects
    loadedsubs.forEach((sub)=>{
      t.push({
        'id': sub._id,
        'name':sub.subName
      })
    })
    setSubjects(t)
    
  }
  useEffect(()=>{    
    studentfetchData()
    subjectfetchData()
    console.log("inside use effect" , students)
    console.log("inside use effect2" , subjects)
  } , [])
  
  const handleFormSubmit = (evt) =>{
    evt.preventDefault()
    addSubtoStud({...formData})
  }

  return (
    <>
    
            <Form
              style={{
                width: "30rem",
                margin: "5px 15px",
                border: "2px solid black",
                boxSizing: "content-box",
              }}
              className="p-5 mt-3"
            >
              <FormGroup>
                <Label for="exampleSelect">Select Student</Label>
                <Input type="select" name="student" id="student" onChange={handleformChange}>
                <option>Select a student</option>
                {students && students.map((c , idx) => {                    
                            return (
                              <option key={idx} value={c.stName}>
                                {c.stName}
                              </option>
                            );
                })}
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelectMulti">
                  Select subject{" "}
                </Label>
                <Input
                  type="select"
                  name="subject"
                  id="subject" 
                  onChange={handleformChange}                 
                >
                <option>Select a subject</option>
                  {subjects && subjects.map((c , idx) => {                    
                            return (
                              <option key={idx} value={c.name}>
                                {c.name}
                              </option>
                            );
                })}
                </Input>
              </FormGroup>
      
              <Button onClick={handleFormSubmit}>Add subject to getStudents</Button>
            </Form>
          </>
        
  )
}

export default StudentSubjectForm



