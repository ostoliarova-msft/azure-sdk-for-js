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
 * This sample demonstrates how to The configuration or data needed to onboard the machine to MDE
 *
 * @summary The configuration or data needed to onboard the machine to MDE
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/preview/2021-10-01-preview/examples/MdeOnboardings/ListMdeOnboardings_example.json
 */
async function theConfigurationOrDataNeededToOnboardTheMachineToMde() {
  const subscriptionId =
    process.env["SECURITY_SUBSCRIPTION_ID"] || "20ff7fc3-e762-44dd-bd96-b71116dcdc23";
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential, subscriptionId);
  const result = await client.mdeOnboardings.list();
  console.log(result);
}

async function main() {
  theConfigurationOrDataNeededToOnboardTheMachineToMde();
}

main().catch(console.error);
