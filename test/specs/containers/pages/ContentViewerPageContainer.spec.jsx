import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { createRenderer } from 'react-test-renderer/shallow';
import Immutable from 'immutable';
import moxios from 'moxios';
import ContentViewerPage from '../../../../src/components/pages/ContentViewerPage';
import ContentViewerPageContainer from '../../../../src/containers/pages/ContentViewerPageContainer';

import {
  configureCSpace,
} from '../../../../src/actions/cspace';
import { findWithType } from 'react-shallow-testutils';

chai.should();

const mockStore = configureMockStore([thunk]);

const store = mockStore({
  user: Immutable.Map(),
});

describe('ContentViewerPageContainer', () => {
  before(() => store.dispatch(configureCSpace())
    .then(() => store.clearActions()));

  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    store.clearActions();
    moxios.uninstall();
  });

  it('should set props on ContentViewerPage', () => {
    const context = { store };

    const shallowRenderer = createRenderer();

    shallowRenderer.render(<ContentViewerPageContainer store={store} />, context);

    const result = shallowRenderer.getRenderOutput();
    const page = findWithType(result, ContentViewerPage);

    page.should.not.be.null;
    page.props.should.have.property('readContent').that.is.a('function');
  });

  it('should connect readContent to an action that fetches the content as a blob', () => {
    moxios.stubRequest(/./, {
      status: 200,
      response: {},
    });

    const context = { store };

    const shallowRenderer = createRenderer();

    shallowRenderer.render(<ContentViewerPageContainer store={store} />, context);

    const result = shallowRenderer.getRenderOutput();
    const page = findWithType(result, ContentViewerPage);

    const contentPath = 'blobs/1fd5e035-b5dc-4a3b-aafb/content';

    const match = {
      params: {
        contentPath,
      },
    };

    return page.props.readContent(undefined, match)
      .then(() => {
        const request = moxios.requests.mostRecent();

        request.url.should.equal(`/cspace-services/${contentPath}`);
        request.responseType.should.equal('blob');
      });
  });
});
