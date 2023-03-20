import userModel from "../models/user-model.js";
import bcrypt from "bcrypt";
import mailService from "./mail-service.js";
import tokenService from "./token-service.js";
import UserDto from "../dtos/user-dto.js";
import { v4 } from "uuid";

class UserSevice {
  async registration(email, password) {
    const candidate = await userModel.findOne({ email });
    if (candidate) {
      throw new Error(
        `User with it ${email}  exists, please change your data and create new acc`
      );
    }
    const saltRounds = 3;
    const hashPassword = await bcrypt.hash(password, saltRounds);
    const activationLink = v4();
    const user = await userModel.create({
      email,
      password: hashPassword,
      activationLink,
    });
    await mailService.sendActivationail(email, activationLink);

    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return {
      ...tokens,
      user: userDto,
    };
  }
}

export default new UserSevice();
