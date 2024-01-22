import EditCustomerForm from "@/app/ui/customers/edit-form";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import { fetchCustomerById } from "@/app/lib/data";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Edit Customer"
}

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const customer = await fetchCustomerById(id)

  if (!customer) {
    notFound();
  }
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Customers", href: "/dashboard/customers" },
          {
            label: "Edit Customer",
            href: `/dashboard/customers/${id}/edit`,
            active: true,
          },
        ]}
      />
      <EditCustomerForm id={customer.id} name={customer.name} email={customer.email} image_url={customer.image_url} />
    </main>
  );
}
