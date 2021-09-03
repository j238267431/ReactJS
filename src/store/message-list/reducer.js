import { MESSAGES, MESSAGES_SEND } from './types'
const initialState = {
  messages: {
    chat1: [{ text: 'message from chat1', author: 'user' }],
    chat2: [{ text: 'message from chat2', author: 'user' }],
  },
}

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case MESSAGES:
      return {
        ...state,
        messages_list: state.messages_list,
      }
    case MESSAGES_SEND:
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.chatId]: [
            ...(state.messages[action.payload.chatId] || []),
            { ...action.payload.message, id: new Date() },
          ],
        },
      }
    default:
      return state
  }
}
