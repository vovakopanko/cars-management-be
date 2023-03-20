import ApiErrors from "../exeptions/api-errors.js";

export default function (err, req, res, next) {
  console.log(err.message);
  if (err instanceof ApiErrors) {
    return res
      .status(err.status)
      .json({ message: err.message, errors: err.errors });
  }
  return res.status(500).json({ message: "ERROR!" });
}
