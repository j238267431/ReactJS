import { useState } from 'react'
import { Link, useRouteMatch, Switch, Route, useParams } from 'react-router-dom'

export const ChatList = () => {
  const [chatList] = useState([
    { chat: 'chat1', id: 1 },
    { chat: 'chat2', id: 2 },
  ])
  const match = useRouteMatch()
  const params = useParams()
  console.log(params)

  return (
    <div>
      <ul>
        {chatList.map((chat) => (
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
