/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { tracingClient } from "../tracing";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { JobRouter } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { JobRouterApiClient } from "../jobRouterApiClient";
import {
  RouterJobItem,
  JobRouterListJobsNextOptionalParams,
  JobRouterListJobsOptionalParams,
  RouterWorkerItem,
  JobRouterListWorkersNextOptionalParams,
  JobRouterListWorkersOptionalParams,
  RouterJob,
  JobRouterUpsertJobOptionalParams,
  JobRouterUpsertJobResponse,
  JobRouterGetJobOptionalParams,
  JobRouterGetJobResponse,
  JobRouterDeleteJobOptionalParams,
  JobRouterReclassifyJobActionOptionalParams,
  JobRouterReclassifyJobActionResponse,
  JobRouterCancelJobActionOptionalParams,
  JobRouterCancelJobActionResponse,
  JobRouterCompleteJobActionOptionalParams,
  JobRouterCompleteJobActionResponse,
  JobRouterCloseJobActionOptionalParams,
  JobRouterCloseJobActionResponse,
  JobRouterListJobsResponse,
  JobRouterGetInQueuePositionOptionalParams,
  JobRouterGetInQueuePositionResponse,
  JobRouterUnassignJobActionOptionalParams,
  JobRouterUnassignJobActionResponse,
  JobRouterAcceptJobActionOptionalParams,
  JobRouterAcceptJobActionResponse,
  JobRouterDeclineJobActionOptionalParams,
  JobRouterDeclineJobActionResponse,
  JobRouterGetQueueStatisticsOptionalParams,
  JobRouterGetQueueStatisticsResponse,
  RouterWorker,
  JobRouterUpsertWorkerOptionalParams,
  JobRouterUpsertWorkerResponse,
  JobRouterGetWorkerOptionalParams,
  JobRouterGetWorkerResponse,
  JobRouterDeleteWorkerOptionalParams,
  JobRouterListWorkersResponse,
  JobRouterListJobsNextResponse,
  JobRouterListWorkersNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing JobRouter operations. */
export class JobRouterImpl implements JobRouter {
  private readonly client: JobRouterApiClient;

  /**
   * Initialize a new instance of the class JobRouter class.
   * @param client Reference to the service client
   */
  constructor(client: JobRouterApiClient) {
    this.client = client;
  }

  /**
   * Retrieves list of jobs based on filter parameters
   * @param options The options parameters.
   */
  public listJobs(
    options?: JobRouterListJobsOptionalParams
  ): PagedAsyncIterableIterator<RouterJobItem> {
    const iter = this.listJobsPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listJobsPagingPage(options);
      }
    };
  }

  private async *listJobsPagingPage(
    options?: JobRouterListJobsOptionalParams
  ): AsyncIterableIterator<RouterJobItem[]> {
    let result = await this._listJobs(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listJobsNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listJobsPagingAll(
    options?: JobRouterListJobsOptionalParams
  ): AsyncIterableIterator<RouterJobItem> {
    for await (const page of this.listJobsPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Retrieves existing workers.
   * @param options The options parameters.
   */
  public listWorkers(
    options?: JobRouterListWorkersOptionalParams
  ): PagedAsyncIterableIterator<RouterWorkerItem> {
    const iter = this.listWorkersPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listWorkersPagingPage(options);
      }
    };
  }

  private async *listWorkersPagingPage(
    options?: JobRouterListWorkersOptionalParams
  ): AsyncIterableIterator<RouterWorkerItem[]> {
    let result = await this._listWorkers(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listWorkersNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listWorkersPagingAll(
    options?: JobRouterListWorkersOptionalParams
  ): AsyncIterableIterator<RouterWorkerItem> {
    for await (const page of this.listWorkersPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Creates or updates a router job.
   * @param id Id of the job.
   * @param patch Model of job properties to be created or patched. See also:
   *              https://datatracker.ietf.org/doc/html/rfc7386.
   * @param options The options parameters.
   */
  async upsertJob(
    id: string,
    patch: RouterJob,
    options?: JobRouterUpsertJobOptionalParams
  ): Promise<JobRouterUpsertJobResponse> {
    return tracingClient.withSpan(
      "JobRouterApiClient.upsertJob",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { id, patch, options },
          upsertJobOperationSpec
        ) as Promise<JobRouterUpsertJobResponse>;
      }
    );
  }

  /**
   * Retrieves an existing job by Id
   * @param id Id of the job to retrieve
   * @param options The options parameters.
   */
  async getJob(
    id: string,
    options?: JobRouterGetJobOptionalParams
  ): Promise<JobRouterGetJobResponse> {
    return tracingClient.withSpan(
      "JobRouterApiClient.getJob",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { id, options },
          getJobOperationSpec
        ) as Promise<JobRouterGetJobResponse>;
      }
    );
  }

  /**
   * Deletes a job and all of its traces.
   * @param id Id of the job.
   * @param options The options parameters.
   */
  async deleteJob(
    id: string,
    options?: JobRouterDeleteJobOptionalParams
  ): Promise<void> {
    return tracingClient.withSpan(
      "JobRouterApiClient.deleteJob",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { id, options },
          deleteJobOperationSpec
        ) as Promise<void>;
      }
    );
  }

  /**
   * Reclassify a job.
   * @param id Id of the job
   * @param options The options parameters.
   */
  async reclassifyJobAction(
    id: string,
    options?: JobRouterReclassifyJobActionOptionalParams
  ): Promise<JobRouterReclassifyJobActionResponse> {
    return tracingClient.withSpan(
      "JobRouterApiClient.reclassifyJobAction",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { id, options },
          reclassifyJobActionOperationSpec
        ) as Promise<JobRouterReclassifyJobActionResponse>;
      }
    );
  }

  /**
   * Submits request to cancel an existing job by Id while supplying free-form cancellation reason.
   * @param id Id of the job
   * @param options The options parameters.
   */
  async cancelJobAction(
    id: string,
    options?: JobRouterCancelJobActionOptionalParams
  ): Promise<JobRouterCancelJobActionResponse> {
    return tracingClient.withSpan(
      "JobRouterApiClient.cancelJobAction",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { id, options },
          cancelJobActionOperationSpec
        ) as Promise<JobRouterCancelJobActionResponse>;
      }
    );
  }

  /**
   * Completes an assigned job.
   * @param id Id of the job
   * @param assignmentId The assignment within the job to complete.
   * @param options The options parameters.
   */
  async completeJobAction(
    id: string,
    assignmentId: string,
    options?: JobRouterCompleteJobActionOptionalParams
  ): Promise<JobRouterCompleteJobActionResponse> {
    return tracingClient.withSpan(
      "JobRouterApiClient.completeJobAction",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { id, assignmentId, options },
          completeJobActionOperationSpec
        ) as Promise<JobRouterCompleteJobActionResponse>;
      }
    );
  }

  /**
   * Closes a completed job.
   * @param id Id of the job
   * @param assignmentId The assignment within which the job is to be closed.
   * @param options The options parameters.
   */
  async closeJobAction(
    id: string,
    assignmentId: string,
    options?: JobRouterCloseJobActionOptionalParams
  ): Promise<JobRouterCloseJobActionResponse> {
    return tracingClient.withSpan(
      "JobRouterApiClient.closeJobAction",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { id, assignmentId, options },
          closeJobActionOperationSpec
        ) as Promise<JobRouterCloseJobActionResponse>;
      }
    );
  }

  /**
   * Retrieves list of jobs based on filter parameters
   * @param options The options parameters.
   */
  private async _listJobs(
    options?: JobRouterListJobsOptionalParams
  ): Promise<JobRouterListJobsResponse> {
    return tracingClient.withSpan(
      "JobRouterApiClient._listJobs",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { options },
          listJobsOperationSpec
        ) as Promise<JobRouterListJobsResponse>;
      }
    );
  }

  /**
   * Gets a job's position details.
   * @param id Id of the job
   * @param options The options parameters.
   */
  async getInQueuePosition(
    id: string,
    options?: JobRouterGetInQueuePositionOptionalParams
  ): Promise<JobRouterGetInQueuePositionResponse> {
    return tracingClient.withSpan(
      "JobRouterApiClient.getInQueuePosition",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { id, options },
          getInQueuePositionOperationSpec
        ) as Promise<JobRouterGetInQueuePositionResponse>;
      }
    );
  }

  /**
   * Un-assign a job.
   * @param id Id of the job to un-assign
   * @param assignmentId Id of the assignment to un-assign
   * @param options The options parameters.
   */
  async unassignJobAction(
    id: string,
    assignmentId: string,
    options?: JobRouterUnassignJobActionOptionalParams
  ): Promise<JobRouterUnassignJobActionResponse> {
    return tracingClient.withSpan(
      "JobRouterApiClient.unassignJobAction",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { id, assignmentId, options },
          unassignJobActionOperationSpec
        ) as Promise<JobRouterUnassignJobActionResponse>;
      }
    );
  }

  /**
   * Accepts an offer to work on a job and returns a 409/Conflict if another agent accepted the job
   * already.
   * @param workerId Id of the worker
   * @param offerId Id of the offer
   * @param options The options parameters.
   */
  async acceptJobAction(
    workerId: string,
    offerId: string,
    options?: JobRouterAcceptJobActionOptionalParams
  ): Promise<JobRouterAcceptJobActionResponse> {
    return tracingClient.withSpan(
      "JobRouterApiClient.acceptJobAction",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { workerId, offerId, options },
          acceptJobActionOperationSpec
        ) as Promise<JobRouterAcceptJobActionResponse>;
      }
    );
  }

  /**
   * Declines an offer to work on a job.
   * @param workerId Id of the worker
   * @param offerId Id of the offer
   * @param options The options parameters.
   */
  async declineJobAction(
    workerId: string,
    offerId: string,
    options?: JobRouterDeclineJobActionOptionalParams
  ): Promise<JobRouterDeclineJobActionResponse> {
    return tracingClient.withSpan(
      "JobRouterApiClient.declineJobAction",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { workerId, offerId, options },
          declineJobActionOperationSpec
        ) as Promise<JobRouterDeclineJobActionResponse>;
      }
    );
  }

  /**
   * Retrieves a queue's statistics
   * @param id Id of the queue to retrieve statistics
   * @param options The options parameters.
   */
  async getQueueStatistics(
    id: string,
    options?: JobRouterGetQueueStatisticsOptionalParams
  ): Promise<JobRouterGetQueueStatisticsResponse> {
    return tracingClient.withSpan(
      "JobRouterApiClient.getQueueStatistics",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { id, options },
          getQueueStatisticsOperationSpec
        ) as Promise<JobRouterGetQueueStatisticsResponse>;
      }
    );
  }

  /**
   * Creates or updates a worker.
   * @param workerId Id of the worker
   * @param patch Model of worker properties to be patched. See also:
   *              https://datatracker.ietf.org/doc/html/rfc7386
   * @param options The options parameters.
   */
  async upsertWorker(
    workerId: string,
    patch: RouterWorker,
    options?: JobRouterUpsertWorkerOptionalParams
  ): Promise<JobRouterUpsertWorkerResponse> {
    return tracingClient.withSpan(
      "JobRouterApiClient.upsertWorker",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { workerId, patch, options },
          upsertWorkerOperationSpec
        ) as Promise<JobRouterUpsertWorkerResponse>;
      }
    );
  }

  /**
   * Retrieves an existing worker by Id
   * @param workerId Id of the worker to retrieve
   * @param options The options parameters.
   */
  async getWorker(
    workerId: string,
    options?: JobRouterGetWorkerOptionalParams
  ): Promise<JobRouterGetWorkerResponse> {
    return tracingClient.withSpan(
      "JobRouterApiClient.getWorker",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { workerId, options },
          getWorkerOperationSpec
        ) as Promise<JobRouterGetWorkerResponse>;
      }
    );
  }

  /**
   * Deletes a worker and all of its traces.
   * @param workerId Id of the worker to delete
   * @param options The options parameters.
   */
  async deleteWorker(
    workerId: string,
    options?: JobRouterDeleteWorkerOptionalParams
  ): Promise<void> {
    return tracingClient.withSpan(
      "JobRouterApiClient.deleteWorker",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { workerId, options },
          deleteWorkerOperationSpec
        ) as Promise<void>;
      }
    );
  }

  /**
   * Retrieves existing workers.
   * @param options The options parameters.
   */
  private async _listWorkers(
    options?: JobRouterListWorkersOptionalParams
  ): Promise<JobRouterListWorkersResponse> {
    return tracingClient.withSpan(
      "JobRouterApiClient._listWorkers",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { options },
          listWorkersOperationSpec
        ) as Promise<JobRouterListWorkersResponse>;
      }
    );
  }

  /**
   * ListJobsNext
   * @param nextLink The nextLink from the previous successful call to the ListJobs method.
   * @param options The options parameters.
   */
  private async _listJobsNext(
    nextLink: string,
    options?: JobRouterListJobsNextOptionalParams
  ): Promise<JobRouterListJobsNextResponse> {
    return tracingClient.withSpan(
      "JobRouterApiClient._listJobsNext",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { nextLink, options },
          listJobsNextOperationSpec
        ) as Promise<JobRouterListJobsNextResponse>;
      }
    );
  }

  /**
   * ListWorkersNext
   * @param nextLink The nextLink from the previous successful call to the ListWorkers method.
   * @param options The options parameters.
   */
  private async _listWorkersNext(
    nextLink: string,
    options?: JobRouterListWorkersNextOptionalParams
  ): Promise<JobRouterListWorkersNextResponse> {
    return tracingClient.withSpan(
      "JobRouterApiClient._listWorkersNext",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { nextLink, options },
          listWorkersNextOperationSpec
        ) as Promise<JobRouterListWorkersNextResponse>;
      }
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const upsertJobOperationSpec: coreClient.OperationSpec = {
  path: "/routing/jobs/{id}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.RouterJob
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  requestBody: Parameters.patch4,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.id],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getJobOperationSpec: coreClient.OperationSpec = {
  path: "/routing/jobs/{id}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RouterJob
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.id],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteJobOperationSpec: coreClient.OperationSpec = {
  path: "/routing/jobs/{id}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.id],
  headerParameters: [Parameters.accept],
  serializer
};
const reclassifyJobActionOperationSpec: coreClient.OperationSpec = {
  path: "/routing/jobs/{id}:reclassify",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: {
        type: { name: "Dictionary", value: { type: { name: "any" } } }
      }
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  requestBody: Parameters.reclassifyJobRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.id],
  headerParameters: [Parameters.accept, Parameters.contentType1],
  mediaType: "json",
  serializer
};
const cancelJobActionOperationSpec: coreClient.OperationSpec = {
  path: "/routing/jobs/{id}:cancel",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: {
        type: { name: "Dictionary", value: { type: { name: "any" } } }
      }
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  requestBody: {
    parameterPath: {
      note: ["options", "note"],
      dispositionCode: ["options", "dispositionCode"]
    },
    mapper: Mappers.CancelJobRequest
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.id],
  headerParameters: [Parameters.accept, Parameters.contentType1],
  mediaType: "json",
  serializer
};
const completeJobActionOperationSpec: coreClient.OperationSpec = {
  path: "/routing/jobs/{id}:complete",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: {
        type: { name: "Dictionary", value: { type: { name: "any" } } }
      }
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  requestBody: {
    parameterPath: {
      assignmentId: ["assignmentId"],
      note: ["options", "note"]
    },
    mapper: { ...Mappers.CompleteJobRequest, required: true }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.id],
  headerParameters: [Parameters.accept, Parameters.contentType1],
  mediaType: "json",
  serializer
};
const closeJobActionOperationSpec: coreClient.OperationSpec = {
  path: "/routing/jobs/{id}:close",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: {
        type: { name: "Dictionary", value: { type: { name: "any" } } }
      }
    },
    202: {
      bodyMapper: {
        type: { name: "Dictionary", value: { type: { name: "any" } } }
      }
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  requestBody: {
    parameterPath: {
      assignmentId: ["assignmentId"],
      dispositionCode: ["options", "dispositionCode"],
      closeTime: ["options", "closeTime"],
      note: ["options", "note"]
    },
    mapper: { ...Mappers.CloseJobRequest, required: true }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.id],
  headerParameters: [Parameters.accept, Parameters.contentType1],
  mediaType: "json",
  serializer
};
const listJobsOperationSpec: coreClient.OperationSpec = {
  path: "/routing/jobs",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobCollection
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.maxpagesize,
    Parameters.status,
    Parameters.queueId,
    Parameters.channelId,
    Parameters.classificationPolicyId
  ],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.accept],
  serializer
};
const getInQueuePositionOperationSpec: coreClient.OperationSpec = {
  path: "/routing/jobs/{id}/position",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobPositionDetails
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.id],
  headerParameters: [Parameters.accept],
  serializer
};
const unassignJobActionOperationSpec: coreClient.OperationSpec = {
  path: "/routing/jobs/{id}/assignments/{assignmentId}:unassign",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.UnassignJobResult
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.id, Parameters.assignmentId2],
  headerParameters: [Parameters.accept],
  serializer
};
const acceptJobActionOperationSpec: coreClient.OperationSpec = {
  path: "/routing/workers/{workerId}/offers/{offerId}:accept",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.AcceptJobOfferResult
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.workerId, Parameters.offerId],
  headerParameters: [Parameters.accept],
  serializer
};
const declineJobActionOperationSpec: coreClient.OperationSpec = {
  path: "/routing/workers/{workerId}/offers/{offerId}:decline",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: {
        type: { name: "Dictionary", value: { type: { name: "any" } } }
      }
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.workerId, Parameters.offerId],
  headerParameters: [Parameters.accept],
  serializer
};
const getQueueStatisticsOperationSpec: coreClient.OperationSpec = {
  path: "/routing/queues/{id}/statistics",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.QueueStatistics
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.id],
  headerParameters: [Parameters.accept],
  serializer
};
const upsertWorkerOperationSpec: coreClient.OperationSpec = {
  path: "/routing/workers/{workerId}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.RouterWorker
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  requestBody: Parameters.patch5,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.workerId],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getWorkerOperationSpec: coreClient.OperationSpec = {
  path: "/routing/workers/{workerId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RouterWorker
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.workerId],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteWorkerOperationSpec: coreClient.OperationSpec = {
  path: "/routing/workers/{workerId}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.workerId],
  headerParameters: [Parameters.accept],
  serializer
};
const listWorkersOperationSpec: coreClient.OperationSpec = {
  path: "/routing/workers",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.WorkerCollection
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.maxpagesize,
    Parameters.queueId,
    Parameters.channelId,
    Parameters.status1,
    Parameters.hasCapacity
  ],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.accept],
  serializer
};
const listJobsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobCollection
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.maxpagesize,
    Parameters.status,
    Parameters.queueId,
    Parameters.channelId,
    Parameters.classificationPolicyId
  ],
  urlParameters: [Parameters.endpoint, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
const listWorkersNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.WorkerCollection
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.maxpagesize,
    Parameters.queueId,
    Parameters.channelId,
    Parameters.status1,
    Parameters.hasCapacity
  ],
  urlParameters: [Parameters.endpoint, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
