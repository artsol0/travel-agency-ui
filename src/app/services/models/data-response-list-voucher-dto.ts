/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { VoucherDto } from '../models/voucher-dto';

/**
 * Generic data response
 */
export interface DataResponseListVoucherDto {

  /**
   * Response data
   */
  results?: Array<VoucherDto>;

  /**
   * Status code of the operation
   */
  statusCode?: string;

  /**
   * Detailed status message
   */
  statusMessage?: string;

  /**
   * Indicates if the operation succeeded
   */
  succeeded?: boolean;
}
