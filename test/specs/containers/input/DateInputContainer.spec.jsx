import React from 'react';
import TestRenderer from 'react-test-renderer';
import { IntlProvider } from 'react-intl';
import { components as inputComponents } from 'cspace-input';
import { IntlAwareDateInput } from '../../../../src/containers/input/DateInputContainer';

chai.should();

const { DateInput } = inputComponents;

describe('DateInputContainer', () => {
  it('should set DateInput locale from intl', () => {
    const testRenderer = TestRenderer.create(
      <IntlProvider locale="en">
        <IntlAwareDateInput />
      </IntlProvider>,
    );

    const testInstance = testRenderer.root;
    const result = testInstance.findByType(DateInput);

    result.type.should.equal(DateInput);
    result.props.locale.should.equal('en');
  });
});
