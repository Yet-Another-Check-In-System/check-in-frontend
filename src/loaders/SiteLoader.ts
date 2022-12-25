import { defer } from "react-router-dom";
import { validate as uuidValidate } from "uuid";

export type SiteData = {
  id: string;
  name: string;
  company: string;
};

const loader = async ({ params }: { params: any }) => {
  const siteId = params.siteId as string | undefined;

  if (!siteId || !uuidValidate(siteId)) {
    throw new Response("Not Found", { status: 404, statusText: "Not Found" });
  }

  // Fetch data from API

  const demoData: SiteData = {
    id: siteId,
    name: "Demo Office",
    company: "Demo Company Ltd",
  };

  const dummyDataGenerator = async () => {
    await new Promise((r) => setTimeout(r, 2000));
    return demoData;
  };

  return defer({ siteData: dummyDataGenerator() });
};

export default loader;
