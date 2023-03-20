class ApiErrors extends Error {
  status;
  error;

  constructor(status, message, errors = []) {
    super(message);
    this.status = status;
    this.errors = errors;
  }

  static UnauthorizedError() {
    return new ApiErrors(401, "User doesn`t found");
  }
  static BadRequest(message, errors = []) {
    return new ApiErrors(400, message, errors);
  }
}

export default ApiErrors;
