import claim2RecordTypePluginFactory from '../../../../../src/plugins/recordTypes/claim2';
import createColumns from '../../../../../src/plugins/recordTypes/claim2/columns';
import createConfigContext from '../../../../../src/helpers/createConfigContext';

chai.should();

describe('claim2 record columns', () => {
  const claim2RecordTypePlugin = claim2RecordTypePluginFactory({});
  const configContext = createConfigContext(claim2RecordTypePlugin);
  const columns = createColumns(configContext);

  it('should have the correct shape', () => {
    columns.should.have.property('default').that.is.an('object');
  });
});
