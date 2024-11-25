import { Validator, ValidationResult } from '../types/validation';
import { Article } from '../types/article';

export const articleValidator: Validator<Omit<Article, 'id' | 'createdAt' | 'updatedAt'>> = {
  validate: (data) => {
    const errors: string[] = [];
    if (!data.title || data.title.trim() === '') errors.push('Title is required');
    if (!data.content || data.content.trim() === '') errors.push('Content is required');
    if (!['draft', 'published', 'archived'].includes(data.status)) {
      errors.push('Invalid status value');
    }
    return { isValid: errors.length === 0, errors };
  },
};
