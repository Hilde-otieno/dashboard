import React from 'react';
import './index.css'
import logo from '../Images/logos.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRankingStar, faUserGraduate, faCog, faCommentAlt, faBookOpen } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    // <div className="dashboard-container">
    <div className="sidebar">
      <div className="title">XOMI</div>
      <img src={logo} alt="logo" className="logo" />
      <ul>
        <li><FontAwesomeIcon icon={faRankingStar} size='5rem' /> Ranking</li>
        <hr color='blue'/>
        <li><FontAwesomeIcon icon={faUserGraduate} size='5rem'/> Students Profile Pic</li>
        <hr color='blue'/>
        <li><FontAwesomeIcon icon={faCog} size='5 rem'/> Settings</li>
        <hr color='blue'/>
        <li><FontAwesomeIcon icon={faCommentAlt}size='5rem' /> Feedback</li>
        <hr color='blue'/>
        <li><FontAwesomeIcon icon={faBookOpen}size='5rem' /> Courses</li>
        <hr color='blue'/>
      </ul>
    </div>
    
    // </div>
  );
}

export default Sidebar;
