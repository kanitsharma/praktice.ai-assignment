import React, { Component } from 'react'
import { Fab } from '../Components/fab'
import { Chatbox } from '../Components/chatbox'
import generateResponse from '../futils/responseGenerator'
import { withRouter } from 'react-router'

class Chatpage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dialogOpen: false,
      message: '',
      chat: [],
    }
  }

  inputChange = event => {
    this.setState({ message: event.target.value })
  }

  toggleDialog = () => {
    this.setState(prevState => ({
      dialogOpen: !prevState.dialogOpen
    }))
  }

  componentDidMount = async () => {
    if(this.props.location.state) {
      const { dialogOpen, chat, email } = this.props.location.state
      this.setState(prevState => ({
        dialogOpen,
        chat: [ ...chat,
          {
            sender: 'bot',
            type: 'message',
            text: 'Thanks for logging in.'
          },
          {
            sender: 'bot',
            type: 'button',
            text: email
        }]
      }))
    }else {
      const response = await generateResponse(this.state.chat)
      this.setState(prevState => ({
        chat: [ ...prevState.chat, response]
      }))
    }
  }

  render() {
    return (
      <div className='chat-page'>
        { this.state.dialogOpen &&
          <Chatbox
            heading='Praktice.ai Assignment'
            chat={this.state.chat}
            pushMessage={this.pushMessage}
            message={this.state.message}
            inputChange={this.inputChange}
          />
        }
        <Fab toggleDialog={this.toggleDialog} dialogOpen={this.state.dialogOpen} />
      </div>
    )
  }

  pushMessage = event => {
    event.preventDefault()
    this.setState(prevState => ({
      chat: [ ...prevState.chat, {
        sender: 'user',
        type: 'message',
        text: prevState.message
      }]
    }),
      async () => {
        const response = await generateResponse(this.state.chat)
        this.setState(prevState => ({
          chat: [ ...prevState.chat, response ]
        }))
    })
    this.setState({message: ''})
  }
}

export default withRouter(Chatpage)
