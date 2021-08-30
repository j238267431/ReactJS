// import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useRouteMatch, Switch, Route, useParams } from 'react-router-dom'
import { getChatListFB } from '../../store'

export const ChatList = () => {
  // const [chatList] = useState([
  //   { chat: 'chat1', id: 1 },
  //   { chat: 'chat2', id: 2 },
  // ])
  const match = useRouteMatch()
  const params = useParams()
  const state = useSelector((state) => state.chats.chatList)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getChatListFB)
  }, [dispatch])

  return (
    <div>
      <ul>
        {state.map((chat) => (
          <Link key={chat.id} to={`${match.url}/${chat.chat}`}>
            <li key={chat.id}> {chat.chat}</li>
          </Link>
        ))}
      </ul>
      <Switch>
        <Route path={`${match.path}/:chatId`}>Chat {params.chatId}</Route>
      </Switch>
    </div>
  )
}
