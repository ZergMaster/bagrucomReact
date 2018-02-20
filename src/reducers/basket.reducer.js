import { ADD_ITEM_TO_BASKET } from "../actions/actionConstants";

export default (state = [], action) => {
    switch (action.type) {

        case ADD_ITEM_TO_BASKET:
            let resp = [...state, action.item];
            return resp;

        default:
            return state;
    }
}