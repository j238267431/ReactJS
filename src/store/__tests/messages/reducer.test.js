import { messagesReducer, messagesSend } from '../../message-list'

describe('message reducer', () => {
  it('send message', () => {
    const state = messagesReducer(
      { messages: {} },
      messagesSend({ text: 'test', author: 'Bot' }, 'chat1'),
    )
    expect(state.messages.chat1.length).toBe(1)
    expect(state.messages.chat1[0].author).toBe('Bot')
    expect(state.messages.chat1[0]).toHaveProperty('message', 'Test')
  })
})
