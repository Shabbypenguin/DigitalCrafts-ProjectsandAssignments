import React from 'react';
import { connect } from 'react-redux'
import * as actiontypes from './store/actions/actiontypes.js'

function App(props) {
  
  const handleIncrement = () => {
    props.onIncrement()
  }
  
  const handleAdd = () => {
    props.onAdd()
  }
  
  return (
    <div>
      {props.ctr}
      <button onClick = {handleIncrement}> Up</button>
      <button onClick = {handleAdd}> 10</button>
    </div>
  )
}

const mapStateToProps = (state) =>{
  return {
    ctr: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onIncrement: (ctr) => dispatch({type: actiontypes.INCREMENT}),
    onAdd: () => dispatch({type: actiontypes.ADD10, payload: 10})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
  