import messages from '../../../../../src/plugins/recordTypes/collectionobject/messages';

chai.should();

describe('collectionobject record messages', () => {
  it('should contain properties with id and defaultMessage properties', () => {
    messages.should.be.an('object');

    Object.keys(messages).forEach((groupName) => {
      const groupMessages = messages[groupName];

      Object.keys(groupMessages).forEach((name) => {
        groupMessages[name].should.contain.all.keys(['id', 'defaultMessage']);
      });
    });
  });
});
