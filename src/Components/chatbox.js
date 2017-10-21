import React from 'react'
import { Link } from 'react-router'

export const Chatbox = ({ heading, chat, pushMessage, message, inputChange, msgRef }) => (
  <div className='chatbox'>
    <div className='chatbox-heading'>{ heading }</div>
    <div className='chatbox-messages' id='style-1' ref={msgRef}>{
      chat.map((item, index) =>
      <div
        key={index}
        className={`${item.sender} ${item.type}`}
      >
        <Link
          to={ item.type === 'button' && {
            pathname: '/login',
            state: chat
          }}
        >
          {item.text}
        </Link>
      </div>)
    }</div>
    <form onSubmit={pushMessage}>
      <input type='text' className='chatbox-textarea' placeholder='Enter your message'
        value={message}
        onChange={(e) => inputChange(e)} autoFocus />
      <i className='material-icons sendIcon' onClick={pushMessage}>send</i>
    </form>
  </div>
)
