import { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";

import AdminSidebar from "../components/AdminSidebar";
import {
  getMessages,
  deleteMessage,
} from "../../services/api";

const Messages = () => {
  const [messages, setMessages] = useState([]);

  const token = localStorage.getItem("token");

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
          Contact Messages
        </h1>

        <div className="space-y-6">
          {messages.map((message) => (
            <div
              key={message._id}
              className="rounded-3xl border border-[#8B5CF6]/20 bg-[#1B102A] p-6"
            >
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold">
                    {message.name}
                  </h3>

                  <p className="text-[#A78BFA]">
                    {message.email}
                  </p>
                </div>

                <button
                  onClick={() =>
                    handleDelete(
                      message._id
                    )
                  }
                  className="rounded-xl bg-red-500 p-3"
                >
                  <Trash2 size={18} />
                </button>
              </div>

              <p className="text-[#C9C3D4]">
                {message.message}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Messages;