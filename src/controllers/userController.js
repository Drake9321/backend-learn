import User from "../models/userModel.js";

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send({ message: "Users retrieved successfully", data: users });
  } catch (error) {
    res.status(400).send(error);
  }
};

const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    res.status(200).send({ message: "User retrieved successfully", data: user });
  } catch (error) {
    res.status(400).send(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedUser = await User.findByIdAndUpdate(userId, req.body, { returnDocument: "after" });
    if (!updatedUser) {
      return res.status(404).send({ message: "User not found" });
    }
    res.status(200).send({ message: "User updated successfully", data: updatedUser });
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      return res.status(404).send({ message: "User not found" });
    }
    res.status(200).send({ message: "User deleted successfully", data: deletedUser });
  } catch (error) {
    res.status(400).send(error);
  }
};

const createUser = async (req, res) => {
  try {
    console.log("Request body:", req.body);

    const newUser = new User(req.body);

    const savedUser = await newUser.save();

    res.status(201).json({
      message: "User created successfully",
      data: savedUser
    });
  } catch (error) {
    console.error("CREATE USER ERROR:", error);

    res.status(400).json({
      message: error.message,
      errors: error.errors
        ? Object.values(error.errors).map((err) => ({
            field: err.path,
            message: err.message
          }))
        : undefined
    });
  }
};

export { getAllUsers, getUserById, updateUser, deleteUser, createUser };