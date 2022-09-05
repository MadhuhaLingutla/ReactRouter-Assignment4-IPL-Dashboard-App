import './index.css'

const LatestMatch = props => {
  const {item} = props

  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    id,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = item

  const imgUrl = `latest match ${competingTeam}`

  return (
    <div className="latestmatch-container">
      <div className="latest-match-main-info-container">
        <p className="latest-match-competing-team-name">{competingTeam}</p>
        <p className="latest-match-competing-date">{date}</p>
        <p className="latest-match-venue">{venue}</p>
        <p className="latest-match-result">{result}</p>
      </div>
      <img
        className="latest-match-competing-team-logo"
        src={competingTeamLogo}
        alt={imgUrl}
      />
      <div className="latest-match-additional-info">
        <p className="first-innings-heading">First Innings</p>
        <p className="first-innings-data">{firstInnings}</p>
        <p className="first-innings-heading">Second Innings</p>
        <p className="first-innings-data">{secondInnings}</p>
        <p className="first-innings-heading">Man Of The Match</p>
        <p className="first-innings-data">{manOfTheMatch}</p>
        <p className="first-innings-heading">Umpires</p>
        <p className="first-innings-data">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
