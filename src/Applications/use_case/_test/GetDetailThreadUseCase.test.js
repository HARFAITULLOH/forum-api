/* global describe, it, expect, jest */
const CommentRepository = require('../../../Domains/comments/CommentRepository');
const ThreadRepository = require('../../../Domains/threads/ThreadRepository');
const GetDetailThreadUseCase = require('../GetDetailThreadUseCase');

describe('GetDetailThreadUseCase', () => {
  it('should orchestrating the get detail thread action correctly', async () => {
    // Arrange
    const useCasePayload = {
      id: 'thread-123',
    };

    const comments = [
      {
        id: 'comment-_pby2_tmXV6bcvcdev8xk',
        username: 'johndoe',
        date: '2021-08-08T07:22:33.555Z',
        content: 'sebuah comment',
      },
      {
        id: 'comment-yksuCoxM2s4MMrZJO-qVD',
        username: 'dicoding',
        date: '2021-08-08T07:26:21.338Z',
        content: '**komentar telah dihapus**',
      },
    ];

    const thread = {
      id: 'thread-h_2FkLZhtgBKY2kh4CC02',
      title: 'sebuah thread',
      body: 'sebuah body thread',
      date: '2021-08-08T07:19:09.775Z',
      username: 'dicoding',
      comments,
    };

    const mockThreadRepository = new ThreadRepository();
    const mockCommentRepository = new CommentRepository();

    // Mocking
    mockThreadRepository.getThreadById = jest.fn()
      .mockImplementation(() => Promise.resolve({
        thread_id: 'thread-h_2FkLZhtgBKY2kh4CC02',
        title: 'sebuah thread',
        body: 'sebuah body thread',
        thread_date: '2021-08-08T07:19:09.775Z',
        username: 'dicoding',
      }));
    mockCommentRepository.getCommentsByIdThread = jest.fn()
      .mockImplementation(() => Promise.resolve(
        [
          {
            comment_id: 'comment-_pby2_tmXV6bcvcdev8xk',
            username: 'johndoe',
            comment_date: '2021-08-08T07:22:33.555Z',
            content: 'sebuah comment',
            is_delete: '',
          },
          {
            comment_id: 'comment-yksuCoxM2s4MMrZJO-qVD',
            username: 'dicoding',
            comment_date: '2021-08-08T07:26:21.338Z',
            content: '**komentar telah dihapus**',
            is_delete: 'deleted',
          },
        ],
      ));

    // create use case instance
    const getDetailThreadUseCase = new GetDetailThreadUseCase({
      threadRepository: mockThreadRepository,
      commentRepository: mockCommentRepository,
    });

    // Action
    const threadResult = await getDetailThreadUseCase.execute(useCasePayload);

    // Assert
    expect(threadResult).toStrictEqual(thread);

    expect(mockThreadRepository.getThreadById)
      .toBeCalledWith(useCasePayload.id);
    expect(mockCommentRepository.getCommentsByIdThread)
      .toBeCalledWith(useCasePayload.id);
  });
});
