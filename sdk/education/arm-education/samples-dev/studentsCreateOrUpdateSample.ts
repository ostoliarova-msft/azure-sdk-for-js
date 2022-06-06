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
  StudentDetails,
  EducationManagementClient
} from "@azure/arm-education";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Create and add a new student to the specified lab or update the details of an existing student in a lab. Note the student must have a valid tenant to accept the lab after they have been added to lab.
 *
 * @summary Create and add a new student to the specified lab or update the details of an existing student in a lab. Note the student must have a valid tenant to accept the lab after they have been added to lab.
 * x-ms-original-file: specification/education/resource-manager/Microsoft.Education/preview/2021-12-01-preview/examples/CreateStudent.json
 */
async function student() {
  const billingAccountName = "{billingAccountName}";
  const billingProfileName = "{billingProfileName}";
  const invoiceSectionName = "{invoiceSectionName}";
  const studentAlias = "{studentAlias}";
  const parameters: StudentDetails = {
    budget: { currency: "USD", value: 100 },
    email: "test@contoso.com",
    expirationDate: new Date("2021-11-09T22:13:21.795Z"),
    firstName: "test",
    lastName: "user",
    role: "Student"
  };
  const credential = new DefaultAzureCredential();
  const client = new EducationManagementClient(credential);
  const result = await client.students.createOrUpdate(
    billingAccountName,
    billingProfileName,
    invoiceSectionName,
    studentAlias,
    parameters
  );
  console.log(result);
}

student().catch(console.error);
