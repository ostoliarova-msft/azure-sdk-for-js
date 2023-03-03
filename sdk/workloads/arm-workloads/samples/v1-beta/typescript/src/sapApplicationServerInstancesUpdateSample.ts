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
  UpdateSAPApplicationInstanceRequest,
  SAPApplicationServerInstancesUpdateOptionalParams,
  WorkloadsClient
} from "@azure/arm-workloads";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Puts the SAP Application Server Instance resource.
 *
 * @summary Puts the SAP Application Server Instance resource.
 * x-ms-original-file: specification/workloads/resource-manager/Microsoft.Workloads/preview/2022-11-01-preview/examples/sapvirtualinstances/SAPApplicationServerInstances_Update.json
 */
async function sapApplicationServerInstancesUpdate() {
  const subscriptionId =
    process.env["WORKLOADS_SUBSCRIPTION_ID"] ||
    "6d875e77-e412-4d7d-9af4-8895278b4443";
  const resourceGroupName =
    process.env["WORKLOADS_RESOURCE_GROUP"] || "test-rg";
  const sapVirtualInstanceName = "X00";
  const applicationInstanceName = "app01";
  const body: UpdateSAPApplicationInstanceRequest = {
    tags: { tag1: "value1" }
  };
  const options: SAPApplicationServerInstancesUpdateOptionalParams = { body };
  const credential = new DefaultAzureCredential();
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.sAPApplicationServerInstances.beginUpdateAndWait(
    resourceGroupName,
    sapVirtualInstanceName,
    applicationInstanceName,
    options
  );
  console.log(result);
}

async function main() {
  sapApplicationServerInstancesUpdate();
}

main().catch(console.error);
