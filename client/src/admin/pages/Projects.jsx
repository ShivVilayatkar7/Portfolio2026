import { useEffect, useState } from "react";
import { Trash2, Pencil } from "lucide-react";

import AdminSidebar from "../components/AdminSidebar";
import AdminForm from "../components/AdminForm";
import { createProject, updateProject } from "../../services/api";

import { getProjects, deleteProject } from "../../services/api";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [editingProject, setEditingProject] = useState(null);

  const token = localStorage.getItem("token");

  const fetchProjects = async () => {
    try {
      const { data } = await getProjects();

      setProjects(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (project) => {
    setEditingProject(project);
  };

  const handleDelete = async (id) => {
    try {
      await deleteProject(id, token);

      fetchProjects();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleCreate = async (project) => {
    try {
      if (editingProject) {
        await updateProject(editingProject._id, project, token);

        setEditingProject(null);
      } else {
        await createProject(project, token);
      }

      fetchProjects();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex min-h-screen bg-[#14081F] text-white">
      <AdminSidebar />

      <div className="flex-1 p-8">
        <AdminForm onSubmit={handleCreate} editingProject={editingProject} />
        
        <h1 className="mb-8 text-4xl font-bold">Projects</h1>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project._id}
              className="rounded-3xl border border-[#8B5CF6]/20 bg-[#1B102A] p-6"
            >
              <img
                src={project.image}
                alt={project.title}
                className="mb-4 h-48 w-full rounded-xl object-cover"
              />

              <h3 className="mb-2 text-2xl font-bold">{project.title}</h3>
              <p className="mb-4 text-[#C9C3D4]">{project.description}</p>

              <button
                onClick={() => handleEdit(project)}
                className="mr-3 flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2"
              >
                <Pencil size={18} />
                Edit
              </button>

              <button
                onClick={() => handleDelete(project._id)}
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

export default Projects;
