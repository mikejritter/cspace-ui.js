import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, FormattedMessage } from 'react-intl';
import { Redirect, Route, Switch } from 'react-router';
import Immutable from 'immutable';
import AccountPageContainer from '../../containers/pages/AccountPageContainer';
import AuthRolePageContainer from '../../containers/pages/AuthRolePageContainer';
import AdminNavBar from '../admin/AdminNavBar';
import TitleBar from '../sections/TitleBar';
import { canList } from '../../helpers/permissionHelpers';
import styles from '../../../styles/cspace-ui/AdminPage.css';

const messages = defineMessages({
  title: {
    id: 'adminPage.title',
    defaultMessage: 'Administration',
  },
});

const tabs = [
  'account',
  'authrole',
];

const propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
  }),
  perms: PropTypes.instanceOf(Immutable.Map),
  preferredTab: PropTypes.string,
};

export default function AdminPage(props) {
  const {
    match,
    perms,
    preferredTab,
  } = props;

  const basename = match.url;
  const title = <FormattedMessage {...messages.title} />;
  const permittedTabs = tabs.filter((tab) => canList(tab, perms));

  if (permittedTabs.length === 0) {
    return null;
  }

  const redirectTabName = preferredTab || permittedTabs[0];

  return (
    <div className={styles.common}>
      <TitleBar id={messages.title.id} title={title} updateDocumentTitle />

      <AdminNavBar basename={basename} tabs={permittedTabs} labelledBy={messages.title.id} />

      <Switch>
        <Redirect exact path={basename} to={`${basename}/${redirectTabName}`} />

        <Route path={`${basename}/account/:csid?`} component={AccountPageContainer} />
        <Route path={`${basename}/authrole/:csid?`} component={AuthRolePageContainer} />
      </Switch>
    </div>
  );
}

AdminPage.propTypes = propTypes;
