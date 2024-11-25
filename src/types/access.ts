export type Role = 'admin' | 'editor' | 'viewer';

export type Permission = {
  create: boolean;
  read: boolean;
  update: boolean;
  delete: boolean;
};

export type AccessControl<T> = {
  role: Role;
  permissions: Record<keyof T, Permission>;
};