import React, { useEffect } from 'react';
// import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleUsersData, handleQuestionsData } from '../actions/shared';
// import Login from './LogIn';
import Dashboard from './Dashboard';

const App = (props) => {
  useEffect((props) => {
    props.dispatch(handleUsersData());
    props.dispatch(handleQuestionsData());
  }, [])
  return (
    <div>
      {props.loading === true ? null : <Dashboard/>}
    </div>
  )
}
const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null,
})
export default connect(mapStateToProps)(App);