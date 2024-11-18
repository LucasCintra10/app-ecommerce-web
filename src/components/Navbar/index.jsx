import Link from "next/link";
import { Search, ShoppingCartIcon, User, Heart } from "lucide-react";
import Input from "../Input";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10 bg-blue-600 text-white">
      <ul className="flex w-full px-4 py-4 items-center justify-between">
        <li className="text-2xl font-bold hidden md:block text-center">
          <Link href="/">UniFACEF</Link>
        </li>
        <li className="flex w-1/2 mx-4 bg-white p-1 rounded-md gap-2">
          <Search className="h-6 w-6 text-black" />
          <Input type="text" placeholder="Search for something..." className="w-full outline-none text-black" />
        </li>
        <div className="flex w-1/4 justify-between">
          <li>
            <Link href="/">
              <ShoppingCartIcon className="h-6 w-6" />
            </Link>
          </li>
          <li>
            <Link href="/">
              <Heart className="h-6 w-6" />
            </Link>
          </li>
          <li>
            <Link href="/">
              <User className="h-6 w-6" />
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
