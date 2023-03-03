/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { LogSearchRuleResource, MonitorClient } from "@azure/arm-monitor";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or updates an log search rule.
 *
 * @summary Creates or updates an log search rule.
 * x-ms-original-file: specification/monitor/resource-manager/Microsoft.Insights/stable/2018-04-16/examples/createOrUpdateScheduledQueryRules.json
 */
async function createOrUpdateRuleAlertingAction() {
  const subscriptionId =
    process.env["MONITOR_SUBSCRIPTION_ID"] ||
    "b67f7fec-69fc-4974-9099-a26bd6ffeda3";
  const resourceGroupName =
    process.env["MONITOR_RESOURCE_GROUP"] || "Rac46PostSwapRG";
  const ruleName = "logalertfoo";
  const parameters: LogSearchRuleResource = {
    description: "log alert description",
    action: {
      aznsAction: {
        actionGroup: [],
        customWebhookPayload: "{}",
        emailSubject: "Email Header"
      },
      odataType:
        "Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.Microsoft.AppInsights.Nexus.DataContracts.Resources.ScheduledQueryRules.AlertingAction",
      severity: "1",
      trigger: {
        metricTrigger: {
          metricColumn: "Computer",
          metricTriggerType: "Consecutive",
          threshold: 5,
          thresholdOperator: "GreaterThan"
        },
        threshold: 3,
        thresholdOperator: "GreaterThan"
      }
    },
    enabled: "true",
    location: "eastus",
    schedule: { frequencyInMinutes: 15, timeWindowInMinutes: 15 },
    source: {
      dataSourceId:
        "/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourceGroups/Rac46PostSwapRG/providers/Microsoft.OperationalInsights/workspaces/sampleWorkspace",
      query:
        "Heartbeat | summarize AggregatedValue = count() by bin(TimeGenerated, 5m)",
      queryType: "ResultCount"
    },
    tags: {}
  };
  const credential = new DefaultAzureCredential();
  const client = new MonitorClient(credential, subscriptionId);
  const result = await client.scheduledQueryRules.createOrUpdate(
    resourceGroupName,
    ruleName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates an log search rule.
 *
 * @summary Creates or updates an log search rule.
 * x-ms-original-file: specification/monitor/resource-manager/Microsoft.Insights/stable/2018-04-16/examples/createOrUpdateScheduledQueryRuleswithCrossResource.json
 */
async function createOrUpdateRuleAlertingActionWithCrossResource() {
  const subscriptionId =
    process.env["MONITOR_SUBSCRIPTION_ID"] ||
    "b67f7fec-69fc-4974-9099-a26bd6ffeda3";
  const resourceGroupName =
    process.env["MONITOR_RESOURCE_GROUP"] || "Rac46PostSwapRG";
  const ruleName = "SampleCrossResourceAlert";
  const parameters: LogSearchRuleResource = {
    description: "Sample Cross Resource alert",
    action: {
      aznsAction: {
        actionGroup: [
          "/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourceGroups/Rac46PostSwapRG/providers/microsoft.insights/actiongroups/test-ag"
        ],
        emailSubject: "Cross Resource Mail!!"
      },
      odataType:
        "Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.Microsoft.AppInsights.Nexus.DataContracts.Resources.ScheduledQueryRules.AlertingAction",
      severity: "3",
      trigger: { threshold: 5000, thresholdOperator: "GreaterThan" }
    },
    enabled: "true",
    location: "eastus",
    schedule: { frequencyInMinutes: 60, timeWindowInMinutes: 60 },
    source: {
      authorizedResources: [
        "/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourceGroups/Rac46PostSwapRG/providers/Microsoft.OperationalInsights/workspaces/sampleWorkspace",
        "/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourceGroups/Rac46PostSwapRG/providers/microsoft.insights/components/sampleAI"
      ],
      dataSourceId:
        "/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourceGroups/Rac46PostSwapRG/providers/microsoft.insights/components/sampleAI",
      query: 'union requests, workspace("sampleWorkspace").Update',
      queryType: "ResultCount"
    },
    tags: {}
  };
  const credential = new DefaultAzureCredential();
  const client = new MonitorClient(credential, subscriptionId);
  const result = await client.scheduledQueryRules.createOrUpdate(
    resourceGroupName,
    ruleName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates an log search rule.
 *
 * @summary Creates or updates an log search rule.
 * x-ms-original-file: specification/monitor/resource-manager/Microsoft.Insights/stable/2018-04-16/examples/createOrUpdateScheduledQueryRule-LogToMetricAction.json
 */
async function createOrUpdateRuleLogToMetricAction() {
  const subscriptionId =
    process.env["MONITOR_SUBSCRIPTION_ID"] ||
    "af52d502-a447-4bc6-8cb7-4780fbb00490";
  const resourceGroupName =
    process.env["MONITOR_RESOURCE_GROUP"] || "alertsweu";
  const ruleName = "logtometricfoo";
  const parameters: LogSearchRuleResource = {
    description: "log to metric description",
    action: {
      criteria: [{ dimensions: [], metricName: "Average_% Idle Time" }],
      odataType:
        "Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.Microsoft.AppInsights.Nexus.DataContracts.Resources.ScheduledQueryRules.LogToMetricAction"
    },
    enabled: "true",
    location: "West Europe",
    source: {
      dataSourceId:
        "/subscriptions/af52d502-a447-4bc6-8cb7-4780fbb00490/resourceGroups/alertsweu/providers/Microsoft.OperationalInsights/workspaces/alertsweu"
    },
    tags: {}
  };
  const credential = new DefaultAzureCredential();
  const client = new MonitorClient(credential, subscriptionId);
  const result = await client.scheduledQueryRules.createOrUpdate(
    resourceGroupName,
    ruleName,
    parameters
  );
  console.log(result);
}

async function main() {
  createOrUpdateRuleAlertingAction();
  createOrUpdateRuleAlertingActionWithCrossResource();
  createOrUpdateRuleLogToMetricAction();
}

main().catch(console.error);
