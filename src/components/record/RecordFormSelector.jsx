import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { useIntl } from 'react-intl';
import { baseComponents as components } from 'cspace-input';
import styles from '../../../styles/cspace-ui/RecordFormSelector.css';

const { DropdownMenuInput } = components;

const formOptions = (forms, intl) => Object.keys(forms)
  .filter((formName) => !forms[formName].disabled)
  .sort((nameA, nameB) => {
    const configA = forms[nameA];
    const configB = forms[nameB];

    // Primary sort by sortOrder

    let sortOrderA = configA.sortOrder;
    let sortOrderB = configB.sortOrder;

    if (typeof sortOrderA !== 'number') {
      sortOrderA = Number.MAX_VALUE;
    }

    if (typeof sortOrderB !== 'number') {
      sortOrderB = Number.MAX_VALUE;
    }

    if (sortOrderA !== sortOrderB) {
      return (sortOrderA > sortOrderB ? 1 : -1);
    }

    // Secondary sort by label

    const labelA = intl.formatMessage(configA.messages.name);
    const labelB = intl.formatMessage(configB.messages.name);

    // FIXME: This should be locale aware
    return labelA.localeCompare(labelB);
  })
  .map((formName) => ({
    label: intl.formatMessage(forms[formName].messages.name),
    value: formName,
  }));

const propTypes = {
  config: PropTypes.shape({
    recordTypes: PropTypes.object,
  }),
  formName: PropTypes.string,
  recordType: PropTypes.string,
  onCommit: PropTypes.func,
};

function RecordFormSelector(props) {
  const {
    config,
    formName,
    recordType,
    onCommit,
  } = props;

  const intl = useIntl();
  const forms = get(config, ['recordTypes', recordType, 'forms']);

  if (!forms || Object.keys(forms).length < 2) {
    return null;
  }

  const options = formOptions(forms, intl);

  if (options.length < 2) {
    return null;
  }

  return (
    <div className={styles.common}>
      <DropdownMenuInput
        options={options}
        value={formName}
        onCommit={onCommit}
      />
    </div>
  );
}

RecordFormSelector.propTypes = propTypes;

export default RecordFormSelector;
