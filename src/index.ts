import { articleService } from './services/articleService';
import { articleValidator } from './services/validationService';

const newArticle = {
  title: 'My First Article',
  content: 'This is the content of the article.',
  author: 'John Doe',
  status: 'draft' as 'draft',
};

const validationResult = articleValidator.validate(newArticle);
if (!validationResult.isValid) {
  console.error('Validation Errors:', validationResult.errors);
} else {
  const createdArticle = articleService.create(newArticle);
  console.log('Article Created:', createdArticle);
}
