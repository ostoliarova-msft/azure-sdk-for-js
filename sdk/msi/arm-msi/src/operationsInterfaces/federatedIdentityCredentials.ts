/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  FederatedIdentityCredential,
  FederatedIdentityCredentialsListOptionalParams,
  FederatedIdentityCredentialsCreateOrUpdateOptionalParams,
  FederatedIdentityCredentialsCreateOrUpdateResponse,
  FederatedIdentityCredentialsGetOptionalParams,
  FederatedIdentityCredentialsGetResponse,
  FederatedIdentityCredentialsDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a FederatedIdentityCredentials. */
export interface FederatedIdentityCredentials {
  /**
   * Lists all the federated identity credentials under the specified user assigned identity.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the identity resource.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    resourceName: string,
    options?: FederatedIdentityCredentialsListOptionalParams
  ): PagedAsyncIterableIterator<FederatedIdentityCredential>;
  /**
   * Create or update a federated identity credential under the specified user assigned identity.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the identity resource.
   * @param federatedIdentityCredentialResourceName The name of the federated identity credential
   *                                                resource.
   * @param parameters Parameters to create or update the federated identity credential.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    resourceName: string,
    federatedIdentityCredentialResourceName: string,
    parameters: FederatedIdentityCredential,
    options?: FederatedIdentityCredentialsCreateOrUpdateOptionalParams
  ): Promise<FederatedIdentityCredentialsCreateOrUpdateResponse>;
  /**
   * Gets the federated identity credential.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the identity resource.
   * @param federatedIdentityCredentialResourceName The name of the federated identity credential
   *                                                resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    resourceName: string,
    federatedIdentityCredentialResourceName: string,
    options?: FederatedIdentityCredentialsGetOptionalParams
  ): Promise<FederatedIdentityCredentialsGetResponse>;
  /**
   * Deletes the federated identity credential.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the identity resource.
   * @param federatedIdentityCredentialResourceName The name of the federated identity credential
   *                                                resource.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    resourceName: string,
    federatedIdentityCredentialResourceName: string,
    options?: FederatedIdentityCredentialsDeleteOptionalParams
  ): Promise<void>;
}
