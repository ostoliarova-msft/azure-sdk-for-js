/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { EmailRestApiClient } from "../emailRestApiClient";
import {
  EmailGetSendStatusResponse,
  EmailMessage,
  EmailSendResponse
} from "../models";

/**
 * Class representing a Email.
 */
export class Email {
  private readonly client: EmailRestApiClient;

  /**
   * Initialize a new instance of the class Email class.
   * @param client Reference to the service client
   */
  constructor(client: EmailRestApiClient) {
    this.client = client;
  }

  /**
   * Gets the status of a message sent previously.
   * @param messageId System generated message id (GUID) returned from a previous call to send email
   * @param options The options parameters.
   */
  getSendStatus(
    messageId: string,
    options?: coreHttp.OperationOptions
  ): Promise<EmailGetSendStatusResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { messageId, options: operationOptions },
      getSendStatusOperationSpec
    ) as Promise<EmailGetSendStatusResponse>;
  }

  /**
   * Queues an email message to be sent to one or more recipients
   * @param repeatabilityRequestId If specified, the client directs that the request is repeatable; that
   *                               is, that the client can make the request multiple times with the same Repeatability-Request-Id and
   *                               get back an appropriate response without the server executing the request multiple times. The value
   *                               of the Repeatability-Request-Id is an opaque string representing a client-generated, globally unique
   *                               for all time, identifier for the request. It is recommended to use version 4 (random) UUIDs.
   * @param repeatabilityFirstSent Must be sent by clients to specify that a request is repeatable.
   *                               Repeatability-First-Sent is used to specify the date and time at which the request was first created
   *                               in the IMF-fix date form of HTTP-date as defined in RFC7231. eg- Tue, 26 Mar 2019 16:06:51 GMT
   * @param emailMessage Message payload for sending an email
   * @param options The options parameters.
   */
  send(
    repeatabilityRequestId: string,
    repeatabilityFirstSent: string,
    emailMessage: EmailMessage,
    options?: coreHttp.OperationOptions
  ): Promise<EmailSendResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        repeatabilityRequestId,
        repeatabilityFirstSent,
        emailMessage,
        options: operationOptions
      },
      sendOperationSpec
    ) as Promise<EmailSendResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const getSendStatusOperationSpec: coreHttp.OperationSpec = {
  path: "/emails/{messageId}/status",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SendStatusResult,
      headersMapper: Mappers.EmailGetSendStatusHeaders
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      headersMapper: Mappers.EmailGetSendStatusHeaders
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.messageId],
  serializer
};
const sendOperationSpec: coreHttp.OperationSpec = {
  path: "/emails:send",
  httpMethod: "POST",
  responses: {
    202: {
      headersMapper: Mappers.EmailSendHeaders
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      headersMapper: Mappers.EmailSendHeaders
    }
  },
  requestBody: Parameters.emailMessage,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint],
  headerParameters: [
    Parameters.contentType,
    Parameters.repeatabilityRequestId,
    Parameters.repeatabilityFirstSent
  ],
  mediaType: "json",
  serializer
};
