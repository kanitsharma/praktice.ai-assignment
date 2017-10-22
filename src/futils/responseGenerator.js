import axios from 'axios'

export default chatArray => {
  switch (chatArray.length) {
    case 0:
    return new Promise((resolve, reject) => {
      resolve({
        sender: 'bot',
        type: 'message',
        text: 'Enter your firstname'
      })
    })
    case 2:
      return new Promise((resolve, reject) => {
        resolve({
          sender: 'bot',
          type: 'message',
          text: 'Enter your lastname'
        })
      })
    default:
      const latestResponse = chatArray[chatArray.length-1].text
      if(latestResponse.toLowerCase() === 'login please'){
        return new Promise((resolve, reject) => {
          resolve({
            sender: 'bot',
            type: 'button',
            text: 'Go To Login Page'
          })
        })
      }
      return axios.get(`https://api.icndb.com/jokes/random?firstName=${chatArray[1].text}&lastName=${chatArray[3].text}`)
        .then(res => res.data.value.joke)
        .then(joke => ({
          sender: 'bot',
          type: 'message',
          text: joke
        }))
  }
}
