import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Profile from '../profile/profile';
import NavBar from './nav_bar';


const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
