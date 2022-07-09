
export const locationCardAction = (action) => {
  return {
    type: 'CREATE_LOCATION_CARD',
    payload: action
  }
}

export const setLocationCardDefault = (action) => {
  return {
    type: 'SET_LOCATION_CARD_DEFAULT',
    payload: action
  }
}