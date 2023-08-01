const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="w-full flex px-48 pt-5 pb-24 text-white bg-black">
        © {year} Hardik Chhabra. Published with GitHub Pages.
      </div>
    </>
  );
};

export default Footer;
