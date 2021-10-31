import * as actionTypes from "../actions/types";

const initialState = {
    ads: [],
    ad: null,
}

export const addAd = (state, action) => {
    return {...state, ads: [...state.ads, action.ad]}
}

export const deleteAd = (state, action) => {
    return {...state, ads: state.ads.filter( ad => ad.id !== action.id)}
}

export const getAdById = (state, action) => {
    return {...state, ad: state.ads.find(i => i.id === action.id)};
}

export const editAd = (state, action) => {
    const ad_to_edit = action.ad_to_edit
    const ads = state.ads.filter( ad => ad.id !== ad_to_edit.id)
    return {...state, ads: ads.concat(ad_to_edit)}
}

// export const details = (state, action) => {
    
// }

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_AD: 
            return addAd(state, action)
        case actionTypes.DELETE_AD: 
            return deleteAd(state, action)
        case actionTypes.EDIT_AD: 
            return editAd(state, action)
        case actionTypes.GET_AD_BY_ID: 
            return getAdById(state, action)
        default:
            return state
    }
}

export default reducer