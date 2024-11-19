import { columns } from "@/components/AppoinmentTable/columns";
import { AppoinmentTable } from "@/components/AppoinmentTable/data-table";
import { Appoinment } from "../Constent/cardData";

export default function Appoiment() {
  return (
    <div className="container mx-auto">
        <h1 className="text-3xl">Appoinment</h1>
        <AppoinmentTable columns={columns} data={Appoinment}/>
    </div>
  )
}
