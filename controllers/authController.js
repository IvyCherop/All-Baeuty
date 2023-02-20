const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");

const {
  attachCookiesToResponse,
  UserTokenPayload,
  createJWT,
} = require("../utils");

const register = async (req, res) => {
  const { email, name, phone, password } = req.body;

  const emailAlreadyExists = await User.findOne({ email });
  if (emailAlreadyExists) {
    throw new CustomError.BadRequestError("Email already exists");
  }

  const isFirstAccount = (await User.countDocuments({})) === 0;
  const role = isFirstAccount ? "admin" : "user";

  const user = await User.create({ name, email, phone, password, role });
  const tokenUser = UserTokenPayload(user);
  const token = createJWT({ payload: tokenUser });
  res.status(StatusCodes.CREATED).json({ user: tokenUser, token: token });
  // attachCookiesToResponse({ res, user: tokenUser });
  // res.status(StatusCodes.CREATED).json({ user: tokenUser });
};
const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new CustomError.BadRequestError("Please provide email and password");
  }
  const user = await User.findOne({ email });

  if (!user) {
    throw new CustomError.UnauthenticatedError("User doesn't exist");
  }
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new CustomError.UnauthenticatedError("Wrong password");
  }
  const tokenUser = UserTokenPayload(user);
  // attachCookiesToResponse({ res, user: tokenUser });

  // res.status(StatusCodes.OK).json({ user: tokenUser });
  const token = createJWT({ payload: tokenUser });
  res.status(StatusCodes.CREATED).json({ user: tokenUser, token: token });
};
const logout = async (req, res) => {
  // res.cookie('token', 'logout', {
  //   httpOnly: true,
  //   expires: new Date(Date.now() + 1000),
  // });
  res.status(StatusCodes.OK).json({ msg: "user logged out successfully.!" });
};

module.exports = {
  register,
  login,
  logout,
};
