/* eslint-disable camelcase */
class NewLike {
  constructor(payload) {
    const { id_comment, owner } = this._verifyPayload(payload);

    this.id_comment = id_comment;
    this.owner = owner;
  }

  _verifyPayload(payload) {
    const { id_comment, owner } = payload;

    if (!id_comment || !owner) {
      throw new Error('NEW_LIKE.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (typeof id_comment !== 'string' || typeof owner !== 'string') {
      throw new Error('NEW_LIKE.NOT_CONTAIN_MATCH_TYPE_FIELD');
    }

    return payload;
  }
}

module.exports = NewLike;
