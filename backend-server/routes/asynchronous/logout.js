exports.logout = async (req, res) => {
  try {
    res.clearCookie("eccomerce", { path: "/" });
    res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    res.status(400).json({ message: "Error in logging out the user" });
  }
};
