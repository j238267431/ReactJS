import { connect } from 'react-redux'
import { profile_is_visible } from './store/profile'

function Profile ({ profile_is_visible, name, profileProps }) {
  console.log(profile_is_visible)
  return (
    <div>
      <h1>my profile</h1>
      {profile_is_visible && <h2>name - {name}</h2>}
      <button onClick={profileProps}>show | hide name</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    profile_is_visible: state.profile_is_visible,
    name: state.user.name,
  }
}
const mapDispatchToProps = (dispatch) => {
  return { profileProps: () => dispatch(profile_is_visible()) }
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile)
