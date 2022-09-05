// Write your code here

import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamData} = props
  const {name, id, teamImageUrl} = teamData
  console.log('In Team Card', id)
  return (
    <li>
      <Link to={`/team-matches/${id}`} className="link-item-team-card">
        <div className="team-card-container">
          <img src={teamImageUrl} alt={name} className="team-logo" />
          <p className="team-name">{name}</p>
        </div>
      </Link>
    </li>
  )
}

export default TeamCard
