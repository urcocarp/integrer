import {ADD_FAV, REMOVE_FAV } from './actions.types';


export const addFav=(characters)=>{
    return {type:ADD_FAV , payload: characters}

};

export const removeFav=(id)=>{
    return {type:REMOVE_FAV, payload:id}
}