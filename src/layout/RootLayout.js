import { NavLink, Outlet } from "react-router-dom";
import image from '../assets/logo192.png';
import BreadCrumb from "../components/BreadCrumb";

const RootLayout = () =>{
    return (
      <div className="block bg-white">
        {/* navigation */}
        <div className="flex justify-between bg-gray-300 px-5">
            <div className=" flex justify-center py-2">
                <img src={image} alt="" className="w-auto h-10"  />
            </div>
            <div className="flex justify-end w-auto items-center">
                <ul className="p-0 m-0 flex justify-center gap-5 list-none">
                    <li className="w-auto">
                        <NavLink to="/" className="text-sm font-medium px-2 text-black tracking-wide" >Home</NavLink>
                    </li>
                    <li>
                    <NavLink to="/map"  className="text-sm font-medium px-2 text-black tracking-wide" >Map</NavLink>
                    </li>
                    <li>
                    <NavLink to="/help"  className="text-sm font-medium px-2 text-black tracking-wide" >Help</NavLink>
                    </li>
                    <li>
                    <NavLink to="/careers"  className="text-sm font-medium px-2 text-black tracking-wide" >Careers</NavLink>
                    </li>
                </ul>
            </div>
        </div>
        <BreadCrumb  />
        {/* navigation end */}
        <div className="flex justify-center w-full h-full  px-5">
            <Outlet  />
        </div>
      </div>
    )
}

export default RootLayout;