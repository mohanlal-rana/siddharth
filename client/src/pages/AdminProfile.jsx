import React from "react";
import { useAuth } from "../store/auth";

export default function AdminProfile() {
  const { user } = useAuth();

  if (!user) {
    return <div className="text-center text-gray-600">No user data available.</div>;
  }
  console.log(user)

  return (
    <div className="max-w-xl mx-auto bg-green-100/30  rounded-xl p-6 mt-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Admin Profile</h2>

      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="font-medium text-gray-700">Name:</span>
          <span className="text-gray-900">{user.username || 'Mohan'}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium text-gray-700">Email:</span>
          <span className="text-gray-900">{user.email||'mr7569107@gmail.com'}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium text-gray-700">Role:</span>
          <span className="text-gray-900">
            {user.isAdmin ? "Administrator" : "User"}
          </span>
        </div>
      </div>
    </div>
  );
}
