/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { NetworkManagementClient } from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get the specified network security rule.
 *
 * @summary Get the specified network security rule.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-09-01/examples/NetworkSecurityGroupRuleGet.json
 */
async function getNetworkSecurityRuleInNetworkSecurityGroup() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const networkSecurityGroupName = "testnsg";
  const securityRuleName = "rule1";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.securityRules.get(
    resourceGroupName,
    networkSecurityGroupName,
    securityRuleName
  );
  console.log(result);
}

async function main() {
  getNetworkSecurityRuleInNetworkSecurityGroup();
}

main().catch(console.error);
