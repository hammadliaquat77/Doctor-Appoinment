import { doctors } from '@/app/Constent/cardData'
import Image from 'next/image'

import { Button } from './ui/button';
import Link from 'next/link';

export default function Cards({ isHome }) {

  const filtered = isHome ? doctors.slice(0,6) : doctors;
  
  return (
    <div>
     <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    
    <div className='container mx-auto flex justify-between mb-10 -mt-20'>
      
    <h1 className="text-3xl">Premium Doctor</h1>
    <div>
      {
        isHome ? <Link href={'/DocInformation'}>
          <Button variant='outline'>See All</Button>
        </Link> :
         <div className="flex flex-wrap -m-2">
         {
           filtered.map((item, index)=>  {
             return(
             <div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={item.id}  >
             <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
               <Image
                 alt="team"
                 className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                 src={item.image_url}
                 height={80}
                 width={80}
               />
               <div className="flex-grow">
                 <h2 className="text-gray-900 title-font font-medium">
                   {item.name}
                 </h2>
                 <p className="text-gray-500">{item.specialization} </p>
               </div>
             </div>
           </div>
           )
           })
         }
         
         
       </div>
           
      }
    </div>
    </div>
    
    
    { <div className="flex flex-wrap -m-2 cursor-pointer">
      {
        filtered.map((item, index)=>  {
          return(
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={item.id}  >
          <div className="h-full flex border-gray-200 border p-4 rounded-lg">
            <Image
              alt="team"
              className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              src={item.image_url}
              height={80}
              width={80}
            />
            <div className="flex-grow justify-center items-center">
              <h2 className="text-gray-900 title-font text-xl  font-medium">
                {item.name}
              </h2>
              <p className="text-gray-500">{item.specialization}</p>
               <div className='mt-3'>
                    <Link href={`/DocInformation/${item.id}`}>
                      <Button className='text-sm '>Details</Button>
                    </Link>
              </div> 
            </div>
          </div>
        </div>
        )
        })
      }
      
      
    </div> }
  </div>
</section>
    </div>
  )
}



