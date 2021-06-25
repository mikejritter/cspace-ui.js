/* global window */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { MODAL_LOGIN } from '../../constants/modalNames';
import FooterContainer from '../../containers/sections/FooterContainer';
import Header from '../sections/Header';
import LoginModal from '../login/LoginModal';

const propTypes = {
  decorated: PropTypes.bool,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  openModalName: PropTypes.string,
  perms: PropTypes.instanceOf(Immutable.Map),
  screenName: PropTypes.string,
  username: PropTypes.string.isRequired,
  userPrefsLoaded: PropTypes.bool,
  children: PropTypes.node,
  closeModal: PropTypes.func,
  resetLogin: PropTypes.func,
};

const defaultProps = {
  decorated: true,
};

const contextTypes = {
  config: PropTypes.shape({
    pluginInfo: PropTypes.object,
    serverUrl: PropTypes.string,
  }),
};

class ProtectedPage extends Component {
  constructor() {
    super();

    this.handleLoginSuccess = this.handleLoginSuccess.bind(this);
  }

  handleLoginSuccess() {
    const {
      closeModal,
      resetLogin,
    } = this.props;

    window.setTimeout(() => {
      if (resetLogin) {
        resetLogin();
      }

      if (closeModal) {
        closeModal();
      }
    }, 0);
  }

  render() {
    const {
      decorated,
      history,
      openModalName,
      perms,
      screenName,
      username,
      userPrefsLoaded,
      children,
      closeModal,
    } = this.props;

    const {
      config,
    } = this.context;

    let header;

    if (decorated) {
      header = (
        <Header
          history={history}
          perms={perms}
          screenName={screenName || username}
          userPrefsLoaded={userPrefsLoaded}
        />
      );
    }

    const footer = decorated ? <FooterContainer config={config} /> : null;

    return (
      <div>
        {header}
        {userPrefsLoaded ? children : null}
        {footer}

        <LoginModal
          isOpen={openModalName === MODAL_LOGIN}
          onCloseButtonClick={closeModal}
          onSuccess={this.handleLoginSuccess}
        />
      </div>
    );
  }
}

ProtectedPage.propTypes = propTypes;
ProtectedPage.defaultProps = defaultProps;
ProtectedPage.contextTypes = contextTypes;

export default ProtectedPage;
