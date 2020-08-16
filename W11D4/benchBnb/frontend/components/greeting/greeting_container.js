import { connect } from 'react-redux';

import Greeting from './greeting';
import { logoutUser } from '../../actions/session_actions'

const mapStateToProps = ({ session, entities: { users } }) => ({
    currentUser: users[session.id]
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logoutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(Greeting)