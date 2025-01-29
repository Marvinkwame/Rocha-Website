import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "ixkm24zi",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});