import { ADD_TO_LIST } from "../constants";

export const addToList =(data)=>{
    return{
        type:ADD_TO_LIST,
        data:data
    }

    
}