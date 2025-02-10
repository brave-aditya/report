import React, { ReactNode } from 'react';

interface AuthFormProps {
  title: string;
  onSubmit: (e: React.FormEvent) => void;
  children: ReactNode;
}

export default function AuthForm({ title, onSubmit, children }: AuthFormProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">{title}</h1>
        <form onSubmit={onSubmit} className="space-y-4">
          {children}
        </form>
      </div>
    </div>
  );
}