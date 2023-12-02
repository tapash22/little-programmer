import { NavLink,Outlet } from "react-router-dom";

const HelpLayout = () =>{

    return (
        <div className="block px-5">
            <div className="flex justify-start px-2 py-1">
                <ul className="p-0 m-0 flex justify-center gap-5 list-none">
                    <li className="w-auto">
                        <NavLink to="faq" className="text-sm font-medium px-2 text-green-400 tracking-wide" >FAQ</NavLink>
                    </li>
                    <li className="w-auto">
                    <NavLink to="contact" className="text-sm font-medium px-2 text-green-400 tracking-wide" >Contact</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex justify-center w-full h-full">
                <Outlet  />
            </div>
        </div>
    )
}

export default HelpLayout;