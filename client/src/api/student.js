import axios from "axios"

export const createStudent = async(data)=>{
    const config ={
        headers:{
            'Content-type':'application/json'
        }
    }

    const response = await axios.post('/api/user' , data , config).catch(e=>{console.log(e)})
    return response
}
export const getStudents = async()=>{
    
    const response = await axios.get('/api/user')
    return response
}