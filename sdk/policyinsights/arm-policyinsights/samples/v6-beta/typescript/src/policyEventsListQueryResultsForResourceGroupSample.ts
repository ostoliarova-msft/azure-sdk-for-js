/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  PolicyEventsListQueryResultsForResourceGroupOptionalParams,
  PolicyInsightsClient
} from "@azure/arm-policyinsights";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Queries policy events for the resources under the resource group.
 *
 * @summary Queries policy events for the resources under the resource group.
 * x-ms-original-file: specification/policyinsights/resource-manager/Microsoft.PolicyInsights/stable/2019-10-01/examples/PolicyEvents_QueryResourceGroupScope.json
 */
async function queryAtResourceGroupScope() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const policyEventsResource = "default";
  const resourceGroupName = "myResourceGroup";
  const credential = new DefaultAzureCredential();
  const client = new PolicyInsightsClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.policyEvents.listQueryResultsForResourceGroup(
    policyEventsResource,
    subscriptionId,
    resourceGroupName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

queryAtResourceGroupScope().catch(console.error);

/**
 * This sample demonstrates how to Queries policy events for the resources under the resource group.
 *
 * @summary Queries policy events for the resources under the resource group.
 * x-ms-original-file: specification/policyinsights/resource-manager/Microsoft.PolicyInsights/stable/2019-10-01/examples/PolicyEvents_QueryResourceGroupScopeNextLink.json
 */
async function queryAtResourceGroupScopeWithNextLink() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const policyEventsResource = "default";
  const resourceGroupName = "myResourceGroup";
  const skipToken = "WpmWfBSvPhkAK6QD";
  const options: PolicyEventsListQueryResultsForResourceGroupOptionalParams = {
    queryOptions: { skipToken: skipToken }
  };
  const credential = new DefaultAzureCredential();
  const client = new PolicyInsightsClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.policyEvents.listQueryResultsForResourceGroup(
    policyEventsResource,
    subscriptionId,
    resourceGroupName,
    options
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

queryAtResourceGroupScopeWithNextLink().catch(console.error);
