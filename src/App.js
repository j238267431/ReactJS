import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useCallback, useMemo, useLayoutEffect, useReducer } from "react";

export const App = () =>  {
    const [messageListRobot, setmessageListRobot] = useState([]);
    const [messageList, setMessageList] = useState([]);
    const [value, setValue] = useState('');

    const sendMessageRobot = () => {
        setmessageListRobot(state => [...state, {text: 'Hello From Robot', author: 'Robot'}]);
    }
    const sendMessage = () => {
        setMessageList(state => [...state, {text: value, author: 'she'}]);
        setValue("");
        setAuthor({author: 'she'});
    }
    const [author, setAuthor] = useState('');
    useEffect(()=>{
        sendMessageRobot()
    }, [author])
    return (
    <div className="App">
        <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
        <button onClick={sendMessage}>send message</button>

        <h1>Messages:</h1>
        <ul>
        {messageList.map((message, id) => (
            <li key={id}>
                {message.author} {message.text}
            </li>
        ))}
            {messageListRobot.map((message, id)=>(
                <li>{message.author} {message.text} </li>
            ))}

        </ul>
    </div>
  );
}

