import React, { Component } from 'react'
import Item from '../Item'
import list from './index.module.css'
export default class List extends Component {
  ulRef = React.createRef()
  render() {
    const { actions } = this.props
    return (
      <ul className={list.list} ref={this.ulRef}>
        {
            actions.map((e)=>{
            return <Item key={e.id} action={e}/>
          })
        }
      </ul>
    )
  }
}
