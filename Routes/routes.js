const express = require("express")
const { create, fetchAllUsers, removeAUser, updateUserDetails } = require("../Controllers/userController")

const route = express.Router()

route.get("/fetch_all_users", fetchAllUsers)

route.post("/create", create)

route.delete("/delete_user", removeAUser)

route.put("/update_user_details", updateUserDetails)

module.exports = route