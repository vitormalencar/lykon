import React, { Component } from 'react'
import { withRouter } from 'react-router'

import { BlockButton } from '../../../Common/UI/Button/Button'
import Loader from '../../../Common/UI/Loader/Loader'

import { PLACEHOLDER } from '../../../Common/Utils/placeholders'

class Challenge extends Component {
  componentDidMount() {
    const { match, fetchChallenge } = this.props
    fetchChallenge(match.params.id)
  }

  render() {
    const { challenge, compleateChallenge, loading } = this.props
    const { attributes } = challenge

    if (loading || !attributes) {
      return <Loader />
    }

    return (
      <div>
        <div className="full-width">
          <img
            src={attributes.extra.image || PLACEHOLDER}
            className="full-image"
            alt="card"
          />
        </div>
        <br />

        <div className="content">
          <h1 className="title">{attributes.title}</h1>

          {attributes.complete ? (
            <h3>
              Well done ! you have completed this challenge{' '}
              <span role="img" aria-label="tada">
                🎉
              </span>{' '}
            </h3>
          ) : (
            <span>Points: {attributes.points} </span>
          )}

          <p className="description">{attributes.introduction}</p>
        </div>

        <BlockButton
          disabled={attributes.complete}
          onClick={() => compleateChallenge(challenge.id)}
        >
          Complete the Challenge
        </BlockButton>
      </div>
    )
  }
}

export default withRouter(Challenge)
