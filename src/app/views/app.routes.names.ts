import { coursesRoutesNames } from './courses-views/courses.routes.names';
import { loginRoutesNames } from './login-view/login.routes.names';

export const appRoutesNames = {
  ...coursesRoutesNames,
  ...loginRoutesNames,
  COURSES: 'courses',
  LOGIN: 'login'
};
