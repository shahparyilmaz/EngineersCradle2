import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { VscChevronRight } from "react-icons/vsc";


function MentorCard(){
  return(
    <div className="mentorCard">
      <div className="profilepic">
        <img src="https://i.ibb.co/t43PJd2/Sample.png" alt="" />
      </div>
      <div className="userdetails">
        <div className="userdetailsbox">
          <div className="name">
            Miss Angela Miss Angela Miss Angela
          </div>
          <div className="role">Graphic Designer</div>
        </div>
      </div>
      <div className="arrow"><VscChevronRight size="80%" color="black" /></div>
    </div>
  )
}
function Title(){
  return(
    <div className="title">Recommended Mentors</div>
  )
}

function RecommendedMentor(){
  return(
    <div className="outerbox">
      <div className="outerContainer">
        <Title/>
        <MentorCard/>
        <MentorCard/>
        <MentorCard/>
        <MentorCard/>
        <MentorCard/>
      </div>
    </div>
  )
}
ReactDOM.render(<RecommendedMentor/>,document.getElementById('root'));