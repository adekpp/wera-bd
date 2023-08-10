"use client";
import { useRouter } from "next/navigation";
export default function LinkTo({ to, children }) {
  const router = useRouter();
  return (
    <div className="cursor-pointer" onClick={() => router.push(`${to}`)}>
      {children}
    </div>
  );
}
