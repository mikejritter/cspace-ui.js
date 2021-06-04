import React from 'react';
import TestRenderer from 'react-test-renderer';
import { IntlProvider } from 'react-intl';
import { components as inputComponents } from 'cspace-input';
import { IntlAwareDateTimeInput } from '../../../../src/containers/input/DateTimeInputContainer';

chai.should();

const { DateTimeInput } = inputComponents;

describe('DateTimeInputContainer', () => {
  it('should set props on DateTimeInput', () => {
    const testRenderer = TestRenderer.create(
      <IntlProvider locale="en">
        <IntlAwareDateTimeInput />
      </IntlProvider>,
    );

    const testInstance = testRenderer.root;
    const component = testInstance.findByType(DateTimeInput);

    component.props.formatValue.should.be.a('function');
  });

  it('should use intl to format the value', () => {
    const testRenderer = TestRenderer.create(
      <IntlProvider locale="en">
        <IntlAwareDateTimeInput />
      </IntlProvider>,
    );

    const testInstance = testRenderer.root;
    const component = testInstance.findByType(DateTimeInput);
    const timestamp = '2017-09-21T07:29:44.113Z';

    component.props.formatValue(timestamp).should.equal('Sep 21, 2017 1:29:44 AM');
  });
});
