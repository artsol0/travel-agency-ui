/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { DataResponseOrderDto } from '../../models/data-response-order-dto';

export interface UpdateOrderStatus$Params {
  voucherId: string;
  userId: string;
  status: string;
}

export function updateOrderStatus(http: HttpClient, rootUrl: string, params: UpdateOrderStatus$Params, context?: HttpContext): Observable<StrictHttpResponse<DataResponseOrderDto>> {
  const rb = new RequestBuilder(rootUrl, updateOrderStatus.PATH, 'patch');
  if (params) {
    rb.path('voucherId', params.voucherId, {});
    rb.path('userId', params.userId, {});
    rb.query('status', params.status, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<DataResponseOrderDto>;
    })
  );
}

updateOrderStatus.PATH = '/api/v1/orders/update/{voucherId}/{userId}/status';
