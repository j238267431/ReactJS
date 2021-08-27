export * from './profile'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

import { chatsReducer } from './chats'
import { gistsReducer } from './gists'
import { messagesReducer } from './message-list'
import { logger, botSendMessage } from './middleware'
import { profileReducer } from './profile'

const persistConfig = {
  key: 'root',
  storage,
}

const persistreducer = persistReducer(
  persistConfig,
  combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer,
    gists: gistsReducer,
  }),
)

export const store = createStore(
  persistreducer,
  applyMiddleware(thunk, logger, botSendMessage),
)

export const persistore = persistStore(store)
