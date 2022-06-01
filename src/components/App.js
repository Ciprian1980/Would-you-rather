import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { handleUsersData, handleQuestionsData } from '../actions/shared';
import Dashboard from './Dashboard';

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleUsersData());
    props.dispatch(handleQuestionsData());
  }, [props])
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