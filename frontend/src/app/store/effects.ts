import { CourseEffects } from '@store/courses/course.effects';
import { AuthEffects } from '@store/auth/auth.effects';

export const rootEffects = [CourseEffects, AuthEffects];
