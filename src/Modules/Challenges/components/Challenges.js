import React, { Component } from 'react'
import Card from '../../../Common/UI/Card/Card'
import { Link } from 'react-router-dom'

export default class Challenges extends Component {
  componentDidMount() {
    this.props.fetchChallenges()
  }
  render() {
    const { challenges } = this.props
    return (
      <div>
        {challenges.map((challenge, i) =>
          <Link key={i} to={`/challenge/${challenge.id}`}>
            <Card  {...challenge.attributes} />
          </Link>
        )}
      </div>
    )
  }
}
