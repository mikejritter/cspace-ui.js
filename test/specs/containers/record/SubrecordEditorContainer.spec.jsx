import React from 'react';
import configureMockStore from 'redux-mock-store';
import { createRenderer } from 'react-test-renderer/shallow';
import Immutable from 'immutable';
import SubrecordEditor from '../../../../src/components/record/SubrecordEditor';
import SubrecordEditorContainer from '../../../../src/containers/record/SubrecordEditorContainer';

chai.should();

const mockStore = configureMockStore();

describe('SubrecordEditorContainer', () => {
  const containerCsid = '1234';
  const subrecordName = 'contact';
  const subrecordCsid = '5678';

  const subrecordData = Immutable.fromJS({
    document: {
      'ns2:contacts_common': {
        foo: 'abc',
      },
    },
  });

  const perms = Immutable.fromJS({
    [subrecordName]: {
      data: 'CRUDL',
    },
  });

  const store = mockStore({
    record: Immutable.fromJS({
      [containerCsid]: {
        subrecord: {
          [subrecordName]: subrecordCsid,
        },
      },
      [subrecordCsid]: {
        data: {
          current: subrecordData,
        },
      },
    }),
    user: Immutable.fromJS({
      perms,
    }),
  });

  const context = {
    store,
  };

  it('should set props on SubrecordEditor', () => {
    const shallowRenderer = createRenderer();

    shallowRenderer.render(
      <SubrecordEditorContainer
        containerCsid={containerCsid}
        name={subrecordName}
      />, context,
    );

    const result = shallowRenderer.getRenderOutput();

    result.type.should.equal(SubrecordEditor);
    result.props.should.have.property('csid').that.equals(subrecordCsid);
    result.props.should.have.property('data').that.equals(subrecordData);
    result.props.should.have.property('perms').that.equals(perms);
  });
});
