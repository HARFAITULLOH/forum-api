exports.up = (pgm) => {
  pgm.createTable('likes', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    id_comment: {
      type: 'VARCHAR(50)',
      notNull: true,
    },
    owner: {
      type: 'VARCHAR(50)',
      notNull: true,
    },
  });

  pgm.addConstraint('likes', 'fk_likes.id_comment_comments.id', 'FOREIGN KEY(id_comment) REFERENCES comments(id) ON DELETE CASCADE');

  pgm.addConstraint('likes', 'fk_likes.owner_users.id', 'FOREIGN KEY(owner) REFERENCES users(id) ON DELETE CASCADE');
};

exports.down = (pgm) => {
  pgm.dropTable('likes');

  pgm.dropConstraint('likes', 'fk_likes.id_comment_comments.id');

  pgm.dropConstraint('likes', 'fk_likes.owner_users.id');
};
