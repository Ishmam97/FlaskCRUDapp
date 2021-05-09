import axios from "axios"

export const createSubject = async(data)=>{
    const config ={
        headers:{
            'Content-type':'application/json'
        }
    }

    const response = await axios.post('/api/subject' , data , config)
    return response
}
export const getSubjects = async()=>{
    
    const response = await axios.get('/api/subject')
    return response
}
export const addSubtoStud = async(data)=>{
    const config ={
        headers:{
            'Content-type':'application/json'
        }
    }

    const response = await axios.patch('/api/subject' , data , config)
    return response
}