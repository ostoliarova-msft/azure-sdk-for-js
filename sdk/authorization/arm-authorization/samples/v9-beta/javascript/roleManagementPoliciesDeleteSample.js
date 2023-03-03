/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { AuthorizationManagementClient } = require("@azure/arm-authorization");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Delete a role management policy
 *
 * @summary Delete a role management policy
 * x-ms-original-file: specification/authorization/resource-manager/Microsoft.Authorization/preview/2020-10-01-preview/examples/DeleteRoleManagementPolicy.json
 */
async function deleteRoleManagementPolicy() {
  const subscriptionId =
    process.env["AUTHORIZATION_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const scope =
    "providers/Microsoft.Subscription/subscriptions/129ff972-28f8-46b8-a726-e497be039368";
  const roleManagementPolicyName = "570c3619-7688-4b34-b290-2b8bb3ccab2a";
  const credential = new DefaultAzureCredential();
  const client = new AuthorizationManagementClient(credential, subscriptionId);
  const result = await client.roleManagementPolicies.delete(scope, roleManagementPolicyName);
  console.log(result);
}

async function main() {
  deleteRoleManagementPolicy();
}

main().catch(console.error);
