import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError } from 'rxjs/operators'
import { throwError } from 'rxjs';
import { AppError, BadRequestError, NotFoundError } from '../errors'

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(@Inject('url') private url: string, private http: HttpClient) {
    }

    getAll() {
        return this.http.get(this.url)
            .pipe(
                catchError(this.handleError)
            );
    }

    create(resource: any) {
        return this.http.post(this.url, resource)
            .pipe(
                catchError(this.handleError)
            );
    }

    update(resource: any, updates: any) {
        return this.http.patch(this.url + "/" + resource?.id, updates)
            .pipe(
                catchError(this.handleError)
            );
    }

    delete(id: number) {
        return this.http.delete(this.url + "/" + id)
            .pipe(
                catchError(this.handleError)
            );
    }

    private handleError(error: Response) {
        if (error.status === 400)
            return throwError(() => new BadRequestError(error))

        if (error.status === 404)
            return throwError(() => new NotFoundError())

        return throwError(() => new AppError(error))
    }
}
