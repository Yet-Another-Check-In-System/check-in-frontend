import { validate as validateUuid } from "uuid";

export const validateSiteId = async (
  siteId: string | undefined
): Promise<Boolean> => {
  if (!siteId) {
    return false;
  }

  return validateUuid(siteId);
};
