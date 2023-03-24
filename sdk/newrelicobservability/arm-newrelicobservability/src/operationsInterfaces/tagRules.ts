/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  TagRule,
  TagRulesListByNewRelicMonitorResourceOptionalParams,
  TagRulesGetOptionalParams,
  TagRulesGetResponse,
  TagRulesCreateOrUpdateOptionalParams,
  TagRulesCreateOrUpdateResponse,
  TagRulesDeleteOptionalParams,
  TagRuleUpdate,
  TagRulesUpdateOptionalParams,
  TagRulesUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a TagRules. */
export interface TagRules {
  /**
   * List TagRule resources by NewRelicMonitorResource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param monitorName Name of the Monitors resource
   * @param options The options parameters.
   */
  listByNewRelicMonitorResource(
    resourceGroupName: string,
    monitorName: string,
    options?: TagRulesListByNewRelicMonitorResourceOptionalParams
  ): PagedAsyncIterableIterator<TagRule>;
  /**
   * Get a TagRule
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param monitorName Name of the Monitors resource
   * @param ruleSetName Name of the TagRule
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    monitorName: string,
    ruleSetName: string,
    options?: TagRulesGetOptionalParams
  ): Promise<TagRulesGetResponse>;
  /**
   * Create a TagRule
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param monitorName Name of the Monitors resource
   * @param ruleSetName Name of the TagRule
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    monitorName: string,
    ruleSetName: string,
    resource: TagRule,
    options?: TagRulesCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<TagRulesCreateOrUpdateResponse>,
      TagRulesCreateOrUpdateResponse
    >
  >;
  /**
   * Create a TagRule
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param monitorName Name of the Monitors resource
   * @param ruleSetName Name of the TagRule
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    monitorName: string,
    ruleSetName: string,
    resource: TagRule,
    options?: TagRulesCreateOrUpdateOptionalParams
  ): Promise<TagRulesCreateOrUpdateResponse>;
  /**
   * Delete a TagRule
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param monitorName Name of the Monitors resource
   * @param ruleSetName Name of the TagRule
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    monitorName: string,
    ruleSetName: string,
    options?: TagRulesDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Delete a TagRule
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param monitorName Name of the Monitors resource
   * @param ruleSetName Name of the TagRule
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    monitorName: string,
    ruleSetName: string,
    options?: TagRulesDeleteOptionalParams
  ): Promise<void>;
  /**
   * Update a TagRule
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param monitorName Name of the Monitors resource
   * @param ruleSetName Name of the TagRule
   * @param properties The resource properties to be updated.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    monitorName: string,
    ruleSetName: string,
    properties: TagRuleUpdate,
    options?: TagRulesUpdateOptionalParams
  ): Promise<TagRulesUpdateResponse>;
}
