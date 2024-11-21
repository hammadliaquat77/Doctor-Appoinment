import { doctors } from '@/app/Constent/cardData'
import DoctorsSelect from '@/components/doctorsSelect'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link';

export default function DocInfo() {

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">

          <div className='py-10'>
            <DoctorsSelect />
          </div>

          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                      Our Doctors
                      </h1>
                      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
                      Doctors play an essential role in human life. It is a noble profession, 
                      as doctors help keep us healthy and help patients get relief from their pain. 
                      When your child writes an essay on a doctor, they realise the significance of
                      this person and develop respect for them.
                      </p>
          </div>




          {<div className="flex flex-wrap -m-2"> 
            {
              doctors.map((item, index) => {
                return (
                  
                      <div key={index} className="xl:w-1/3 md:w-1/2 p-4">
                        <div className="border-2 border-gray-200 shadow-lg p-6 rounded-lg">
                          <div className="mb-6">
                            <Image
                              alt="team"
                              className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                              src={item.image_url}
                              height={80}
                              width={80}
                            />

                          </div>
                          <h2 className="text-2xl text-gray-900 font-bold title-font mb-5 ">
                            {
                              item.name
                            }
                          </h2>

                          <div className='flex justify-between'>
                          <p className="leading-relaxed  font-bold "> Specialization : </p>
                           <span className=''>{item.specialization}</span>
                          </div>

                          <div className='flex justify-between'>
                          <p className="leading-relaxed  font-bold "> Hospital : </p>
                           <span className=''>{item.hospital}</span>
                          </div>

                          <div className='flex justify-between'>
                          <p className="leading-relaxed  font-bold "> Gender : </p>
                           <span className=''>{item.gender}</span>
                          </div>

                          <div className='flex justify-between'>
                          <p className="leading-relaxed  font-bold "> AppointmentTime : </p>
                           <span className=''>{item.appointmentTime}</span>
                          </div>

                          <div className='flex justify-between'>
                          <p className="leading-relaxed  font-bold "> Fees : </p>
                           <span className=''> {'$'} {item.fees}</span>
                          </div>

                          <div className='mt-5'>
                            <Link href={`/DocInformation/${item.id}`}>
                            <Button>See Details</Button>
                            </Link>
                          </div>

                        </div>
                      </div>
                )
              })
            }


          </div>}


        </div>
      </section>
    </div>
  )
}