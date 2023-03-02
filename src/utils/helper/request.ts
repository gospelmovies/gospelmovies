
import axios from "axios"

interface Props {
    url : string , 
    path ?: string ,
    data ?: {}   ,
    configs ?: any 
}



const postData = async ({ url , data  } : Props) => {

    try {
        const response  = await  axios.post( url , data );
    } catch ( err ) {
        console.log(err)
    }




}



export { postData }