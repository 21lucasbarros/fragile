import {
  Home,
  Key,
  LockKeyhole,
  LogOut,
  Share,
  Shield,
  Star,
} from "lucide-react";
import GradientIcon from "./ui/gradient-icon";
import { Button } from "./ui/button";
import ModalSettings from "./ui/modal-settings";
import { Page } from "@/pages/Dashboard";

interface SidebarProps {
  goToHome: () => void;
  setActivePage: (page: Page) => void;
}

export default function Sidebar({ goToHome, setActivePage }: SidebarProps) {
  return (
    <aside className="w-48 bg-[#121214] flex flex-col rounded-r-3xl">
      <div className="p-4 flex items-center mt-4">
        <div className="bg-[#f7f7f7] p-2 rounded-lg">
          <GradientIcon />
        </div>
      </div>

      <nav className="flex-1 p-5 space-y-2 mt-5">
        <div className="flex flex-col gap-4">
          <h3 className="text-[13px] text-gray-300 uppercase tracking-wide">
            DASHBOARD
          </h3>
          <Button
            variant="ghost"
            className="justify-start text-white"
            onClick={() => setActivePage("overview")}
          >
            <Home />
            <span>Overview</span>
          </Button>
          <Button
            variant="ghost"
            className="justify-start text-white"
            onClick={() => setActivePage("all-passwords")}
          >
            <LockKeyhole />
            <span>All Passwords</span>
          </Button>
          <Button
            variant="ghost"
            className="justify-start text-white"
            onClick={() => setActivePage("favorites")}
          >
            <Star />
            <span>Favorites</span>
          </Button>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-[13px] text-gray-300 uppercase tracking-wide">
            SECURITY
          </h3>
          <Button
            variant="ghost"
            className="justify-start text-white"
            onClick={() => setActivePage("generator")}
          >
            <Key />
            <span>Generator</span>
          </Button>
          <Button
            variant="ghost"
            className="justify-start text-white"
            onClick={() => setActivePage("security-check")}
          >
            <Shield />
            <span>Security Check</span>
          </Button>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-[13px] text-gray-300 uppercase tracking-wide">
            PROFILE
          </h3>
          <ModalSettings />
          <Button variant="ghost" className="justify-start text-white">
            <Share />
            <span>Export Data</span>
          </Button>
        </div>
      </nav>

      <div className="p-5 text-gray-400 mb-10">
        <button className="flex flex-row gap-4" onClick={goToHome}>
          <LogOut />
          <p className="text-[15px] font-bold">Sign out</p>
        </button>
      </div>
    </aside>
  );
}
