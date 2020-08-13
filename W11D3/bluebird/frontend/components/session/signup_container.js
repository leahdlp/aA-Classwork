import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session'
import Signup from './signup'

// after finishing reducers

// signup container and signup go hand in hand
// container is js and presentational is jsx

// only need mapDispatchToProps because we don't need to rely on any form of state
// when it comes to creating/signing up a new user
const mapDispatchToProps = dispatch => ({
    // in dispatch to props we use thunk action creators to make the ajax call
    // and retrieve data from our db... in our thunk action creator we invoke our
    // regular action creator upon successful retrieval of info from the backend
    // and then the regular action creator sends it to the reducer to update state
    createNewUSer: formUser => dispatch(createNewUser(formUser))
})

// null cuz no mapStateToProps
export default connect(null, mapDispatchToProps)(Signup);

// we now have in our props: this.props.createNewUser which will go to our backend
// and create a new user in our database, then it will come back to our frontend
// and update the state so that new user is reflected

// next going to corresponding presentation component