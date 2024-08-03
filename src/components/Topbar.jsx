import { NavLink } from "react-router-dom";

const Topbar = () => {
  const links = [
    { label: "About", path: "/about" },
    { label: "Resume", path: "/resume" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <div className="bg-[#373837] w-1/2 h-16 rounded-tr-xl rounded-bl-3xl shadow-md tablet:w-full tablet:rounded-none tablet:rounded-t-2xl">
      <div className="w-full h-full flex justify-evenly items-center">
        {links.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="text-white cursor-pointer hover:text-yellow-500"
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Topbar;