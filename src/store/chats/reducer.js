import { CHATS, GET_CHATS } from './types'
const initialState = {
  chatList: [
    // { chat: 'chat1', id: 1 },
    // { chat: 'chat2', id: 2 },
  ],
}

export const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHATS:
      return {
        ...state,
        chatList: state.chatList.chat,
      }
    case GET_CHATS:
      return {
        ...state,
        chatList: action.payload,
      }
    default:
      return state
  }
}
