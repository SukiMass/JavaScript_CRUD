const User = require("../Models/userModels")

exports.create = async (req, res) => {
    try {
        const userData = new User(req.body)
        const { email } = userData
        const userExist = await User.findOne({ email })
        if (userExist) {
            return res.status(400).json({ message: "User already exists" })
        }

        const savedUser = await userData.save()
        res.status(200).json({ savedUser, message: "User Created Successfully" })
    } catch (error) {
        res.status(500).json({ error: "Internal server error" })
    }
}

exports.fetchAllUsers = async (req, res) => {
    try {

        const users = await User.find()
        if (users.length === 0) {
            return res.status(404).json({
                message: "Users not found"
            })
        }
        return res.status(200).json({ userCount: users.length, users })
    } catch (error) {
        res.status(500).json({ error: "Internal server error" })
    }
}

exports.removeAUser = async (req, res) => {
    try {
        const userData = req.query
        const userId = await User.findById({ _id: userData.id })

        const userName = await User.findById({ _id: userData.id }, { name: 1, _id: 0 })

        if (!userId) {
            return res.status(404).json({ message: "Doesnot find the user" })
        }

        await User.findByIdAndDelete(userId)

        return res.status(201).json({ userName: userName.name, message: "user Removed successfully" })

    } catch (error) {
        res.status(500).json({ error: "Internal server error" })

    }
}

exports.updateUserDetails = async (req, res) => {
    try {
        const userDetails = req.body;
        const userIdFound = await User.findById({ _id: userDetails._id })

        const userUpdate = await User.findByIdAndUpdate(userDetails._id, userDetails , {new : true})
        return res.status(200).json({userIdFound ,  userUpdated : userUpdate , message : "User Updated successfully"})

    } catch (error) {
        res.status(500).json({ error: "Internal server error" })

    }
}