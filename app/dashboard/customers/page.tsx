import { lusitana } from "@/app/ui/fonts";
import { Metadata } from "next";
import CustomersTable from "@/app/ui/customers/table";

export const metadata: Metadata = {
  title: "Customers"
}

export default async function Page({searchParams}: {
  searchParams?: {
    query?: string;
    page?: string;
  }
}) {
  const query = searchParams?.query || ""
  return <main>
    <CustomersTable query={query} />
  </main>;
}
