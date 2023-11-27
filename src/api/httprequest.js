import axios from "axios";
const url ='https://rickandmortyapi.com/api/character'

export const getAllcharacters = async ()=>{
    const response = await axios.get(url)
    console.log(response.data.results)
    return response.data.results

}