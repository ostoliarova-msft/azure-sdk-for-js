/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AzureMachineLearningWorkspaces } from "@azure/arm-machinelearning";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Gets a batch inference deployment by id.
 *
 * @summary Gets a batch inference deployment by id.
 * x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/preview/2022-02-01-preview/examples/BatchDeployment/get.json
 */
async function getBatchDeployment() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "test-rg";
  const workspaceName = "my-aml-workspace";
  const endpointName = "testEndpointName";
  const deploymentName = "testDeploymentName";
  const credential = new DefaultAzureCredential();
  const client = new AzureMachineLearningWorkspaces(credential, subscriptionId);
  const result = await client.batchDeployments.get(
    resourceGroupName,
    workspaceName,
    endpointName,
    deploymentName
  );
  console.log(result);
}

getBatchDeployment().catch(console.error);
