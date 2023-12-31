/* global describe, it, expect */
const ThreadRepository = require('../ThreadRepository');

describe('ThreadRepository Interface', () => {
  it('should throw error when implement abstract behavior', async () => {
    // Arrange
    const threadRepository = new ThreadRepository();

    // Action & Assert
    await expect(threadRepository.addThread({})).rejects.toThrowError('THREAD_REPOSITORY.METHOD_NOT_IMPLEMENTED');
    await expect(threadRepository.verifyThreadId('')).rejects.toThrowError('THREAD_REPOSITORY.METHOD_NOT_IMPLEMENTED');
    await expect(threadRepository.getThreadById('')).rejects.toThrowError('THREAD_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  });
});
