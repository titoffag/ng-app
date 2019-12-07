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
  private url = apiUrlNames.COURSES;
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private requestOptions = {
    start: 0,
    count: 5
  };
  private loadedCoursesCount: number | void;

  isMaxCountCourses = false;

  constructor(private http: HttpClient) {}

  getAll({ searchTerm = '', loadedCoursesCount = 0 } = {}): Observable<
    Course[]
  > {
    return this.http
      .get<Course[]>(this.url, {
        params: {
          start: this.requestOptions.start.toString(),
          count: this.requestOptions.count.toString(),
          sort: 'date',
          textFragment: searchTerm
        }
      })
      .pipe(
        tap(() => {
          if (loadedCoursesCount) {
            this.loadedCoursesCount = loadedCoursesCount;

            if (this.loadedCoursesCount < this.requestOptions.count - 5) {
              this.isMaxCountCourses = true;
            }

            this.requestOptions.count += 5;
          }
        })
      );
  }

  getBy(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.url}/${id}`);
  }

  create(course: Course): Observable<Course> {
    return this.http.post<Course>(
      this.url,
      JSON.stringify(course),
      this.httpOptions
    );
  }

  update(course: Course): Observable<Course> {
    return this.http.patch<Course>(
      `${this.url}/${course.id}`,
      JSON.stringify(course),
      this.httpOptions
    );
  }

  remove(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
