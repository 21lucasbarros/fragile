import {
  Home,
  Key,
  LockKeyhole,
  LogOut,
  Settings,
  Share,
  Shield,
  Star,
} from "lucide-react";
import GradientIcon from "./ui/gradientIcon";
import { Button } from "./ui/button";

interface SidebarProps {
  goToHome: () => void;
}

export default function Sidebar({ goToHome }: SidebarProps) {
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
            className="justify-start text-white hover:bg-gray-700"
          >
            <Home />
            <span>Overview</span>
          </Button>
          <Button
            variant="ghost"
            className="justify-start text-white hover:bg-gray-700"
          >
            <LockKeyhole />
            <span>All Passwords</span>
          </Button>
          <Button
            variant="ghost"
            className="justify-start text-white hover:bg-gray-700"
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
            className="justify-start text-white hover:bg-gray-700"
          >
            <Key />
            <span>Password Generator</span>
          </Button>
          <Button
            variant="ghost"
            className="justify-start text-white hover:bg-gray-700"
          >
            <Shield />
            <span>Security Check</span>
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-[13px] text-gray-300 uppercase tracking-wide">
            PROFILE
          </h3>
          <Button
            variant="ghost"
            className="justify-start text-white hover:bg-gray-700"
          >
            <Settings />
            <span>Settings</span>
          </Button>
          <Button
            variant="ghost"
            className="justify-start text-white hover:bg-gray-700"
          >
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
