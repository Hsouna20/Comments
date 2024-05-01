import Comment from '../models/comment.model.js';

export const createComment = async (req, res, next) => {
  try {
    const { content, userId } = req.body;


    if (userId == '') {
      return next(
        new Error('You are not allowed to create this comment')
      );
    }

    const newComment = new Comment({
      content,
      userId,
    });
    await newComment.save();

    res.status(200).json(newComment);
  } catch (error) {
    next(error);
  }
};
