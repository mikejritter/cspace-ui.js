import React from 'react';
import Immutable from 'immutable';
import { setupWorker, rest } from 'msw';
import { renderWithProviders as render, createStore } from '../../../../helpers/providerHelpers';
import createTestContainer from '../../../../helpers/createTestContainer';
import SearchResultTable from '../../../../../src/components/search/table/SearchTable';
import { evaluatePlugin, finalizeRecordTypes, mergeConfig } from '../../../../../src/helpers/configHelpers';
import createConfigContext from '../../../../../src/helpers/createConfigContext';
import { OP_OR } from '../../../../../src/constants/searchOperators';
import plugins from '../../../../../src/plugins';
import { SEARCH_RESULT_PAGE_SEARCH_NAME } from '../../../../../src/constants/searchNames';
import { search } from '../../../../../src/actions/search';

const { expect } = chai;

chai.should();

const configContext = createConfigContext();

const defaultConfig = mergeConfig({
  allowDeleteHierarchyLeaves: false,
  autocompleteFindDelay: 500,
  autocompleteMinLength: 3,
  basename: '',
  className: '',
  container: '#cspace',
  defaultAdvancedSearchBooleanOp: OP_OR,
  defaultDropdownFilter: 'substring',
  defaultSearchPageSize: 20,
  defaultSearchPanelSize: 5,
  defaultUserPrefs: {
    panels: {
      collectionobject: {
        mediaSnapshotPanel: {
          collapsed: false,
        },
      },
    },
  },
  disableAltTerms: false,
  index: '/search',
  locale: 'en-US',
  // logo: logoUrl,
  mediaSnapshotSort: 'title',
  messages: undefined,
  prettyUrls: false,
  relationMemberPerm: 'U',
  serverUrl: '',
  showTermListStateIcon: false,
  structDateOptionListNames: ['dateQualifiers'],
  structDateVocabNames: ['dateera', 'datecertainty', 'datequalifier'],
  tags: {
    defaultGroup: {
      sortOrder: 0,
    },
    nagpra: {
      sortOrder: 1,
    },
    legacy: {
      sortOrder: 3,
    },
  },
  tenantId: '1',
  termDeprecationEnabled: false,
}, {
  plugins: plugins.map((plugin) => plugin()),
}, configContext);

// pulled from the CollectionSpace Services API
const response = {
  'ns2:abstract-common-list': {
    '@xmlns:ns2': 'http://collectionspace.org/services/jaxb',
    pageNum: '0',
    pageSize: '20',
    itemsInPage: '1',
    totalItems: '1',
    fieldsReturned: 'csid|uri|refName|updatedAt|workflowState|objectNumber|objectName|title|responsibleDepartment',
    'list-item': [{
      csid: 'fecfcba9-d226-4389-8b4e',
      uri: '/collectionobjects/fecfcba9-d226-4389-8b4e',
      updatedAt: '2025-07-25T22:28:06.548Z',
      workflowState: 'project',
      refName: "urn:cspace:core.collectionspace.org:collectionobjects:id(fecfcba9-d226-4389-8b4e)'2025.1.2'",
      objectNumber: '2025.1.2',
      objectName: 'Test Obj',
      title: 'Test',
      responsibleDepartment: 'antiquities',
    }],
  },
};

describe.only('SearchResultTable', () => {
  const worker = setupWorker();
  // how to create a good config for testing?
  // ideally this will use the default cspace configuration
  // however it's kind of slow so trying to figure out how to just kind of... get everything at once
  // or just use whatever we need (e.g. collectionobject)

  const resolvedUiConfig = evaluatePlugin({}, createConfigContext());
  const config = finalizeRecordTypes(mergeConfig(defaultConfig, resolvedUiConfig, configContext));

  before(async () => {
    await worker.start({ quiet: true });
  });

  after(() => {
    worker.stop();
  });

  beforeEach(function before() {
    this.container = createTestContainer(this);
  });

  function objectSearchDescriptor() {
    const query = {
      p: 0,
      size: 10,
    };
    return Immutable.fromJS({
      recordType: 'collectionobject',
      searchQuery: query,
    });
  }

  it('should not render when no search result exists', function test() {
    const store = createStore();
    const searchDescriptor = objectSearchDescriptor();

    render(
      <SearchResultTable searchDescriptor={searchDescriptor} />,
      config,
      store,
      this.container,
    );

    const searchTableDiv = this.container.querySelector('.cspace-ui-SearchTable--results');
    expect(searchTableDiv).to.equal(null);
  });

  it.skip('should render a table with a search result', async function test() {
    worker.use(
      rest.get('/cspace-services/collectionobjects', (req, res, ctx) => res(ctx.json(response))),
    );

    const store = createStore();
    const searchDescriptor = objectSearchDescriptor();
    await store.dispatch(search(config, SEARCH_RESULT_PAGE_SEARCH_NAME, searchDescriptor));

    render(
      <SearchResultTable searchDescriptor={searchDescriptor} />,
      config,
      store,
      this.container,
    );

    const searchTableDiv = this.container.querySelector('.cspace-ui-SearchTable--results');
    searchTableDiv.should.not.equal(null);

    const searchTable = searchTableDiv.querySelector('table');
    searchTable.should.not.equal(null);

    const searchTableHeader = searchTable.querySelector('thead');
    searchTableHeader.should.not.equal(null);

    const searchTableBody = searchTable.querySelector('thead');
    searchTableBody.should.not.equal(null);
  });
});
