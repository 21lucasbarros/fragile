import Sidebar from "@/components/side-bar";

interface DashboardProps {
  goToHome: () => void;
}

export default function Dashboard({ goToHome }: DashboardProps) {
  return (
    <div className="flex h-screen w-full bg-[#1a1a1a] text-white">
      <Sidebar goToHome={goToHome} />
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="mt-2 text-gray-400">
          Bem-vindo ao seu gerenciador de senhas.
        </p>
      </main>
    </div>
  );
}
