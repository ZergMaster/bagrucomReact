import { ADD_ITEM_TO_BASKET } from './actionConstants';

export const addItem = (item) => {
    return {
        type: ADD_ITEM_TO_BASKET,
        item: item
    }
};