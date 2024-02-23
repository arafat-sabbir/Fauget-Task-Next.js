import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      require: [true, "User Must Provide A userName"],
      unique: [true, "userName Must Be Unique"],
    },
    email: {
      type: String,
      require: [true, "User Must Provide A email"],
      unique: [true, "email Must Be Unique"],
    },
    password: {
      type: String,
      required: [true, "Must Provide An Password"],
    },
  },{timestamps: true});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
