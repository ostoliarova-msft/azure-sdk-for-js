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
import * as Mappers from "../models/deploymentsMappers";
import * as Parameters from "../models/parameters";
import { CognitiveServicesManagementClientContext } from "../cognitiveServicesManagementClientContext";

/** Class representing a Deployments. */
export class Deployments {
  private readonly client: CognitiveServicesManagementClientContext;

  /**
   * Create a Deployments.
   * @param {CognitiveServicesManagementClientContext} client Reference to the service client.
   */
  constructor(client: CognitiveServicesManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets the deployments associated with the Cognitive Services account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of Cognitive Services account.
   * @param [options] The optional parameters
   * @returns Promise<Models.DeploymentsListResponse>
   */
  list(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase): Promise<Models.DeploymentsListResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of Cognitive Services account.
   * @param callback The callback
   */
  list(resourceGroupName: string, accountName: string, callback: msRest.ServiceCallback<Models.DeploymentListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of Cognitive Services account.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, accountName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DeploymentListResult>): void;
  list(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DeploymentListResult>, callback?: msRest.ServiceCallback<Models.DeploymentListResult>): Promise<Models.DeploymentsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.DeploymentsListResponse>;
  }

  /**
   * Gets the specified deployments associated with the Cognitive Services account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of Cognitive Services account.
   * @param deploymentName The name of the deployment associated with the Cognitive Services Account
   * @param [options] The optional parameters
   * @returns Promise<Models.DeploymentsGetResponse>
   */
  get(resourceGroupName: string, accountName: string, deploymentName: string, options?: msRest.RequestOptionsBase): Promise<Models.DeploymentsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of Cognitive Services account.
   * @param deploymentName The name of the deployment associated with the Cognitive Services Account
   * @param callback The callback
   */
  get(resourceGroupName: string, accountName: string, deploymentName: string, callback: msRest.ServiceCallback<Models.Deployment>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of Cognitive Services account.
   * @param deploymentName The name of the deployment associated with the Cognitive Services Account
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, accountName: string, deploymentName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Deployment>): void;
  get(resourceGroupName: string, accountName: string, deploymentName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Deployment>, callback?: msRest.ServiceCallback<Models.Deployment>): Promise<Models.DeploymentsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        deploymentName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.DeploymentsGetResponse>;
  }

  /**
   * Update the state of specified deployments associated with the Cognitive Services account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of Cognitive Services account.
   * @param deploymentName The name of the deployment associated with the Cognitive Services Account
   * @param deployment The deployment properties.
   * @param [options] The optional parameters
   * @returns Promise<Models.DeploymentsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, accountName: string, deploymentName: string, deployment: Models.Deployment, options?: msRest.RequestOptionsBase): Promise<Models.DeploymentsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,accountName,deploymentName,deployment,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.DeploymentsCreateOrUpdateResponse>;
  }

  /**
   * Deletes the specified deployment associated with the Cognitive Services account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of Cognitive Services account.
   * @param deploymentName The name of the deployment associated with the Cognitive Services Account
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, accountName: string, deploymentName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,accountName,deploymentName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Update the state of specified deployments associated with the Cognitive Services account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of Cognitive Services account.
   * @param deploymentName The name of the deployment associated with the Cognitive Services Account
   * @param deployment The deployment properties.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, accountName: string, deploymentName: string, deployment: Models.Deployment, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        accountName,
        deploymentName,
        deployment,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Deletes the specified deployment associated with the Cognitive Services account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of Cognitive Services account.
   * @param deploymentName The name of the deployment associated with the Cognitive Services Account
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, accountName: string, deploymentName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        accountName,
        deploymentName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Gets the deployments associated with the Cognitive Services account.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.DeploymentsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.DeploymentsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.DeploymentListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DeploymentListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DeploymentListResult>, callback?: msRest.ServiceCallback<Models.DeploymentListResult>): Promise<Models.DeploymentsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.DeploymentsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/deployments",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/deployments/{deploymentName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.subscriptionId,
    Parameters.deploymentName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Deployment
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/deployments/{deploymentName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.subscriptionId,
    Parameters.deploymentName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "deployment",
    mapper: {
      ...Mappers.Deployment,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Deployment
    },
    201: {
      bodyMapper: Mappers.Deployment
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/deployments/{deploymentName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.subscriptionId,
    Parameters.deploymentName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
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
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};