import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import qs from 'qs';
import Pager from './Pager';
import { useConfig } from '../config/ConfigProvider';
import { getListType } from '../../helpers/searchHelpers';
import { SEARCH_RESULT_PAGE_SEARCH_NAME } from '../../constants/searchNames';
import { getSearchResult } from '../../reducers';
import { setSearchResultPagePageSize } from '../../actions/prefs';

const propTypes = {
  searchDescriptor: PropTypes.object,
};

/**
 * A wrapper around a Pager to query for search results and populate the pagination info
 * @returns A <Pager /> wrapped in a <footer />
 */
export default function SearchResultFooter({ searchDescriptor }) {
  const results = useSelector((state) => getSearchResult(state,
    SEARCH_RESULT_PAGE_SEARCH_NAME,
    searchDescriptor));
  const config = useConfig();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  if (!results) {
    return (
      <footer />
    );
  }

  function onPageChange(page) {
    const {
      search,
    } = location;

    const query = qs.parse(search.substring(1));

    query.p = (page + 1).toString();

    const queryString = qs.stringify(query);

    history.push({
      pathname: location.pathname,
      search: `?${queryString}`,
      state: location.state,
    });
  }

  function onPageSizeChange(pageSize) {
    const {
      search,
    } = location;

    dispatch(() => setSearchResultPagePageSize(pageSize));

    const query = qs.parse(search.substring(1));

    query.p = '1';
    query.size = pageSize.toString();

    const queryString = qs.stringify(query);

    history.push({
      pathname: location.pathname,
      search: `?${queryString}`,
      state: location.state,
    });
  }

  const listType = getListType(searchDescriptor);
  const listTypeConfig = config.listTypes[listType];
  const { listNodeName } = listTypeConfig;

  const list = results.get(listNodeName);

  // useful to have a helper function for this?
  const totalItems = parseInt(list.get('totalItems'), 10);
  const pageNum = parseInt(list.get('pageNum'), 10);
  const pageSize = parseInt(list.get('pageSize'), 10);

  const lastPage = Math.max(
    0,
    Number.isNaN(totalItems) ? 0 : Math.ceil(totalItems / pageSize) - 1,
  );

  return (
    <footer>
      <Pager
        currentPage={pageNum}
        lastPage={lastPage}
        pageSize={pageSize}
        // eslint-disable-next-line react/jsx-no-bind
        onPageChange={onPageChange}
        // eslint-disable-next-line react/jsx-no-bind
        onPageSizeChange={onPageSizeChange}
      />
    </footer>
  );
}

SearchResultFooter.propTypes = propTypes;
