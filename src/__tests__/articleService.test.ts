const { articleService } = require('../services/articleService');

test('Create Article', () => {
  const article = {
    title: 'Test Article',
    content: 'Some content',
    author: 'Author',
    status: 'draft',
  };
  const result = articleService.create(article);
  expect(result).toHaveProperty('id');
});
