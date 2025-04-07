/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { changeVoucherActiveStatusByVoucherId } from '../fn/voucher/change-voucher-active-status-by-voucher-id';
import { ChangeVoucherActiveStatusByVoucherId$Params } from '../fn/voucher/change-voucher-active-status-by-voucher-id';
import { changeVoucherHotStatusByVoucherId } from '../fn/voucher/change-voucher-hot-status-by-voucher-id';
import { ChangeVoucherHotStatusByVoucherId$Params } from '../fn/voucher/change-voucher-hot-status-by-voucher-id';
import { checkVoucherExpire } from '../fn/voucher/check-voucher-expire';
import { CheckVoucherExpire$Params } from '../fn/voucher/check-voucher-expire';
import { createNewVoucher } from '../fn/voucher/create-new-voucher';
import { CreateNewVoucher$Params } from '../fn/voucher/create-new-voucher';
import { DataResponseListVoucherDto } from '../models/data-response-list-voucher-dto';
import { DataResponsePageVoucherDto } from '../models/data-response-page-voucher-dto';
import { DataResponseVoucherDto } from '../models/data-response-voucher-dto';
import { deleteVoucherById } from '../fn/voucher/delete-voucher-by-id';
import { DeleteVoucherById$Params } from '../fn/voucher/delete-voucher-by-id';
import { getAllSelectedVouchers } from '../fn/voucher/get-all-selected-vouchers';
import { GetAllSelectedVouchers$Params } from '../fn/voucher/get-all-selected-vouchers';
import { getAllVouchers } from '../fn/voucher/get-all-vouchers';
import { GetAllVouchers$Params } from '../fn/voucher/get-all-vouchers';
import { getAllVouchersPaged } from '../fn/voucher/get-all-vouchers-paged';
import { GetAllVouchersPaged$Params } from '../fn/voucher/get-all-vouchers-paged';
import { getVoucherById } from '../fn/voucher/get-voucher-by-id';
import { GetVoucherById$Params } from '../fn/voucher/get-voucher-by-id';
import { getVoucherSnapshotById } from '../fn/voucher/get-voucher-snapshot-by-id';
import { GetVoucherSnapshotById$Params } from '../fn/voucher/get-voucher-snapshot-by-id';
import { MessageResponse } from '../models/message-response';
import { updateVoucherByVoucherId } from '../fn/voucher/update-voucher-by-voucher-id';
import { UpdateVoucherByVoucherId$Params } from '../fn/voucher/update-voucher-by-voucher-id';


/**
 * HTTP methods
 */
