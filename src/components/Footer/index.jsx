import React, { Component } from 'react'
import footer from './index.module.css'
export default class Footer extends Component {
  render() {
    const { finish,all } = this.props
    return (
      <div className={footer.footer}>
        <input type="checkbox"/>&nbsp;&nbsp;&nbsp;&nbsp;已完成{finish}/全部{all}
      </div>
    )
  }
}
