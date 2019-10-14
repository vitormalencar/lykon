import { connect } from 'react-redux'
import { fetchUser } from '../actions'
import Profile from '../components/Profile'
import { getCurrentUser, getLoadingState } from '../reducers/profile.reducer'
import { getUserReward } from '../../../Common/Utils/selectors'

const mapStateToProps = (state) => ({
  loading: getLoadingState(state),
  user: getCurrentUser(state),
  userReward: getUserReward(state)
})

const mapDispatchToProps = {
  fetchUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)