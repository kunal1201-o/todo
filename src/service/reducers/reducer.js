import { ADD_TO_LIST } from "../constants";

export default function ListItems(state=[], action){
    switch(action.type){
        case ADD_TO_LIST:
            return[
                ...state,
                {ListData: action.data}
            ]
            break;
        default:
                return state
    }
}