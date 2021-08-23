import { messagesSend } from '../message-list'
import { MESSAGES_SEND } from '../message-list/types'

export const botSendMessage = (store) => (next) => (action) => {
  if (
    action.type === MESSAGES_SEND &&
    action.payload.message.author === 'user'
  ) {
    setTimeout(() => {
      store.dispatch(
        messagesSend(
          { text: 'Hello from Bot middleware', author: 'Bot' },
          action.payload.chatId,
        ),
      )
    }, 500)
  }
  return next(action)
}
