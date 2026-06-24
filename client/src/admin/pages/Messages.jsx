import { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";

import AdminSidebar from "../components/AdminSidebar";

import {
  getMessages,
  deleteMessage,
} from "../../services/api";

const Messages = () => {
  const [messages, setMessages] =
    useState([]);

  const token =
    localStorage.getItem("token");

  const fetchMessages = async () => {
    try {
      const { data } =
        await getMessages(token);

      setMessages(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteMessage(id, token);

      fetchMessages();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="flex min-h-screen bg-[#14081F] text-white">
      <AdminSidebar />

      <div className="flex-1 p-8">
        <h1 className="mb-8 text-4xl font-bold">
          Messages
        </h1>

        <div className="space-y-4">
          {messages.map((msg) => (
            <div
              key={msg._id}
              className="rounded-3xl bg-[#1B102A] p-6"
            >
              <h3 className="text-xl font-bold">
                {msg.name}
              </h3>

              <p className="mb-3 text-purple-400">
                {msg.email}
              </p>

              <p className="mb-4">
                {msg.message}
              </p>

              <button
                onClick={() =>
                  handleDelete(msg._id)
                }
                className="flex items-center gap-2 rounded-xl bg-red-500 px-4 py-2"
              >
                <Trash2 size={18} />
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Messages;