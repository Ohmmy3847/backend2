const taskBuilder = require("../controllers/Controller");
module.exports = (app) => {
  app
    .route("/Data")
    .get(taskBuilder.list_all_datas)
  app
    .route("/courseID")
    .get(taskBuilder.list_all_CourseIDs)
    .put(taskBuilder.create_a_CourseIDs)
    
};
