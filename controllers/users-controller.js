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
      next(e);
    }
  }
  async login(req, res, next) {
    try {
    } catch (e) {
      next(e);
    }
  }
  async logout(req, res, next) {
    try {
    } catch (e) {
      next(e);
    }
  }
  async activated(req, res, next) {
    try {
      const activationLink = req.params.link;
      await userServise.activate(activationLink);
      return res.redirect("https://ya.ru");
    } catch (e) {
      next(e);
    }
  }
  async refresh(req, res, next) {
    try {
    } catch (e) {
      next(e);
    }
  }
  async getUser(req, res, next) {
    try {
      res.json(["123", "124"]);
    } catch (e) {
      next(e);
    }
  }
}

export default new UsersController();
