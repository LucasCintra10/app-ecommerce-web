"use client";
import { useQuery } from "@tanstack/react-query";
import GetHomeData from "@/utils/providers/GetHomeData";
import Card from "@/components/Card";
import Button from "@/components/Button";

export default function Home() {
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await GetHomeData(),
    queryKey: ["home"],
  });

  return (
    <main>
        <section className="bg-blue-500 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Shop Name</h1>
            <p className="text-xl mb-8">Discover amazing products at unbeatable prices!</p>
            <Button className=" w-48 bg-white text-blue-600 hover:bg-blue-100 mx-auto rounded-md p-2 font-semibold">Shop Now</Button>
          </div>
        </section>
      <div className="flex flex-wrap items-center gap-4 p-4">
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error</p>}
        {data &&
          data.map((item, index) => (
            <Card key={index} name={item.name} description={item.description} image={item.image} value={item.value} />
          ))}
      </div>
    </main>
  );
}
