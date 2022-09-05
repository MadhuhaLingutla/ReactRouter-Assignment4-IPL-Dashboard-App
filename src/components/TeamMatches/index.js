// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

const backgroundColoursArray = {
  RCB: '#a4261d',
  KKR: '#5755a7',
  KXP: '#d91c1f',
  CSK: '#f7db00',
  RR: '#da237b',
  MI: '#13418b',
  SH: '#f26d22',
  DC: '#4f5db0',
}

class TeamMatches extends Component {
  state = {
    teamMatchDetails: {},
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatchesDetails()
  }

  getTeamMatchesDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const bgColor = backgroundColoursArray[id]
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const formatedRecentMatchesData = data.recent_matches.map(each => ({
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      date: each.date,
      firstInnings: each.first_innings,
      id: each.id,
      manOfTheMatch: each.man_of_the_match,
      matchStatus: each.match_status,
      result: each.result,
      secondInnings: each.second_innings,
      umpires: each.umpires,
      venue: each.venue,
    }))
    const formatedData = {
      backGroundColor: bgColor,
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        date: data.latest_match_details.date,
        firstInnings: data.latest_match_details.first_innings,
        id: data.latest_match_details.id,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        matchStatus: data.latest_match_details.match_status,
        result: data.latest_match_details.result,
        secondInnings: data.latest_match_details.second_innings,
        umpires: data.latest_match_details.umpires,
        venue: data.latest_match_details.venue,
      },
      recentMatches: formatedRecentMatchesData,
    }
    this.setState({teamMatchDetails: formatedData, isLoading: false})
  }

  getLatestMatchDetails = () => {
    const {teamMatchDetails} = this.state
    const {latestMatchDetails, id} = teamMatchDetails

    return <LatestMatch item={latestMatchDetails} />
  }

  getRecentMatchesDetails = () => {
    const {teamMatchDetails} = this.state
    const {recentMatches} = teamMatchDetails
    return (
      <ul className="recent-matches-list">
        {recentMatches.map(each => (
          <MatchCard item={each} key={each.id} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading, teamMatchDetails} = this.state
    const {teamBannerUrl, backGroundColor} = teamMatchDetails

    return (
      <div>
        {isLoading ? (
          <Loader type="Oval" color="#ffffff" height={50} />
        ) : (
          <div
            className="match-details-container"
            style={{
              backgroundImage: `linear-gradient(${backGroundColor}, #0f172a)`,
            }}
          >
            <div className="content-container">
              <img
                src={teamBannerUrl}
                className="team-banner"
                alt="team banner"
              />
              <h1 className="latest-matches-heading">Latest Matches</h1>
              {this.getLatestMatchDetails()}
              {this.getRecentMatchesDetails()}
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
