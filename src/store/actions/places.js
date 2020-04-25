/* eslint-disable prettier/prettier */
import { ADD_PLACE, DELETE_PLACE, DESELECT_PLACE, SELECT_PLACE } from './actionTypes';

export const addPlace = (placeName) => {
    return {
        type: ADD_PLACE,
        placeName: placeName,
    };
};

export const deletePlace = (key) => {
    return {
        type: ADD_PLACE,
        placeName: key,
    };
};


export const selectPlace = (key) => {
    return {
        type: ADD_PLACE,
        placeName: key,
    };
};

export const deselectPlace = (key) => {
    return {
        type: ADD_PLACE,
        placeName: key,
    };
};
