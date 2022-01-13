import axios from "axios";
const KEY = require("../credentials");

const youtubeSearchUrl = `https://www.googleapis.com/youtube/v3`;

export default axios.create({
  baseURL: youtubeSearchUrl,
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  }
});
