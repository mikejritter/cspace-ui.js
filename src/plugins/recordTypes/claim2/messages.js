import { defineMessages } from 'react-intl';

export default {
  record: defineMessages({
    name: {
      id: 'record.claim2.name',
      description: 'The name of the record type',
      defaultMessage: 'NAGPRA Claim',
    },
    collectionName: {
      id: 'record.claim2.collectionName',
      description: 'The name of a collection of records of the type.',
      defaultMessage: 'NAGPRA Claims',
    },
  }),
  panel: defineMessages({
    info: {
      id: 'panel.claim2.info',
      defaultMessage: 'Claim Information',
    },
    context: {
      id: 'panel.claim2.context',
      defaultMessage: 'Claim Context',
    },
    status: {
      id: 'panel.claim2.status',
      defaultMessage: 'Claim Status',
    },
    documentation: {
      id: 'panel.claim2.documentation',
      defaultMessage: 'Claim Documentation',
    },
  }),
};
