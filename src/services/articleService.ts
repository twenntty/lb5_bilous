import { Article } from '../types/article';

export const articleService = {
  create: (data: Omit<Article, 'id' | 'createdAt' | 'updatedAt'>): Article => {
    const now = new Date();
    return {
      ...data,
      id: 'generated-id-' + Math.random().toString(36).substr(2, 9),
      createdAt: now,
      updatedAt: now,
    };
  },
  update: (id: string, updates: Partial<Article>): Article | null => {
    // Мок-реалізація оновлення статті
    return { id, ...updates, updatedAt: new Date() } as Article;
  },
  delete: (id: string): boolean => {
    return true; // Мок-реалізація видалення
  },
};
