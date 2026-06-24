import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import api from "../../services/api";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await api.post(
        "/auth/login",
        formData
      );

      login(data.admin, data.token);

      navigate("/admin/dashboard");
    } catch (error) {
      alert("Login Failed");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#14081F]">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-3xl bg-[#1B102A] p-8"
      >
        <h2 className="mb-6 text-center text-3xl font-bold text-white">
          Admin Login
        </h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="mb-4 w-full rounded-xl bg-[#241537] p-3 text-white"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="mb-6 w-full rounded-xl bg-[#241537] p-3 text-white"
        />

        <button
          type="submit"
          className="w-full rounded-xl bg-purple-600 py-3 text-white"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;