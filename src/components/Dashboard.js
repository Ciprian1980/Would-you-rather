import React from 'react';
import { connect } from 'react-redux'; 
import '../style.css';
import Question from './Question';

function Dashboard(props) {
  console.log(props)
  return (
    <div className="questions-page">
      <div className="questions-list">
        <Question/>
      </div>
    </div>
  )
}
const mapStateToProps = ({ questions }) => (
  {
    questionIds: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp)
  }
)
export default connect(mapStateToProps)(Dashboard);