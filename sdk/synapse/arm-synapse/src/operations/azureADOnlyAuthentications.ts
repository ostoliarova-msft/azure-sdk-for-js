/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/azureADOnlyAuthenticationsMappers";
import * as Parameters from "../models/parameters";
import { SynapseManagementClientContext } from "../synapseManagementClientContext";

/** Class representing a AzureADOnlyAuthentications. */
export class AzureADOnlyAuthentications {
  private readonly client: SynapseManagementClientContext;

  /**
   * Create a AzureADOnlyAuthentications.
   * @param {SynapseManagementClientContext} client Reference to the service client.
   */
  constructor(client: SynapseManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a Azure Active Directory only authentication property
   * @summary Get Azure Active Directory only authentication property
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param [options] The optional parameters
   * @returns Promise<Models.AzureADOnlyAuthenticationsGetResponse>
   */
  get(resourceGroupName: string, workspaceName: string, options?: msRest.RequestOptionsBase): Promise<Models.AzureADOnlyAuthenticationsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param callback The callback
   */
  get(resourceGroupName: string, workspaceName: string, callback: msRest.ServiceCallback<Models.AzureADOnlyAuthentication>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, workspaceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AzureADOnlyAuthentication>): void;
  get(resourceGroupName: string, workspaceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AzureADOnlyAuthentication>, callback?: msRest.ServiceCallback<Models.AzureADOnlyAuthentication>): Promise<Models.AzureADOnlyAuthenticationsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.AzureADOnlyAuthenticationsGetResponse>;
  }

  /**
   * Create or Update a Azure Active Directory only authentication property for the workspaces
   * @summary Create or Update Azure Active Directory only authentication property
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param azureADOnlyAuthenticationInfo Azure Active Directory Property
   * @param [options] The optional parameters
   * @returns Promise<Models.AzureADOnlyAuthenticationsCreateResponse>
   */
  create(resourceGroupName: string, workspaceName: string, azureADOnlyAuthenticationInfo: Models.AzureADOnlyAuthentication, options?: msRest.RequestOptionsBase): Promise<Models.AzureADOnlyAuthenticationsCreateResponse> {
    return this.beginCreate(resourceGroupName,workspaceName,azureADOnlyAuthenticationInfo,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.AzureADOnlyAuthenticationsCreateResponse>;
  }

  /**
   * Gets a list of Azure Active Directory only authentication property for a workspace
   * @summary Gets a list of Azure Active Directory only authentication property
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param [options] The optional parameters
   * @returns Promise<Models.AzureADOnlyAuthenticationsListResponse>
   */
  list(resourceGroupName: string, workspaceName: string, options?: msRest.RequestOptionsBase): Promise<Models.AzureADOnlyAuthenticationsListResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param callback The callback
   */
  list(resourceGroupName: string, workspaceName: string, callback: msRest.ServiceCallback<Models.AzureADOnlyAuthenticationListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, workspaceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AzureADOnlyAuthenticationListResult>): void;
  list(resourceGroupName: string, workspaceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AzureADOnlyAuthenticationListResult>, callback?: msRest.ServiceCallback<Models.AzureADOnlyAuthenticationListResult>): Promise<Models.AzureADOnlyAuthenticationsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.AzureADOnlyAuthenticationsListResponse>;
  }

  /**
   * Create or Update a Azure Active Directory only authentication property for the workspaces
   * @summary Create or Update Azure Active Directory only authentication property
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param azureADOnlyAuthenticationInfo Azure Active Directory Property
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreate(resourceGroupName: string, workspaceName: string, azureADOnlyAuthenticationInfo: Models.AzureADOnlyAuthentication, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        workspaceName,
        azureADOnlyAuthenticationInfo,
        options
      },
      beginCreateOperationSpec,
      options);
  }

  /**
   * Gets a list of Azure Active Directory only authentication property for a workspace
   * @summary Gets a list of Azure Active Directory only authentication property
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.AzureADOnlyAuthenticationsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.AzureADOnlyAuthenticationsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.AzureADOnlyAuthenticationListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AzureADOnlyAuthenticationListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AzureADOnlyAuthenticationListResult>, callback?: msRest.ServiceCallback<Models.AzureADOnlyAuthenticationListResult>): Promise<Models.AzureADOnlyAuthenticationsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.AzureADOnlyAuthenticationsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/azureADOnlyAuthentications/{azureADOnlyAuthenticationName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.azureADOnlyAuthenticationName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AzureADOnlyAuthentication
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/azureADOnlyAuthentications",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AzureADOnlyAuthenticationListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginCreateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/azureADOnlyAuthentications/{azureADOnlyAuthenticationName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.azureADOnlyAuthenticationName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "azureADOnlyAuthenticationInfo",
    mapper: {
      ...Mappers.AzureADOnlyAuthentication,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.AzureADOnlyAuthentication
    },
    201: {
      bodyMapper: Mappers.AzureADOnlyAuthentication
    },
    202: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AzureADOnlyAuthenticationListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};