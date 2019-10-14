import { connect } from 'react-redux'

import { fetchChallenges } from '../actions'
import Challenges from '../components/Challenges'
import { getChallenges } from '../reducers/challenges.reducer'

const mapStateToProps = (state) => ({
  challenges: getChallenges(state)
})

const mapDispatchToProps = {
  fetchChallenges
}

export default connect(mapStateToProps, mapDispatchToProps)(Challenges)