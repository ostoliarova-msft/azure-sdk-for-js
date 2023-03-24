/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ExportDatabaseDefinition, SqlManagementClient } from "@azure/arm-sql";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Exports a database.
 *
 * @summary Exports a database.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2022-08-01-preview/examples/ExportDatabaseWithNetworkIsolation.json
 */
async function exportsADatabaseUsingPrivateLinkToCommunicateWithSqlServerAndStorageAccount() {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["SQL_RESOURCE_GROUP"] || "Default-SQL-SouthEastAsia";
  const serverName = "testsvr";
  const databaseName = "testdb";
  const parameters: ExportDatabaseDefinition = {
    administratorLogin: "login",
    administratorLoginPassword: "password",
    authenticationType: "Sql",
    networkIsolation: {
      sqlServerResourceId:
        "/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/Default-SQL-SouthEastAsia/providers/Microsoft.Sql/servers/testsvr",
      storageAccountResourceId:
        "/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/Default-SQL-SouthEastAsia/providers/Microsoft.Storage/storageAccounts/test-privatelink"
    },
    storageKey:
      "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx==",
    storageKeyType: "StorageAccessKey",
    storageUri: "https://test.blob.core.windows.net/test.bacpac"
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.databases.beginExportAndWait(
    resourceGroupName,
    serverName,
    databaseName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Exports a database.
 *
 * @summary Exports a database.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2022-08-01-preview/examples/ExportDatabase.json
 */
async function exportsADatabase() {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["SQL_RESOURCE_GROUP"] || "Default-SQL-SouthEastAsia";
  const serverName = "testsvr";
  const databaseName = "testdb";
  const parameters: ExportDatabaseDefinition = {
    administratorLogin: "login",
    administratorLoginPassword: "password",
    authenticationType: "Sql",
    storageKey:
      "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx==",
    storageKeyType: "StorageAccessKey",
    storageUri: "https://test.blob.core.windows.net/test.bacpac"
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.databases.beginExportAndWait(
    resourceGroupName,
    serverName,
    databaseName,
    parameters
  );
  console.log(result);
}

async function main() {
  exportsADatabaseUsingPrivateLinkToCommunicateWithSqlServerAndStorageAccount();
  exportsADatabase();
}

main().catch(console.error);
