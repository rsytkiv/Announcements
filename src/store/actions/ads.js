import * as actionTypes from "./types";

export const addAd = (data) => {
    return {
        type: actionTypes.ADD_AD,
        ad: data
    }
}

export const deleteAd = (id) => {
    return {
        type: actionTypes.DELETE_AD,
        id
    }
}

export const editAd = (data) => {
    return {
        type: actionTypes.EDIT_AD,
        ad_to_edit: data
    }
}

export const getAdById = (id, data) => {
    return {
        type: actionTypes.GET_AD_BY_ID,
        id,
        data
    }
}
