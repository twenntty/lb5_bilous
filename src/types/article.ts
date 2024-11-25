import { BaseContent } from './base';

export interface Article extends BaseContent {
  title: string;
  content: string;
  author: string;
}