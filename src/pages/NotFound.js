import { Link } from "react-router-dom";


const NotFound = () =>{
    return (
        <div className="block h-screen align-middle">
         <p className="text-lg text-start font-bold text-black">
         404 page not found !
         </p>
         <p className="text-lg font-bold text-black py-3">
            GO to the home page <Link to="/" className="text-sm text-blue-500 underline underline-offset-4" > Home page</Link>
         </p>
        </div>
    )
}

export default NotFound;