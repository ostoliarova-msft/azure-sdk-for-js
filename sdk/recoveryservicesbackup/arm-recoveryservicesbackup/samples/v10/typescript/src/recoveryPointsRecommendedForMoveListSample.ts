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
  ListRecoveryPointsRecommendedForMoveRequest,
  RecoveryServicesBackupClient
} from "@azure/arm-recoveryservicesbackup";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Lists the recovery points recommended for move to another tier
 *
 * @summary Lists the recovery points recommended for move to another tier
 * x-ms-original-file: specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/stable/2023-02-01/examples/AzureIaasVm/RecoveryPointsRecommendedForMove_List.json
 */
async function getProtectedAzureVMRecoveryPointsRecommendedForMove() {
  const subscriptionId =
    process.env["RECOVERYSERVICESBACKUP_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const vaultName = "rshvault";
  const resourceGroupName =
    process.env["RECOVERYSERVICESBACKUP_RESOURCE_GROUP"] || "rshhtestmdvmrg";
  const fabricName = "Azure";
  const containerName =
    "IaasVMContainer;iaasvmcontainerv2;rshhtestmdvmrg;rshmdvmsmall";
  const protectedItemName = "VM;iaasvmcontainerv2;rshhtestmdvmrg;rshmdvmsmall";
  const parameters: ListRecoveryPointsRecommendedForMoveRequest = {
    excludedRPList: ["348916168024334", "348916168024335"],
    objectType: "ListRecoveryPointsRecommendedForMoveRequest"
  };
  const credential = new DefaultAzureCredential();
  const client = new RecoveryServicesBackupClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.recoveryPointsRecommendedForMove.list(
    vaultName,
    resourceGroupName,
    fabricName,
    containerName,
    protectedItemName,
    parameters
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  getProtectedAzureVMRecoveryPointsRecommendedForMove();
}

main().catch(console.error);
