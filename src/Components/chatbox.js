import React, { Component } from 'react'
import { Link } from 'react-router'

export class Chatbox extends Component {
  adjustScroller = div => div.scrollTop = div.scrollHeight

  componentDidUpdate = () => {
    this.adjustScroller(this.div)
  }

  render = () => {
    const { heading, chat, pushMessage, message, inputChange } = this.props
    return (
      <div className='chatbox'>
        <div className='chatbox-heading'>{ heading }</div>
        <div className='chatbox-messages' id='style-1' ref={el => this.div = el}>{
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
  }
}
