import Header from "@/components/header";
import { ReactNode } from "react";

export default function Wrapper({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
