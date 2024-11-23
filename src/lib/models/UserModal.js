import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    picture: String,
    role: { type: String, default: "user", enum: ["user", "doctor", "admin"] },
    extraInfo: {
        fess: Number,
        hospital: String,
        time: String,
        bio: String,
        specialization: String,
        gender: String,
    }
});

const UserModal =
    mongoose.models?.users || mongoose?.model("users", userSchema);

export default UserModal;