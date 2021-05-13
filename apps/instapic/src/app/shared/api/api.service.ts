import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '@env';
import { Observable } from 'rxjs';
import { ResourcePath, ProcedurePath } from './request-path';

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
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    };
    return this.http.request<T>(method, url, requestOptions);
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
