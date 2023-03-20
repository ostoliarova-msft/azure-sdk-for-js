/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  VpnServerConfigurationsAssociatedWithVirtualWanListOptionalParams,
  VpnServerConfigurationsAssociatedWithVirtualWanListResponse
} from "../models";

/** Interface representing a VpnServerConfigurationsAssociatedWithVirtualWan. */
export interface VpnServerConfigurationsAssociatedWithVirtualWan {
  /**
   * Gives the list of VpnServerConfigurations associated with Virtual Wan in a resource group.
   * @param resourceGroupName The resource group name.
   * @param virtualWANName The name of the VirtualWAN whose associated VpnServerConfigurations is needed.
   * @param options The options parameters.
   */
  beginList(
    resourceGroupName: string,
    virtualWANName: string,
    options?: VpnServerConfigurationsAssociatedWithVirtualWanListOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<
        VpnServerConfigurationsAssociatedWithVirtualWanListResponse
      >,
      VpnServerConfigurationsAssociatedWithVirtualWanListResponse
    >
  >;
  /**
   * Gives the list of VpnServerConfigurations associated with Virtual Wan in a resource group.
   * @param resourceGroupName The resource group name.
   * @param virtualWANName The name of the VirtualWAN whose associated VpnServerConfigurations is needed.
   * @param options The options parameters.
   */
  beginListAndWait(
    resourceGroupName: string,
    virtualWANName: string,
    options?: VpnServerConfigurationsAssociatedWithVirtualWanListOptionalParams
  ): Promise<VpnServerConfigurationsAssociatedWithVirtualWanListResponse>;
}
