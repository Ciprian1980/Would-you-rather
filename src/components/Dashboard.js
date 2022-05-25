import React from 'react';
import { connect } from 'react-redux'; 
import '../style.css';

function Dashboard(props) {
  console.log(props)
  return(
    <div className="questions-page">
      <div className="questions-list">
        <div className="question-container">
          <div className="questions-title">
            <h4 className="title">Answered Question Unanswered Question</h4>
          </div>
          <div className="question-card">
            <div className="left-content">

            </div>
            <div className="right-content">
              <ul className="dashboard-list">
                {
                  // props.tweetIds.map((id) => (
                  //   <li key={id}>
                  //     <div>
                  //       TWEET ID: {id}
                  //     </div>
                  //   </li>
                  // ))
                }
              </ul>
              <button>View Poll</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = ({ tweets }) => (
  {
    tweetIds: Object.keys(tweets).sort(
      (a, b) => tweets[b].timestamp - tweets[a].timestamp)
  }
)
export default connect(mapStateToProps)(Dashboard);