/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { SecurityCenter } = require("@azure/arm-security");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Delete an Application over a given scope
 *
 * @summary Delete an Application over a given scope
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/preview/2022-07-01-preview/examples/Applications/DeleteApplication_example.json
 */
async function deleteSecurityApplication() {
  const subscriptionId =
    process.env["SECURITY_SUBSCRIPTION_ID"] || "20ff7fc3-e762-44dd-bd96-b71116dcdc23";
  const applicationId = "ad9a8e26-29d9-4829-bb30-e597a58cdbb8";
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential, subscriptionId);
  const result = await client.applicationOperations.delete(applicationId);
  console.log(result);
}

async function main() {
  deleteSecurityApplication();
}

main().catch(console.error);
