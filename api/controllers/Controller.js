// Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js
// It manages relationships between data, provides schema validation, 
// and is used to translate between objects in code and the representation of those objects in MongoDB.
const mongoose = require('mongoose');
// Mongoose model provides an interface to the database 
// for creating, querying, updating, deleting records, etc.
const data = mongoose.model('Data');
const CourseID= mongoose.model('courseID');
exports.list_all_datas = (req, res) => {
  data.find({}, (err, tasks) => {
    if (err) res.send(err);
    res.json(tasks);
  });
};
exports.create_a_datas = (req, res) => {
  const newTask = new data(req.body);
  newTask.save((err, data) => {
    if (err) res.send(err);
    res.json(data);
  });
};
exports.read_a_datas = (req, res) => {
  data.findById(req.params.Id, (err, data) => {
    if (err) res.send(err);
    res.json(data);
  });
};
exports.update_a_datas = (req, res) => {
  data.findOneAndUpdate(
    { _id: req.params.Id },
    req.body,
    { new: true },
    (err, data) => {
      if (err) res.send(err);
      res.json(data);
    }
  );
};
exports.delete_a_datas = (req, res) => {
  data.deleteOne({ _id: req.params.Id }, err => {
    if (err) res.send(err);
    res.json({
      message: 'data successfully deleted',
     _id: req.params.Id
    });
  });
};
//CourseIDs
exports.list_all_CourseIDs = (req, res) => {
  CourseID.find({}, (err, tasks) => {
    if (err) res.send(err);
    res.json(tasks);
  });
};
exports.create_a_CourseIDs= (req, res) => {
  const newTask = new CourseID(req.body);
  newTask.save((err, CourseID) => {
    if (err) res.send(err);
    res.json(CourseID);
  });
};

exports.read_a_CourseIDs = (req, res) => {
  CourseID.findById(req.params.Id, (err, CourseID) => {
    if (err) res.send(err);
    res.json(CourseID);
  });
};
exports.update_a_CourseIDs = (req, res) => {
  CourseID.findOneAndUpdate(
    { _id: req.params.Id },
    req.body,
    { new: true },
    (err, CourseID) => {
      if (err) res.send(err);
      res.json(CourseID);
    }
  );
};
exports.delete_a_CourseIDs = (req, res) => {
  CourseID.deleteOne({ _id: req.params.Id }, err => {
    if (err) res.send(err);
    res.json({
      message: 'CourseID successfully deleted',
     _id: req.params.Id
    });
  });
};