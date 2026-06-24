import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const AdminSidebar = () => {
  const { logout } = useAuth();

  return (
    <div className="h-screen w-64 border-r border-[#8B5CF6]/20 bg-[#1B102A] p-6">
      <h2 className="logo-font mb-10 text-4xl text-white">
        Shiv.
      </h2>

      <div className="space-y-4">
        <Link
          to="/admin/dashboard"
          className="block text-[#C9C3D4]"
        >
          Dashboard
        </Link>

        <Link
          to="/admin/projects"
          className="block text-[#C9C3D4]"
        >
          Projects
        </Link>

        <Link
          to="/admin/messages"
          className="block text-[#C9C3D4]"
        >
          Messages
        </Link>

        <Link
          to="/admin/portfolio"
          className="block text-[#C9C3D4]"
        >
          Portfolio
        </Link>

        <Link 
        to="/admin/messages"
        className="block text-[#C9C3D4]"
        >
          Messages
        </Link>

        <button
          onClick={logout}
          className="mt-8 text-red-400"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;