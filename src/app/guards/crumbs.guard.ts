import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { CoursesService } from '@services/courses.service';

@Injectable({
  providedIn: 'root'
})
export class CrumbsGuard implements Resolve<string | null> {
  constructor(private coursesService: CoursesService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): string | null {
    const courseId: string | null = route.paramMap.get('id');

    return courseId ? this.coursesService.getBy(courseId).title : null;
  }
}
