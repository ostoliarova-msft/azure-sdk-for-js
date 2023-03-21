/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { GraphServices } = require("@azure/arm-graphservices");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Returns list of accounts belonging to a subscription.
 *
 * @summary Returns list of accounts belonging to a subscription.
 * x-ms-original-file: specification/graphservicesprod/resource-manager/Microsoft.GraphServices/preview/2022-09-22-preview/examples/Accounts_List_Sub.json
 */
async function getListOfAccountsBySubscription() {
  const subscriptionId =
    process.env["GRAPHSERVICES_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const credential = new DefaultAzureCredential();
  const client = new GraphServices(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.accounts.listBySubscription()) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  getListOfAccountsBySubscription();
}

main().catch(console.error);
