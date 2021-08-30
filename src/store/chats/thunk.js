import { db } from '../../api/firebase'
import { GET_CHATS } from './types'
export const getChatListFB = () => (dispatch) => {
  db.ref('chat-list').on('value', (snapshot) => {
    const chatList = []
    snapshot.forEach((snap) => {
      chatList.push(snap.val())
    })
    dispatch({ type: GET_CHATS, payload: chatList })
  })
}
