import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getProjects = () => api.get("/projects");

export const createProject = (project, token) =>
  api.post("/projects", project, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const deleteProject = (id, token) =>
  api.delete(`/projects/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const uploadImage = (formData) => api.post("/upload", formData);

export const updateProject = (id, project, token) =>
  api.put(`/projects/${id}`, project, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const getMessages = (token) =>
  api.get("/contact", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const deleteMessage = (
  id,
  token
) =>
  api.delete(`/contact/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const getPortfolioProjects = () =>
  api.get("/projects");

export const getPortfolio = () =>
  api.get("/portfolio");

export const updatePortfolio = (
  portfolio,
  token
) =>
  api.put("/portfolio", portfolio, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export default api;
