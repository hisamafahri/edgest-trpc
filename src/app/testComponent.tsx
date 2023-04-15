"use client";
import { trpc } from "@/utils/trpc/trpc";

export const TestComponent = () => {
  const exampleQuery = trpc.example.greet.useQuery();

  if (exampleQuery.isLoading) return <p>Loading...</p>;
  if (exampleQuery.isError) return <p>Error...</p>;
  return (
    <div className="border border-red-400 p-2">
      <p>Client Component</p>
      <p className="border border-green-500">{exampleQuery.data?.message || "Empty"}</p>
    </div>
  );
};
