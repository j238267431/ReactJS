import { Button, Input, InputAdornment } from '@material-ui/core'
import { useState, useEffect, useRef } from 'react'
import { Switch, Route } from 'react-router-dom'

export const Messagelist = () => {
  const inputRef = useRef(null)
  const [messageList, setMessageList] = useState([])

  const [value, setValue] = useState('')
  // const match = useRouteMatch()

  const sendMessage = () => {
    setMessageList((state) => [...state, { text: value, author: 'she' }])
    setValue('')
  }

  useEffect(() => {
    const lastMessage = messageList[messageList.length - 1]
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
        <Switch>
          <Route exact={true} path='/chats/:chatId'>
            {messageList.map((message, id) => (
              <>
                <li key={id}>
                  {message.author} {message.text}
                </li>
              </>
            ))}
          </Route>
          <Route exact={true} path='/chats/:*'>
            <>
              <h2>no such chat</h2>
            </>
          </Route>
        </Switch>
      </ul>
    </div>
  )
}
