/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { MetadataModel, SecurityInsights } from "@azure/arm-securityinsight";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create a Metadata.
 *
 * @summary Create a Metadata.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-09-01-preview/examples/metadata/PutMetadata.json
 */
async function createOrUpdateFullMetadata() {
  const subscriptionId =
    process.env["SECURITYINSIGHT_SUBSCRIPTION_ID"] ||
    "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName =
    process.env["SECURITYINSIGHT_RESOURCE_GROUP"] || "myRg";
  const workspaceName = "myWorkspace";
  const metadataName = "metadataName";
  const metadata: MetadataModel = {
    author: { name: "User Name", email: "email@microsoft.com" },
    categories: {
      domains: ["Application", "Security – Insider Threat"],
      verticals: ["Healthcare"]
    },
    contentId: "c00ee137-7475-47c8-9cce-ec6f0f1bedd0",
    contentSchemaVersion: "2.0",
    customVersion: "1.0",
    dependencies: {
      criteria: [
        {
          criteria: [
            {
              name: "Microsoft Defender for Endpoint",
              contentId: "045d06d0-ee72-4794-aba4-cf5646e4c756",
              kind: "DataConnector"
            },
            {
              contentId: "dbfcb2cc-d782-40ef-8d94-fe7af58a6f2d",
              kind: "DataConnector"
            },
            {
              contentId: "de4dca9b-eb37-47d6-a56f-b8b06b261593",
              kind: "DataConnector",
              version: "2.0"
            }
          ],
          operator: "OR"
        },
        {
          contentId: "31ee11cc-9989-4de8-b176-5e0ef5c4dbab",
          kind: "Playbook",
          version: "1.0"
        },
        { contentId: "21ba424a-9438-4444-953a-7059539a7a1b", kind: "Parser" }
      ],
      operator: "AND"
    },
    firstPublishDate: new Date("2021-05-18"),
    kind: "AnalyticsRule",
    lastPublishDate: new Date("2021-05-18"),
    parentId:
      "/subscriptions/2e1dc338-d04d-4443-b721-037eff4fdcac/resourceGroups/myRg/providers/Microsoft.OperationalInsights/workspaces/myWorkspace/providers/Microsoft.SecurityInsights/alertRules/ruleName",
    previewImages: ["firstImage.png", "secondImage.jpeg"],
    previewImagesDark: ["firstImageDark.png", "secondImageDark.jpeg"],
    providers: ["Amazon", "Microsoft"],
    source: {
      name: "Contoso Solution 1.0",
      kind: "Solution",
      sourceId: "b688a130-76f4-4a07-bf57-762222a3cadf"
    },
    support: {
      name: "Microsoft",
      email: "support@microsoft.com",
      link: "https://support.microsoft.com/",
      tier: "Partner"
    },
    threatAnalysisTactics: ["reconnaissance", "commandandcontrol"],
    threatAnalysisTechniques: ["T1548", "T1548.001"],
    version: "1.0.0.0"
  };
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.metadata.create(
    resourceGroupName,
    workspaceName,
    metadataName,
    metadata
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create a Metadata.
 *
 * @summary Create a Metadata.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-09-01-preview/examples/metadata/PutMetadataMinimal.json
 */
async function createOrUpdateMinimalMetadata() {
  const subscriptionId =
    process.env["SECURITYINSIGHT_SUBSCRIPTION_ID"] ||
    "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName =
    process.env["SECURITYINSIGHT_RESOURCE_GROUP"] || "myRg";
  const workspaceName = "myWorkspace";
  const metadataName = "metadataName";
  const metadata: MetadataModel = {
    contentId: "c00ee137-7475-47c8-9cce-ec6f0f1bedd0",
    kind: "AnalyticsRule",
    parentId:
      "/subscriptions/2e1dc338-d04d-4443-b721-037eff4fdcac/resourceGroups/myRg/providers/Microsoft.OperationalInsights/workspaces/myWorkspace/providers/Microsoft.SecurityInsights/alertRules/ruleName"
  };
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.metadata.create(
    resourceGroupName,
    workspaceName,
    metadataName,
    metadata
  );
  console.log(result);
}

async function main() {
  createOrUpdateFullMetadata();
  createOrUpdateMinimalMetadata();
}

main().catch(console.error);
