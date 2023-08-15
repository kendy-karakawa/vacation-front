import axios from "axios";

async function CreateVacation(body){
    const {data:res} = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/vacation`, body)
    return res
}

const ApiVacation = {
    CreateVacation,
}

export default ApiVacation