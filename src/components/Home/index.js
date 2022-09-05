import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {
    teamsData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamsDetails()
  }

  getTeamsDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const formateddata = data.teams.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))

    this.setState({teamsData: formateddata, isLoading: false})
  }

  displayTeamcards = () => {
    const {teamsData} = this.state

    return (
      <ul className="teamslist-container">
        {teamsData.map(each => (
          <TeamCard teamData={each} key={each.id} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <Link to="/" className="link-item">
        <div className="home-container">
          <div className="heading-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="logo-image"
            />
            <h1 className="heading">IPL Dashboard</h1>
          </div>
          {isLoading ? (
            <Loader type="Oval" color="#ffffff" height={50} />
          ) : (
            this.displayTeamcards()
          )}
        </div>
      </Link>
    )
  }
}

export default Home
