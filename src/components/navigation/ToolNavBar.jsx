import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom';
import styles from '../../../styles/cspace-ui/AdminNavBar.css';
import itemStyles from '../../../styles/cspace-ui/AdminNavItem.css';

const messages = defineMessages({
  report: {
    id: 'toolNavBar.report',
    defaultMessage: 'Reports',
  },
  batch: {
    id: 'toolNavBar.batch',
    defaultMessage: 'Data Updates',
  },
  vocabulary: {
    id: 'toolNavBar.vocabulary',
    defaultMessage: 'Term Lists',
  },
});

const renderLinkItem = (basename, tab) => (
  <li key={tab}>
    <NavLink
      to={`${basename}/${tab}`}
      className={itemStyles.common}
      activeClassName={itemStyles.active}
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

export default function ToolNavBar(props) {
  const {
    labelledBy,
    basename,
    tabs,
  } = props;

  const items = tabs.map((tab) => renderLinkItem(basename, tab));

  return (
    <nav className={styles.common} aria-labelledby={labelledBy}>
      <ul>
        {items}
      </ul>
    </nav>
  );
}

ToolNavBar.propTypes = propTypes;
