import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export default function AdminContact() {
  const [contacts, setContacts] = useState([]);
  const { authorizationToken,API } = useAuth();

    const fetchContacts = async () => {
      try {
        const response = await fetch(
          `${API}/api/admin/contact`,
          {
            method: "GET",
            headers: {
              Authorization: authorizationToken,
            },
          }
        );
        const data = await response.json();
        if (response.ok) {
          setContacts(data);
          // toast.success("Got contacts");
        } else {
          // toast.error("Failed to get contacts");
        }
      } catch (error) {
        toast.error("Failed to get contacts");
        console.error("Fetch error:", error);
      }
    };


  const handleDelete = async (id) => {
     try {
      const response=await fetch(`${API}/api/admin/contact/delete/${id}`,{
        method:"DELETE",
        headers:{
          Authorization:authorizationToken
        }
      })

      if(response.ok){
        fetchContacts()
        toast.success("contact deleted")

      }else{
        toast.error("failed to delete")
      }
      
     } catch (error) {
      console.log("error while deleting",error)
     }
  };
    useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <h2 className="text-xl sm:text-2xl font-bold text-blue-800 mb-4 sm:mb-6 text-center sm:text-left">
        Contact Messages
      </h2>

      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-[600px] w-full divide-y divide-gray-200 bg-white">
          <thead className="bg-blue-100">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Name
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Email
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Subject
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Message
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {contacts.length > 0 ? (
              contacts.map((contact) => (
                <tr key={contact._id}>
                  <td className="px-4 py-3 text-sm text-gray-900">
                    {contact.name}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">
                    {contact.email}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">
                    {contact.subject}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    {contact.message}
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => handleDelete(contact._id)}
                      className="text-red-600 hover:text-red-800 font-semibold text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="px-4 py-6 text-center text-gray-500 text-sm"
                >
                  No contact messages found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
