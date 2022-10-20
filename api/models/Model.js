const mongoose = require("mongoose");
// A Mongoose schema defines the structure of the document,
// default values, validators, etc.
const { Schema } = mongoose;
const DataSchema = new Schema({
  _id: {
    type: String,
  },"status": {
    type: String,
  },	
  "id": {
    type: String,
  },	
  "fullname": {
    type: String,
  },	
  "nick": {
    type: String,
  },	
  "age": {
    type: String,
  },	
  "Day": {
    type: String,
  },	
  "Number": {
    type: String,
  },	
  "Group": {
    type: String,
  },	
  "Course": {
    type: String,
  },	
  "Code": {
    type: String,
  },	
  "Mobile": {
    type: String,
  },	
  "Line": {
    type: String,
  },	
  "Email": {
    type: String,
  },	
  "ComeFrom": {
    type: String,
  },	
  "Interest": {
    type: String,
  },	
  "Experience": {
    type: String,
  },	
  "Goal": {
    type: String,
  },	
  "Difference Thing": {
    type: String,
  },	
  "rank": {
    type: String,
  },	
  "P-Rank": {
    type: String,
  },	
  "Problem": {
    type: String,
  },	
  "Cause": {
    type: String,
  },	
  "Solution": {
    type: String,
  },	
  "Effect": {
    type: String,
  },	
  "XP": {
    type: String,
  },	
  "Coin": {
    type: String,
  },	
  "Special": {
    type: String,
  },	
  "หาความถนัดของน้องและแนะนำน้องให้ไปตามความถนัด": {
    type: String,
  },	
  "Comment": {
    type: String,
  },	
  "Pro": {
    type: String,
  },	
  "Cons": {
    type: String,
  },	
  "คอร์สที่แนะนำต่อไปพร้อมเหตุผล": {
    type: String,
  },	
  "ProjectName": {
    type: String,
  },	
  "LinkProject": {
    type: String,
  },	
  "ImgProject": {
    type: String,
  },	
  "ProjectQuality": {
    type: String,
  },	
  "ProjectDescription": {
    type: String,
  },
 
});
const CourseID = new Schema({
  _id: {
    type: String,
  },
 "คอร์ส": {
    type: String,
  },
  "รหัสคอร์ส": {
    type: String,
  },
 
});

module.exports = mongoose.model("Data", DataSchema, "Data");
module.exports = mongoose.model("courseID", CourseID, "courseID");
