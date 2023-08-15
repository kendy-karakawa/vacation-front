import axios from "axios";

async function CreateVacation(body){
    const {data:res} = await axios.post(`${process.env.API_URL}/vacation`, body)
    return res
}