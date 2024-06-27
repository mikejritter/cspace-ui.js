import messages from '../../../../../src/plugins/recordTypes/claim2/messages';

chai.should();

describe('claim2 record messages', () => {
  it('should contain properties with an id and defaultMessage properties', () => {
    messages.should.be.an('object');

    Object.keys(messages).forEach((claim2Name) => {
      const claim2Messages = messages[claim2Name];

      Object.keys(claim2Messages).forEach((name) => {
        claim2Messages[name].should.contain.all.keys(['id', 'defaultMessage']);
      });
    });
  });
});
