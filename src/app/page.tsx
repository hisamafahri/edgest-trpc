import { Inter } from "next/font/google";
import { TestComponent } from "./testComponent";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className} border border-blue-500 m-12 p-4`}>
      <p>Server Component</p>
      <TestComponent />
    </main>
  );
}
