const fs = require("fs");
const path = require("path");
const filePathCourseData = path.resolve(
  __dirname,
  "..",
  "public",
  "courseData.json"
);

const getCourseDetails = (req, res) => {
  try {
    fs.readFile(filePathCourseData, "utf8", (err, data) => {
      if (!data) console.log("File data is not available");
      const parsedData = JSON.parse(data); // Parse the string to JSON
      res.status(200).json(parsedData);
    });
  } catch (err) {
    res.status(500).send(`Error retrieving course details:  ${err}`);
  }
};

module.exports = {
  getCourseDetails,
};
