// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/**
 * Identifies a communication participant.
 */
export type CommunicationIdentifier =
  | CommunicationUserIdentifier
  | PhoneNumberIdentifier
  | MicrosoftTeamsUserIdentifier
  | MicrosoftTeamsBotIdentifier
  | UnknownIdentifier;

/**
 * An Azure Communication user.
 */
export interface CommunicationUserIdentifier {
  /**
   * Id of the CommunicationUser as returned from the Communication Service.
   */
  communicationUserId: string;
}

/**
 * A phone number.
 */
export interface PhoneNumberIdentifier {
  /**
   * Optional raw id of the phone number.
   */
  rawId?: string;
  /**
   * The phone number in E.164 format.
   */
  phoneNumber: string;
}

/**
 * A Microsoft Teams user.
 */
export interface MicrosoftTeamsUserIdentifier {
  /**
   * Optional raw id of the Microsoft Teams user.
   */
  rawId?: string;

  /**
   * Id of the Microsoft Teams user. If the user isn't anonymous, the id is the AAD object id of the user.
   */
  microsoftTeamsUserId: string;

  /**
   * True if the user is anonymous, for example when joining a meeting with a share link. If missing, the user is not anonymous.
   */
  isAnonymous?: boolean;

  /**
   * The cloud that the Microsoft Teams user belongs to. If missing, the cloud is "public".
   */
  cloud?: "public" | "dod" | "gcch";
}

/**
 * A Microsoft Teams bot.
 */
export interface MicrosoftTeamsBotIdentifier {
  /**
   * Optional raw id of the Microsoft Teams bot.
   */
  rawId?: string;

  /**
   * Id of the Microsoft Teams bot. If the bot isn't anonymous, the id is the AAD object id of the bot.
   */
  microsoftTeamsBotId: string;

  /**
   * True if the bot is global and false (or missing) if the bot is tenantized.
   */
  isGlobal?: boolean;

  /**
   * The cloud that the Microsoft Teams bot belongs to. If missing, the cloud is "public".
   */
  cloud?: "public" | "dod" | "gcch";
}

/**
 * An unknown identifier that doesn't fit any of the other identifier types.
 */
export interface UnknownIdentifier {
  /**
   * Id of the UnknownIdentifier.
   */
  id: string;
}

/**
 * Tests an Identifier to determine whether it implements CommunicationUserIdentifier.
 *
 * @param identifier - The assumed CommunicationUserIdentifier to be tested.
 */
export const isCommunicationUserIdentifier = (
  identifier: CommunicationIdentifier
): identifier is CommunicationUserIdentifier => {
  return typeof (identifier as any).communicationUserId === "string";
};

/**
 * Tests an Identifier to determine whether it implements PhoneNumberIdentifier.
 *
 * @param identifier - The assumed PhoneNumberIdentifier to be tested.
 */
export const isPhoneNumberIdentifier = (
  identifier: CommunicationIdentifier
): identifier is PhoneNumberIdentifier => {
  return typeof (identifier as any).phoneNumber === "string";
};

/**
 * Tests an Identifier to determine whether it implements MicrosoftTeamsUserIdentifier.
 *
 * @param identifier - The assumed available to be tested.
 */
export const isMicrosoftTeamsUserIdentifier = (
  identifier: CommunicationIdentifier
): identifier is MicrosoftTeamsUserIdentifier => {
  return typeof (identifier as any).microsoftTeamsUserId === "string";
};

/**
 * Tests an Identifier to determine whether it implements MicrosoftTeamsBotIdentifier.
 *
 * @param identifier - The assumed available to be tested.
 */
export const isMicrosoftTeamsBotIdentifier = (
  identifier: CommunicationIdentifier
): identifier is MicrosoftTeamsBotIdentifier => {
  return typeof (identifier as any).microsoftTeamsBotId === "string";
};

/**
 * Tests an Identifier to determine whether it implements UnknownIdentifier.
 *
 * @param identifier - The assumed UnknownIdentifier to be tested.
 */
export const isUnknownIdentifier = (
  identifier: CommunicationIdentifier
): identifier is UnknownIdentifier => {
  return typeof (identifier as any).id === "string";
};

/**
 * The CommunicationIdentifierKind is a discriminated union that adds a property `kind` to an Identifier.
 */
export type CommunicationIdentifierKind =
  | CommunicationUserKind
  | PhoneNumberKind
  | MicrosoftTeamsUserKind
  | MicrosoftTeamsBotKind
  | UnknownIdentifierKind;

/**
 * IdentifierKind for a CommunicationUserIdentifier.
 */
export interface CommunicationUserKind extends CommunicationUserIdentifier {
  /**
   * The identifier kind.
   */
  kind: "communicationUser";
}

/**
 * IdentifierKind for a PhoneNumberIdentifier.
 */
export interface PhoneNumberKind extends PhoneNumberIdentifier {
  /**
   * The identifier kind.
   */
  kind: "phoneNumber";
}

/**
 * IdentifierKind for a MicrosoftTeamsUserIdentifier.
 */
export interface MicrosoftTeamsUserKind extends MicrosoftTeamsUserIdentifier {
  /**
   * The identifier kind.
   */
  kind: "microsoftTeamsUser";
}

/**
 * IdentifierKind for a MicrosoftTeamsBotIdentifier.
 */
export interface MicrosoftTeamsBotKind extends MicrosoftTeamsBotIdentifier {
  /**
   * The identifier kind.
   */
  kind: "microsoftTeamsBot";
}

/**
 * IdentifierKind for UnknownIdentifier.
 */
export interface UnknownIdentifierKind extends UnknownIdentifier {
  /**
   * The identifier kind.
   */
  kind: "unknown";
}

