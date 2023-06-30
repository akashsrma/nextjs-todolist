"use client";
import { useRouter } from "next/navigation";

import Navbar from "@/components/navbar/navbar";
import Todolist from "@/components/todolist/todolist";

const dash = () => {
  const router = useRouter();
  return (
    <div>
      <Navbar />
      <div className="text-center mt-[12rem]">
        <Todolist />
      </div>
    </div>
  );
};

export default dash;
