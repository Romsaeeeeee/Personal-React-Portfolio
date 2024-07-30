const Topbar = () => {
  const links = [
    { label: 'About' },
    { label: 'Resume' },
    { label: 'Portfolio' },
    { label: 'Contact' },
  ]
  return (
    <div className="bg-[#373837] w-1/2 h-16 rounded-tr-xl rounded-bl-3xl shadow-md">
      <div className="w-full h-full flex justify-evenly items-center">
        {links && links.map((item, index) => (
          <p key={index} className="text-white cursor-pointer hover:text-yellow-500">{item?.label}</p>
        ))}
      </div>
    </div>
  );
};

export default Topbar;
