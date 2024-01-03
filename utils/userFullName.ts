import type { User } from '../types/User';

export default (u: User) => {
  return `${u.first_name}${ !!u.last_name ? ' ' + u.last_name : ''}`;
}
