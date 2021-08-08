import './App.css'
import { Button, Input, InputAdornment } from '@material-ui/core'
import { useState, useEffect, useRef } from 'react'

export const App = () => {
  const inputRef = useRef(null)
  const [messageList, setMessageList] = useState([])

  const [value, setValue] = useState('')

  const sendMessage = () => {
    setMessageList((state) => [...state, { text: value, author: 'she' }])
    setValue('')
  }
  const lastMessage = messageList[messageList.length - 1]
  useEffect(() => {
    inputRef.current.focus()
    if (lastMessage?.author === 'she') {
      setTimeout(() => {
        setMessageList((state) => [
          ...state,
          { text: 'Hi from Robot', author: 'Robot' },
        ])
      }, 500)
    }
  }, [messageList])
  return (
    <div className='App'>
      <Input
        fullWidth={true}
        autoFocus={true}
        ref={inputRef}
        endAdornment={
          <InputAdornment position='end'>
            <Button variant='contained' color='primary' onClick={sendMessage}>
              send message
            </Button>
          </InputAdornment>
        }
        type='text'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <h1>Messages:</h1>
      <ul>
        {messageList.map((message, id) => (
          <li key={id}>
            {message.author} {message.text}
          </li>
        ))}
      </ul>
    </div>
  )
}
