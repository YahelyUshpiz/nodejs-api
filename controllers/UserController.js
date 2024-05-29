import { users } from "../modules/Users.js"

export const getAllUsers = (req, res) => {
  res.json(users);
};

export const createNewUser = (req, res) => {
  res.json({
    "username": req.body.username,
  });
};
