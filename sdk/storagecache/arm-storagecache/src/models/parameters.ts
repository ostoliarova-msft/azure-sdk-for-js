/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter
} from "@azure/core-client";
import {
  Cache as CacheMapper,
  PrimingJob as PrimingJobMapper,
  PrimingJobIdParameter as PrimingJobIdParameterMapper,
  StorageTarget as StorageTargetMapper
} from "../models/mappers";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2023-01-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const nextLink: OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const subscriptionId: OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    serializedName: "subscriptionId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const location: OperationURLParameter = {
  parameterPath: "location",
  mapper: {
    serializedName: "location",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const operationId: OperationURLParameter = {
  parameterPath: "operationId",
  mapper: {
    serializedName: "operationId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const resourceGroupName: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const cacheName: OperationURLParameter = {
  parameterPath: "cacheName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[-0-9a-zA-Z_]{1,80}$")
    },
    serializedName: "cacheName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const cache: OperationParameter = {
  parameterPath: "cache",
  mapper: CacheMapper
};

export const cache1: OperationParameter = {
  parameterPath: ["options", "cache"],
  mapper: CacheMapper
};

export const primingjob: OperationParameter = {
  parameterPath: ["options", "primingjob"],
  mapper: PrimingJobMapper
};

export const primingJobId: OperationParameter = {
  parameterPath: ["options", "primingJobId"],
  mapper: PrimingJobIdParameterMapper
};

export const spaceAllocation: OperationParameter = {
  parameterPath: ["options", "spaceAllocation"],
  mapper: {
    serializedName: "spaceAllocation",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "Composite",
          className: "StorageTargetSpaceAllocation"
        }
      }
    }
  }
};

export const storageTargetName: OperationURLParameter = {
  parameterPath: "storageTargetName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[-0-9a-zA-Z_]{1,80}$")
    },
    serializedName: "storageTargetName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const force: OperationQueryParameter = {
  parameterPath: ["options", "force"],
  mapper: {
    serializedName: "force",
    type: {
      name: "String"
    }
  }
};

export const storagetarget: OperationParameter = {
  parameterPath: "storagetarget",
  mapper: StorageTargetMapper
};
