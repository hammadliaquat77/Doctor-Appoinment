
// "use client"
 
// import { string, z } from "zod"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"



// import { Button } from "@/components/ui/button"
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form"
// import { Input } from "@/components/ui/input"



// const formSchema = z.object({
//      name: z.string().min(2).max(50),
//      bio: z.string().min(2).max(120),
//      hospital: z.string().min(2).max(50),
//      days: z.array[string],
//      fees: z.string(),
//      gender: z.string(),
//      appointmentTime: z.date(),
//      degree: z.string(),
//      specialization: z.string(),
//      experience: z.string(),
//      number: z.string(),
//      address: z.string(),
//      profileImg: z.string(),
//      email: z.string().email(),
// })



// const form = useForm({
//   resolver: zodResolver(formSchema),
//   defaultValues: {
//     username: "",
//   },
// })


// function onSubmit(values) {
//   console.log(values)
// }




// "use client";

// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";

// import React, {useCallback} from 'react'
// import {useDropzone} from 'react-dropzone'

// import Dropzone from 'react-dropzone'

// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "./ui/textarea";

// // Define the Zod schema for form validation
// const formSchema = z.object({
//   name: z.string().min(2, "Name must be at least 2 characters").max(50, "Name can't be longer than 50 characters"),
//   bio: z.string().min(2, "Bio must be at least 2 characters").max(120, "Bio can't be longer than 120 characters"),
//   hospital: z.string().min(2, "Hospital must be at least 2 characters").max(50, "Hospital name can't be longer than 50 characters"),
//   days: z.array(z.string().min(1, "Please select at least one day")),
//   fees: z.string(),
//   gender: z.string(),
//   appointmentTime: z.date(),
//   degree: z.string(),
//   specialization: z.string(),
//   experience: z.string(),
//   number: z.string(),
//   address: z.string(),
//   profileImg: z.string(),
//   email: z.string().email("Invalid email address"),
// });

// const FormComponent = () => {
//   const form = useForm({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       name: "",
//       bio: "",
//       hospital: "",
//       days: [],
//       fees: "",
//       gender: "",
//       appointmentTime: new Date(),
//       degree: "",
//       specialization: "",
//       experience: "",
//       number: "",
//       address: "",
//       profileImg: "",
//       email: "",
//     },
//   });
//   const onDrop = useCallback(acceptedFiles => {
//     // Do something with the files
//   }, [])
//   const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})


//   // Form submit handler
//   function onSubmit(values) {
//     console.log(values);
//   }

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)}>

//         <div className="grid grid-cols-2 gap-5 my-6">

        
//         <FormField
//           name="name"
//           control={form.control}
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Name</FormLabel>
//               <FormControl>
//                 <Input {...field} placeholder="Enter your name" />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
       
//         <FormField
//           name="hospital"
//           control={form.control}
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Hospital</FormLabel>
//               <FormControl>
//                 <Input {...field} placeholder="Enter hospital name" />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />


//         <FormField
//           name="days"
//           control={form.control}
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Available Days</FormLabel>
//               <FormControl>
//                 <Input {...field} placeholder="Enter days (e.g. , Mon , Tues)" />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />


//         <FormField
//           name="fees"
//           control={form.control}
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Fees</FormLabel>
//               <FormControl>
//                 <Input {...field} placeholder="Enter fees" />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <FormField
//           name="gender"
//           control={form.control}
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Gender</FormLabel>
//               <FormControl>
//                 <Input {...field} placeholder="Enter gender" />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <FormField
//           name="appointmentTime"
//           control={form.control}
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Appointment Time</FormLabel>
//               <FormControl>
//                 <Input type="datetime-local" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <FormField
//           name="degree"
//           control={form.control}
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Degree</FormLabel>
//               <FormControl>
//                 <Input {...field} placeholder="Enter your degree" />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <FormField
//           name="specialization"
//           control={form.control}
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Specialization</FormLabel>
//               <FormControl>
//                 <Input {...field} placeholder="Enter specialization" />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <FormField
//           name="experience"
//           control={form.control}
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Experience</FormLabel>
//               <FormControl>
//                 <Input {...field} placeholder="Enter years of experience" />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <FormField
//           name="number"
//           control={form.control}
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Contact Number</FormLabel>
//               <FormControl>
//                 <Input {...field} type='number' placeholder="Enter your phone number" />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />


