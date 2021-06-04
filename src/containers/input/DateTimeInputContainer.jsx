import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { components as inputComponents } from 'cspace-input';

const { DateTimeInput } = inputComponents;

const messages = defineMessages({
  value: {
    id: 'dateTimeInputContainer.value',
    description: 'The value of a datetime field.',
    defaultMessage: '{date} {time}',
  },
});

export function IntlAwareDateTimeInput(props) {
  const intl = useIntl();

  return (
    <DateTimeInput
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      formatValue={(timestamp) => {
        const date = intl.formatDate(timestamp, { day: 'numeric', month: 'short', year: 'numeric' });
        const time = intl.formatTime(timestamp, { hour: 'numeric', minute: 'numeric', second: 'numeric' });

        return intl.formatMessage(messages.value, { date, time });
      }}
    />
  );
}

const IntlizedDateTimeInput = IntlAwareDateTimeInput;

IntlizedDateTimeInput.propTypes = DateTimeInput.propTypes;

export default IntlizedDateTimeInput;
