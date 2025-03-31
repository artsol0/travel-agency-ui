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

import { activateUserAccount } from '../fn/user/activate-user-account';
import { ActivateUserAccount$Params } from '../fn/user/activate-user-account';
import { changeUserStatusByUsername } from '../fn/user/change-user-status-by-username';
import { ChangeUserStatusByUsername$Params } from '../fn/user/change-user-status-by-username';
import { DataResponsePageUserDto } from '../models/data-response-page-user-dto';
import { DataResponseUserDto } from '../models/data-response-user-dto';
import { getAllUsers } from '../fn/user/get-all-users';
import { GetAllUsers$Params } from '../fn/user/get-all-users';
import { getCurrentUser } from '../fn/user/get-current-user';
import { GetCurrentUser$Params } from '../fn/user/get-current-user';
import { getUserByUsername } from '../fn/user/get-user-by-username';
import { GetUserByUsername$Params } from '../fn/user/get-user-by-username';
import { MessageResponse } from '../models/message-response';
import { registerUser } from '../fn/user/register-user';
import { RegisterUser$Params } from '../fn/user/register-user';
import { updateUser } from '../fn/user/update-user';
import { UpdateUser$Params } from '../fn/user/update-user';


/**
 * HTTP methods
 */
@Injectable({ providedIn: 'root' })
export class UserService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `updateUser()` */
  static readonly UpdateUserPath = '/api/v1/users/update/{userId}';

  /**
   * Full user update.
   *
   * Updates an existing user by his id.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateUser()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateUser$Response(params: UpdateUser$Params, context?: HttpContext): Observable<StrictHttpResponse<DataResponseUserDto>> {
    return updateUser(this.http, this.rootUrl, params, context);
  }

  /**
   * Full user update.
   *
   * Updates an existing user by his id.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateUser$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateUser(params: UpdateUser$Params, context?: HttpContext): Observable<DataResponseUserDto> {
    return this.updateUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<DataResponseUserDto>): DataResponseUserDto => r.body)
    );
  }

  /** Path part for operation `registerUser()` */
  static readonly RegisterUserPath = '/api/v1/users/register';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `registerUser()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  registerUser$Response(params: RegisterUser$Params, context?: HttpContext): Observable<StrictHttpResponse<DataResponseUserDto>> {
    return registerUser(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `registerUser$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  registerUser(params: RegisterUser$Params, context?: HttpContext): Observable<DataResponseUserDto> {
    return this.registerUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<DataResponseUserDto>): DataResponseUserDto => r.body)
    );
  }

  /** Path part for operation `changeUserStatusByUsername()` */
  static readonly ChangeUserStatusByUsernamePath = '/api/v1/users/change/{userId}/status';

  /**
   * Ban user.
   *
   * Bans user by the provided DTO.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `changeUserStatusByUsername()` instead.
   *
   * This method doesn't expect any request body.
   */
  changeUserStatusByUsername$Response(params: ChangeUserStatusByUsername$Params, context?: HttpContext): Observable<StrictHttpResponse<DataResponseUserDto>> {
    return changeUserStatusByUsername(this.http, this.rootUrl, params, context);
  }

  /**
   * Ban user.
   *
   * Bans user by the provided DTO.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `changeUserStatusByUsername$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  changeUserStatusByUsername(params: ChangeUserStatusByUsername$Params, context?: HttpContext): Observable<DataResponseUserDto> {
    return this.changeUserStatusByUsername$Response(params, context).pipe(
      map((r: StrictHttpResponse<DataResponseUserDto>): DataResponseUserDto => r.body)
    );
  }

  /** Path part for operation `activateUserAccount()` */
  static readonly ActivateUserAccountPath = '/api/v1/users/activate';

  /**
   * Activate account.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `activateUserAccount()` instead.
   *
   * This method doesn't expect any request body.
   */
  activateUserAccount$Response(params: ActivateUserAccount$Params, context?: HttpContext): Observable<StrictHttpResponse<MessageResponse>> {
    return activateUserAccount(this.http, this.rootUrl, params, context);
  }

  /**
   * Activate account.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `activateUserAccount$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  activateUserAccount(params: ActivateUserAccount$Params, context?: HttpContext): Observable<MessageResponse> {
    return this.activateUserAccount$Response(params, context).pipe(
      map((r: StrictHttpResponse<MessageResponse>): MessageResponse => r.body)
    );
  }

  /** Path part for operation `getUserByUsername()` */
  static readonly GetUserByUsernamePath = '/api/v1/users/{username}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserByUsername()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserByUsername$Response(params: GetUserByUsername$Params, context?: HttpContext): Observable<StrictHttpResponse<DataResponseUserDto>> {
    return getUserByUsername(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUserByUsername$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserByUsername(params: GetUserByUsername$Params, context?: HttpContext): Observable<DataResponseUserDto> {
    return this.getUserByUsername$Response(params, context).pipe(
      map((r: StrictHttpResponse<DataResponseUserDto>): DataResponseUserDto => r.body)
    );
  }

  /** Path part for operation `getCurrentUser()` */
  static readonly GetCurrentUserPath = '/api/v1/users/current/profile';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCurrentUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCurrentUser$Response(params?: GetCurrentUser$Params, context?: HttpContext): Observable<StrictHttpResponse<DataResponseUserDto>> {
    return getCurrentUser(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCurrentUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCurrentUser(params?: GetCurrentUser$Params, context?: HttpContext): Observable<DataResponseUserDto> {
    return this.getCurrentUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<DataResponseUserDto>): DataResponseUserDto => r.body)
    );
  }

  /** Path part for operation `getAllUsers()` */
  static readonly GetAllUsersPath = '/api/v1/users/all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllUsers()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllUsers$Response(params?: GetAllUsers$Params, context?: HttpContext): Observable<StrictHttpResponse<DataResponsePageUserDto>> {
    return getAllUsers(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllUsers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllUsers(params?: GetAllUsers$Params, context?: HttpContext): Observable<DataResponsePageUserDto> {
    return this.getAllUsers$Response(params, context).pipe(
      map((r: StrictHttpResponse<DataResponsePageUserDto>): DataResponsePageUserDto => r.body)
    );
  }

}
