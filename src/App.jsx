import React, { Component } from 'react'
import "./App.css"
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
export default class App extends Component {
  state = {
    actions: [
      { id: 1, text: "打代码", check: 0 },
      { id: 2, text: "睡觉", check: 0 },
      { id: 3, text: "吃饭", check: 0 }
    ]
  }
  listRef = React.createRef()
  headerRef = React.createRef()
  componentDidMount(){
    //console.log(this.listRef.current.ulRef.current);
    this.listRef.current.ulRef.current.onchange=(e)=>{
      this.update(e.target)
    }
  }
  update=(e)=>{
    const {actions} = this.state
      for (const i in actions) {
        if(actions[i].id == e.value){
          console.log(e.checked);
          actions[i].check = (e.checked?1:0)
          break;
        }
      }
    this.setState({actions:actions})
  }
  render() {
    const { actions } = this.state
    return (
      <div id="content">
        <Header ref={this.headerRef}/>
        <List ref={this.listRef} actions={actions}/>
        <Footer finish={actions.map(e=>e.check).reduce((a,b)=>a+b)} all={actions.length} />
      </div>
    )
  }
}
