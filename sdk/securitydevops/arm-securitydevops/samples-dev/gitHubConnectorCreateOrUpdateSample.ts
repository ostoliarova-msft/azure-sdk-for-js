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
  GitHubConnector,
  MicrosoftSecurityDevOps
} from "@azure/arm-securitydevops";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create or update a monitored GitHub Connector resource.
 *
 * @summary Create or update a monitored GitHub Connector resource.
 * x-ms-original-file: specification/securitydevops/resource-manager/Microsoft.SecurityDevOps/preview/2022-09-01-preview/examples/GitHubConnectorCreateOrUpdate.json
 */
async function gitHubConnectorCreateOrUpdate() {
  const subscriptionId =
    process.env["SECURITYDEVOPS_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["SECURITYDEVOPS_RESOURCE_GROUP"] || "westusrg";
  const gitHubConnectorName = "testconnector";
  const gitHubConnector: GitHubConnector = {
    location: "West US",
    properties: { code: "00000000000000000000" }
  };
  const credential = new DefaultAzureCredential();
  const client = new MicrosoftSecurityDevOps(credential, subscriptionId);
  const result = await client.gitHubConnectorOperations.beginCreateOrUpdateAndWait(
    resourceGroupName,
    gitHubConnectorName,
    gitHubConnector
  );
  console.log(result);
}

async function main() {
  gitHubConnectorCreateOrUpdate();
}

main().catch(console.error);
