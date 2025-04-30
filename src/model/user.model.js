import { DataTypes } from "sequelize";
import { sequilize } from "../db/connection.js";
import bcrypt from 'bcrypt'
const UserModel = sequilize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    user_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mobile: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'user',
    timestamps: false,
    hooks: {
        beforeCreate: async (user) => {
            if (user.password) {
                const salt = await bcrypt.genSaltSync(10);
                user.password = bcrypt.hashSync(user.password, salt)
            }
        },
        beforeUpdate: async (user) => {
            if (user.password) {
                const salt = await bcrypt.genSaltSync(10);
                user.password = bcrypt.hashSync(user.password, salt)
            }
        }

    }

}
)
UserModel.prototype.validPassword = async function (password) {
    console.log("kjhfhjhgfgh");

    return await bcrypt.compareSync(password, this.password)
}
export default UserModel