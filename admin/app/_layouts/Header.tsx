import Link from "next/link";

const Header = () => {
  return (
    <header className="">
      <nav className="bg-gray-800 fixed w-full z-20">
        <ul className="flex items-center space-x-2">
          <li>
            <Link href="/">
              <h1 className="text-3xl font-bold">Sincere</h1>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
