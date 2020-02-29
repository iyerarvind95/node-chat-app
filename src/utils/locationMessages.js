const generatelocationMessage = (username, url) => {
  return {
    username,
    url,
    createdAt: new Date().getTime()
  };
};

module.exports = {
  generatelocationMessage
};
