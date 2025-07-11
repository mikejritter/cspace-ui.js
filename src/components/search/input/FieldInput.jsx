import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import get from 'lodash/get';
import { DATA_TYPE_STRUCTURED_DATE } from '../../../constants/dataTypes';
import { formatExtensionFieldName } from '../../../helpers/formatHelpers';

import {
  OptionPickerInput,
} from '../../../helpers/configContextInputs';

import {
  configKey,
  getRecordFieldOptionListName,
} from '../../../helpers/configHelpers';

const propTypes = {
  config: PropTypes.shape({
    locale: PropTypes.string,
  }).isRequired,
  embedded: PropTypes.bool,
  intl: PropTypes.object.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  recordType: PropTypes.string,
  rootPath: PropTypes.string,
  value: PropTypes.string,
  valueDescriptor: PropTypes.shape({
    [configKey]: PropTypes.object,
  }),
  onCommit: PropTypes.func,
};

export function BaseFieldInput(props) {
  const {
    config,
    embedded,
    intl,
    name,
    placeholder,
    readOnly,
    recordType,
    rootPath,
    value,
    valueDescriptor,
    onCommit,
  } = props;

  if (readOnly) {
    let label;

    if (valueDescriptor) {
      const valueConfig = valueDescriptor[configKey];
      const extensionParentConfig = get(valueConfig, 'extensionParentConfig');
      const messages = get(valueConfig, 'messages');

      const rootPathParts = rootPath ? rootPath.split('/') : [];
      const pathParts = value ? value.split('/') : [];

      if (messages) {
        let message;

        const level = (pathParts.length - rootPathParts.length);

        if (level > 1) {
          if (
            extensionParentConfig
            && extensionParentConfig.dataType === DATA_TYPE_STRUCTURED_DATE
          ) {
            // Construct the full label for a field inside a structured date.
            // If the level is 2, the structured date group (this field's parent) is at the top
            // level, so use the groupName message instead of the fullName.
            const messageName = (level === 2) ? 'groupName' : 'fullName';

            label = formatExtensionFieldName(intl, valueConfig, messageName);
          } else {
            // Prefer the fullName message.
            message = messages.fullName;
          }
        } else {
          // This is a top-level field in a group. Prefer the groupName message.
          message = messages.groupName;
        }

        if (!label) {
          if (!message) {
            message = messages.name || messages.fullName;
          }

          if (message) {
            label = intl.formatMessage(message);
          }
        }
      }
    }

    if (!label) {
      label = value;
    }

    return <div><span>{label}</span></div>;
  }

  const sortComparator = (optionA, optionB) => {
    const labelA = optionA.label;
    const labelB = optionB.label;

    return labelA.localeCompare(labelB, config.locale, { sensitivity: 'base' });
  };

  return (
    <OptionPickerInput
      blankable={false}
      embedded={embedded}
      name={name}
      placeholder={placeholder}
      source={getRecordFieldOptionListName(recordType, rootPath)}
      value={value}
      sortComparator={sortComparator}
      onCommit={onCommit}
    />
  );
}

BaseFieldInput.propTypes = propTypes;

export default injectIntl(BaseFieldInput);
