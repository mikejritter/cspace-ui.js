import claim2RecordTypePluginFactory from '../../../../../src/plugins/recordTypes/claim2';
import createConfigContext from '../../../../../src/helpers/createConfigContext';

chai.should();

describe('claim2 record plugin', () => {
  const config = {};
  const claim2RecordTypePlugin = claim2RecordTypePluginFactory(config);
  const configContext = createConfigContext(claim2RecordTypePlugin);

  it('should have the correct shape', () => {
    const pluginConfiguration = claim2RecordTypePlugin(configContext);

    const {
      recordTypes,
    } = pluginConfiguration;

    recordTypes.should.have.property('claim2');

    const claim2RecordType = recordTypes.claim2;

    claim2RecordType.should.have.property('title').that.is.a('function');
    claim2RecordType.should.have.property('forms').that.is.an('object');
    claim2RecordType.should.have.property('messages').that.is.an('object');
    claim2RecordType.should.have.property('serviceConfig').that.is.an('object');

    claim2RecordType.title().should.be.a('string');
  });
});
