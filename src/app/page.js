"use client";
import { useQuery } from "@tanstack/react-query";
import GetHomeData from "@/utils/providers/GetHomeData";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { TailSpin } from "react-loader-spinner";

export default function Home() {
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await GetHomeData(),
    queryKey: ["home"],
  });

  return (
    <main className="min-h-screen">
      <section className="bg-blue-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to UniFacef Store</h1>
          <p className="text-xl mb-8">Discover amazing products at unbeatable prices!</p>
          <Button className=" w-48 bg-white text-blue-600 mx-auto rounded-md p-2 font-semibold transform transition-transform duration-300 hover:scale-105">
            Shop Now
          </Button>
        </div>
      </section>
      <section className="flex flex-wrap items-center gap-4 px-4 py-8">
        {isLoading && (
          <div className="mx-auto my-32">
            <TailSpin color="#2563eb" />
          </div>
        )}
        {isError && <p>Error</p>}
        {data &&
          data.map((item, index) => (
            <Card key={index} name={item.name} description={item.description} image={item.image} value={item.value} />
          ))}
      </section>
    </main>
  );
}
