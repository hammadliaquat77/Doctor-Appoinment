import { doctors } from "@/app/Constent/cardData"
import { ClockIcon } from "lucide-react"
import Image from "next/image"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { faHospital } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/DatePicker";

export default function DoctorDetail({ params }){

    const doctorInfo = doctors.find((doctors)=> doctors.id == params.id)
    return(
        <div className="min-h-screen">

  <div className="container px-5 py-6 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <Image
        alt="ecommerce"
        className="lg:w-1/2  lg:h-auto h-64 object-cover object-center rounded"
        src={doctorInfo.image_url}
        height={400}
        width={400}
      />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">
          {doctorInfo.category}
        </h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
          {doctorInfo.name}
        </h1>
        <div className="flex mb-4">
          <span className="flex items-center">
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-indigo-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-indigo-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-indigo-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-indigo-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-indigo-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="text-gray-600 ml-3">4 Reviews</span>
          </span>
          <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
              </svg>
            </a>
          </span>
        </div>
        <p className="leading-relaxed">
          Fam locavore kickstarter distillery. Mixtape chillwave tumeric
          sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps
          cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine
          tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean
          shorts keytar banjo tattooed umami cardigan.
        </p>
        <div className="flex flex-col mt-4">
            
          <div className="flex justify-between items-center mb-1">
           <div className="text-xl flex gap-4 items-center">
           <FontAwesomeIcon icon={faUser} />
          <span className="title-font font-bold text-xl flex items-center text-gray-900">Gender</span>
           </div>
          <span className="title-font font-thin text-md flex items-center text-gray-900">{doctorInfo.gender}</span>
          </div>

          <div className="flex  justify-between items-center mb-1">
           <div className="text-xl flex gap-4 items-center">
           <FontAwesomeIcon icon={faHospital} />
          <span className="title-font font-bold text-xl flex items-center text-gray-900">Hospital</span>
           </div>
          <span className="title-font font-thin text-md flex items-center text-gray-900">{doctorInfo.hospital}</span>
          </div>

          <div className="flex  justify-between items-center mb-1">
           <div className="text-xl flex gap-4 items-center">
           <FontAwesomeIcon icon={faClock} />
          <span className="title-font font-bold text-xl flex items-center text-gray-900">Appoinment Time</span>
           </div>
          <span className="title-font font-thin text-md flex items-center text-gray-900">{doctorInfo.appointmentTime}</span>
          </div>

          <div className="flex  justify-between items-center mb-1">
           <div className="text-xl flex gap-4 items-center">
           <FontAwesomeIcon icon={faMoneyBill} />
          <span className="title-font font-bold text-xl flex items-center text-gray-900">Fees</span>
           </div>
          <span className="title-font font-thin text-md flex items-center text-gray-900">{'$ '}{doctorInfo.fees}</span>
          </div>

          
        </div>
          <DatePicker />
          <Button className='mt-5 py-6 w-full'>Book Your Appoiment</Button>
      </div>
    </div>
  </div>

        </div>
    )
}