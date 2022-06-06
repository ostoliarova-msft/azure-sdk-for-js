/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { AppPlatformManagementClient } = require("@azure/arm-appplatform");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Set existing Deployment under the app as active
 *
 * @summary Set existing Deployment under the app as active
 * x-ms-original-file: specification/appplatform/resource-manager/Microsoft.AppPlatform/stable/2022-04-01/examples/Apps_SetActiveDeployments.json
 */
async function appsSetActiveDeployments() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "myResourceGroup";
  const serviceName = "myservice";
  const appName = "myapp";
  const activeDeploymentCollection = {
    activeDeploymentNames: ["default"],
  };
  const credential = new DefaultAzureCredential();
  const client = new AppPlatformManagementClient(credential, subscriptionId);
  const result = await client.apps.beginSetActiveDeploymentsAndWait(
    resourceGroupName,
    serviceName,
    appName,
    activeDeploymentCollection
  );
  console.log(result);
}

appsSetActiveDeployments().catch(console.error);
