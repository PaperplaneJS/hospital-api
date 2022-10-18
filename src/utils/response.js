function successBody(data, code = 200) {
  return {
    success: true,
    message: '',
    code,
    data,
  }
}

function errorBody(message, code = 500, data = null) {
  return {
    success: false,
    message,
    code,
    data,
  }
}

module.exports = {
  successBody,
  errorBody,
}
