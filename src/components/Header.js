import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"
  import Image from "next/image"
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
  import Logo from '../../public/Logo.png'
  import Link from "next/link"
import { Button } from "./ui/button"

function Header() {

  const session = {name: 'hammad'};
  // const session = null;
  return (
    <div className="h-20 w-full  flex justify-between  bg-slate-100 p-6">
    <div className=" font-bold cursor-pointer -mt-20">
      <Image
    height={200}
    width={200}
    src={Logo}
      />
    </div>
    {
      session ? 
      <Menubar>
      <MenubarMenu>
        <MenubarTrigger>
            <div>
        <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
            </div>
    
        </MenubarTrigger>
        <MenubarContent>
          <Link href={'/Profile'}>
          <MenubarItem>
            Profile 
          </MenubarItem>
          </Link>
          
          <Link href={'/Appoinments'}>
          <MenubarItem>
            My Appoiment  
          </MenubarItem>
          </Link>
    
          <MenubarSeparator />
          <MenubarItem>LogOut</MenubarItem>
          <MenubarSeparator />
        </MenubarContent>
      </MenubarMenu>
    </Menubar> 
    :
    <Link href={'/Login'}>

    <Button variant={'outline'}>Login</Button>
    </Link>
    }

    </div>
  )
}

export default Header