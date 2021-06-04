import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { defineMessages, useIntl } from 'react-intl';
import styles from '../../../styles/cspace-ui/Logo.css';

const messages = defineMessages({
  title: {
    id: 'logo.title',
    description: 'The title (advisory text) of the application logo image.',
    defaultMessage: 'CollectionSpace',
  },
});

const propTypes = {
  config: PropTypes.shape({
    logo: PropTypes.string,
  }),
};

function Logo(props) {
  const {
    config,
  } = props;

  const intl = useIntl();
  const title = intl.formatMessage(messages.title);

  return (
    <div className={styles.common}>
      <Link to="/">
        <img alt={title} src={config.logo} />
      </Link>
    </div>
  );
}

Logo.propTypes = propTypes;

export default Logo;
