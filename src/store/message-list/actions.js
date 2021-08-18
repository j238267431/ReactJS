import { MESSAGES, MESSAGES_SEND } from './types'

export const messagesSend = (message, chatId) => ({
  type: MESSAGES_SEND,
  payload: { message, chatId },
})

export const messages = () => ({
  type: MESSAGES,
})
