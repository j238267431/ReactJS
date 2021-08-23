export * from './profile'
import { createStore, combineReducers } from 'redux'
import { chatsReducer } from './chats'
import { messagesReducer } from './message-list'
import { profileReducer } from './profile'

export const store = createStore(
  combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer,
  }),
)
