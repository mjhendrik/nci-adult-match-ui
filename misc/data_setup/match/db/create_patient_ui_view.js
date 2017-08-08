/**
 * Created by smithmak on 8/4/17.
 */
/* eslint-env node, mocha */
var conn = new Mongo();
var db = conn.getDB("Match");

db.createView("patient_ui_view", "patient",
              [
              {"$project":
                {
                    "patientSequenceNumber": 1,
                    "currentPatientStatus": 1,
                    "currentStepNumber": 1,
                    "diseases": 1,
                    "patientAssignments": 1,
                    "patientTriggers": 1,
                    "lastTrigger": { $arrayElemAt: [ "$patientTriggers", -1 ] },
                    "lastAssignment": { $arrayElemAt: [ "$patientAssignments", -1 ] },
                    "registrationDate": 1,
                    "registrationDateFormatted":
                            {$let: { vars: {monthnum: {$month: "$registrationDate"},
                                            dayNum: {$dayOfMonth: "$registrationDate"},
                                            year: { $dateToString: { format: "%Y", date: "$registrationDate" } },
                                            hour: { $switch: {
                                                        branches: [
                                                            { case: {$gt: [{$hour: "$registrationDate"}, 12]}, then: {$subtract: [{$hour: "$registrationDate"}, 12 ]}},
                                                            { case: {$eq: [{$hour: "$registrationDate"}, 0 ]}, then: {$add:      [{$hour: "$registrationDate"}, 12 ]}},
                                                        ],
                                                        default: {$hour: "$registrationDate"}
                                                   }},
                                            minute: { $dateToString: { format: "%M", date: "$registrationDate" } },
                                            am_pm: { $cond: { if: {$lt: [{$hour: "$registrationDate"}, 12]}, then: "AM", else: "PM"} },
                                            },
                                     in: {$concat: [ { $switch: {
                                                          branches: [
                                                             { case: {$eq: ["$$monthnum", 1]}, then: "January" },
                                                             { case: {$eq: ["$$monthnum", 2]}, then: "February" },
                                                             { case: {$eq: ["$$monthnum", 3]}, then: "March" },
                                                             { case: {$eq: ["$$monthnum", 4]}, then: "April" },
                                                             { case: {$eq: ["$$monthnum", 5]}, then: "May" },
                                                             { case: {$eq: ["$$monthnum", 6]}, then: "June" },
                                                             { case: {$eq: ["$$monthnum", 7]}, then: "July" },
                                                             { case: {$eq: ["$$monthnum", 8]}, then: "August"},
                                                             { case: {$eq: ["$$monthnum", 9]}, then: "September" },
                                                             { case: {$eq: ["$$monthnum", 10]}, then: "October" },
                                                             { case: {$eq: ["$$monthnum", 11]}, then: "November" },
                                                             { case: {$eq: ["$$monthnum", 12]}, then: "December" },
                                                          ]}
                                                      }, " ",
                                                      {$cond: { if: {$lt: ["$$dayNum", 10]}, then: {$substr: ["$$dayNum", 0, 1]}, else: {$substr: ["$$dayNum", 0, 2]}}},
                                                      ", ", "$$year", " ",
                                                      {$cond: { if: {$lt: ["$$hour", 10]}, then: {$substr: ["$$hour", 0, 1]}, else: {$substr: ["$$hour", 0, 2]}}},
                                                      ":", "$$minute", " ", "$$am_pm"
                                                  ] }
                                     }},
                }
              },
              {"$addFields": {"offTrialDate": {$cond: {if:   {$eq: [{$indexOfCP: ["$currentPatientStatus", "OFF_TRIAL"]}, 0]},
                                                       then: "$lastTrigger.dateCreated",
                                                       else: null}}}},
              {"$addFields": {"treatmentArm": {$cond: {if:   {$in:  ["$currentPatientStatus", ["ON_TREATMENT_ARM", "PENDING_CONFIRMATION", "PENDING_APPROVAL" ]]},
                                                       then: "$lastAssignment.treatmentArm",
                                                       else: null}}}},
              ]);
