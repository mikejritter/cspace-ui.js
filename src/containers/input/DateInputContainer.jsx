import React from 'react';
import { useIntl } from 'react-intl';
import { components as inputComponents } from 'cspace-input';

const { DateInput } = inputComponents;

export function IntlAwareDateInput(props) {
  const intl = useIntl();
  const { locale } = intl;

  return (
    <DateInput
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      locale={locale}
    />
  );
}

const IntlizedDateInput = IntlAwareDateInput;

IntlizedDateInput.propTypes = DateInput.propTypes;

export default IntlizedDateInput;