/**
 * Returns the CommunicationIdentifierKind for a given CommunicationIdentifier. Returns undefined if the kind couldn't be inferred.
 *
 * @param identifier - The identifier whose kind is to be inferred.
 */
export const getIdentifierKind = (
  identifier: CommunicationIdentifier
): CommunicationIdentifierKind => {
  if (isCommunicationUserIdentifier(identifier)) {
    return { ...identifier, kind: "communicationUser" };
  }
  if (isPhoneNumberIdentifier(identifier)) {
    return { ...identifier, kind: "phoneNumber" };
  }
  if (isMicrosoftTeamsUserIdentifier(identifier)) {
    return { ...identifier, kind: "microsoftTeamsUser" };
  }
  if (isMicrosoftTeamsBotIdentifier(identifier)) {
    return { ...identifier, kind: "microsoftTeamsBot" };
  }
  return { ...identifier, kind: "unknown" };
};

/**
 * Returns the rawId for a given CommunicationIdentifier. You can use the rawId for encoding the identifier and then use it as a key in a database.
 *
 * @param identifier - The identifier to be translated to its rawId.
 */
export const getIdentifierRawId = (identifier: CommunicationIdentifier): string => {
  const identifierKind = getIdentifierKind(identifier);
  switch (identifierKind.kind) {
    case "communicationUser":
      return identifierKind.communicationUserId;
    case "microsoftTeamsUser": {
      const { microsoftTeamsUserId, rawId, cloud, isAnonymous } = identifierKind;
      if (rawId) return rawId;
      if (isAnonymous) return `8:teamsvisitor:${microsoftTeamsUserId}`;
      switch (cloud) {
        case "dod":
          return `8:dod:${microsoftTeamsUserId}`;
        case "gcch":
          return `8:gcch:${microsoftTeamsUserId}`;
        case "public":
          return `8:orgid:${microsoftTeamsUserId}`;
      }
      return `8:orgid:${microsoftTeamsUserId}`;
    }
    case "microsoftTeamsBot": {
      const { microsoftTeamsBotId, rawId, cloud, isGlobal } = identifierKind;
      if (rawId) return rawId;
      if (isGlobal) {
        switch (cloud) {
          case "dod":
            return `28:dod-global:${microsoftTeamsBotId}`;
          case "gcch":
            return `28:gcch-global:${microsoftTeamsBotId}`;
        }
        return `28:${microsoftTeamsBotId}`;
      }
      switch (cloud) {
        case "dod":
          return `28:dod:${microsoftTeamsBotId}`;
        case "gcch":
          return `28:gcch:${microsoftTeamsBotId}`;
      }
      return `28:orgid:${microsoftTeamsBotId}`;
    }
    case "phoneNumber": {
      const { phoneNumber, rawId } = identifierKind;
      if (rawId) return rawId;
      return `4:${phoneNumber}`;
    }
    case "unknown": {
      return identifierKind.id;
    }
  }
};

const buildMicrosoftTeamsBotIdentifier = (
  id: string,
  cloud: "public" | "dod" | "gcch",
  isGlobal: boolean
): CommunicationIdentifierKind => {
  return {
    kind: "microsoftTeamsBot",
    microsoftTeamsBotId: id,
    cloud: cloud,
    isGlobal: isGlobal,
  };
};

const buildMicrosoftTeamsUserIdentifier = (
  id: string,
  cloud: "public" | "dod" | "gcch",
  isAnonymous: boolean
): CommunicationIdentifierKind => {
  return {
    kind: "microsoftTeamsUser",
    microsoftTeamsUserId: id,
    isAnonymous: isAnonymous,
    cloud: cloud,
  };
};

/**
 * Creates a CommunicationIdentifierKind from a given rawId. When storing rawIds use this function to restore the identifier that was encoded in the rawId.
 *
 * @param rawId - The rawId to be translated to its identifier representation.
 */
export const createIdentifierFromRawId = (rawId: string): CommunicationIdentifierKind => {
  if (rawId.startsWith("4:")) {
    return { kind: "phoneNumber", phoneNumber: `${rawId.substring("4:".length)}` };
  }

  const segments = rawId.split(":");
  if (segments.length < 3) {
    if (segments.length === 2 && segments[0] === "28") {
      return buildMicrosoftTeamsBotIdentifier(segments[1], "public", true);
    }
    return { kind: "unknown", id: rawId };
  }

  const prefix = `${segments[0]}:${segments[1]}:`;
  const suffix = rawId.substring(prefix.length);

  switch (prefix) {
    case "8:teamsvisitor:":
      return { kind: "microsoftTeamsUser", microsoftTeamsUserId: suffix, isAnonymous: true };
    case "8:orgid:":
      return buildMicrosoftTeamsUserIdentifier(suffix, "public", false);
    case "8:dod:":
      return buildMicrosoftTeamsUserIdentifier(suffix, "dod", false);
    case "8:gcch:":
      return buildMicrosoftTeamsUserIdentifier(suffix, "gcch", false);
    case "8:acs:":
    case "8:spool:":
    case "8:dod-acs:":
    case "8:gcch-acs:":
      return { kind: "communicationUser", communicationUserId: rawId };
    case "28:gcch-global:":
      return buildMicrosoftTeamsBotIdentifier(suffix, "gcch", true);
    case "28:orgid:":
      return buildMicrosoftTeamsBotIdentifier(suffix, "public", false);
    case "28:dod-global:":
      return buildMicrosoftTeamsBotIdentifier(suffix, "dod", true);
    case "28:gcch:":
      return buildMicrosoftTeamsBotIdentifier(suffix, "gcch", false);
    case "28:dod:":
      return buildMicrosoftTeamsBotIdentifier(suffix, "dod", false);
  }
  return { kind: "unknown", id: rawId };
};
