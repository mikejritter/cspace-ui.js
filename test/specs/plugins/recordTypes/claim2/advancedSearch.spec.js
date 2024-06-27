import createConfigContext from '../../../../../src/helpers/createConfigContext';
import advancedSearch from '../../../../../src/plugins/recordTypes/claim2/advancedSearch';

chai.should();

describe('claim2 record advanced search', () => {
  const configContext = createConfigContext();

  it('should contain a top level property `op`', () => {
    advancedSearch(configContext).should.have.property('op');
  });

  it('should contain a top level property `value` that is an array', () => {
    advancedSearch(configContext).should.have.property('value').that.is.an('array');
  });
});
