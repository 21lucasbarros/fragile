import { User, Lock } from "lucide-react";

interface LoginProps {
  goToRegister: () => void;
  goToDashboard: () => void;
}

export default function Login({ goToRegister, goToDashboard }: LoginProps) {
  return (
    <main className="w-full h-screen bg-[#1a1a1a] relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(to_right,#f7f7f7_1px,transparent_1px),linear-gradient(to_bottom,#f7f7f7_1px,transparent_1px)] bg-[length:50px_50px]"></div>
      </div>
      <div className="flex flex-col gap-6 items-center justify-center h-screen max-w-md mx-auto px-6">
        <img
          src="./image/fragile-express.png"
          alt="Fragile Logo"
          className="opacity-100 relative z-10 w-64 h-64"
        />
        <div className="text-center">
          <h1 className="text-white text-3xl font-bold">Welcome Back</h1>
          <p className="text-white/70 text-sm mt-2">
            Sign in to access your secure vault
          </p>
        </div>

        <div className="w-full space-y-4">
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5 z-10" />
            <input
              type="email"
              placeholder="Email address"
              className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-[7px] pl-11 pr-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-500 focus:bg-white/15 transition-all duration-300"
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5 z-10" />
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-[7px] pl-11 pr-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-500 focus:bg-white/15 transition-all duration-300"
            />
          </div>
        </div>

        <div className="w-full space-y-3">
          <button
            className="group relative overflow-hidden w-full bg-gradient-to-b from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-medium py-3 px-6 rounded-[7px] transition-all duration-300 ease-out shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
            onClick={goToDashboard}
          >
            <span className="relative z-10">Sign In</span>
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <button
            className="group relative overflow-hidden w-full bg-white/10 hover:bg-white/15 backdrop-blur-md text-white font-medium py-3 px-6 rounded-[7px] border border-white/20 hover:border-white/30 transition-all duration-300 ease-out shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
            onClick={goToRegister}
          >
            <span className="relative z-10">Create Account</span>
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        <a
          href="#"
          className="text-blue-400 hover:text-blue-300 text-sm transition-colors duration-300"
        >
          Forgot your password?
        </a>
      </div>
    </main>
  );
}
