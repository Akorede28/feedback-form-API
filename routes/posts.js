const { Router } = require("express");

const PostController = require("../controllers/feeds.js");

const router = Router();

//GET BACK & CREATE ALL THE  POSTS
router.route("/").get(PostController.getPosts).post(PostController.createPosts);

// SPECIFIC POST
router
  .route("/:postId")
  .get(PostController.getPost)
  .delete(PostController.deletePost)
  .patch(PostController.updatePost);

module.exports = router;
