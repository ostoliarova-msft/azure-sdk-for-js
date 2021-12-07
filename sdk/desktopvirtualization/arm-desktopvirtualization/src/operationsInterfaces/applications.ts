/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  Application,
  ApplicationsListOptionalParams,
  ApplicationsGetOptionalParams,
  ApplicationsGetResponse,
  ApplicationsCreateOrUpdateOptionalParams,
  ApplicationsCreateOrUpdateResponse,
  ApplicationsDeleteOptionalParams,
  ApplicationsUpdateOptionalParams,
  ApplicationsUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Applications. */
export interface Applications {
  /**
   * List applications.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applicationGroupName The name of the application group
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    applicationGroupName: string,
    options?: ApplicationsListOptionalParams
  ): PagedAsyncIterableIterator<Application>;
  /**
   * Get an application.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applicationGroupName The name of the application group
   * @param applicationName The name of the application within the specified application group
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    applicationGroupName: string,
    applicationName: string,
    options?: ApplicationsGetOptionalParams
  ): Promise<ApplicationsGetResponse>;
  /**
   * Create or update an application.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applicationGroupName The name of the application group
   * @param applicationName The name of the application within the specified application group
   * @param application Object containing Application definitions.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    applicationGroupName: string,
    applicationName: string,
    application: Application,
    options?: ApplicationsCreateOrUpdateOptionalParams
  ): Promise<ApplicationsCreateOrUpdateResponse>;
  /**
   * Remove an application.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applicationGroupName The name of the application group
   * @param applicationName The name of the application within the specified application group
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    applicationGroupName: string,
    applicationName: string,
    options?: ApplicationsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Update an application.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applicationGroupName The name of the application group
   * @param applicationName The name of the application within the specified application group
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    applicationGroupName: string,
    applicationName: string,
    options?: ApplicationsUpdateOptionalParams
  ): Promise<ApplicationsUpdateResponse>;
}