import { Outlet } from "react-router-dom";

const CareerLayout = () => {
  return (
    <div className="block w-full h-full  px-5">
      <div className="py-2 px-2">
        <h2 className="text-lg font-medium text-black tracking-normal">
          This is career page
        </h2>
        <p className="text-sm font-normal text-black tracking-wide">
          Sit ea ut excepteur deserunt tempor voluptate enim fugiat. Do commodo
          sunt id aute. Id est aliquip et est id sit mollit. Tempor pariatur
          consequat ullamco do ullamco velit.Sit ea ut excepteur deserunt tempor voluptate enim fugiat. Do commodo
          sunt id aute. Id est aliquip et est id sit mollit. Tempor pariatur
          consequat ullamco do ullamco velit.
        </p>
      </div>
      <Outlet />
    </div>
  );
};

export default CareerLayout;
