// import { INCREMENT } from './types'
const initialState = {
  count: 0,
  profile_is_visible: true,
  user: {
    id: 1,
    name: 'Eugene',
  },
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      }
    case 'SHOW_PROFILE':
      return {
        ...state,
        profile_is_visible: !state.profile_is_visible,
      }
    default:
      return state
  }
}
