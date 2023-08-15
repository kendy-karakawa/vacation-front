import axios from "axios";

async function CreateEmployee(body){
    const {data:res} = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/employee`, body)
    return res
}

async function GetAllEmployee(){
    const {data:res} = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/employee`)
    return res
}

async function UpdateEmployee(id, body){
    const {data:res} = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/employee/${id}`, body)
    return res
}

async function DeleteEmployee(id, ){
    const {data:res} = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/employee/${id}`)
    return res
}

async function getEmployeeData(id, ){
    const {data:res} = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/employee/${id}`)
    return res
}

const ApiEmployee = {
    CreateEmployee,
    GetAllEmployee,
    UpdateEmployee,
    DeleteEmployee,
    getEmployeeData
}

export default ApiEmployee