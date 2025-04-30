import UserModel from "../model/user.model.js";
import { jsonFormatter } from "../utils/jsonFormatter.js";


const userRegistraion = async (req, res) => {
    try {
        const { userName, mobile, password } = req.body;
        let isExists = await UserModel.findOne({
            where: { mobile }
        });
        if (isExists) {
            return res.json({ statusCode: 409, message: "User already exists!!" })
        }
        let createUser = await UserModel.create({
            user_name: userName,
            mobile,
            password
        })
        if (!createUser) {
            return res.json({ statusCode: 409, message: "User not created!!" })
        }
        createUser = jsonFormatter(createUser)
        return res.json({ statusCode: 409, data: createUser, message: "User not created!!" })
    } catch (error) {
        console.log("\n\n\n\n\n", error);

        throw new Error("Error in user Registration model", error)
    }
}
const loginUser = async (req, res) => {
    try {
        const { mobile, password } = req.body;
        let isExists = await UserModel.findOne({
            where: { mobile }
        });
        if (!isExists) {
            return res.json({ statusCode: 409, message: "User not found!!" })
        }
        const userValid = await isExists.validPassword(password)
        if (!userValid) return res.json({ statusCode: 300, message: "something went wrong!!" })
        return res.json({ statusCode: 200, message: "login successfully!!" })
    } catch (error) {

        throw new Error("Error in user loginUser", error)
    }
}
const updateUserPassword = async (req, res) => {
    try {
        const { id, password, userName } = req.body
        let isExists = await UserModel.findByPk(id)
        if (!isExists) return res.json({ statusCode: 200, message: "User not found!!" });
        let updatePassword = await UserModel.update({
            password,
            user_name: userName
        }, { where: { id }, individualHooks: true })
        if (!updatePassword) return res.json({ statusCode: 200, message: "Not update successfully!!" })
        return res.json({ statusCode: 200, message: "User password update successfully!!" })
    } catch (error) {
        console.log("\n\n\n\n\n", error);

        throw new Error("Error in user updateUserPassword", error)
    }
}
export { userRegistraion, loginUser, updateUserPassword }