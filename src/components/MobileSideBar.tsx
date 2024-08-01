import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import SideBar from "./SideBar";

const MobileSideBar = ()=>{
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button><HiOutlineMenuAlt2 size={20}/></button>
      </SheetTrigger>
      <SheetContent side={'left'} className="p-0">
          <SideBar/>
        <SheetFooter>
          <SheetClose asChild>
      
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default MobileSideBar
