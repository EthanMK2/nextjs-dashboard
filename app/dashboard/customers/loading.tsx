import { lusitana } from "@/app/ui/fonts";
import Search from "@/app/ui/search";
import { InvoicesTableSkeleton } from "@/app/ui/skeletons";

export default function Loading() {
  return <>
    <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
      Customers
    </h1>
    <Search placeholder="Search customers..." />
    <InvoicesTableSkeleton />
  </>
  // <div className="w-full h-full grid justify-center content-center">
  // <div className="animate-fadeOutIn rounded-full bg-gray-500 h-8 w-8 mx-2"></div>
  // </div>;
}
