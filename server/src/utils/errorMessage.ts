const errorMessage = {
  NOT_ADMIN: {
    type: "NOT_ADMIN",
    message: "You are not authorized to perform this action.",
  },
  NOT_FOUND_SUPPLIER: { type: "", message: "" },
  HANDLER_ERROR: {
    type: "INTERNAL_SERVER_ERROR",
    message: "An internal server error occurred.",
  },
  PASSWORD_INVALID: {
    type: "PASSWORD_INVALID",
    message: "The provided password is invalid.",
  },
  ZOD_INVALID: {
    type: "VALIDATION_ERROR",
    message: "The data submitted is invalid.",
  },
  USER_NOT_FOUND: {
    type: "",
    message: "",
  },
};
export default errorMessage;
