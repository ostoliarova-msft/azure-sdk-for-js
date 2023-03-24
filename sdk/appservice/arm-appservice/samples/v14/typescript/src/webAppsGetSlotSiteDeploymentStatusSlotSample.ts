/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { WebSiteManagementClient } from "@azure/arm-appservice";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets the deployment status for an app (or deployment slot, if specified).
 *
 * @summary Gets the deployment status for an app (or deployment slot, if specified).
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2022-09-01/examples/GetSiteDeploymentStatusSlot.json
 */
async function getDeploymentStatusSlot() {
  const subscriptionId =
    process.env["APPSERVICE_SUBSCRIPTION_ID"] ||
    "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = process.env["APPSERVICE_RESOURCE_GROUP"] || "rg";
  const name = "testSite";
  const slot = "stage";
  const deploymentStatusId = "eacfd68b-3bbd-4ad9-99c5-98614d89c8e5";
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.webApps.beginGetSlotSiteDeploymentStatusSlotAndWait(
    resourceGroupName,
    name,
    slot,
    deploymentStatusId
  );
  console.log(result);
}

async function main() {
  getDeploymentStatusSlot();
}

main().catch(console.error);
