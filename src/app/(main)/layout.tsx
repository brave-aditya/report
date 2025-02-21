export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen min-h-screen pt-4 lg:pt-10 px-4 lg:px-12 relative">
      <div className=" border-4 border-yellow-400 h-full w-full rounded-[50px] rounded-b-none border-b-0 bg-gray-800/90 overflow-hidden pb-8 lg:pb-0 ">
        {children}
      </div>
    </div>
  );
}
