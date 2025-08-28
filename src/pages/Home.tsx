interface HomeProps {
  goToLogin: () => void;
}

export default function Home({ goToLogin }: HomeProps) {
  return (
    <main className="w-full h-screen bg-[#1a1a1a] relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(to_right,#f7f7f7_1px,transparent_1px),linear-gradient(to_bottom,#f7f7f7_1px,transparent_1px)] bg-[length:50px_50px]"></div>
      </div>
      <div className="flex flex-col gap-4 items-center justify-center h-screen">
        <img
          src="./image/fragile-express.png"
          alt="Fragile Logo"
          className="opacity-100 relative z-10 w-64 h-64"
        />
        <h1 className="text-white text-4xl font-bold">Welcome to Fragile</h1>
        <h3 className="text-white text-xl font-light">
          Secure your passwords with intelligence
        </h3>
        <p className="text-white font-light text-base">
          Experience the future of password management with our cutting-edge
          security and seamless access.
        </p>
        <div className="flex flex-row gap-4 mt-6">
          <button
            className="group relative overflow-hidden bg-gradient-to-b from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-medium py-2 px-6 rounded-[7px] transition-all duration-300 ease-out shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
            onClick={goToLogin}
          >
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-b from-white/1 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          <button className="group relative overflow-hidden bg-white/10 hover:bg-white/15 backdrop-blur-md text-white font-medium py-2 px-6 rounded-[7px] border border-white/20 hover:border-white/30 transition-all duration-300 ease-out shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 active:scale-95">
            <span className="relative z-10">Learn More</span>
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </main>
  );
}
