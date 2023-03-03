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
  SqlVirtualMachineGroupUpdate,
  SqlVirtualMachineManagementClient
} from "@azure/arm-sqlvirtualmachine";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Updates SQL virtual machine group tags.
 *
 * @summary Updates SQL virtual machine group tags.
 * x-ms-original-file: specification/sqlvirtualmachine/resource-manager/Microsoft.SqlVirtualMachine/preview/2022-07-01-preview/examples/UpdateSqlVirtualMachineGroup.json
 */
async function updatesASqlVirtualMachineGroupTags() {
  const subscriptionId =
    process.env["SQLVIRTUALMACHINE_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["SQLVIRTUALMACHINE_RESOURCE_GROUP"] || "testrg";
  const sqlVirtualMachineGroupName = "testvmgroup";
  const parameters: SqlVirtualMachineGroupUpdate = { tags: { mytag: "myval" } };
  const credential = new DefaultAzureCredential();
  const client = new SqlVirtualMachineManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.sqlVirtualMachineGroups.beginUpdateAndWait(
    resourceGroupName,
    sqlVirtualMachineGroupName,
    parameters
  );
  console.log(result);
}

async function main() {
  updatesASqlVirtualMachineGroupTags();
}

main().catch(console.error);
