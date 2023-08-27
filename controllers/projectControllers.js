import Project from '../models/project.js';

const createProject = async (req, res) => {
  const { title, link, desc } = req.body;
  const userId = req.user.id;
  const project = new Project({ title, link, desc, userId });
  try {
    const savedProject = await project.save();
    res.status(200).json(savedProject);
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateProject = async (req, res) => {
  try {
    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProject);
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteProject = async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.status(200).json('Project has been deleted...');
  } catch (err) {
    res.status(500).json(err);
  }
};

const getProject = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getAllProjects = async (req, res) => {
  try {
    const userId = req.params.userId;
    const projects = await Project.find({ userId: { $in: [userId] } });
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json(err);
  }
};

export default {
  createProject,
  updateProject,
  deleteProject,
  getProject,
  getAllProjects,
};
