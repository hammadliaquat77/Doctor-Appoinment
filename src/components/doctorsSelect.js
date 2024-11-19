import { categories } from "@/app/Constent/cardData"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"



export default function DoctorsSelect() {

    return (
        <div className="container mx-auto flex justify-between mb-10 -mt-20">

          <h1 className="text-3xl">Premium Doctor</h1>
            <Select>

                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Find Doctors" />
                </SelectTrigger>
                <SelectContent>
                    {<div>
                        {
                            categories.map((categories, index ) => <SelectItem key={categories.id} value="dark">{categories}</SelectItem>)
                        }
                    </div>}
                </SelectContent>
            </Select>

        </div>

    )
}
