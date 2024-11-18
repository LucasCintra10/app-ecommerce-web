import Image from "next/image";
import Button from "@/components/Button";
import { motion } from "framer-motion";

const Card = ({ name, description, image, value }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-white rounded-lg shadow-md overflow-hidden mx-auto cursor-pointer transform transition-transform duration-300 hover:scale-105"
    >
      <Image src={image} alt={`Product ${name}`} width={300} height={200} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-blue-600 font-bold">R${value}</span>
          <Button className="bg-gray-950 text-white py-1 px-2 rounded-md text-md">Add to Cart</Button>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
