import axios from "axios";


async function fetchData (){
    try{
        const result = await axios.get(url,data);
        return result;
    }
    catch(error){
        console.error(error);
    }
}

export {fetchData};