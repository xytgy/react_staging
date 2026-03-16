import { Component } from 'react'
import qs from 'qs'
let obj = {name: 'tom', age: 18}
console.log(qs.stringify(obj))
let str = 'name=tom&age=18'
console.log(qs.parse(str))



export default class Detail extends Component {
    
    state = {
        messages: [
            {id: 1, name: 'message001', content: 'message001 content'},
            {id: 2, name: 'message002', content: 'message002 content'},
            {id: 3, name: 'message003', content: 'message003 content'},
        ]
    }
  render() {    
    console.log(this.props)
    const { id, name } = qs.parse(this.props.location.search.slice(1))
    return (
      <div>
        <h2>Message Detail</h2>
        <p>id: {id}</p>
        <p>name: {name}</p>
        <p>content: {this.props.messages.find(item => item.id === Number(id)).content}</p>
      </div>
    )
  }
}
