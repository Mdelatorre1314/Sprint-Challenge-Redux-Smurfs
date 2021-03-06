import React, { Component } from 'react'
import { connect } from 'react-redux'

import { updateSmurf } from '../actions/index'

class UpdateSmurf extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      age: '',
      height: '',
    }
  }

  componentDidMount(){
    const { smurfs, match } = this.props 
    const smurf = smurfs.find( item => item.id === Number(match.params.id))
    this.setState(smurf)
  }

  inputHandler = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.props.updateSmurf(this.state)
  }
  render(){
    return (
      <form onSubmit={this.submitHandler}>
        <input type="text" name="name" value={this.state.name} onChange={this.inputHandler} placeholder="Name"/>
        <input type="text" name="age" value={this.state.age} onChange={this.inputHandler} placeholder="Age"/>
        <input type="text" name="height" value={this.state.height} onChange={this.inputHandler} placeholder="Height"/>
        <button type="submit">Update</button>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}
export default connect(mapStateToProps, { updateSmurf })(UpdateSmurf)