@Injectable({ providedIn: 'root' })
export class VoucherService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `updateVoucherByVoucherId()` */
  static readonly UpdateVoucherByVoucherIdPath = '/api/v1/vouchers/update/{voucherId}';

  /**
   * Full voucher update.
   *
   * Updates an existing voucher by its id.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateVoucherByVoucherId()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateVoucherByVoucherId$Response(params: UpdateVoucherByVoucherId$Params, context?: HttpContext): Observable<StrictHttpResponse<DataResponseVoucherDto>> {
    return updateVoucherByVoucherId(this.http, this.rootUrl, params, context);
  }

  /**
   * Full voucher update.
   *
   * Updates an existing voucher by its id.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateVoucherByVoucherId$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateVoucherByVoucherId(params: UpdateVoucherByVoucherId$Params, context?: HttpContext): Observable<DataResponseVoucherDto> {
    return this.updateVoucherByVoucherId$Response(params, context).pipe(
      map((r: StrictHttpResponse<DataResponseVoucherDto>): DataResponseVoucherDto => r.body)
    );
  }

  /** Path part for operation `createNewVoucher()` */
  static readonly CreateNewVoucherPath = '/api/v1/vouchers/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createNewVoucher()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createNewVoucher$Response(params: CreateNewVoucher$Params, context?: HttpContext): Observable<StrictHttpResponse<DataResponseVoucherDto>> {
    return createNewVoucher(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createNewVoucher$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createNewVoucher(params: CreateNewVoucher$Params, context?: HttpContext): Observable<DataResponseVoucherDto> {
    return this.createNewVoucher$Response(params, context).pipe(
      map((r: StrictHttpResponse<DataResponseVoucherDto>): DataResponseVoucherDto => r.body)
    );
  }

  /** Path part for operation `changeVoucherHotStatusByVoucherId()` */
  static readonly ChangeVoucherHotStatusByVoucherIdPath = '/api/v1/vouchers/change/{voucherId}/hot';

  /**
   * Voucher hot status update.
   *
   * Updates the hot status of a voucher by its id.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `changeVoucherHotStatusByVoucherId()` instead.
   *
   * This method doesn't expect any request body.
   */
  changeVoucherHotStatusByVoucherId$Response(params: ChangeVoucherHotStatusByVoucherId$Params, context?: HttpContext): Observable<StrictHttpResponse<DataResponseVoucherDto>> {
    return changeVoucherHotStatusByVoucherId(this.http, this.rootUrl, params, context);
  }

  /**
   * Voucher hot status update.
   *
   * Updates the hot status of a voucher by its id.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `changeVoucherHotStatusByVoucherId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  changeVoucherHotStatusByVoucherId(params: ChangeVoucherHotStatusByVoucherId$Params, context?: HttpContext): Observable<DataResponseVoucherDto> {
    return this.changeVoucherHotStatusByVoucherId$Response(params, context).pipe(
      map((r: StrictHttpResponse<DataResponseVoucherDto>): DataResponseVoucherDto => r.body)
    );
  }

  /** Path part for operation `changeVoucherActiveStatusByVoucherId()` */
  static readonly ChangeVoucherActiveStatusByVoucherIdPath = '/api/v1/vouchers/change/{voucherId}/active';

  /**
   * Voucher active status update.
   *
   * Updates the active status of a voucher by its id.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `changeVoucherActiveStatusByVoucherId()` instead.
   *
   * This method doesn't expect any request body.
   */
  changeVoucherActiveStatusByVoucherId$Response(params: ChangeVoucherActiveStatusByVoucherId$Params, context?: HttpContext): Observable<StrictHttpResponse<DataResponseVoucherDto>> {
    return changeVoucherActiveStatusByVoucherId(this.http, this.rootUrl, params, context);
  }

  /**
   * Voucher active status update.
   *
   * Updates the active status of a voucher by its id.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `changeVoucherActiveStatusByVoucherId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  changeVoucherActiveStatusByVoucherId(params: ChangeVoucherActiveStatusByVoucherId$Params, context?: HttpContext): Observable<DataResponseVoucherDto> {
    return this.changeVoucherActiveStatusByVoucherId$Response(params, context).pipe(
      map((r: StrictHttpResponse<DataResponseVoucherDto>): DataResponseVoucherDto => r.body)
    );
  }

  /** Path part for operation `getVoucherSnapshotById()` */
  static readonly GetVoucherSnapshotByIdPath = '/api/v1/vouchers/snapshot/{snapshotId}';

  /**
   * Voucher specific snapshot return.
   *
   * Returns a specific voucher snapshot.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getVoucherSnapshotById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getVoucherSnapshotById$Response(params: GetVoucherSnapshotById$Params, context?: HttpContext): Observable<StrictHttpResponse<DataResponseVoucherDto>> {
    return getVoucherSnapshotById(this.http, this.rootUrl, params, context);
  }

  /**
   * Voucher specific snapshot return.
   *
   * Returns a specific voucher snapshot.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getVoucherSnapshotById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getVoucherSnapshotById(params: GetVoucherSnapshotById$Params, context?: HttpContext): Observable<DataResponseVoucherDto> {
    return this.getVoucherSnapshotById$Response(params, context).pipe(
      map((r: StrictHttpResponse<DataResponseVoucherDto>): DataResponseVoucherDto => r.body)
    );
  }

  /** Path part for operation `checkVoucherExpire()` */
  static readonly CheckVoucherExpirePath = '/api/v1/vouchers/check';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `checkVoucherExpire()` instead.
   *
   * This method doesn't expect any request body.
   */
  checkVoucherExpire$Response(params: CheckVoucherExpire$Params, context?: HttpContext): Observable<StrictHttpResponse<MessageResponse>> {
    return checkVoucherExpire(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `checkVoucherExpire$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  checkVoucherExpire(params: CheckVoucherExpire$Params, context?: HttpContext): Observable<MessageResponse> {
    return this.checkVoucherExpire$Response(params, context).pipe(
      map((r: StrictHttpResponse<MessageResponse>): MessageResponse => r.body)
    );
  }

  /** Path part for operation `getVoucherById()` */
  static readonly GetVoucherByIdPath = '/api/v1/vouchers/{voucherId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getVoucherById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getVoucherById$Response(params: GetVoucherById$Params, context?: HttpContext): Observable<StrictHttpResponse<DataResponseVoucherDto>> {
    return getVoucherById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getVoucherById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getVoucherById(params: GetVoucherById$Params, context?: HttpContext): Observable<DataResponseVoucherDto> {
    return this.getVoucherById$Response(params, context).pipe(
      map((r: StrictHttpResponse<DataResponseVoucherDto>): DataResponseVoucherDto => r.body)
    );
  }

  /** Path part for operation `getAllVouchersPaged()` */
  static readonly GetAllVouchersPagedPath = '/api/v1/vouchers';

  /**
   * Paged voucher list.
   *
   * Returns paged list of all vouchers. Request can include a 'keyword' parameter to try to find a voucher by name or description.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllVouchersPaged()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllVouchersPaged$Response(params?: GetAllVouchersPaged$Params, context?: HttpContext): Observable<StrictHttpResponse<DataResponsePageVoucherDto>> {
    return getAllVouchersPaged(this.http, this.rootUrl, params, context);
  }

  /**
   * Paged voucher list.
   *
   * Returns paged list of all vouchers. Request can include a 'keyword' parameter to try to find a voucher by name or description.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllVouchersPaged$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllVouchersPaged(params?: GetAllVouchersPaged$Params, context?: HttpContext): Observable<DataResponsePageVoucherDto> {
    return this.getAllVouchersPaged$Response(params, context).pipe(
      map((r: StrictHttpResponse<DataResponsePageVoucherDto>): DataResponsePageVoucherDto => r.body)
    );
  }

  /** Path part for operation `getAllSelectedVouchers()` */
  static readonly GetAllSelectedVouchersPath = '/api/v1/vouchers/selected/by';

  /**
   * Paged list of selected vouchers.
   *
   * Returns paged list of all selected vouchers.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllSelectedVouchers()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllSelectedVouchers$Response(params?: GetAllSelectedVouchers$Params, context?: HttpContext): Observable<StrictHttpResponse<DataResponsePageVoucherDto>> {
    return getAllSelectedVouchers(this.http, this.rootUrl, params, context);
  }

  /**
   * Paged list of selected vouchers.
   *
   * Returns paged list of all selected vouchers.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllSelectedVouchers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllSelectedVouchers(params?: GetAllSelectedVouchers$Params, context?: HttpContext): Observable<DataResponsePageVoucherDto> {
    return this.getAllSelectedVouchers$Response(params, context).pipe(
      map((r: StrictHttpResponse<DataResponsePageVoucherDto>): DataResponsePageVoucherDto => r.body)
    );
  }

  /** Path part for operation `getAllVouchers()` */
  static readonly GetAllVouchersPath = '/api/v1/vouchers/all';

  /**
   * Voucher list.
   *
   * Returns default list of all vouchers
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllVouchers()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllVouchers$Response(params?: GetAllVouchers$Params, context?: HttpContext): Observable<StrictHttpResponse<DataResponseListVoucherDto>> {
    return getAllVouchers(this.http, this.rootUrl, params, context);
  }

  /**
   * Voucher list.
   *
   * Returns default list of all vouchers
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllVouchers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllVouchers(params?: GetAllVouchers$Params, context?: HttpContext): Observable<DataResponseListVoucherDto> {
    return this.getAllVouchers$Response(params, context).pipe(
      map((r: StrictHttpResponse<DataResponseListVoucherDto>): DataResponseListVoucherDto => r.body)
    );
  }

  /** Path part for operation `deleteVoucherById()` */
  static readonly DeleteVoucherByIdPath = '/api/v1/vouchers/delete/{voucherId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteVoucherById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteVoucherById$Response(params: DeleteVoucherById$Params, context?: HttpContext): Observable<StrictHttpResponse<MessageResponse>> {
    return deleteVoucherById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteVoucherById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteVoucherById(params: DeleteVoucherById$Params, context?: HttpContext): Observable<MessageResponse> {
    return this.deleteVoucherById$Response(params, context).pipe(
      map((r: StrictHttpResponse<MessageResponse>): MessageResponse => r.body)
    );
  }

}
