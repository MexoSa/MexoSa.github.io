import avatar from '../../images/Image.png'
const initialState = [
  {
    id: 1,
    isDefault: true,
    users: [
      'JS',
      { avatar: avatar },
      { avatar: avatar },
      'BS',
      { avatar: avatar },
      { avatar: avatar },
      { avatar: avatar },
      { avatar: avatar },
      { avatar: avatar },
      { avatar: avatar },
      { avatar: avatar },
      { avatar: avatar },
      { avatar: avatar },
    ],
    locationName: 'Australia',
    workWeek: [],
    leaveQuotaResetBasedOn: '',
    noBroughtForwardExpiryDate: false,
    weekStartsOn: '',
    timeZone: '',
    fiscalYearStart: {}
  },
  {
    id: 2,
    isDefault: false,
    users: [
      'JS',
      { avatar: avatar },
      'BS',
      { avatar: avatar },
    ],
    locationName: 'Belarus',
    workWeek: [],
    leaveQuotaResetBasedOn: '',
    noBroughtForwardExpiryDate: false,
    weekStartsOn: '',
    timeZone: '',
    fiscalYearStart: {}
  },
  {
    id: 3,
    isDefault: false,
    users: [
      'JS',
      { avatar: avatar },
      { avatar: avatar },
      { avatar: avatar },
      { avatar: avatar },
      'BS',
      { avatar: avatar },
    ],
    locationName: 'USA',
    workWeek: [],
    leaveQuotaResetBasedOn: '',
    noBroughtForwardExpiryDate: false,
    weekStartsOn: '',
    timeZone: '',
    fiscalYearStart: {}
  },
]

export const locationCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_LOCATION_CARD':
      return [
        ...state,
        { ...action.payload, id: state.length + 1 },
      ]
    case 'SET_LOCATION_CARD_DEFAULT':
      return [
        ...state.map(locationCard => {
          if (locationCard.id === action.payload) {
            return {
              ...locationCard,
              isDefault: true,
            }
          } else {
            return {
              ...locationCard,
            }
          }
        })]
    case 'DELETE_LOCATION_CARD':
      return [
        ...state.filter(locationCard => +locationCard.id !== action.payload)
      ]
    default:
      return state
  }
}