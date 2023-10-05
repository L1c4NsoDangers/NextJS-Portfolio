import mongoose from "mongoose";

const ExperienceSchema = new mongoose.Schema(
  {
    name: String,
    company: String,
    position: String,
    location: String,
    duration: String,
  },
  { timestamps: true }
);

const Experience =
  mongoose.models.Experience || mongoose.model("Experience", ExperienceSchema);

export default Experience;
