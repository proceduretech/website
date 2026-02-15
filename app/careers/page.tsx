import { getJobListings, getJobDepartments } from "@/lib/keka-jobs";
import { CareersClient } from "./CareersClient";

export const dynamic = "force-static";
export const revalidate = false;

export default async function CareersPage() {
  const [jobs, departments] = await Promise.all([
    getJobListings(),
    getJobDepartments(),
  ]);

  return <CareersClient jobs={jobs} departments={departments} />;
}
