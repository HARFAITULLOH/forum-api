exports.up = (pgm) => {
  pgm.addColumn('thread', {
    date: {
      type: 'TEXT',
      notNull: true,
    },
  });

  pgm.addColumn('comments', {
    date: {
      type: 'TEXT',
      notNull: true,
    },
  });
};

exports.down = (pgm) => {
  pgm.dropColumn('thread', 'date');
  pgm.dropColumn('comments', 'date');
};
