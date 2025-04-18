/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { MessageResponse } from '../../models/message-response';

export interface CheckVoucherExpire$Params {
  token: string;
}

export function checkVoucherExpire(http: HttpClient, rootUrl: string, params: CheckVoucherExpire$Params, context?: HttpContext): Observable<StrictHttpResponse<MessageResponse>> {
  const rb = new RequestBuilder(rootUrl, checkVoucherExpire.PATH, 'get');
  if (params) {
    rb.query('token', params.token, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<MessageResponse>;
    })
  );
}

checkVoucherExpire.PATH = '/api/v1/vouchers/check';
