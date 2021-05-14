import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '@env';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ResourcePath, ProcedurePath } from './request-path';
import { ApiResult } from './models';

interface Params {
  body?: unknown;
}

interface ApiOptions extends Params {
  method: 'post' | 'get' | 'delete' | 'put';
  path: ProcedurePath | ResourcePath;
}

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  public send<T>(options: ApiOptions): Observable<T> {
    const { method, path, body } = options;
    const url = `${env.apiUrl}/${path}`;
    const requestOptions = {
      body,
      withCredentials: true,
    };
    return this.http.request<ApiResult>(method, url, requestOptions).pipe(
      map(({ result, errorMessage }) => {
        if (errorMessage) {
          throw errorMessage;
        }
        return result;
      })
    );
  }

  public post<T>(path: ApiOptions['path'], params?: Params): Observable<T> {
    return this.send<T>({
      method: 'post',
      path,
      ...params,
    });
  }

  public get<T>(path: ApiOptions['path'], params?: Params): Observable<T> {
    return this.send<T>({
      method: 'get',
      path,
      ...params,
    });
  }
}
