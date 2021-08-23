import { MESSAGES, MESSAGES_SEND } from './types'

export const messagesSend = (message, chatId) => ({
  type: MESSAGES_SEND,
  payload: { message, chatId },
})

export const messages = () => ({
  type: MESSAGES,
})

export const SendMessageWithThunk = (message, chatId) => (dispatch) => {
  dispatch(messagesSend(message, chatId))
  if (message.author === 'user') {
    setTimeout(
      () =>
        dispatch(
          messagesSend(
            {
              text: 'hello thunk',
              author: 'botThunk',
            },
            chatId,
          ),
        ),
      1500,
    )
  }
}
