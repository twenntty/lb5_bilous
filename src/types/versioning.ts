import { BaseContent } from './base';

export type Versioned<T extends BaseContent> = T & {
  version: number;
  previousVersion?: T;
};