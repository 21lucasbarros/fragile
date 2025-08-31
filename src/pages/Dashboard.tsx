import Sidebar from "@/components/side-bar";
import ModalDashboard from "@/components/ui/modal-dashboard";

interface DashboardProps {
  goToHome: () => void;
}

export default function Dashboard({ goToHome }: DashboardProps) {
  return (
    <div className="flex h-screen w-full bg-[#1a1a1a] text-white">
      <Sidebar goToHome={goToHome} />
      <main className="flex-1 p-6">
        <header className="flex flex-row justify-between">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <ModalDashboard />
        </header>
      </main>
    </div>
  );
}
