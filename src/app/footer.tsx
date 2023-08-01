import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="w-full flex px-12 md:px-24 lg:px-48 pt-5 pb-24 text-gray-400 bg-black">
        <p>
          © {year} Hardik Chhabra. Published with{" "}
          <Link
            href="https://firebase.google.com/"
            className="hover:text-white"
          >
            Google Firebase
          </Link>
          . Developed using{" "}
          <Link href="https://nextjs.org/" className="hover:text-white">
            NextJS
          </Link>
          . Source code can be{" "}
          <Link
            href="https://github.com/Hardchik/portfolio-website"
            className="hover:text-white"
          >
            found here
          </Link>
          .
        </p>
      </div>
    </>
  );
};

export default Footer;
