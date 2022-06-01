import React from 'react';
import { connect } from "react-redux";
import { formatQuestion } from '../_DATA';
import '../style.css';

const Question = (props) => {
  return (
      <div className="questions-title">
        <h4 className="title">Answered Question Unanswered Question</h4>
      
        <div className="question-container">
          <div className="question-card">
            <div className="left-content">

            </div>
            <div className="right-content">
              <ul className="dashboard-list">
                {
                  props.questionIds.map((id) => (
                    <li key={id}>
                      <div>
                        <Question id={id}/>
                      </div>
                    </li>
                  ))
                }
              </ul>
              <button>View Poll</button>
            </div>
          </div>
        </div>
      </div>
  )
}
const mapStateToProps = ({ authedUser, users, questions }, {id}) => {
  const question = questions[id];
  // const parentQuestions = questions[questions.replyingTo]
  return {
    authedUser,
    question: formatQuestion(question, users[question.author], authedUser)
  }
}
export default connect(mapStateToProps)(Question);