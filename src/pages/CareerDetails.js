import image from "../assets/man.jpg";
import { useParams, useLoaderData, Link } from "react-router-dom";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { IoMailOpenSharp } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

const CareerDetails = () => {
  const { id } = useParams();
  const career = useLoaderData();

  const handleOpenMail = () => {
    const recipientEmail = "recipient@example.com";
    const subject = "Hello from React App";
    const body = "This is the body of the email.";

    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="block py-3 w-full px-5">
      <div className="flex justify-around gap-3 py-5">
        <div className="w-1/3 h-auto block bg-gray-800 rounded-lg shadow-lg shadow-gray-700">
          <img src={image} alt="" className="w-auto h-auto rounded-lg" />
          <div className="block py-5">
            <div className="px-4">
              <h3 className="text-sm font-medium text-gray-300 uppercase tracking-wider text-center">
                {career.name}
              </h3>
              <h3 className="text-sm py-2 font-medium text-gray-200 tracking-wider text-center">
                {career.email}
              </h3>
              <p className="text-gray-200 tracking-wider text-center font-normal text-sm py-1">
                {" "}
                Jr. Software Engineer
              </p>
              <p className="text-gray-200 tracking-wider text-center font-normal text-sm py-1">
                Banani, Dhaka
              </p>
              <p className="text-gray-200 tracking-wider text-center font-normal text-sm py-1">
                +8801674340000
              </p>
              <h3 className="text-lg text-center font-bold text-gray-300 tracking-wider underline underline-offset-8 decoration-indigo-600">
                Career
              </h3>
              <h3 className="text-sm font-normal text-gray-300 tracking-wider py-2">
                {career.body}
              </h3>
            </div>
            <ul className="flex justify-center list-none bg-indigo-600 items-center py-2 ">
              <li className="px-2">
                <Link to="https://www.facebook.com/">
                  <FaFacebook className="text-2xl font-bold text-gray-200" />
                </Link>
              </li>
              <li className="px-2">
                <Link to="https://www.linkedin.com/">
                  <FaLinkedin className="text-2xl font-bold text-gray-200" />
                </Link>
              </li>
              <li className="px-2">
                <Link to="/">
                  <FaXTwitter className="text-2xl font-bold text-gray-200" />
                </Link>
              </li>
              <li className="px-2">
                <button onClick={handleOpenMail}>
                  <IoMailOpenSharp className="text-2xl font-bold text-gray-200" />
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-2/3 h-auto py-5 px-5 bg-gray-800 block rounded-lg shadow-lg shadow-gray-700">
          <h3 className="text-xl font-bold text-gray-300 tracking-wider underline underline-offset-8 decoration-indigo-600 ">
            Biography
          </h3>
          <h3 className="text-sm font-normal text-gray-400 tracking-wider text-justify py-2 ">
            Irure exercitation Lorem magna adipisicing adipisicing esse mollit
            consectetur deserunt nisi qui labore esse. Excepteur nostrud eu sit
            aute consectetur qui. Irure ea sit tempor culpa. Excepteur Lorem
            consectetur fugiat ad Lorem ea aliqua eiusmod. Sunt dolor irure do
            aliqua quis aliqua nisi amet irure pariatur culpa. Enim labore
            incididunt magna eu ipsum aute veniam irure sint excepteur dolore
            labore reprehenderit officia.Irure exercitation Lorem magna
            adipisicing adipisicing esse mollit consectetur deserunt nisi qui
            labore esse. Excepteur nostrud eu sit aute consectetur qui.
            <br />
            Irure ea sit tempor culpa. Excepteur Lorem consectetur fugiat ad
            Lorem ea aliqua eiusmod. Sunt dolor irure do aliqua quis aliqua nisi
            amet irure pariatur culpa. Enim labore incididunt magna eu ipsum
            aute veniam irure sint excepteur dolore labore reprehenderit
            officia.Irure exercitation Lorem magna adipisicing adipisicing esse
            mollit consectetur deserunt nisi qui labore esse. Excepteur nostrud
            eu sit aute consectetur qui. Irure ea sit tempor culpa. Excepteur
            Lorem consectetur fugiat ad Lorem ea aliqua eiusmod. Sunt dolor
            irure do aliqua quis aliqua nisi amet irure pariatur culpa. Enim
            labore incididunt magna eu ipsum aute veniam irure sint excepteur
            dolore labore reprehenderit officia.
            <br />
            Irure exercitation Lorem magna adipisicing adipisicing esse mollit
            consectetur deserunt nisi qui labore esse. Excepteur nostrud eu sit
            aute consectetur qui. Irure ea sit tempor culpa. Excepteur Lorem
            consectetur fugiat ad Lorem ea aliqua eiusmod. Sunt dolor irure do
            aliqua quis aliqua nisi amet irure pariatur culpa. Enim labore
            incididunt magna eu ipsum aute veniam irure sint excepteur dolore
            labore reprehenderit officia.
            <br />
            Irure exercitation Lorem magna adipisicing adipisicing esse mollit
            consectetur deserunt nisi qui labore esse. Excepteur nostrud eu sit
            aute consectetur qui. Irure ea sit tempor culpa. Excepteur Lorem
            consectetur fugiat ad Lorem ea aliqua eiusmod. Sunt dolor irure do
            aliqua quis aliqua nisi amet irure pariatur culpa. Enim labore
            incididunt magna eu ipsum aute veniam irure sint excepteur dolore
            labore reprehenderit officia.
            <br />
            Irure exercitation Lorem magna adipisicing adipisicing esse mollit
            consectetur deserunt nisi qui labore esse. Excepteur nostrud eu sit
            aute consectetur qui. Irure ea sit tempor culpa. Excepteur Lorem
            consectetur fugiat ad Lorem ea aliqua eiusmod. Sunt dolor irure do
            aliqua quis aliqua nisi amet irure pariatur culpa. Enim labore
            incididunt magna eu ipsum aute veniam irure sint excepteur dolore
            labore reprehenderit officia.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CareerDetails;

export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch("http://localhost:4000/careers/" + id);

  if (!res.ok) {
    throw Error("Could not found the career");
  }
  return res.json();
};
