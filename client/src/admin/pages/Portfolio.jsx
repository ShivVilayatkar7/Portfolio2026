import { useEffect, useState } from "react";

import AdminSidebar from "../components/AdminSidebar";

import {
  getPortfolio,
  updatePortfolio,
} from "../../services/api";

const Portfolio = () => {
  const token = localStorage.getItem("token");

  const [formData, setFormData] = useState({
    about: {
      title: "",
      description: "",
      image: "",
    },

    socialLinks: {
      github: "",
      linkedin: "",
      email: "",
    },
  });

  const fetchPortfolio = async () => {
    try {
      const { data } =
        await getPortfolio();

      if (data.data) {
        setFormData(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPortfolio();
  }, []);

  const handleAboutChange = (e) => {
    setFormData({
      ...formData,
      about: {
        ...formData.about,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleSocialChange = (e) => {
    setFormData({
      ...formData,
      socialLinks: {
        ...formData.socialLinks,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updatePortfolio(
        formData,
        token
      );

      alert("Portfolio Updated");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex min-h-screen bg-[#14081F] text-white">
      <AdminSidebar />

      <div className="flex-1 p-8">
        <h1 className="mb-8 text-4xl font-bold">
          Portfolio CMS
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-3xl bg-[#1B102A] p-8"
        >
          <h2 className="text-2xl font-bold">
            About Section
          </h2>

          <input
            name="title"
            placeholder="About Title"
            value={
              formData.about?.title || ""
            }
            onChange={handleAboutChange}
            className="w-full rounded-xl bg-[#241537] p-3"
          />

          <textarea
            name="paragraph1"
            placeholder="Paragraph 1"
            value={
              formData.about?.paragraph1 || ""
            }
            onChange={handleAboutChange}
            rows={4}
            className="w-full rounded-xl bg-[#241537] p-3"
          />

          <textarea
            name="paragraph2"
            placeholder="Paragraph 2"
            value={
              formData.about?.paragraph2 || ""
            }
            onChange={handleAboutChange}
            rows={4}
            className="w-full rounded-xl bg-[#241537] p-3"
          />

          <textarea
            name="paragraph3"
            placeholder="Paragraph 3"
            value={
              formData.about?.paragraph3 || ""
            }
            onChange={handleAboutChange}
            rows={4}
            className="w-full rounded-xl bg-[#241537] p-3"
          />

          <input
            name="image"
            placeholder="About Image URL"
            value={
              formData.about?.image || ""
            }
            onChange={handleAboutChange}
            className="w-full rounded-xl bg-[#241537] p-3"
          />

          <h2 className="pt-8 text-2xl font-bold">
            Social Links
          </h2>

          <input
            name="github"
            placeholder="Github URL"
            value={
              formData.socialLinks?.github ||
              ""
            }
            onChange={handleSocialChange}
            className="w-full rounded-xl bg-[#241537] p-3"
          />

          <input
            name="linkedin"
            placeholder="LinkedIn URL"
            value={
              formData.socialLinks
                ?.linkedin || ""
            }
            onChange={handleSocialChange}
            className="w-full rounded-xl bg-[#241537] p-3"
          />

          <input
            name="email"
            placeholder="Email"
            value={
              formData.socialLinks?.email ||
              ""
            }
            onChange={handleSocialChange}
            className="w-full rounded-xl bg-[#241537] p-3"
          />

          <button
            type="submit"
            className="rounded-xl bg-purple-600 px-6 py-3"
          >
            Save Portfolio
          </button>
        </form>
      </div>
    </div>
  );
};

export default Portfolio;