"use client"
import LoginPage from "@/component/LoginPage";
import  ContextProvider  from "./context/CustomContext";

export default function Home() {
  return (
      <main className="min-h-screen bg-black/[0.96] antialiased text-white bg-grid-white/[0.02]" >
        <LoginPage />
      </main>
  );
}
