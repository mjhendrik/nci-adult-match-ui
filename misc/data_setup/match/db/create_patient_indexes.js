/* eslint-env node, mocha */
var conn = new Mongo();
var db = conn.getDB("Match");

db.patient.createIndex({"currentPatientStatus":1});
db.patient.createIndex({"currentStepNumber":1});
db.patient.createIndex({"patientSequenceNumber":1});
db.patient.createIndex({"registrationDate":1});
db.patient.createIndex({"patientAssignments.treatmentArm.treatmentArmId":1});
db.patient.createIndex({"patientAssignments.treatmentArm.version":1});
db.patient.createIndex({"diseases.shortName":1});
