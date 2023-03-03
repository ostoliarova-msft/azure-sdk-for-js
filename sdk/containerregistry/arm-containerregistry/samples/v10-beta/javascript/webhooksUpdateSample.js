/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ContainerRegistryManagementClient } = require("@azure/arm-containerregistry");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Updates a webhook with the specified parameters.
 *
 * @summary Updates a webhook with the specified parameters.
 * x-ms-original-file: specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/preview/2023-01-01-preview/examples/WebhookUpdate.json
 */
async function webhookUpdate() {
  const subscriptionId =
    process.env["CONTAINERREGISTRY_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["CONTAINERREGISTRY_RESOURCE_GROUP"] || "myResourceGroup";
  const registryName = "myRegistry";
  const webhookName = "myWebhook";
  const webhookUpdateParameters = {
    actions: ["push"],
    customHeaders: {
      authorization: "Basic 000000000000000000000000000000000000000000000000000",
    },
    scope: "myRepository",
    serviceUri: "http://myservice.com",
    status: "enabled",
    tags: { key: "value" },
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerRegistryManagementClient(credential, subscriptionId);
  const result = await client.webhooks.beginUpdateAndWait(
    resourceGroupName,
    registryName,
    webhookName,
    webhookUpdateParameters
  );
  console.log(result);
}

async function main() {
  webhookUpdate();
}

main().catch(console.error);
