import mongoose from 'mogoose';
import { Mongoose } from 'mongoose';

const userSchema = new MongooseDocument.Schema({
    name:{ type: String, required: true},
    email: { type: String, required: true, unique},
    password: { type: String, required: true},
    isAdmin: { type: Boolean, required, default: false}
});

const userModel = mongoose.model("User", userSchema);

export default userModel;