import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ExportButton from './ExportButton';
import RelateButton from '../record/RelateButton';
import { getSearchSelectedItems } from '../../reducers';
import { SEARCH_RESULT_PAGE_SEARCH_NAME } from '../../constants/searchNames';

export default function ModalButtonContainer(props) {
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [isRelateOpen, setIsRelateOpen] = useState(false);
  const selectedCount = useSelector((state) => getSearchSelectedItems(
    state, SEARCH_RESULT_PAGE_SEARCH_NAME,
  ).length);

  function handleExportOnClick() {
    setIsRelateOpen(false);
    setIsExportOpen(!isExportOpen);
  }

  function handleRelateOnClick() {
    setIsExportOpen(false);
    setIsRelateOpen(!isRelateOpen);
  }
  // button bar (relate/export)
  const exportButton = (
    <ExportButton
      disabled={selectedCount < 1}
      key="export"
      // eslint-disable-next-line react/jsx-no-bind
      onClick={handleExportOnClick}
    />
  );

  const relateButton = (
    <RelateButton
      disabled={selectedCount < 1}
      key="relate"
      // label={<FormattedMessage {...messages.relate} />}
      name="relate"
      // eslint-disable-next-line react/jsx-no-bind
      onClick={handleRelateOnClick}
    />
  );

  /**
   * div
   *   ExportButton
   *   ExportModal
   * div
   *   RelateButton
   *   RelateModal
   */
  return (
    <div />
  );
}
