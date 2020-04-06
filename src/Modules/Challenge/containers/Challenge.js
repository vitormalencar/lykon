import { connect } from 'react-redux'

import { fetchChallenge, compleateChallenge } from '../actions'
import Challenge from '../components/Challenge'
import {
  getCurrentChallenge,
  getLoadingState,
} from '../reducers/challenge.reducer'

const mapStateToProps = (state) => ({
  loading: getLoadingState(state),
  challenge: getCurrentChallenge(state),
})

const mapDispatchToProps = {
  fetchChallenge,
  compleateChallenge,
}

export default connect(mapStateToProps, mapDispatchToProps)(Challenge)
