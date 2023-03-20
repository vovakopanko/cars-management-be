import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  isActivated: { type: Boolean, default: false },
  activationLink: { type: String },
});

export default model("User", UserSchema);
