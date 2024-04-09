import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom';
import styles from '../../../styles/cspace-ui/AdminNavBar.css';
import itemStyles from '../../../styles/cspace-ui/AdminNavItem.css';

const messages = defineMessages({
  account: {
    id: 'adminNavBar.account',
    defaultMessage: 'Users',
  },
  authrole: {
    id: 'adminNavBar.authrole',
    defaultMessage: 'Roles and Permissions',
  },
});

const renderLinkItem = (basename, tab) => (
  <li key={tab} role={tab}>
    <NavLink
      id={tab}
      to={`${basename}/${tab}`}
      className={itemStyles.common}
      activeClassName={itemStyles.active}
      aria-controls={`${tab}-panel`}
    >
      <FormattedMessage {...messages[tab]} />
    </NavLink>
  </li>
);

const propTypes = {
  labelledBy: PropTypes.string,
  basename: PropTypes.string,
  tabs: PropTypes.arrayOf(PropTypes.string),
};

export default function AdminNavBar(props) {
  const {
    labelledBy,
    basename,
    tabs,
  } = props;

  const items = tabs.map((tab) => renderLinkItem(basename, tab));

  return (
    <nav className={styles.common} aria-labelledby={labelledBy}>
      <ul role="tablist">
        {items}
      </ul>
    </nav>
  );
}

AdminNavBar.propTypes = propTypes;
