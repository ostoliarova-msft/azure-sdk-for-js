/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to Provides the details of the backed up item. This is an asynchronous operation. To know the status of the operation,
call the GetItemOperationResult API.
 *
 * @summary Provides the details of the backed up item. This is an asynchronous operation. To know the status of the operation,
call the GetItemOperationResult API.
 * x-ms-original-file: specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/stable/2021-12-01/examples/AzureIaasVm/ClassicCompute_ProtectedItem_Get.json
 */
import { RecoveryServicesBackupClient } from "@azure/arm-recoveryservicesbackup";
import { DefaultAzureCredential } from "@azure/identity";

async function getProtectedClassicVirtualMachineDetails() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const vaultName = "PySDKBackupTestRsVault";
  const resourceGroupName = "PythonSDKBackupTestRg";
  const fabricName = "Azure";
  const containerName = "iaasvmcontainer;iaasvmcontainer;iaasvm-rg;iaasvm-1";
  const protectedItemName = "vm;iaasvmcontainer;iaasvm-rg;iaasvm-1";
  const credential = new DefaultAzureCredential();
  const client = new RecoveryServicesBackupClient(credential, subscriptionId);
  const result = await client.protectedItems.get(
    vaultName,
    resourceGroupName,
    fabricName,
    containerName,
    protectedItemName
  );
  console.log(result);
}

getProtectedClassicVirtualMachineDetails().catch(console.error);
