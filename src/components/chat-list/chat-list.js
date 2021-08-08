import { useState } from 'react'
export const ChatList = () => {
  const [chatList] = useState([{ chatNumber: 1 }, { chatNumber: 2 }])
  return (
    <div>
      <ul>
        {chatList.map((chat) => (
          <li key={chat.chatNumber}>Chat number: {chat.chatNumber}</li>
        ))}
      </ul>
    </div>
  )
}
