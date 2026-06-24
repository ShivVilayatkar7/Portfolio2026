import { useState, useEffect } from "react";
import { uploadImage } from "../../services/api";

const AdminForm = ({ onSubmit, editingProject }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    technologies: "",
    githubLink: "",
    liveLink: "",
    image: "",
    featured: false,
  });

  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (editingProject) {
      setFormData({
        title: editingProject.title || "",
        description: editingProject.description || "",
        technologies: editingProject.technologies?.join(", ") || "",
        githubLink: editingProject.githubLink || "",
        liveLink: editingProject.liveLink || "",
        image: editingProject.image || "",
        featured: editingProject.featured || false,
      });
    }
  }, [editingProject]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const imageData = new FormData();

    imageData.append("image", file);

    try {
      setUploading(true);

      const { data } = await uploadImage(imageData);

      setFormData((prev) => ({
        ...prev,
        image: data.imageUrl,
      }));

      setUploading(false);
    } catch (error) {
      console.log(error);
      setUploading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      ...formData,
      technologies: formData.technologies
        .split(",")
        .map((tech) => tech.trim())
        .filter(Boolean),
    });

    setFormData({
      title: "",
      description: "",
      technologies: "",
      githubLink: "",
      liveLink: "",
      image: "",
      featured: false,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 rounded-3xl bg-[#1B102A] p-6">
      <h2 className="mb-6 text-2xl font-bold">
        {editingProject ? "Edit Project" : "Add New Project"}
      </h2>

      <input
        name="title"
        placeholder="Project Title"
        value={formData.title}
        onChange={handleChange}
        className="mb-4 w-full rounded-xl bg-[#241537] p-3"
      />

      <textarea
        name="description"
        placeholder="Project Description"
        value={formData.description}
        onChange={handleChange}
        rows={4}
        className="mb-4 w-full rounded-xl bg-[#241537] p-3"
      />

      <input
        name="technologies"
        placeholder="React, Node.js, MongoDB"
        value={formData.technologies}
        onChange={handleChange}
        className="mb-4 w-full rounded-xl bg-[#241537] p-3"
      />

      <input
        name="githubLink"
        placeholder="Github Link"
        value={formData.githubLink}
        onChange={handleChange}
        className="mb-4 w-full rounded-xl bg-[#241537] p-3"
      />

      <input
        name="liveLink"
        placeholder="Live Link"
        value={formData.liveLink}
        onChange={handleChange}
        className="mb-4 w-full rounded-xl bg-[#241537] p-3"
      />

      <div className="mb-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="w-full"
        />

        {uploading && <p className="mt-2 text-purple-400">Uploading...</p>}

        {formData.image && (
          <img
            src={formData.image}
            alt="Preview"
            className="mt-4 h-40 rounded-xl"
          />
        )}
      </div>

      <label className="mb-6 flex items-center gap-3">
        <input
          type="checkbox"
          name="featured"
          checked={formData.featured}
          onChange={handleChange}
        />
        Featured Project
      </label>

      <button
        type="submit"
        disabled={uploading}
        className="rounded-xl bg-purple-600 px-6 py-3 disabled:opacity-50"
      >
        {uploading
          ? "Uploading..."
          : editingProject
            ? "Update Project"
            : "Add Project"}
      </button>
    </form>
  );
};

export default AdminForm;
