const responseobject = async (code, endpoint, message, data) => {
  try {
    let res = {};
    let resMessage = message ? message : "";
    let resdata = data ? data : {};
    switch (code) {
      case 103:
        res = {
          code: code,
          status: "conflict",
          message: resMessage,
          data: resdata,
          endpoint: endpoint,
        };
        break;
      case 200:
        res = {
          code: code,
          status: "successful",
          message: resMessage,
          data: resdata,
          endpoint: endpoint,
        };
        break;
      case 201:
        res = {
          code: code,
          status: "Created",
          message: resMessage,
          data: resdata,
          endpoint: endpoint,
        };
        break;
      case 400:
        res = {
          code: code,
          status: "Bad Request",
          message: resMessage,
          data: resdata,
          endpoint: endpoint,
        };
        break;
      case 409:
        res = {
          code: code,
          status: "Conflict",
          message: resMessage,
          data: resdata,
          endpoint: endpoint,
        };
        break;
      default:
        res = {
          code: 500,
          status: "Failed",
          message: "Something Went wrong",
          data: resdata,
          endpoint: endpoint,
        };
        break;
    }
    return res;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  responseobject,
};
