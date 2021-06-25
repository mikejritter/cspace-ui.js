import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { defineMessages, injectIntl } from 'react-intl';
import { components as inputComponents } from 'cspace-input';
import styles from '../../../styles/cspace-ui/AdminSearchBar.css';

const { LineInput, MiniButton } = inputComponents;

const messages = defineMessages({
  filter: {
    id: 'accountSearchBar.filter',
    description: 'Label of the input on the search bar of the account (user) admin page.',
    defaultMessage: 'Filter by full name',
  },
  clear: {
    id: 'accountSearchBar.clear',
    description: 'Label of the clear button on the search bar of the account (user) admin page.',
    defaultMessage: 'Clear',
  },
});

const propTypes = {
  intl: PropTypes.object,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

class AccountSearchBar extends Component {
  constructor() {
    super();

    this.handleClearButtonClick = this.handleClearButtonClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleClearButtonClick() {
    const {
      onChange,
    } = this.props;

    if (onChange) {
      onChange('');
    }
  }

  handleInputChange(value) {
    const {
      onChange,
    } = this.props;

    if (onChange) {
      onChange(value);
    }
  }

  render() {
    const {
      intl,
      value,
    } = this.props;

    return (
      <div className={styles.common}>
        <LineInput
          label={intl.formatMessage(messages.filter)}
          onChange={this.handleInputChange}
          value={value}
        />
        <div>
          <MiniButton
            autoWidth
            onClick={this.handleClearButtonClick}
          >
            {intl.formatMessage(messages.clear)}
          </MiniButton>
        </div>
      </div>
    );
  }
}

AccountSearchBar.propTypes = propTypes;

export default injectIntl(AccountSearchBar);
