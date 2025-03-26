/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { DataResponseListVoucherDto } from '../../models/data-response-list-voucher-dto';

export interface GetAllVouchers$Params {
}

export function getAllVouchers(http: HttpClient, rootUrl: string, params?: GetAllVouchers$Params, context?: HttpContext): Observable<StrictHttpResponse<DataResponseListVoucherDto>> {
  const rb = new RequestBuilder(rootUrl, getAllVouchers.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<DataResponseListVoucherDto>;
    })
  );
}

getAllVouchers.PATH = '/api/v1/vouchers/all';
