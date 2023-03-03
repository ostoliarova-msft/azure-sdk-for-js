/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AzureMigrateV2 } from "@azure/arm-migrate";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Delete the project. Deleting non-existent project is a no-operation.
 *
 * @summary Delete the project. Deleting non-existent project is a no-operation.
 * x-ms-original-file: specification/migrate/resource-manager/Microsoft.Migrate/stable/2019-10-01/examples/Projects_Delete.json
 */
async function projectsDelete() {
  const subscriptionId =
    process.env["MIGRATE_SUBSCRIPTION_ID"] ||
    "6393a73f-8d55-47ef-b6dd-179b3e0c7910";
  const resourceGroupName =
    process.env["MIGRATE_RESOURCE_GROUP"] || "abgoyal-westEurope";
  const projectName = "abGoyalProject2";
  const credential = new DefaultAzureCredential();
  const client = new AzureMigrateV2(credential, subscriptionId);
  const result = await client.projects.delete(resourceGroupName, projectName);
  console.log(result);
}

async function main() {
  projectsDelete();
}

main().catch(console.error);
