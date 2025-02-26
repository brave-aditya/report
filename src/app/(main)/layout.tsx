export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-screen flex items-center justify-center min-h-screen pt-4 lg:pt-10 px-4 lg:px-12">
      <div className="h-full w-full border-4 border-yellow-400 rounded-[50px] rounded-b-none border-b-0 bg-gradient-to-br from-gray-900 to-indigo-950 opacity-95 overflow-hidden pb-10 lg:pb-0 ">
        <div className="h-full overflow-auto no-scrollbar">{children}</div>
      </div>
    </div>
  );
}
