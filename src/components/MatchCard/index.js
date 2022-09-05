// Write your code here

import './index.css'
import {type} from 'os'

const MatchCard = props => {
  const {item} = props
  const {competingTeam, competingTeamLogo, matchStatus, result} = item

  const imageAlt = `competing team ${competingTeam}`

  const verdict = matchStatus === 'Won' ? 'verdict green' : 'verdict red'

  return (
    <li className="recent-match-container">
      <div className="recent-compete-logo-container">
        <img
          src={competingTeamLogo}
          alt={imageAlt}
          className="recent-compete-logo"
        />
      </div>
      <p className="recent-competing-team">{competingTeam}</p>
      <p className="recent-result">{result}</p>
      <p className={verdict}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
