import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Course } from '@models/course';
import { apiUrlNames } from '@constants/api.names';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private static url = apiUrlNames.COURSES;
  private static paginationStep = 5;
  private static httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private requestOptions = {
    start: 0,
    count: 5
  };
  private loadedCoursesCount: number | void = 0;

  isMaxCountCourses = false;

  constructor(private http: HttpClient) {}

  getAll({ search = '', loadedCoursesCount = 0 } = {}): Observable<Course[]> {
    return this.http
      .get<Course[]>(CoursesService.url, {
        params: {
          start: this.requestOptions.start.toString(),
          count: this.requestOptions.count.toString(),
          sort: 'date',
          textFragment: search
        }
      })
      .pipe(
        tap(() => {
          if (loadedCoursesCount) {
            this.loadedCoursesCount = loadedCoursesCount;

            if (
              this.loadedCoursesCount <
              this.requestOptions.count - CoursesService.paginationStep
            ) {
              this.isMaxCountCourses = true;
            }

            this.requestOptions.count += CoursesService.paginationStep;
          }
        })
      );
  }

  getBy(id: number): Observable<Course> {
    return this.http.get<Course>(`${CoursesService.url}/${id}`);
  }

  create(course: Course): Observable<Course> {
    return this.http.post<Course>(
      CoursesService.url,
      JSON.stringify(course),
      CoursesService.httpOptions
    );
  }

  update(course: Course): Observable<Course> {
    return this.http.patch<Course>(
      `${CoursesService.url}/${course.id}`,
      JSON.stringify(course),
      CoursesService.httpOptions
    );
  }

  remove(id: number): Observable<void> {
    return this.http.delete<void>(`${CoursesService.url}/${id}`);
  }
}
