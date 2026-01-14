
import Image from "next/image";
import Sidebar from "./component/sidebar";
import { MdHome } from "react-icons/md";
import Toggle from "./ui/toggle";

export default function Home() {

      const items = [
        {name: 'Dashboard', href: '/dashboard', icon: 'MdHome'},
        {name: 'Setting', href: '/setting', icon: 'MdHome'},
        {name: 'Login', href: '/login', icon: 'MdHome'}
    ]

  return (
    <div className="flex flex-col md:flex-row h-screen ">
      
      <Sidebar items={items} />
      <Toggle />
      <div className="flex flex-1 justify-center items-center">
        <Image src={'dashboard_icon.svg'} width={100} height={100} alt="icon" className="opacity-50"/>
      </div>
    </div>
  );
}
