import React , {useState , useEffect} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {createStudent} from '../api/student'
const StudentForm = (props) => {

    const [studentData , setStudentData ] = useState({
        stName : '',
        stEmail:'',
        stphone:'',
        stdob:'',
    })
    
    const [loading , setLoading ] = useState({
        loading: false
    })

    // useEffect(()=>{
    //     getStudents()
    // } , [loading])

    const studentDataChange = (evt) => {        
        setStudentData({
          ...studentData,
          [evt.target.name]: evt.target.value,
        });        
    };
    const studentDataSubmit = (evt)=>{
        evt.preventDefault()
        setLoading(true)
        const { stName, stEmail, stphone, stdob} = studentData;
        let formData = {
            "stName":stName,
            "stEmail":stEmail,
            "stphone": stphone,
            "stdob": stdob,
        }
        console.log(`submitting ${formData}`)
        createStudent(formData)
        setStudentData({
            stName : '',
            stEmail:'',
            stphone:'',
            stdob:'',
        })
        document.getElementById("stud-form").reset();
    }
    return (
        <>
        <Form style={{
            width:'30rem',                  
            margin:'5px 15px',
            border:'2px solid black',
            boxSizing:'content-box',
            }} className='p-5' id='stud-form'>
            
            <FormGroup>
            <Label for="stName">Name</Label>
            <Input type="text" name="stName" id="stName" placeholder="Enter Student Name" onChange={studentDataChange} required/>
            </FormGroup>
            <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="stEmail" id="stEmail" placeholder="Enter Student e-mail" onChange={studentDataChange} required/>
            </FormGroup>
            <FormGroup>
            <Label for="phone">Phone</Label>
            <Input type="tel" name="stphone" id="stphone" placeholder="Phone no. 017XXXXX" onChange={studentDataChange} required/>
            </FormGroup>
            <FormGroup>
            <Label for="exampledob">Date of birth</Label>
            <Input type="date" name="stdob" id="stdob" placeholder="Date of birth" onChange={studentDataChange} required/>
            </FormGroup>

            <Button onClick={studentDataSubmit}>Submit</Button>
        </Form>
        </>
    );
}

export default StudentForm;
