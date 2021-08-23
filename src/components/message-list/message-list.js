import { Button, Input, InputAdornment } from '@material-ui/core'
import { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Switch, Route, useParams } from 'react-router-dom'
import { messagesSend } from '../../store/message-list'

export const Messagelist = () => {
  const inputRef = useRef(null)
  const [messageList, setMessageList] = useState([])
  const dispatch = useDispatch()
  const { chatId } = useParams()
  const messageListRedux = useSelector(
    (state) => state.messages.messages[chatId] || [],
  )

  const [value, setValue] = useState('')

  const sendMessage = () => {
    dispatch(messagesSend({ text: value, author: 'user' }, chatId))
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
            {messageListRedux.map((message, id) => (
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
