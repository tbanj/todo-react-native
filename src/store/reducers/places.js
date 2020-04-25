/* eslint-disable prettier/prettier */
// reducers is just a function

import { ADD_PLACE, DELETE_PLACE, DESELECT_PLACE, SELECT_PLACE } from '../actions/actionTypes';
const initialState = {
    places: [],
    selectedPlace: null,
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            return {
                ...state,
                places: {
                    key: new Date().getTime() + '', name: action.placeName,
                    image: {
                        uri: 'http://4.bp.blogspot.com/-TLR8ISV2qWo/TyUeVqg9xmI/AAAAAAAACOU/1rCZw9-uj50/s640/62589635.jpg',
                        width: 30, height: 30,
                    },
                },
            };
        default:
            return state;
    }
};