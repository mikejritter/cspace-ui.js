import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import FooterContainer from '../../containers/sections/FooterContainer';
import Logo from '../sections/Logo';
import styles from '../../../styles/cspace-ui/PublicPage.css';

const propTypes = {
  children: PropTypes.node,
};

const contextTypes = {
  config: PropTypes.shape({
    logo: PropTypes.string,
    pluginInfo: PropTypes.object,
    serverUrl: PropTypes.string,
  }),
};

export default function PublicPage(props, context) {
  const {
    children,
  } = props;

  const {
    config,
  } = context;

  const intl = useIntl();

  return (
    <div className={styles.common}>
      <header>
        <Logo config={config} />
      </header>

      {children}

      <FooterContainer config={config} intl={intl} />
    </div>
  );
}

PublicPage.propTypes = propTypes;
PublicPage.contextTypes = contextTypes;
