import './team.css';
import {React} from 'react';
import aaron from './pics/aaron.png';
import brian from './pics/brian.jpg';
import eliott from './pics/eliott.jpg';
import fatima from './pics/fatima.jpg';
import john from './pics/john.jpg';

/**
 * Team page, which holds information for all team members
 * @return {Element} Team container
 */
function TeamPage() {
  return (
    <div className="team-container" id='team'>
      <h2>Meet the Team</h2>
      <p className='team-subtext'>We are Team U! We created this project for our
       Informatics capstone project in 2023.</p>
      <div className="team-members top-members">
        <div className="team-member">
          <img className="member-img" src={aaron} alt="team member" />
          <h3>Aaron Phan</h3>
        </div>
        <div className="team-member">
          <img className="member-img" src={brian} alt="team member" />
          <h3>Brian Yoo</h3>
        </div>
        <div className="team-member">
          <img className="member-img" src={eliott} alt="team member" />
          <h3>Eliott Yoo</h3>
        </div>
      </div>
      <div className="team-members bottom-members">
        <div className="team-member">
          <img className="member-img" src={fatima} alt="team member" />
          <h3>Fatima Dineh</h3>
        </div>
        <div className="team-member">
          <img className="member-img" src={john} alt="team member" />
          <h3>John You</h3>
        </div>
      </div>
    </div>
  );
}

export default TeamPage;
