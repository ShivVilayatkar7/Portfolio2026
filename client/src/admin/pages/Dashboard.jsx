import { FolderKanban, Mail, FileText, Award } from "lucide-react";
import AdminSidebar from "../components/AdminSidebar";

const stats = [
  {
    title: "Projects",
    value: "0",
    icon: <FolderKanban size={28} />,
  },
  {
    title: "Messages",
    value: "0",
    icon: <Mail size={28} />,
  },
  {
    title: "Certifications",
    value: "0",
    icon: <Award size={28} />,
  },
  {
    title: "Portfolio",
    value: "1",
    icon: <FileText size={28} />,
  },
];

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-[#14081F] text-white">
      <AdminSidebar />

      <div className="flex-1 p-8">{/* Dashboard Content */}</div>
    </div>
  );
};

export default Dashboard;