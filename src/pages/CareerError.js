import {Link, useRouteError} from 'react-router-dom';

const CarrerError = ()=>{
    const error = useRouteError();

    return(
        <div className="w-full h-full items-center px-2 py-5 ">
            <p className='text-sm font-medium tracking-wide '>
                {
                    error.message
                }
            </p>
            <Link to="/" className='text-lg font-medium tracking-wider underline underline-offset-4 decoration-blue-500 text-blue-500 ' >Go to home page</Link>
        </div>
    )
}

export default CarrerError;