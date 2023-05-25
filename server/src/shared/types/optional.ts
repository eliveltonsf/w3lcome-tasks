/**
 * Make some property optional on a specific type
 *
 * @example
 * typescript
 * type Post {
 *  id: string;
 *  name: string;
 *  email: string;
 * }
 *
 * Optional<Post, 'id' | 'email'>
 *
 **/

export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
