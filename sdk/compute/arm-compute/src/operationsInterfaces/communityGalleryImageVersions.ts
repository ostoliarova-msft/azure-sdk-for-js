/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  CommunityGalleryImageVersionsGetOptionalParams,
  CommunityGalleryImageVersionsGetResponse
} from "../models";

/** Interface representing a CommunityGalleryImageVersions. */
export interface CommunityGalleryImageVersions {
  /**
   * Get a community gallery image version.
   * @param location Resource location.
   * @param publicGalleryName The public name of the community gallery.
   * @param galleryImageName The name of the community gallery image definition.
   * @param galleryImageVersionName The name of the community gallery image version. Needs to follow
   *                                semantic version name pattern: The allowed characters are digit and period. Digits must be within
   *                                the range of a 32-bit integer. Format: <MajorVersion>.<MinorVersion>.<Patch>
   * @param options The options parameters.
   */
  get(
    location: string,
    publicGalleryName: string,
    galleryImageName: string,
    galleryImageVersionName: string,
    options?: CommunityGalleryImageVersionsGetOptionalParams
  ): Promise<CommunityGalleryImageVersionsGetResponse>;
}