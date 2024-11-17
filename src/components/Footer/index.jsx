import Link from "next/link";
import Input from "../Input";
import Button from "../Button";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p>
              Shop Name is your one-stop destination for all your shopping needs. We offer a wide range of products at
              competitive prices.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
            <form className="flex">
              <Input type="email" placeholder="Your email" className="flex-grow bg-white text-black p-1 rounded-md" />
              <Button
                type="submit"
                className="ml-2 bg-white text-blue-600 hover:bg-blue-100 rounded-md flex items-center p-1"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Lucas Rodrigues Cintra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
