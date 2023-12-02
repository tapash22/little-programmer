import { Link, useLoaderData } from "react-router-dom";

const Career = () => {
  const careers = useLoaderData();
  const careerblock = careers.slice(0,5)

  return <div className="block py-3 w-full">
    {
      careerblock.map(career => (
        <Link to={career.id.toString()} key={career.id} >
          <div className="py-3 px-4 shadow-lg rounded-lg shadow-gray-400  bg-blue-900  my-4 w-full h-auto">
          <p className="text-lg font-bold tracking-wider text-white">
            {
              career.name
            }
          </p>
          <p className="text-sm font-semibold tracking-wider text-white">
            {
              career.email
            }
          </p>
          <p className="text-sm font-medium tracking-wide text-white text-justify">
            {
              career.body
            }
          </p>
          </div>
         
          
        </Link>
      ))
    }
    </div>;
};

export default Career;

export const careerLoaders = async () => {
  const res = await fetch("http://localhost:4000/careers");
  return res.json();
};
