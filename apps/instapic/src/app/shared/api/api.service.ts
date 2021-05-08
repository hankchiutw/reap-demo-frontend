import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    return this.http.request<T>(method, path, { body });
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
