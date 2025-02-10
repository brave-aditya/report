import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 m-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">Welcome to ReportCard</h1>
        <div className="space-x-4">
          <Link
            href="/login"
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}