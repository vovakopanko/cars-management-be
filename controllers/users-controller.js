import userServise from "../services/user-service.js";

class UsersController {
  async registation(req, res, next) {
    try {
      const { email, password } = req.body;
      const userData = await userServise.registration(email, password);
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.json(userData);
    } catch (e) {
      console.log(e.message);
    }
  }
  async login(req, res, next) {
    try {
    } catch (e) {
      console.log(e.message);
    }
  }
  async logout(req, res, next) {
    try {
    } catch (e) {
      console.log(e.message);
    }
  }
  async activated(req, res, next) {
    try {
    } catch (e) {
      console.log(e.message);
    }
  }
  async refresh(req, res, next) {
    try {
    } catch (e) {
      console.log(e.message);
    }
  }
  async getUser(req, res, next) {
    try {
      res.json(["123", "124"]);
    } catch (e) {
      console.log(e.message);
    }
  }
}

export default new UsersController();
