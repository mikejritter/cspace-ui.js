import { connect } from 'react-redux';
import ProtectedRoute from '../../components/routes/ProtectedRoute';

import {
  getOpenModalName,
  getUserScreenName,
  getUserUsername,
  getUserPerms,
} from '../../reducers';

import {
  redirectLogin,
} from '../../actions/login';

import {
  closeModal,
} from '../../actions/notification';

const mapStateToProps = state => ({
  openModalName: getOpenModalName(state),
  perms: getUserPerms(state),
  username: getUserUsername(state),
  screenName: getUserScreenName(state),
});

const mapDispatchToProps = {
  closeModal,
  redirectLogin,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProtectedRoute);
