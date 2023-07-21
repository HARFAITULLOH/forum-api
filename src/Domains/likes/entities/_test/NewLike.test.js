/* global describe, it, expect */
const NewLike = require('../NewLike');

describe('NewLike Entities', () => {
  it('should create NewLike correctly', () => {
    // Arrange
    const payload = {
      id_comment: 'comment-1234',
      owner: 'user-1234',
    };

    // Action
    const newLike = new NewLike(payload);

    // Assert
    expect(newLike).toBeInstanceOf(NewLike);
    expect(newLike.id_comment).toEqual(payload.id_comment);
    expect(newLike.owner).toEqual(payload.owner);
  });

  it('should throw error when type of field not suitable', () => {
    // Arrange
    const payload = {
      id_comment: 123,
      owner: 'user-1234',
    };

    // Action & Assert
    expect(() => new NewLike(payload)).toThrowError('NEW_LIKE.NOT_CONTAIN_MATCH_TYPE_FIELD');
  });

  it('should throw error when not contain needed property', () => {
    // Arrange
    const payload = {
      owner: 'user-1234',
    };

    // Action & Assert
    expect(() => new NewLike(payload)).toThrowError('NEW_LIKE.NOT_CONTAIN_NEEDED_PROPERTY');
  });
});
