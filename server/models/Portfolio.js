import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema(
  {
    about: {
      title: String,

      paragraph1: String,
      paragraph2: String,
      paragraph3: String,

      image: String,
    },

    hero: {
      greeting: String,
      title: String,
      description: String,
      image: String,
    },

    skills: [
      {
        name: String,
      },
    ],

    experience: [
      {
        year: String,
        title: String,
        description: String,
      },
    ],

    education: [
      {
        duration: String,
        degree: String,
        institute: String,
      },
    ],

    services: [
      {
        title: String,
        description: String,
      },
    ],

    achievements: [
      {
        title: String,
        value: String,
      },
    ],

    certifications: [
      {
        title: String,
        issuer: String,
      },
    ],

    resume: {
      url: String,
    },

    socialLinks: {
      github: String,
      linkedin: String,
      email: String,
    },

    contactInfo: {
      email: String,
      phone: String,
      location: String,
    },

  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "Portfolio",
  portfolioSchema
);