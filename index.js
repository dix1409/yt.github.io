const express = require("express");
const app = express();
const ytdl = require("./ytdl-core/lib/index");



app.get("/download", async (req, res) => {
  const v_id = req.query.url.split("v=")[1];
  const info = await ytdl.getInfo(req.query.url);
  console.log(
    info.formats.filter((format) => format.hasVideo && format.hasAudio)
  );


  return res.json({url:info.formats.filter((format) => format.hasVideo && format.hasAudio)[0].url});
});

app.listen(3000||process.env.PORT, () => {
  console.log("Server is running on http://localhost:3000");
});
