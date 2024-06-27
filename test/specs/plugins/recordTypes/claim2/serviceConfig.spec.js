import serviceConfig from '../../../../../src/plugins/recordTypes/claim2/serviceConfig';

chai.should();

describe('claim2 record serviceConfig', () => {
  it('should have a servicePath property', () => {
    serviceConfig.should.have.property('servicePath').that.is.a('string');
    serviceConfig.should.have.property('serviceName').that.is.a('string');
    serviceConfig.should.have.property('serviceType').that.is.a('string');
    serviceConfig.should.have.property('objectName').that.is.a('string');
    serviceConfig.should.have.property('documentName').that.is.a('string');
  });
});
