/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { Actions } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SecurityInsights } from "../securityInsights";
import {
  ActionResponse,
  ActionsListByAlertRuleNextOptionalParams,
  ActionsListByAlertRuleOptionalParams,
  ActionsListByAlertRuleResponse,
  ActionsGetOptionalParams,
  ActionsGetResponse,
  ActionRequest,
  ActionsCreateOrUpdateOptionalParams,
  ActionsCreateOrUpdateResponse,
  ActionsDeleteOptionalParams,
  ActionsListByAlertRuleNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Actions operations. */
export class ActionsImpl implements Actions {
  private readonly client: SecurityInsights;

  /**
   * Initialize a new instance of the class Actions class.
   * @param client Reference to the service client
   */
  constructor(client: SecurityInsights) {
    this.client = client;
  }

  /**
   * Gets all actions of alert rule.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param ruleId Alert rule ID
   * @param options The options parameters.
   */
  public listByAlertRule(
    resourceGroupName: string,
    workspaceName: string,
    ruleId: string,
    options?: ActionsListByAlertRuleOptionalParams
  ): PagedAsyncIterableIterator<ActionResponse> {
    const iter = this.listByAlertRulePagingAll(
      resourceGroupName,
      workspaceName,
      ruleId,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listByAlertRulePagingPage(
          resourceGroupName,
          workspaceName,
          ruleId,
          options,
          settings
        );
      }
    };
  }

  private async *listByAlertRulePagingPage(
    resourceGroupName: string,
    workspaceName: string,
    ruleId: string,
    options?: ActionsListByAlertRuleOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ActionResponse[]> {
    let result: ActionsListByAlertRuleResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByAlertRule(
        resourceGroupName,
        workspaceName,
        ruleId,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByAlertRuleNext(
        resourceGroupName,
        workspaceName,
        ruleId,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByAlertRulePagingAll(
    resourceGroupName: string,
    workspaceName: string,
    ruleId: string,
    options?: ActionsListByAlertRuleOptionalParams
  ): AsyncIterableIterator<ActionResponse> {
    for await (const page of this.listByAlertRulePagingPage(
      resourceGroupName,
      workspaceName,
      ruleId,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets all actions of alert rule.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param ruleId Alert rule ID
   * @param options The options parameters.
   */
  private _listByAlertRule(
    resourceGroupName: string,
    workspaceName: string,
    ruleId: string,
    options?: ActionsListByAlertRuleOptionalParams
  ): Promise<ActionsListByAlertRuleResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, ruleId, options },
      listByAlertRuleOperationSpec
    );
  }

  /**
   * Gets the action of alert rule.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param ruleId Alert rule ID
   * @param actionId Action ID
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    ruleId: string,
    actionId: string,
    options?: ActionsGetOptionalParams
  ): Promise<ActionsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, ruleId, actionId, options },
      getOperationSpec
    );
  }

  /**
   * Creates or updates the action of alert rule.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param ruleId Alert rule ID
   * @param actionId Action ID
   * @param action The action
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    ruleId: string,
    actionId: string,
    action: ActionRequest,
    options?: ActionsCreateOrUpdateOptionalParams
  ): Promise<ActionsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, ruleId, actionId, action, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Delete the action of alert rule.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param ruleId Alert rule ID
   * @param actionId Action ID
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    workspaceName: string,
    ruleId: string,
    actionId: string,
    options?: ActionsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, ruleId, actionId, options },
      deleteOperationSpec
    );
  }

  /**
   * ListByAlertRuleNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param ruleId Alert rule ID
   * @param nextLink The nextLink from the previous successful call to the ListByAlertRule method.
   * @param options The options parameters.
   */
  private _listByAlertRuleNext(
    resourceGroupName: string,
    workspaceName: string,
    ruleId: string,
    nextLink: string,
    options?: ActionsListByAlertRuleNextOptionalParams
  ): Promise<ActionsListByAlertRuleNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, ruleId, nextLink, options },
      listByAlertRuleNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByAlertRuleOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/alertRules/{ruleId}/actions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ActionsList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.ruleId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/alertRules/{ruleId}/actions/{actionId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ActionResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.ruleId,
    Parameters.actionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/alertRules/{ruleId}/actions/{actionId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ActionResponse
    },
    201: {
      bodyMapper: Mappers.ActionResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.action,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.ruleId,
    Parameters.actionId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/alertRules/{ruleId}/actions/{actionId}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.ruleId,
    Parameters.actionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByAlertRuleNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ActionsList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.ruleId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
