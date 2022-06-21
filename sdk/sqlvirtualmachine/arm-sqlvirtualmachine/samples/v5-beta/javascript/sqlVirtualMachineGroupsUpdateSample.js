/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { SqlVirtualMachineManagementClient } = require("@azure/arm-sqlvirtualmachine");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Updates SQL virtual machine group tags.
 *
 * @summary Updates SQL virtual machine group tags.
 * x-ms-original-file: specification/sqlvirtualmachine/resource-manager/Microsoft.SqlVirtualMachine/preview/2021-11-01-preview/examples/UpdateSqlVirtualMachineGroup.json
 */
async function updatesASqlVirtualMachineGroupTags() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "testrg";
  const sqlVirtualMachineGroupName = "testvmgroup";
  const parameters = { tags: { mytag: "myval" } };
  const credential = new DefaultAzureCredential();
  const client = new SqlVirtualMachineManagementClient(credential, subscriptionId);
  const result = await client.sqlVirtualMachineGroups.beginUpdateAndWait(
    resourceGroupName,
    sqlVirtualMachineGroupName,
    parameters
  );
  console.log(result);
}

updatesASqlVirtualMachineGroupTags().catch(console.error);
