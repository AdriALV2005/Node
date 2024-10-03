const customHeader = (req, res, next) => {
  try {
    const apiKey = req.headers.api_key;
    if (apiKey === "leifer-01") {
      next();
    } else {
      res.status(403);
      res.send({ error: "El Api_Key no es correcta." });
    }
  } catch (e) {
    res.status(403);
    res.send({ error: "Algo se ejecuto mal." });
  }
};
module.exports = customHeader;
