import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="container mx-auto">
        <section className="text-gray-600 body-font ">
  <div className=" flex py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
      DOCTOR APPOIMENT
        <br className="hidden lg:inline-block" />
       SYSTEM
       <br className="hidden lg:inline-block" />
       BY HAMMAD RAZA
      </h1>
      <p className="mb-8 leading-relaxed text-gray-500 w-[600px] ">
      A Doctor is a person who helps to keep human health in healthy condition. Doctors help patients to get relief from their pain. Doctors play a very essential role in human life. We can say Doctors are the incarnation of the god.
      </p>
      <div className="flex justify-center gap-3">
        
        <Button className='h-12 text-xl'>
            Find Doctors You Need 
        </Button>
        
        <Link href={'/DocInformation/DoctorApply'}> 
        <Button className='h-12 text-xl' variant='outline'>
            Apply as Doctor
        </Button>
        </Link>


      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-end">
      <Image
        className="rounded-lg"
        alt="hero"
        height={450}
        width={450}
        src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600"
      />
    </div>
  </div>
</section>

    </div>
  )
}
