const Post = require("../models/Post");
// const { post } = require("../routes/posts");

exports.getPosts = async (req, res) => {
  try {
    console.log(await Post.estimatedDocumentCount());
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.createPosts = async (req, res) => {
  if ((await Post.estimatedDocumentCount()) <= 10) {
    try {
      console.log("Inside post request");
      const posts = await Post.create(req.body);
      return res.status(200).json(posts);
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  }
  return res.status(500).json({ message: "Form is not available" });
};

exports.getPost = async (req, res) => {
  try {
    const getPost = await Post.findById(req.params.postId);
    res.status(200).json(getPost);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const removedPost = await Post.findByIdAndDelete({
      _id: req.params.postId,
    });
    res.status(200).json(removedPost);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const updatePost = await Post.findByIdAndUpdate(
      { _id: req.params.postId },
      req.body,
      { new: true, runValidators: true }
    );
    return res.status(200).json({ message: updatePost });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
