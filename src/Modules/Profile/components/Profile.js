import React, { Component } from 'react'
import { withRouter } from 'react-router'
import Loader from '../../../Common/UI/Loader/Loader'
import Button from '../../../Common/UI/Button/Button'

class Profile extends Component {
  componentDidMount() {
    this.props.fetchUser()
  }

  render() {
    const { user, loading, userReward } = this.props
    const attributes = user.attributes || null

    if (loading || !attributes) {
      return <Loader />
    }

    return (
      <div className="tc">
        <img
          src="https://image.flaticon.com/icons/svg/146/146007.svg"
          alt="userpic"
          className="br-100 h4 w4 dib ba b--black-05 pa2"
          title="User"
        />
        <h1 className="f3 mb2">{attributes.name}</h1>
        <h2 className="f5 fw4 gray mt0">Points:{attributes.points}</h2>
        <br />
        {userReward && (
          <div>
            <p> CONGRATULATIONS YOU HAVE COMPLETE ALL YOUR CHALLENGES !</p>
            <br />
            <Button onClick={() => alert('🎉🎉🎉')}>
              Click here to get your prize
            </Button>
          </div>
        )}
      </div>
    )
  }
}

export default withRouter(Profile)
