import { Schema, model } from 'mongoose';

const ProjectSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      /* unique: true, */
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      /* required: true, */
    },
    link: {
      type: String,
    },
    userId: {
        type: String,
        required: true,
    }
  },
  {
    timestamps: true,
  }
);

const Project = model('Project', ProjectSchema);

export default Project;
