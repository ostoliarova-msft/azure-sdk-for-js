/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/workbookTemplatesMappers";
import * as Parameters from "../models/parameters";
import { ApplicationInsightsManagementClientContext } from "../applicationInsightsManagementClientContext";

/** Class representing a WorkbookTemplates. */
export class WorkbookTemplates {
  private readonly client: ApplicationInsightsManagementClientContext;

  /**
   * Create a WorkbookTemplates.
   * @param {ApplicationInsightsManagementClientContext} client Reference to the service client.
   */
  constructor(client: ApplicationInsightsManagementClientContext) {
    this.client = client;
  }

  /**
   * Get all Workbook templates defined within a specified resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param [options] The optional parameters
   * @returns Promise<Models.WorkbookTemplatesListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.WorkbookTemplatesListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.WorkbookTemplatesListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WorkbookTemplatesListResult>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.WorkbookTemplatesListResult>, callback?: msRest.ServiceCallback<Models.WorkbookTemplatesListResult>): Promise<Models.WorkbookTemplatesListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.WorkbookTemplatesListByResourceGroupResponse>;
  }

  /**
   * Get a single workbook template by its resourceName.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.WorkbookTemplatesGetResponse>
   */
  get(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase): Promise<Models.WorkbookTemplatesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param callback The callback
   */
  get(resourceGroupName: string, resourceName: string, callback: msRest.ServiceCallback<Models.WorkbookTemplate>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, resourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WorkbookTemplate>): void;
  get(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.WorkbookTemplate>, callback?: msRest.ServiceCallback<Models.WorkbookTemplate>): Promise<Models.WorkbookTemplatesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.WorkbookTemplatesGetResponse>;
  }

  /**
   * Delete a workbook template.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, resourceName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, resourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Create a new workbook template.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param workbookTemplateProperties Properties that need to be specified to create a new workbook.
   * @param [options] The optional parameters
   * @returns Promise<Models.WorkbookTemplatesCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, resourceName: string, workbookTemplateProperties: Models.WorkbookTemplate, options?: msRest.RequestOptionsBase): Promise<Models.WorkbookTemplatesCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param workbookTemplateProperties Properties that need to be specified to create a new workbook.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, resourceName: string, workbookTemplateProperties: Models.WorkbookTemplate, callback: msRest.ServiceCallback<Models.WorkbookTemplate>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param workbookTemplateProperties Properties that need to be specified to create a new workbook.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, resourceName: string, workbookTemplateProperties: Models.WorkbookTemplate, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WorkbookTemplate>): void;
  createOrUpdate(resourceGroupName: string, resourceName: string, workbookTemplateProperties: Models.WorkbookTemplate, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.WorkbookTemplate>, callback?: msRest.ServiceCallback<Models.WorkbookTemplate>): Promise<Models.WorkbookTemplatesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        workbookTemplateProperties,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.WorkbookTemplatesCreateOrUpdateResponse>;
  }

  /**
   * Updates a workbook template that has already been added.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.WorkbookTemplatesUpdateResponse>
   */
  update(resourceGroupName: string, resourceName: string, options?: Models.WorkbookTemplatesUpdateOptionalParams): Promise<Models.WorkbookTemplatesUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param callback The callback
   */
  update(resourceGroupName: string, resourceName: string, callback: msRest.ServiceCallback<Models.WorkbookTemplate>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, resourceName: string, options: Models.WorkbookTemplatesUpdateOptionalParams, callback: msRest.ServiceCallback<Models.WorkbookTemplate>): void;
  update(resourceGroupName: string, resourceName: string, options?: Models.WorkbookTemplatesUpdateOptionalParams | msRest.ServiceCallback<Models.WorkbookTemplate>, callback?: msRest.ServiceCallback<Models.WorkbookTemplate>): Promise<Models.WorkbookTemplatesUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.WorkbookTemplatesUpdateResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/workbooktemplates",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion2
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.WorkbookTemplatesListResult
    },
    default: {
      bodyMapper: Mappers.WorkbookTemplateError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/workbooktemplates/{resourceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
  ],
  queryParameters: [
    Parameters.apiVersion2
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.WorkbookTemplate
    },
    default: {
      bodyMapper: Mappers.WorkbookTemplateError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/workbooktemplates/{resourceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
  ],
  queryParameters: [
    Parameters.apiVersion2
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.WorkbookTemplateError
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/workbooktemplates/{resourceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
  ],
  queryParameters: [
    Parameters.apiVersion2
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "workbookTemplateProperties",
    mapper: {
      ...Mappers.WorkbookTemplate,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.WorkbookTemplate
    },
    201: {
      bodyMapper: Mappers.WorkbookTemplate
    },
    default: {
      bodyMapper: Mappers.WorkbookTemplateError
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/workbooktemplates/{resourceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
  ],
  queryParameters: [
    Parameters.apiVersion2
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: [
      "options",
      "workbookTemplateUpdateParameters"
    ],
    mapper: Mappers.WorkbookTemplateUpdateParameters
  },
  responses: {
    200: {
      bodyMapper: Mappers.WorkbookTemplate
    },
    default: {
      bodyMapper: Mappers.WorkbookTemplateError
    }
  },
  serializer
};