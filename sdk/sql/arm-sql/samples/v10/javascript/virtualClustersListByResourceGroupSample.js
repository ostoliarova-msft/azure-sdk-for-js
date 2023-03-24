/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { SqlManagementClient } = require("@azure/arm-sql");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Gets a list of virtual clusters in a resource group.
 *
 * @summary Gets a list of virtual clusters in a resource group.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2022-05-01-preview/examples/VirtualClusterListByResourceGroup.json
 */
async function listVirtualClustersByResourceGroup() {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] || "20d7082a-0fc7-4468-82bd-542694d5042b";
  const resourceGroupName = process.env["SQL_RESOURCE_GROUP"] || "testrg";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.virtualClusters.listByResourceGroup(resourceGroupName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  listVirtualClustersByResourceGroup();
}

main().catch(console.error);
