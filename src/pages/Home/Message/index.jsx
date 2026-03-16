import { Component } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import Detail from './Detail'


export default class Message extends Component {
    state = {
        messages: [
            {id: 1, name: 'message001', content: 'message001 content'},
            {id: 2, name: 'message002', content: 'message002 content'},
            {id: 3, name: 'message003', content: 'message003 content'},
        ]
    }
  render() {
    const { messages } = this.state
    return (
      <div>
        <ul>
          {
            messages.map((item) => (
                <li key={item.id}>  
                    <Link to={`/message/?id=${item.id}&name=${item.name}`}>{item.name}</Link>&nbsp;&nbsp;
                </li>
            ))
          }
        </ul>
        <Routes>
            <Route path="/message/:id/:name" element={<Detail />} />
        </Routes>
      </div>
    )
  }
}