//         <FormField
//           name="email"
//           control={form.control}
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Email</FormLabel>
//               <FormControl>
//                 <Input type="email" {...field} placeholder="Enter your email" />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />


//         <FormField
//           name="address"
//           control={form.control}
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Address</FormLabel>
//               <FormControl>
//                 <Input {...field} placeholder="Enter your address" />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         </div>

        
//          <FormField
//           name="bio"
//           control={form.control}
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Bio</FormLabel>
//               <FormControl>
//                 <Textarea {...field} placeholder="Enter a short bio" />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//        <div className="my-6">

       
//         <FormField
//           name="profileImg"
//           control={form.control}
//           render={({ field }) => (


            // <FormItem>
            //   <FormLabel>Profile Image URL</FormLabel>
            //   <FormControl>
            //     <Input {...field} placeholder="Enter profile image URL" />
            //   </FormControl>
            //   <FormMessage />
            // </FormItem>
            
    //         <div {...getRootProps()}>
    //   <input {...getInputProps()} />
    //   {
    //     isDragActive ?
    //     <p>Drop the files here ...</p> :
    //     <p>Drag 'n' drop some files here, or click to select files</p>
    //   }
    // </div>

//     <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
//   {({getRootProps, getInputProps}) => (
//     <section >
//       <div {...getRootProps()}>
//         <input {...getInputProps()} />
//         <p>Drag 'n' drop some files here, or click to select files</p>
//       </div>
//     </section>
//   )}
// </Dropzone>
//           )}
//           />

//         </div>


//         <Button type="submit">Submit</Button>
//       </form>
//     </Form>
//   );
// };

// export default FormComponent;
























"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon } from 'lucide-react'
import { format } from "date-fns"
import { cn } from "@/lib/utils"

const days = [
  { id: "mon", label: "Monday" },
  { id: "tue", label: "Tuesday" },
  { id: "wed", label: "Wednesday" },
  { id: "thu", label: "Thursday" },
  { id: "fri", label: "Friday" },
  { id: "sat", label: "Saturday" },
  { id: "sun", label: "Sunday" },
] 

// Define the Zod schema for form validation
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50, "Name can't be longer than 50 characters"),
  bio: z.string().min(2, "Bio must be at least 2 characters").max(120, "Bio can't be longer than 120 characters"),
  hospital: z.string().min(2, "Hospital must be at least 2 characters").max(50, "Hospital name can't be longer than 50 characters"),
  days: z.array(z.string()).min(1, "Please select at least one day"),
  fees: z.string(),
  gender: z.enum(["male", "female", "other"]),
  appointmentTime: z.date(),
  degree: z.string(),
  specialization: z.string(),
  experience: z.string(),
  number: z.string(),
  address: z.string(),
  profileImg: z.string(),
  email: z.string().email("Invalid email address"),
})

export default function DoctorForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      bio: "",
      hospital: "",
      days: [],
      fees: "",
      gender: "male",
      appointmentTime: new Date(),
      degree: "",
      specialization: "",
      experience: "",
      number: "",
      address: "",
      profileImg: "",
      email: "",
    },
  })

  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles)
    // Handle file upload logic here
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  function onSubmit(values) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-2 gap-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter your name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="hospital"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Hospital</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter hospital name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="days"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Available Days</FormLabel>
                <Select
                  onValueChange={(value) => {
                    if (field.value.includes(value)) {
                      field.onChange(field.value.filter((item) => item !== value))
                    } else {
                      field.onChange([...field.value, value])
                    }
                  }}
                  defaultValue={field.value}
                 >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select available days" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {days.map((day) => (
                      <SelectItem key={day.id} value={day.id}>
                        {day.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="fees"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fees</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter fees" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gender</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="appointmentTime"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Appointment Time</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date < new Date() || date > new Date("2024-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="degree"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Degree</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter your degree" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="specialization"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Specialization</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter specialization" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="experience"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Experience</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter years of experience" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="number"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact Number</FormLabel>
                <FormControl>
                  <Input {...field} type='tel' placeholder="Enter your phone number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} type="email" placeholder="Enter your email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter your address" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea {...field} placeholder="Enter a short bio" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* <FormField
          control={form.control}
          name="profileImg"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Profile Image</FormLabel>
              <FormControl>
                <div {...getRootProps()} className="border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer">
                  <input {...getInputProps()} />
                  <p>Drag 'n' drop some files here, or click to select files</p>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> */}

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
