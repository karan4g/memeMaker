
import { apiGet } from "@/utils";


export const getMemeDataAPI=()=>{
     return apiGet('get_memes');

}