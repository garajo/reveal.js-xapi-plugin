export default [
  {
     "@context": "https://w3id.org/xapi/profiles/context",
      "id": "https://w3id.org/xapi/cmi5",
      "type": "Profile",
      "conformsTo": "https://w3id.org/xapi/profiles#1.0",
      "prefLabel": {
          "en": "cmi5 Profile"
      },
      "definition": {
          "en": "This specification describes interoperable runtime communication between Learning Management Systems (LMS) and Assignable Units (AU).\n\nThe runtime communication and behavior of all parts of the system are carefully described in the full specification, which can be found at https://github.com/AICC/CMI-5_Spec_Current/blob/quartz/cmi5_spec.md . This is a structured representation of cmi5 concepts, statement structure, and statement communications patterns that the additional rules in the full specification build upon and provide the definitive interpretation of."
      },
      "seeAlso": "https://github.com/AICC/CMI-5_Spec_Current/blob/quartz/cmi5_spec.md",
      "versions": [
          {
              "id": "https://w3id.org/xapi/cmi5/context/categories/cmi5",
              "generatedAtTime": "2017-03-27T12:30:00-07:00"
          }
      ],
      "author": {
          "type": "Organization",
          "name": "cmi5 Working Group"
      },
      "concepts": [
        {
          "@id": "https://w3id.org/xapi/adl/verbs/abandoned",
          "inScheme": "https://w3id.org/xapi/cmi5/context/categories/cmi5",
          "@type": "Verb",
          "definition": {
            "en": "Indicates that the AU session was abnormally terminated by a learner's action (or due to a system failure)."
          },
          "prefLabel": {
            "en": "abandoned"
          }
        },
      {
        "@id": "https://w3id.org/xapi/adl/verbs/satisfied",
        "inScheme": "https://w3id.org/xapi/cmi5/context/categories/cmi5",
        "@type": "Verb",
        "definition": {
          "en": "Indicates that the authority or activity provider determined the actor has fulfilled the criteria of the object or activity."
        },
        "prefLabel": {
          "en": "satisfied"
        }
      },
      {
        "@id": "https://w3id.org/xapi/adl/verbs/waived",
        "inScheme": "https://w3id.org/xapi/cmi5/context/categories/cmi5",
        "@type": "Verb",
        "definition": {
          "en": "Indicates that the learning activity requirements were met by means other than completing the activity. A waived statement is used to indicate that the activity may be skipped by the actor."
        },
        "prefLabel": {
          "en": "waived"
        }
      },
     	{
  		"@id": "https://w3id.org/xapi/cmi5/activities/block",
          "inScheme": "https://w3id.org/xapi/cmi5/context/categories/cmi5",
  		"@type": "ActivityType",
  		"definition": {
  			"en": "A block represents a number of Assignable Units of which progress (completion/success) is rolled up to.  In cmi5 it is every level above the AU and below the Course."
  		},
  		"prefLabel": {
  			"en": "block"
  		}
  	},
        {
          "@id": "https://w3id.org/xapi/cmi5/activities/course",
          "inScheme": "https://w3id.org/xapi/cmi5/context/categories/cmi5",
          "@type": "ActivityType",
          "exactMatch": [ "http://adlnet.gov/expapi/activities/course" ],
          "definition": {
            "en": "A course represents an amount of content that is published and registered for with the purpose of gaining completion.  It is represented with a Course Structure Format in cmi5 as the highest level of content (above Block and AU)."
          },
          "prefLabel": {
            "en": "course"
          }
        },
    {
        "id": "https://w3id.org/xapi/cmi5/result/extensions/progress",
        "inScheme": "https://w3id.org/xapi/cmi5/context/categories/cmi5",
        "type": "ResultExtension",
        "prefLabel": {
            "en": "progress"
        },
        "definition": {
            "en": "An integer value between 0 and 100 (inclusive) indicating the completion of the AU as a percentage.\n\nThe AU may set this value in statements to indicate level of completion. The AU SHOULD NOT set a progress value in a Completed statement or if it has previously issued a Completed statement for the AU in the current registration."
        },
        "inlineSchema": "{ \"type\": \"number\", \"maximum\": 100, \"minimum\": 0, \"multipleOf\": 1.0 }"
    },
    {
        "id": "https://w3id.org/xapi/cmi5/result/extensions/reason",
        "inScheme": "https://w3id.org/xapi/cmi5/context/categories/cmi5",
        "type": "ResultExtension",
        "prefLabel": {
            "en": "reason"
        },
        "definition": {
            "en": "Indicates the reason why an AU was 'waived' (marked complete by an alternative means)"
        },
        "inlineSchema": "{ \"type\": \"string\" }"
    },
        {
          "id": "https://w3id.org/xapi/cmi5/context/extensions/sessionid",
          "inScheme": "https://w3id.org/xapi/cmi5/context/categories/cmi5",
          "type": "ContextExtension",
          "exactMatch": [ "id", "https://w3id.org/xapi/video/extensions/session-id" ],
          "prefLabel": {
            "en": "session ID"
          },
          "definition": {
            "en": "A unique identifier for a single AU launch session based on actor and course registration."
          },
          "inlineSchema": "{ \"type\": \"string\" }"
        },
    {
        "id": "https://w3id.org/xapi/cmi5/context/extensions/masteryscore",
        "inScheme": "https://w3id.org/xapi/cmi5/context/categories/cmi5",
        "type": "ContextExtension",
        "prefLabel": {
            "en": "mastery score"
        },
        "definition": {
            "en": "'masteryScore' as provided in the LMS Launch Data for the AU plus registration used to determine the pass/fail result based on score"
        },
        "inlineSchema": "{ \"type\": \"number\",  \"maximum\": 1, \"minimum\": 0 }"
    },
    {
        "id": "https://w3id.org/xapi/cmi5/context/extensions/launchmode",
        "inScheme": "https://w3id.org/xapi/cmi5/context/categories/cmi5",
        "type": "ContextExtension",
        "prefLabel": {
            "en": "launch mode"
        },
        "definition": {
            "en": "Indicates what launch mode an AU was launched with by the LMS"
        },
        "inlineSchema": "{ \"enum\": [\"Normal\", \"Browse\", \"Review\"] }"
    },
    {
        "id": "https://w3id.org/xapi/cmi5/context/extensions/launchurl",
        "inScheme": "https://w3id.org/xapi/cmi5/context/categories/cmi5",
        "type": "ContextExtension",
        "prefLabel": {
            "en": "launch URL"
        },
        "definition": {
            "en": "The URL used by the LMS to launch the AU"
        },
        "inlineSchema": "{ \"type\": \"string\", \"format\": \"uri\" }"
    },
    {
        "id": "https://w3id.org/xapi/cmi5/context/extensions/launchparameters",
        "inScheme": "https://w3id.org/xapi/cmi5/context/categories/cmi5",
        "type": "ContextExtension",
        "prefLabel": {
            "en": "launch parameters"
        },
        "definition": {
            "en": "'launchParameters' as provided in the LMS Launch Data for the AU plus registration"
        },
        "inlineSchema": "{ \"type\": \"string\" }"
    },
    {
        "id": "https://w3id.org/xapi/cmi5/context/extensions/moveon",
        "inScheme": "https://w3id.org/xapi/cmi5/context/categories/cmi5",
        "type": "ContextExtension",
        "prefLabel": {
            "en": "move on"
        },
        "definition": {
            "en": "'moveOn' as provided in the LMS Launch Data for the AU plus registration"
        },
        "inlineSchema": "{ \"enum\": [\"Passed\", \"Completed\", \"CompletedAndPassed\", \"CompletedOrPassed\", \"NotApplicable\"] }"
    }
  ],
      "templates": [
          {
              "id": "https://w3id.org/xapi/cmi5#generalrestrictions",
              "type": "StatementTemplate",
              "inScheme": "https://w3id.org/xapi/cmi5/context/categories/cmi5",
              "prefLabel": {
                  "en": "Restrictions for all cmi5-defined Statements"
              },
              "rules": [
                  {
                      "location": "$.id",
                      "presence": "included"
                  },
                  {
                      "location": "$.timestamp",
                      "presence": "included"
                  },
                  {
                      "location": "$.context.contextActivities.grouping[*]",
                      "presence": "included",
                      "scopeNote": "An Activity object with an 'id' property whose value is the unaltered value of the AU's id attribute from the course structure (See Section 13.1.4 AU Metadata – id) MUST be included in the 'grouping' context activities."
                  },
                  {
                      "location": "$.context.extensions['https://w3id.org/xapi/cmi5/context/extensions/sessionid']",
                      "presence": "included"
                  }
              ]
          }, {
              "id": "https://w3id.org/xapi/cmi5#launched",
              "type": "StatementTemplate",
              "prefLabel": {
                  "en": "Launched"
              },
              "inScheme": "https://w3id.org/xapi/cmi5/context/categories/cmi5",
              "verb": "http://adlnet.gov/expapi/verbs/launched",
              "rules": [
                  {
                      "location": "$.result.score",
                      "presence": "excluded"
                  },
                  {
                      "location": "$.result.success",
                      "presence": "excluded"
                  },
                  {
                      "location": "$.result.completion",
                      "presence": "excluded"
                  },
                  {
                      "location": "$.context.contextActivities.category[*].id",
                      "none": "https://w3id.org/xapi/cmi5/context/categories/moveon"
                  },
                  {
                      "location": "$.context.extensions['https://w3id.org/xapi/cmi5/context/extensions/launchmode']",
                      "presence": "included",
                      "all": ["Normal", "Browse", "Review"]
                  },
                  {
                      "location": "$.context.extensions['https://w3id.org/xapi/cmi5/context/extensions/launchurl']",
                      "presence": "included",
                      "scopeNote": "The LMS MUST put a fully qualified URL equivalent to the one that the LMS used to launch the AU without the name/value pairs included as defined in section 8.1 in the context extensions of the 'Launched' statement."
                  },
                  {
                      "location": "$.context.extensions['https://w3id.org/xapi/cmi5/context/extensions/moveon']",
                      "presence": "included",
                      "all": ["Passed", "Completed", "CompletedAndPassed", "CompletedOrPassed", "NotApplicable"]
                  },
                  {
                      "location": "$.context.extensions['https://w3id.org/xapi/cmi5/context/extensions/launchparameters']",
                      "presence": "included"
                  }
              ]
          }, {
              "id": "https://w3id.org/xapi/cmi5#initialized",
              "type": "StatementTemplate",
              "prefLabel": {
                  "en": "Initialized"
              },
              "inScheme": "https://w3id.org/xapi/cmi5/context/categories/cmi5",
              "verb": "http://adlnet.gov/expapi/verbs/initialized",
              "rules": [
                  {
                      "location": "$.result.score",
                      "presence": "excluded"
                  },
                  {
                      "location": "$.result.success",
                      "presence": "excluded"
                  },
                  {
                      "location": "$.result.completion",
                      "presence": "excluded"
                  },
                  {
                      "location": "$.context.contextActivities.category[*].id",
                      "none": "https://w3id.org/xapi/cmi5/context/categories/moveon"
                  }
              ]
          }, {
              "id": "https://w3id.org/xapi/cmi5#completed",
              "type": "StatementTemplate",
              "prefLabel": {
                  "en": "Completed"
              },
              "inScheme": "https://w3id.org/xapi/cmi5/context/categories/cmi5",
              "verb": "http://adlnet.gov/expapi/verbs/completed",
              "rules": [
                  {
                      "location": "$.result.score",
                      "presence": "excluded"
                  },
                  {
                      "location": "$.result.success",
                      "presence": "excluded"
                  },
                  {
                      "location": "$.result.completion",
                      "presence": "included",
                      "all": [true]
                  },
                  {
                      "location": "$.result.duration",
                      "presence": "included",
                      "scopeNote": "The AU SHOULD calculate duration as the time spent by the learner to achieve completion status."
                  },
                  {
                      "location": "$.context.contextActivities.category[*].id",
                      "presence": "included",
                      "any": "https://w3id.org/xapi/cmi5/context/categories/moveon"
                  }
              ]
          }, {
              "id": "https://w3id.org/xapi/cmi5#passed",
              "type": "StatementTemplate",
              "prefLabel": {
                  "en": "Passed"
              },
              "inScheme": "https://w3id.org/xapi/cmi5/context/categories/cmi5",
              "verb": "http://adlnet.gov/expapi/verbs/passed",
              "rules": [
                  {
                      "location": "$.result.score",
                      "presence": "recommended"
                  },
                  {
                      "location": "$.result.success",
                      "presence": "included",
                      "all": [true]
                  },
                  {
                      "location": "$.result.completion",
                      "presence": "excluded"
                  },
                  {
                      "location": "$.result.duration",
                      "presence": "included",
                      "scopeNote": "The AU SHOULD calculate duration as the time spent by the learner to attempt and succeed in a judged activity of the AU."
                  },
                  {
                      "location": "$.context.contextActivities.category[*].id",
                      "presence": "included",
                      "any": "https://w3id.org/xapi/cmi5/context/categories/moveon"
                  }
              ]
          }, {
              "id": "https://w3id.org/xapi/cmi5#failed",
              "type": "StatementTemplate",
              "prefLabel": {
                  "en": "Failed"
              },
              "inScheme": "https://w3id.org/xapi/cmi5/context/categories/cmi5",
              "verb": "http://adlnet.gov/expapi/verbs/failed",
              "rules": [
                  {
                      "location": "$.result.score",
                      "presence": "recommended"
                  },
                  {
                      "location": "$.result.success",
                      "presence": "included",
                      "all": [false]
                  },
                  {
                      "location": "$.result.completion",
                      "presence": "excluded"
                  },
                  {
                      "location": "$.result.duration",
                      "presence": "included",
                      "scopeNote": "The AU SHOULD calculate duration as the time spent by the learner to attempt and fail in a judged activity of the AU."
                  },
                  {
                      "location": "$.context.contextActivities.category[*].id",
                      "presence": "included",
                      "any": "https://w3id.org/xapi/cmi5/context/categories/moveon"
                  }
              ]
          }, {
              "id": "https://w3id.org/xapi/cmi5#abandoned",
              "type": "StatementTemplate",
              "prefLabel": {
                  "en": "Abandoned"
              },
              "inScheme": "https://w3id.org/xapi/cmi5/context/categories/cmi5",
              "verb": "https://w3id.org/xapi/adl/verbs/abandoned",
              "rules": [
                  {
                      "location": "$.result.score",
                      "presence": "excluded"
                  },
                  {
                      "location": "$.result.success",
                      "presence": "excluded"
                  },
                  {
                      "location": "$.result.completion",
                      "presence": "excluded"
                  },
                  {
                      "location": "$.result.duration",
                      "presence": "included",
                      "scopeNote": "The duration property MUST, at a minimum, be set as the total session time, calculated as the time between the 'Launched' statement and the last statement (of any kind) issued by the AU. The LMS SHOULD also use other (LMS specific) methods (if available) to determine if the total session time was longer."
                  },
                  {
                      "location": "$.context.contextActivities.category[*].id",
                      "none": "https://w3id.org/xapi/cmi5/context/categories/moveon"
                  }
              ]
          }, {
              "id": "https://w3id.org/xapi/cmi5#waived",
              "type": "StatementTemplate",
              "prefLabel": {
                  "en": "Waived"
              },
              "inScheme": "https://w3id.org/xapi/cmi5/context/categories/cmi5",
              "verb": "http://adlnet.gov/expapi/verbs/waived",
              "rules": [
                  {
                      "location": "$.result.score",
                      "presence": "excluded"
                  },
                  {
                      "location": "$.result.success",
                      "presence": "included",
                      "all": [true]
                  },
                  {
                      "location": "$.result.completion",
                      "presence": "included",
                      "all": [true]
                  },
                  {
                      "location": "$.result['https://w3id.org/xapi/cmi5/result/extensions/reason']",
                      "presence": "included"
                  },
                  {
                      "location": "$.context.contextActivities.category[*].id",
                      "presence": "included",
                      "any": "https://w3id.org/xapi/cmi5/context/categories/moveon"
                  }
              ]
          }, {
              "id": "https://w3id.org/xapi/cmi5#terminated",
              "type": "StatementTemplate",
              "prefLabel": {
                  "en": "Terminated"
              },
              "inScheme": "https://w3id.org/xapi/cmi5/context/categories/cmi5",
              "verb": "http://adlnet.gov/expapi/verbs/terminated",
              "rules": [
                  {
                      "location": "$.result.score",
                      "presence": "excluded"
                  },
                  {
                      "location": "$.result.success",
                      "presence": "excluded"
                  },
                  {
                      "location": "$.result.completion",
                      "presence": "excluded"
                  },
                  {
                      "location": "$.result.duration",
                      "presence": "included",
                      "scopeNote": "The AU SHOULD calculate duration for Terminated statements as the time difference between the 'Initialized' statement and the 'Terminated' statement. The AU may use other methods to calculate the duration based on criteria determined by the AU."
                  },
                  {
                      "location": "$.context.contextActivities.category[*].id",
                      "none": "https://w3id.org/xapi/cmi5/context/categories/moveon"
                  }
              ]
          }, {
              "id": "https://w3id.org/xapi/cmi5#satisfied",
              "type": "StatementTemplate",
              "prefLabel": {
                  "en": "Satisfied"
              },
              "inScheme": "https://w3id.org/xapi/cmi5/context/categories/cmi5",
              "verb": "http://adlnet.gov/expapi/verbs/satisfied",
              "rules": [
                  {
                      "location": "$.result.score",
                      "presence": "excluded"
                  },
                  {
                      "location": "$.result.success",
                      "presence": "excluded"
                  },
                  {
                      "location": "$.result.completion",
                      "presence": "excluded"
                  },
                  {
                      "location": "$.context.contextActivities.category[*].id",
                      "none": "https://w3id.org/xapi/cmi5/context/categories/moveon"
                  },
                  {
                      "location": "$.object.definition.type",
                      "presence": "included",
                      "any": [
                          "https://w3id.org/xapi/cmi5/activitytype/block",
                          "https://w3id.org/xapi/cmi5/activitytype/course"
                      ]
                  }
              ]
          }],
      "patterns": [
          {
              "id": "https://w3id.org/xapi/cmi5#satisfieds",
              "type": "Pattern",
              "prefLabel": {
                  "en": "Satisfieds"
              },
              "inScheme": "https://w3id.org/xapi/cmi5/context/categories/cmi5",
              "zeroOrMore": "https://w3id.org/xapi/cmi5#satisfied"
          },
          {
              "id": "https://w3id.org/xapi/cmi5#waivedsession",
              "type": "Pattern",
              "prefLabel": {
                  "en": "Waived Session"
              },
              "inScheme": "https://w3id.org/xapi/cmi5/context/categories/cmi5",
              "sequence": ["https://w3id.org/xapi/cmi5#satisfieds", "https://w3id.org/xapi/cmi5#waived", "https://w3id.org/xapi/cmi5#satisfieds"]
          },
          {
              "id": "https://w3id.org/xapi/cmi5#noresultsession",
              "type": "Pattern",
              "prefLabel": {
                  "en": "No Result Session"
              },
              "inScheme": "https://w3id.org/xapi/cmi5/context/categories/cmi5",
              "sequence": ["https://w3id.org/xapi/cmi5#launched", "https://w3id.org/xapi/cmi5#initialized", "https://w3id.org/xapi/cmi5#terminatedorabandoned"]
          },
          {
              "id": "https://w3id.org/xapi/cmi5#completionnosuccesssession",
              "type": "Pattern",
              "prefLabel": {
                  "en": "Completion No Success Session"
              },
              "inScheme": "https://w3id.org/xapi/cmi5/context/categories/cmi5",
              "sequence": ["https://w3id.org/xapi/cmi5#launched", "https://w3id.org/xapi/cmi5#initialized", "https://w3id.org/xapi/cmi5#completed", "https://w3id.org/xapi/cmi5#satisfieds", "https://w3id.org/xapi/cmi5#terminatedorabandoned"]
          },
          {
              "id": "https://w3id.org/xapi/cmi5#passedsession",
              "type": "Pattern",
              "prefLabel": {
                  "en": "Completed And Maybe Failed"
              },
              "inScheme": "https://w3id.org/xapi/cmi5/context/categories/cmi5",
              "sequence": ["https://w3id.org/xapi/cmi5#launched", "https://w3id.org/xapi/cmi5#initialized", "https://w3id.org/xapi/cmi5#passed", "https://w3id.org/xapi/cmi5#satisfieds", "https://w3id.org/xapi/cmi5#terminatedorabandoned"]
          },
          {
              "id": "https://w3id.org/xapi/cmi5#completionpassedsession",
              "type": "Pattern",
              "prefLabel": {
                  "en": "Completed And Passed Session"
              },
              "inScheme": "https://w3id.org/xapi/cmi5/context/categories/cmi5",
              "sequence": ["https://w3id.org/xapi/cmi5#launched", "https://w3id.org/xapi/cmi5#initialized", "https://w3id.org/xapi/cmi5#completedandpassed", "https://w3id.org/xapi/cmi5#satisfieds", "https://w3id.org/xapi/cmi5#terminatedorabandoned"]
          },
          {
              "id": "https://w3id.org/xapi/cmi5#failedsession",
              "type": "Pattern",
              "prefLabel": {
                  "en": "Failed Session"
              },
              "inScheme": "https://w3id.org/xapi/cmi5/context/categories/cmi5",
              "sequence": ["https://w3id.org/xapi/cmi5#launched", "https://w3id.org/xapi/cmi5#initialized", "https://w3id.org/xapi/cmi5#failed", "https://w3id.org/xapi/cmi5#terminatedorabandoned"]
          },
          {
              "id": "https://w3id.org/xapi/cmi5#completionmaybefailedsession",
              "type": "Pattern",
              "prefLabel": {
                  "en": "Completion Maybe Failed Session"
              },
              "inScheme": "https://w3id.org/xapi/cmi5/context/categories/cmi5",
              "sequence": ["https://w3id.org/xapi/cmi5#launched", "https://w3id.org/xapi/cmi5#initialized", "https://w3id.org/xapi/cmi5#completedandmaybefailed", "https://w3id.org/xapi/cmi5#satisfieds", "https://w3id.org/xapi/cmi5#terminatedorabandoned"]
          },
          {
              "id": "https://w3id.org/xapi/cmi5#terminatedorabandoned",
              "type": "Pattern",
              "prefLabel": {
                  "en": "Terminated Or Abandoned"
              },
              "inScheme": "https://w3id.org/xapi/cmi5/context/categories/cmi5",
              "alternates": ["https://w3id.org/xapi/cmi5#terminated", "https://w3id.org/xapi/cmi5#abandoned"]
          },
          {
              "id": "https://w3id.org/xapi/cmi5#completedandpassed",
              "type": "Pattern",
              "prefLabel": {
                  "en": "Completed And Passed"
              },
              "inScheme": "https://w3id.org/xapi/cmi5/context/categories/cmi5",
              "alternates": ["https://w3id.org/xapi/cmi5#completedthenpassed", "https://w3id.org/xapi/cmi5#passedthencompleted"]
          },
          {
              "id": "https://w3id.org/xapi/cmi5#completedthenpassed",
              "type": "Pattern",
              "prefLabel": {
                  "en": "Completed Then Passed"
              },
              "inScheme": "https://w3id.org/xapi/cmi5/context/categories/cmi5",
              "sequence": ["https://w3id.org/xapi/cmi5#completed", "https://w3id.org/xapi/cmi5#satisfieds", "https://w3id.org/xapi/cmi5#passed"]
          },
          {
              "id": "https://w3id.org/xapi/cmi5#passedthencompleted",
              "type": "Pattern",
              "prefLabel": {
                  "en": "Passed Then Completed"
              },
              "inScheme": "https://w3id.org/xapi/cmi5/context/categories/cmi5",
              "sequence": ["https://w3id.org/xapi/cmi5#passed", "https://w3id.org/xapi/cmi5#satisfieds", "https://w3id.org/xapi/cmi5#completed"]
          },
          {
              "id": "https://w3id.org/xapi/cmi5#completedandmaybefailed",
              "type": "Pattern",
              "prefLabel": {
                  "en": "Completed And Maybe Failed"
              },
              "inScheme": "https://w3id.org/xapi/cmi5/context/categories/cmi5",
              "alternates": ["https://w3id.org/xapi/cmi5#maybecompletedthenfailed", "https://w3id.org/xapi/cmi5#failedthenmaybecompleted"]
          },
          {
              "id": "https://w3id.org/xapi/cmi5#maybecompletedthenfailed",
              "type": "Pattern",
              "prefLabel": {
                  "en": "Maybe Completed Then Failed"
              },
              "inScheme": "https://w3id.org/xapi/cmi5/context/categories/cmi5",
              "sequence": ["https://w3id.org/xapi/cmi5#maybecompleted", "https://w3id.org/xapi/cmi5#satisfieds", "https://w3id.org/xapi/cmi5#failed"]
          },
          {
              "id": "https://w3id.org/xapi/cmi5#failedthenmaybecompleted",
              "type": "Pattern",
              "prefLabel": {
                  "en": "Failed Then Maybe Completed"
              },
              "inScheme": "https://w3id.org/xapi/cmi5/context/categories/cmi5",
              "sequence": ["https://w3id.org/xapi/cmi5#failed", "https://w3id.org/xapi/cmi5#maybecompleted"]
          },
          {
              "id": "https://w3id.org/xapi/cmi5#maybecompleted",
              "type": "Pattern",
              "prefLabel": {
                  "en": "Maybe Completed"
              },
              "inScheme": "https://w3id.org/xapi/cmi5/context/categories/cmi5",
              "optional": "https://w3id.org/xapi/cmi5#completed"
          },
          {
              "id": "https://w3id.org/xapi/cmi5#typicalsession",
              "type": "Pattern",
              "prefLabel": {
                  "en": "Typical Session"
              },
              "inScheme": "https://w3id.org/xapi/cmi5/context/categories/cmi5",
              "alternates": [
                  "https://w3id.org/xapi/cmi5#completionmaybefailedsession",
                  "https://w3id.org/xapi/cmi5#completionpassedsession",
                  "https://w3id.org/xapi/cmi5#failedsession",
                  "https://w3id.org/xapi/cmi5#noresultsession",
                  "https://w3id.org/xapi/cmi5#passedsession",
                  "https://w3id.org/xapi/cmi5#completionnosuccesssession",
                  "https://w3id.org/xapi/cmi5#waivedsession"
              ]
          },
          {
              "id": "https://w3id.org/xapi/cmi5#typicalsessions",
              "type": "Pattern",
              "prefLabel": {
                  "en": "Typical Sessions"
              },
              "definition": {
                  "en": "This pattern provides an option to use zero or more of the alernates for the Typical Session pattern."
              },
              "inScheme": "https://w3id.org/xapi/cmi5/context/categories/cmi5",
              "zeroOrMore": "https://w3id.org/xapi/cmi5#typicalsession"
          },
          {
              "id": "https://w3id.org/xapi/cmi5#toplevel",
              "type": "Pattern",
              "primary": true,
              "prefLabel": {
                  "en": "General Pattern"
              },
              "definition": {
                  "en": "This pattern describes the sequence of statements sent over the an entire course registration."
              },
              "inScheme": "https://w3id.org/xapi/cmi5/context/categories/cmi5",
              "sequence": ["https://w3id.org/xapi/cmi5#satisfieds", "typicalsessions"]
          }


      ]
  } ,

  {
  "@context": "https://w3id.org/xapi/profiles/context",
  "id": "http://activitystrea.ms/schema/",
  "type": "Profile",
  "conformsTo": "https://w3id.org/xapi/profiles#1.0",
  "prefLabel": {
    "en": "Activity Streams Vocabulary"
  },
  "definition": {
    "en": "An list of concepts from an obsolete version (1.0) of the Activity Streams specification."
  },
  "versions": [
    {
      "id": "http://activitystrea.ms/schema/1.0.0",
      "generatedAtTime": "2017-07-14T11:35:00Z"
}],
  "seeAlso": "http://activitystrea.ms/specs/json/1.0/",
  "author": {
    "type": "Organization",
    "name": "Activity Streams Working Group"
  },
  "concepts": [
    {
       "id": "http://activitystrea.ms/accept",
       "prefLabel": {
          "en": "accepted"
        },
       "definition": {
         "en": "Indicates that that the actor has accepted the object. For instance, a person accepting an award, or accepting an assignment."
         },

       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
      "id": "http://activitystrea.ms/access",
      "prefLabel": {
        "en": "accessed"
      },
      "definition": {
        "en": "Indicates that the actor has accessed the object. For instance, a person accessing a room, or accessing a file."
      },

      "inScheme": "http://activitystrea.ms/schema/1.0.0",
      "type": "Verb",
      "relatedMatch": [ "https://w3id.org/xapi/seriousgames/verbs/accessed" ]
    },
    {
       "id": "http://activitystrea.ms/acknowledge",
       "prefLabel": {
          "en": "acknowledged"
        },
       "definition": {
         "en": "Indicates that the actor has acknowledged the object. This effectively signals that the actor is aware of the objects existence."
         },

       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/add",
       "prefLabel": {
          "en": "added"
        },
       "definition": {
         "en": "Indicates that the actor has added the object to the target. For instance, adding a photo to an album."
         },
       "exactMatch": ["https://brindlewaye.com/xAPITerms/verbs/added/"],
       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/agree",
       "prefLabel": {
          "en": "agreed"
        },
       "definition": {
         "en": "Indicates that the actor agrees with the object. For example, a person agreeing with an argument, or expressing agreement with a particular issue."
         },

       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/append",
       "prefLabel": {
          "en": "appended"
        },
       "definition": {
         "en": "Indicates that the actor has appended the object to the target. For instance, a person appending a new record to a database."
         },

       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/approve",
       "prefLabel": {
          "en": "approved"
        },
       "definition": {
         "en": "Indicates that the actor has approved the object. For instance, a manager might approve a travel request."
         },

       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/archive",
       "prefLabel": {
          "en": "archived"
        },
       "definition": {
         "en": "Indicates that the actor has archived the object."
         },

       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/assign",
       "prefLabel": {
          "en": "assigned"
        },
       "definition": {
         "en": "Indicates that the actor has assigned the object to the target."
         },

       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/attach",
       "prefLabel": {
          "en": "attached"
        },
       "definition": {
         "en": "Indicates that the actor has attached the object to the target. For instance, a person attaching a file to a wiki page or an email."
         },

       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
      "id": "http://activitystrea.ms/attend",
      "prefLabel": {
        "en": "attended"
      },
      "definition": {
        "en": "Indicates that the actor has attended the object. For instance, a person attending a meeting."
      },
      "exactMatch": [ "http://adlnet.gov/expapi/verbs/attended" ],
      "relatedMatch": [ "http://adlnet.gov/expapi/verbs/attended" ],
      "inScheme": "http://activitystrea.ms/schema/1.0.0",
      "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/author",
       "prefLabel": {
          "en": "authored"
        },
       "definition": {
         "en": "Indicates that the actor has authored the object. Note that this is a more specific form of the verb create."
         },

       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/authorize",
       "prefLabel": {
          "en": "authorized"
        },
       "definition": {
         "en": "Indicates that the actor has authorized the object. If a target is specified, it means that the authorization is specifically in regards to the target. For instance, a service can authorize a person to access a given application; in which case the actor is the service, the object is the person, and the target is the application. In contrast, a person can authorize a request; in which case the actor is the person and the object is the request and there might be no explicit target."
         },

       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/borrow",
       "prefLabel": {
          "en": "borrowed"
        },
       "definition": {
         "en": "Indicates that the actor has borrowed the object. If a target is specified, it identifies the entity from which the object was borrowed. For instance, if a person borrows a book from a library, the person is the actor, the book is the object and the library is the target."
         },

       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/build",
       "prefLabel": {
          "en": "built"
        },
       "definition": {
         "en": "Indicates that the actor has built the object. For example, if a person builds a model or compiles code."
         },

       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/cancel",
       "prefLabel": {
          "en": "canceled"
        },
       "definition": {
         "en": "Indicates that the actor has canceled the object. For instance, canceling a calendar event."
         },

       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/checkin",
       "prefLabel": {
          "en": "checkedin"
        },
       "definition": {
         "en": "Indicates that the actor has checked-in to the object. For instance, a person checking-in to a place."
         },

       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/close",
       "prefLabel": {
          "en": "closed"
        },
       "definition": {
         "en": "Indicates that the actor has closed the object. For instance, the object could represent a ticket being tracked in an issue management system."
         },

       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/complete",
       "prefLabel": {
          "en": "completed"
        },
       "definition": {
         "en": "Indicates that the actor has completed the object."
         },
       "exactMatch": ["http://adlnet.gov/expapi/verbs/completed"],
       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/confirm",
       "prefLabel": {
          "en": "confirmed"
        },
       "definition": {
         "en": "Indicates that the actor has confirmed or agrees with the object. For instance, a software developer might confirm an issue reported against a product."
         },

       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
      "id": "http://activitystrea.ms/consume",
      "prefLabel": {
        "en": "consumed"
      },
      "narrower": [ "http://activitystrea.ms/play" ],
      "definition": {
        "en": "Indicates that the actor has consumed the object. The specific meaning is dependent largely on the objects type. For instance, an actor may consume an audio object, indicating that the actor has listened to it; or an actor may consume a book, indicating that the book has been read. As such, the consume verb is a more generic form of other more specific verbs such as read and play."
      },

      "inScheme": "http://activitystrea.ms/schema/1.0.0",
      "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/create",
       "prefLabel": {
          "en": "created"
        },
       "definition": {
         "en": "Indicates that the actor has created the object."
         },

       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/delete",
       "prefLabel": {
          "en": "deleted"
        },
       "definition": {
         "en": "Indicates that the actor has deleted the object. This implies, but does not require, the permanent destruction of the object."
         },

       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/deliver",
       "prefLabel": {
          "en": "delivered"
        },
       "definition": {
         "en": "Indicates that the actor has delivered the object. For example, delivering a package."
         },

       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/deny",
       "prefLabel": {
          "en": "denied"
        },
       "definition": {
         "en": "Indicates that the actor has denied the object. For example, a manager may deny a travel request."
         },

       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/disagree",
       "prefLabel": {
          "en": "disagreed"
        },
       "definition": {
         "en": "Indicates that the actor disagrees with the object."
         },

       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
      "id": "http://activitystrea.ms/dislike",
      "prefLabel": {
        "en": "disliked"
      },
      "relatedMatch": [ "https://w3id.org/xapi/acrossx/verbs/disliked" ],
      "definition": {
        "en": "Indicates that the actor dislikes the object."
      },

      "inScheme": "http://activitystrea.ms/schema/1.0.0",
      "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/experience",
       "prefLabel": {
          "en": "experienced"
        },
       "definition": {
         "en": "Indicates that the actor has experienced the object in some manner. Note that, depending on the specific object types used for both the actor and object, the meaning of this verb can overlap that of the consume and play verbs. For instance, a person might experience a movie; or play the movie; or consume the movie. The experience verb can be considered a more generic form of other more specific verbs as consume, play, watch, listen, and read."
         },
       "exactMatch": ["http://adlnet.gov/expapi/verbs/experienced"],
       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/favorite",
       "prefLabel": {
          "en": "favorited"
        },
       "definition": {
         "en": "Indicates that the actor marked the object as an item of special interest."
         },

       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/flag-as-inappropriate",
       "prefLabel": {
          "en": "flagged as inappropriate"
        },
       "definition": {
         "en": "Indicates that the actor has flagged the object as being inappropriate for some reason. When using this verb, the context property, as specified within Section 4.1 can be used to provide additional detail about why the object has been flagged."
         },

       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/follow",
       "prefLabel": {
          "en": "followed"
        },
       "definition": {
         "en": "Indicates that the actor began following the activity of the object. In most cases, the objectType will be a person, but it can potentially be of any type that can sensibly generate activity. Processors MAY ignore (silently drop) successive identical follow activities."
         },

       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/find",
       "prefLabel": {
          "en": "found"
        },
       "definition": {
         "en": "Indicates that the actor has found the object."
         },

       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/give",
       "prefLabel": {
          "en": "gave"
        },
       "definition": {
         "en": "Indicates that the actor is giving an object to the target. Examples include one person giving a badge object to another person. The object identifies the object being given. The target identifies the receiver."
         },

       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/host",
       "prefLabel": {
          "en": "hosted"
        },
       "definition": {
         "en": "Indicates that the actor is hosting the object. As in hosting an event, or hosting a service."
         },

       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
      "id": "http://activitystrea.ms/ignore",
      "relatedMatch": [ "https://w3id.org/xapi/medbiq/verbs/ignored" ],
      "prefLabel": {
        "en": "ignored"
      },
      "definition": {
        "en": "Indicates that the actor has ignored the object. For instance, this verb may be used when an actor has ignored a friend request, in which case the object may be the request-friend activity."
      },

      "inScheme": "http://activitystrea.ms/schema/1.0.0",
      "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/insert",
       "prefLabel": {
          "en": "inserted"
        },
       "definition": {
         "en": "Indicates that the actor has inserted the object into the target."
         },

       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/install",
       "prefLabel": {
          "en": "installed"
        },
       "definition": {
         "en": "Indicates that the actor has installed the object, as in installing an application."
         },

       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
      "id": "http://activitystrea.ms/interact",
      "relatedMatch": [ "http://adlnet.gov/expapi/verbs/interacted" ],
      "prefLabel": {
        "en": "interacted"
      },
      "definition": {
        "en": "Indicates that the actor has interacted with the object. For instance, when one person interacts with another."
      },
      "exactMatch": [ "http://adlnet.gov/expapi/verbs/interacted" ],
      "inScheme": "http://activitystrea.ms/schema/1.0.0",
      "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/invite",
       "prefLabel": {
          "en": "invited"
        },
       "definition": {
         "en": "Indicates that the actor has invited the object, typically a person object, to join or participate in the object described by the target. The target could, for instance, be an event, group or a service."
         },

       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/join",
       "prefLabel": {
          "en": "joined"
        },
       "definition": {
         "en": "Indicates that the actor has become a member of the object. This specification only defines the meaning of this verb when the object of the Activity has an objectType of group, though implementors need to be prepared to handle other types of objects."
         },

       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/leave",
       "prefLabel": {
          "en": "left"
        },
       "definition": {
         "en": "Indicates that the actor has left the object. For instance, a Person leaving a Group or checking-out of a Place."
         },

       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
      "id": "http://activitystrea.ms/like",
      "related": [ "https://w3id.org/xapi/acrossx/verbs/liked" ],
      "prefLabel": {
        "en": "liked"
      },
      "definition": {
        "en": "Indicates that the actor marked the object as an item of special interest. The like verb is considered to be an alias of favorite. The two verb are semantically identical."
      },

      "inScheme": "http://activitystrea.ms/schema/1.0.0",
      "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/listen",
       "prefLabel": {
          "en": "listened"
        },
       "definition": {
         "en": "Indicates that the actor has listened to the object. This is typically only applicable for objects representing audio content, such as music, an audio-book, or a radio broadcast. The listen verb is a more specific form of the consume, experience and play verbs."
         },

       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/lose",
       "prefLabel": {
          "en": "lost"
        },
       "definition": {
         "en": "Indicates that the actor has lost the object. For instance, if a person loses a game."
         },

       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/make-friend",
       "prefLabel": {
          "en": "madefriend"
        },
       "definition": {
         "en": "Indicates the creation of a friendship that is reciprocated by the object. Since this verb implies an activity on the part of its object, processors MUST NOT accept activities with this verb unless they are able to verify through some external means that there is in fact a reciprocated connection. For example, a processor may have received a guarantee from a particular publisher that the publisher will only use this Verb in cases where a reciprocal relationship exists."
         },

       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/open",
       "prefLabel": {
          "en": "opened"
        },
       "definition": {
         "en": "Indicates that the actor has opened the object. For instance, the object could represent a ticket being tracked in an issue management system."
         },

       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
      "id": "http://activitystrea.ms/play",
      "prefLabel": {
        "en": "played"
      },
      "definition": {
        "en": "Indicates that the actor spent some time enjoying the object. For example, if the object is a video this indicates that the subject watched all or part of the video. The play verb is a more specific form of the consume verb."
      },
      "exactMatch": [ "https://w3id.org/xapi/video/verbs/played" ],
      "broader": [ "http://activitystrea.ms/consume" ],
      "inScheme": "http://activitystrea.ms/schema/1.0.0",
      "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/present",
       "prefLabel": {
          "en": "presented"
        },
       "definition": {
         "en": "Indicates that the actor has presented the object. For instance, when a person gives a presentation at a conference."
         },

       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/purchase",
       "prefLabel": {
          "en": "purchased"
        },
       "definition": {
         "en": "Indicates that the actor has purchased the object. If a target is specified, in indicates the entity from which the object was purchased."
         },

       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/qualify",
       "prefLabel": {
          "en": "qualified"
        },
       "definition": {
         "en": "Indicates that the actor has qualified for the object. If a target is specified, it indicates the context within which the qualification applies."
         },

       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
      "id": "http://activitystrea.ms/read",
      "exactMatch": [ "https://w3id.org/xapi/adb/verbs/read" ],
      "prefLabel": {
        "en": "read"
      },
      "definition": {
        "en": "Indicates that the actor has read the object."
      },

      "inScheme": "http://activitystrea.ms/schema/1.0.0",
      "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/receive",
       "prefLabel": {
          "en": "received"
        },
       "definition": {
         "en": "Indicates that the actor is receiving an object. Examples include a person receiving a badge object. The object identifies the object being received."
         },

       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/reject",
       "prefLabel": {
          "en": "rejected"
        },
       "definition": {
         "en": "Indicates that the actor has rejected the object."
         },

       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/remove",
       "prefLabel": {
          "en": "removed"
        },
       "definition": {
         "en": "Indicates that the actor has removed the object from the target."
         },
       "exactMatch": ["https://brindlewaye.com/xAPITerms/verbs/removed"],
       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/remove-friend",
       "prefLabel": {
          "en": "removed friend"
        },
       "definition": {
         "en": "Indicates that the actor has removed the object from the collection of friends."
         },

       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/replace",
       "prefLabel": {
          "en": "replaced"
        },
       "definition": {
         "en": "Indicates that the actor has replaced the target with the object."
         },

       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
      "id": "http://activitystrea.ms/request",
      "exactMatch": [ "http://activitystrea.ms/request" ],
      "prefLabel": {
        "en": "requested"
      },
      "definition": {
        "en": "Indicates that the actor has requested the object. If a target is specified, it indicates the entity from which the object is being requested."
      },

      "inScheme": "http://activitystrea.ms/schema/1.0.0",
      "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/request-friend",
       "prefLabel": {
          "en": "requested friend"
        },
       "definition": {
         "en": "Indicates the creation of a friendship that has not yet been reciprocated by the object."
         },

       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/resolve",
       "prefLabel": {
          "en": "resolved"
        },
       "definition": {
         "en": "Indicates that the actor has resolved the object. For instance, the object could represent a ticket being tracked in an issue management system."
         },

       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/retract",
       "prefLabel": {
          "en": "retracted"
        },
       "definition": {
         "en": "Indicates that the actor has retracted the object. For instance, if an actor wishes to retract a previously published activity, the object would be the previously published activity that is being retracted."
         },

       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/return",
       "prefLabel": {
          "en": "returned"
        },
       "definition": {
         "en": "Indicates that the actor has returned the object. If a target is specified, it indicates the entity to which the object was returned."
         },

       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/rsvp-maybe",
       "prefLabel": {
          "en": "rsvp maybe"
        },
       "definition": {
         "en": "The possible RSVP verb indicates that the actor has made a possible RSVP for the object. This specification only defines the meaning of this verb when its object is an event (see Section 3.3), though implementors need to be prepared to handle other object types. The use of this verb is only appropriate when the RSVP was created by an explicit action by the actor. It is not appropriate to use this verb when a user has been added as an attendee by an event organizer or administrator. This verb is included for data conversion with Activity Streams, its not recommended for use in new Tin Can statements."
         },

       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/rsvp-no",
       "prefLabel": {
          "en": "rsvp no"
        },
       "definition": {
         "en": "The negative RSVP verb indicates that the actor has made a negative RSVP for the object. This specification only defines the meaning of this verb when its object is an event (see Section 3.3), though implementors need to be prepared to handle other object types. The use of this verb is only appropriate when the RSVP was created by an explicit action by the actor. It is not appropriate to use this verb when a user has been added as an attendee by an event organizer or administrator. This verb is included for data conversion with Activity Streams, its not recommended for use in new Tin Can statements."
         },

       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/rsvp-yes",
       "prefLabel": {
          "en": "rsvp yes"
        },
       "definition": {
         "en": "The positive RSVP verb indicates that the actor has made a positive RSVP for an object. This specification only defines the meaning of this verb when its object is an event (see Section 3.3), though implementors need to be prepared to handle other object types. The use of this verb is only appropriate when the RSVP was created by an explicit action by the actor. It is not appropriate to use this verb when a user has been added as an attendee by an event organizer or administrator. This verb is included for data conversion with Activity Streams, its not recommended for use in new Tin Can statements."
         },

       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/satisfy",
       "prefLabel": {
          "en": "satisfied"
        },
       "definition": {
         "en": "Indicates that the actor has satisfied the object. If a target is specified, it indicate the context within which the object was satisfied. For instance, if a person satisfies the requirements for a particular challenge: the person is the actor, the requirement is the object, and the challenge is the target."
         },
       "exactMatch": ["https://w3id.org/xapi/adl/verbs/satisfied"],
       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/save",
       "prefLabel": {
          "en": "saved"
        },
       "definition": {
         "en": "Indicates that the actor has called out the object as being of interest primarily to him or herself. Though this action MAY be shared publicly, the implication is that the object has been saved primarily for the actors own benefit rather than to show it to others as would be indicated by the share verb."
         },

       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/schedule",
       "prefLabel": {
          "en": "scheduled"
        },
       "definition": {
         "en": "Indicates that the actor has scheduled the object. For instance, scheduling a meeting."
         },

       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
      "id": "http://activitystrea.ms/search",
      "exactMatch": [ "https://w3id.org/xapi/acrossx/verbs/searched" ],
      "prefLabel": {
        "en": "searched"
      },
      "definition": {
        "en": "Indicates that the actor is or has searched for the object. If a target is specified, it indicates the context within which the search is or has been conducted."
      },

      "inScheme": "http://activitystrea.ms/schema/1.0.0",
      "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/send",
       "prefLabel": {
          "en": "sent"
        },
       "definition": {
         "en": "Indicates that the actor has sent the object. If a target is specified, it indicates the entity to which the object was sent."
         },

       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/share",
       "prefLabel": {
          "en": "shared"
        },
       "definition": {
         "en": "Indicates that the actor has called out the object to readers. In most cases, the actor did not create the object being shared, but is instead drawing attention to it."
         },
       "exactMatch": ["http://adlnet.gov/expapi/verbs/shared"],
       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/sell",
       "prefLabel": {
          "en": "sold"
        },
       "definition": {
         "en": "Indicates that the actor has sold the object. If a target is specified, it indicates the entity to which the object was sold."
         },

       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/sponsor",
       "prefLabel": {
          "en": "sponsored"
        },
       "definition": {
         "en": "Indicates that the actor has sponsored the object. If a target is specified, it indicates the context within which the sponsorship is offered. For instance, a company can sponsor an event or an individual can sponsor a project, etc."
         },

       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/start",
       "prefLabel": {
          "en": "started"
        },
       "definition": {
         "en": "Indicates that the actor has started the object. For instance, when a person starts a project."
         },

       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/stop-following",
       "prefLabel": {
          "en": "stopped following"
        },
       "definition": {
         "en": "Indicates that the actor has stopped following the object."
         },

       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/submit",
       "prefLabel": {
          "en": "submitted"
        },
       "definition": {
         "en": "Indicates that the actor has submitted the object. If a target is specified, it indicates the entity to which the object was submitted."
         },

       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/tag",
       "prefLabel": {
          "en": "tagged"
        },
       "definition": {
         "en": "Indicates that the actor has associated the object with the target. For example, if the actor specifies that a particular user appears in a photo. the object is the user and the target is the photo."
         },

       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/terminate",
       "prefLabel": {
          "en": "terminated"
        },
       "definition": {
         "en": "Indicates that the actor successfully ended an activity."
         },
       "exactMatch": ["http://adlnet.gov/expapi/verbs/terminated"],
       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/tie",
       "prefLabel": {
          "en": "tied"
        },
       "definition": {
         "en": "Indicates that the actor has neither won or lost the object. This verb is generally only applicable when the object represents some form of competition, such as a game."
         },

       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/unfavorite",
       "prefLabel": {
          "en": "unfavorited"
        },
       "definition": {
         "en": "Indicates that the actor has removed the object from the collection of favorited items."
         },

       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/unlike",
       "prefLabel": {
          "en": "unliked"
        },
       "definition": {
         "en": "Indicates that the actor has removed the object from the collection of liked items."
         },

       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/unsatisfy",
       "prefLabel": {
          "en": "unsatisfied"
        },
       "definition": {
         "en": "Indicates that the actor has not satisfied the object. If a target is specified, it indicates the context within which the object was not satisfied. For instance, if a person fails to satisfy the requirements of some particular challenge, the person is the actor; the requirement is the object and the challenge is the target."
         },

       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/unsave",
       "prefLabel": {
          "en": "unsaved"
        },
       "definition": {
         "en": "Indicates that the actor has removed the object from the collection of saved items."
         },

       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/unshare",
       "prefLabel": {
          "en": "unshared"
        },
       "definition": {
         "en": "Indicates that the actor is no longer sharing the object. If a target is specified, it indicates the entity with whom the object is no longer being shared."
         },

       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
      "id": "http://activitystrea.ms/update",
      "prefLabel": {
        "en": "updated"
      },
      "narrowMatch": [ "https://w3id.org/xapi/medbiq/verbs/updated" ],
      "definition": {
        "en": "Indicates that the actor has updated the object. Note, however, that this vocabulary does not define a mechanism for describing the actual set of modifications made to object."
      },

      "inScheme": "http://activitystrea.ms/schema/1.0.0",
      "type": "Verb"
    },
    {
      "id": "http://activitystrea.ms/use",
      "prefLabel": {
        "en": "used"
      },
      "definition": {
        "en": "Indicates that the actor has used the object in some manner."
      },
      "exactMatch": [ "https://w3id.org/xapi/seriousgames/verbs/used" ],

      "inScheme": "http://activitystrea.ms/schema/1.0.0",
      "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/at",
       "prefLabel": {
          "en": "was at"
        },
       "definition": {
         "en": "Indicates that the actor was located at the object. For instance, a person being at a specific physical location."
         },

       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
      "id": "http://activitystrea.ms/watch",
      "prefLabel": {
        "en": "watched"
      },
      "definition": {
        "en": "Indicates that the actor has watched the object. This verb is typically applicable only when the object represents dynamic, visible content such as a movie, a television show or a public performance. This verb is a more specific form of the verbs experience, play and consume."
      },
      "exactMatch": [ "https://w3id.org/xapi/acrossx/verbs/watched", "https://w3id.org/xapi/adb/verbs/watched" ],
      "inScheme": "http://activitystrea.ms/schema/1.0.0",
      "type": "Verb"
    },
    {
       "id": "http://activitystrea.ms/win",
       "prefLabel": {
          "en": "won"
        },
       "definition": {
         "en": "Indicates that the actor has won the object. This verb is typically applicable only when the object represents some form of competition, such as a game."
         },

       "inScheme": "http://activitystrea.ms/schema/1.0.0",
       "type": "Verb"
    },
    {
      "id": "http://activitystrea.ms/alert",
      "inScheme": "http://activitystrea.ms/schema/1.0.0",
      "type": "ActivityType",
      "definition": {
        "en": "Represents any kind of significant notification."
      },
      "prefLabel": {
        "en": "alert"
      }
    },
    {
      "id": "http://activitystrea.ms/application",
      "inScheme": "http://activitystrea.ms/schema/1.0.0",
      "type": "ActivityType",
      "definition": {
        "en": "Represents any kind of software application."
      },
      "prefLabel": {
        "en": "application"
      }
    },
    {
      "id": "http://activitystrea.ms/article",
      "inScheme": "http://activitystrea.ms/schema/1.0.0",
      "related": [ "http://activitystrea.ms/note" ],
      "type": "ActivityType",
      "definition": {
        "en": "Represents objects such as news articles, knowledge base entries, or other similar construct. Such objects generally consist of paragraphs of text, in some cases incorporating embedded media such as photos and inline hyperlinks to other resources."
      },
      "prefLabel": {
        "en": "article"
      }
    },
    {
      "id": "http://activitystrea.ms/audio",
      "inScheme": "http://activitystrea.ms/schema/1.0.0",
      "type": "ActivityType",
      "definition": {
        "en": "Represents audio content of any kind. Objects of this type MAY contain an additional property as specified in Section 3.1."
      },
      "prefLabel": {
        "en": "audio"
      }
    },
    {
      "id": "http://activitystrea.ms/badge",
      "inScheme": "http://activitystrea.ms/schema/1.0.0",
      "type": "ActivityType",
      "definition": {
        "en": "Represents a badge or award granted to an object (typically a person object)."
      },
      "prefLabel": {
        "en": "badge"
      }
    },
    {
      "id": "http://activitystrea.ms/binary",
      "inScheme": "http://activitystrea.ms/schema/1.0.0",
      "type": "ActivityType",
      "definition": {
        "en": "Objects of this type are used to carry arbitrary Base64-encoded binary data within an Activity Stream object. It is primarily intended to attach binary data to other types of objects through the use of the attachments property. Objects of this type will contain the additional properties specified in Section 3.2. This activity type is included for data conversion with Activity Streams, its not recommended for use in new Tin Can statements."
      },
      "prefLabel": {
        "en": "binary"
      }
    },
    {
      "id": "http://activitystrea.ms/bookmark",
      "inScheme": "http://activitystrea.ms/schema/1.0.0",
      "type": "ActivityType",
      "definition": {
        "en": "Represents a pointer to some URL, typically a web page. In most cases, bookmarks are specific to a given user and contain metadata chosen by that user. Bookmark Objects are similar in principle to the concept of bookmarks or favorites in a web browser. A bookmark represents a pointer to the URL, not the URL or the associated resource itself. Objects of this type SHOULD contain an additional targetUrl property whose value is a String containing the IRI of the target of the bookmark."
      },
      "prefLabel": {
        "en": "bookmark"
      }
    },
    {
      "id": "http://activitystrea.ms/collection",
      "inScheme": "http://activitystrea.ms/schema/1.0.0",
      "type": "ActivityType",
      "definition": {
        "en": "Represents a generic collection of objects of any type. This object type can be used, for instance, to represent a collection of files like a folder; a collection of photos like an album; and so forth. Objects of this type MAY contain an additional objectTypes property whose value is an Array of Strings specifying the expected objectType of objects contained within the collection. This activity type is included for data conversion with Activity Streams, its not recommended for use in new Tin Can statements."
      },
      "prefLabel": {
        "en": "collection"
      }
    },
    {
      "id": "http://activitystrea.ms/comment",
      "inScheme": "http://activitystrea.ms/schema/1.0.0",
      "type": "ActivityType",
      "definition": {
        "en": "Represents a textual response to another object. Objects of this type MAY contain an additional inReplyTo property whose value is an Array of one or more other Activity Stream Objects for which the object is to be considered a response."
      },
      "prefLabel": {
        "en": "comment"
      }
    },
    {
      "id": "http://activitystrea.ms/device",
      "inScheme": "http://activitystrea.ms/schema/1.0.0",
      "type": "ActivityType",
      "definition": {
        "en": "Represents a device of any sort."
      },
      "prefLabel": {
        "en": "device"
      }
    },
    {
      "id": "http://activitystrea.ms/event",
      "inScheme": "http://activitystrea.ms/schema/1.0.0",
      "type": "ActivityType",
      "definition": {
        "en": "Represents an event that occurs at a certain location during a particular period of time. Objects of this type MAY contain the additional properties specified in Section 3.3."
      },
      "prefLabel": {
        "en": "event"
      }
    },
    {
      "id": "http://activitystrea.ms/file",
      "inScheme": "http://activitystrea.ms/schema/1.0.0",
      "type": "ActivityType",
      "definition": {
        "en": "Represents any form of document or file. Objects of this type MAY contain an additional fileUrl property whose value a dereferenceable IRI that can be used to retrieve the file; and an additional mimeType property whose value is the MIME type of the file described by the object."
      },
      "prefLabel": {
        "en": "file"
      }
    },
    {
      "id": "http://activitystrea.ms/game",
      "inScheme": "http://activitystrea.ms/schema/1.0.0",
      "type": "ActivityType",
      "definition": {
        "en": "Represents a game or competition of any kind."
      },
      "prefLabel": {
        "en": "game"
      }
    },
    {
      "id": "http://activitystrea.ms/group",
      "inScheme": "http://activitystrea.ms/schema/1.0.0",
      "type": "ActivityType",
      "definition": {
        "en": "Represents a grouping of objects in which member objects can join or leave."
      },
      "prefLabel": {
        "en": "group"
      }
    },
    {
      "id": "http://activitystrea.ms/image",
      "inScheme": "http://activitystrea.ms/schema/1.0.0",
      "type": "ActivityType",
      "definition": {
        "en": "Represents a graphical image. Objects of this type MAY contain an additional fullImage property whose value is an Activity Streams Media Link to a full-sized representation of the image."
      },
      "prefLabel": {
        "en": "image"
      }
    },
    {
      "id": "http://activitystrea.ms/issue",
      "inScheme": "http://activitystrea.ms/schema/1.0.0",
      "type": "ActivityType",
      "definition": {
        "en": "Represents a report about a problem or situation that needs to be resolved. For instance, the issue object can be used to represent reports detailing software defects, or reports of acceptable use violations, and so forth. Objects of this type MAY contain the additional properties specified in Section 3.4."
      },
      "prefLabel": {
        "en": "issue"
      }
    },
    {
      "id": "http://activitystrea.ms/job",
      "inScheme": "http://activitystrea.ms/schema/1.0.0",
      "type": "ActivityType",
      "definition": {
        "en": "Represents information about a job or a job posting."
      },
      "prefLabel": {
        "en": "job"
      }
    },
    {
      "id": "http://activitystrea.ms/note",
      "inScheme": "http://activitystrea.ms/schema/1.0.0",
      "related": [ "http://activitystrea.ms/article" ],
      "exactMatch": [ "https://w3id.org/xapi/acrossx/activities/note" ],
      "type": "ActivityType",
      "definition": {
        "en": "Represents a short-form text message. This object is intended primarily for use in micro-blogging scenarios and in systems where users are invited to publish short, often plain-text messages whose useful lifespan is generally shorter than that of an article of weblog entry. A note is similar in structure to an article, but typically does not have a title or distinct paragraphs and tends to be much shorter in length."
      },
      "prefLabel": {
        "en": "note"
      }
    },
    {
      "id": "http://activitystrea.ms/offer",
      "inScheme": "http://activitystrea.ms/schema/1.0.0",
      "type": "ActivityType",
      "definition": {
        "en": "Represents an offer of any kind."
      },
      "prefLabel": {
        "en": "offer"
      }
    },
    {
      "id": "http://activitystrea.ms/organization",
      "inScheme": "http://activitystrea.ms/schema/1.0.0",
      "type": "ActivityType",
      "definition": {
        "en": "Represents an organization of any kind."
      },
      "prefLabel": {
        "en": "organization"
      }
    },
    {
      "id": "http://activitystrea.ms/page",
      "inScheme": "http://activitystrea.ms/schema/1.0.0",
      "narrowMatch": [ "https://w3id.org/xapi/acrossx/activities/page" ],
      "type": "ActivityType",
      "definition": {
        "en": "Represents an area, typically a web page, that is representative of, and generally managed by a particular entity. Such areas are usually dedicated to displaying descriptive information about the entity and showcasing recent content such as articles, photographs and videos. Most social networking applications, for example, provide individual users with their own dedicated profile pages. Several allow similar types of pages to be created for commercial entities, organizations or events. While the specific details of how pages are implemented, their characteristics and use may vary, the one unifying property is that they are typically owned by a single entity that is represented by the content provided by the page itself."
      },
      "prefLabel": {
        "en": "page"
      }
    },
    {
      "id": "http://activitystrea.ms/person",
      "inScheme": "http://activitystrea.ms/schema/1.0.0",
      "type": "ActivityType",
      "definition": {
        "en": "Represents an individual person. This activity type is included for data conversion with Activity Streams, its not recommended for use in new Tin Can statements. Agent should be used instead of person."
      },
      "prefLabel": {
        "en": "person"
      }
    },
    {
      "id": "http://activitystrea.ms/place",
      "inScheme": "http://activitystrea.ms/schema/1.0.0",
      "type": "ActivityType",
      "definition": {
        "en": "Represents a physical location. Locations can be represented using geographic coordinates, a physical address, a free-form location name, or any combination of these. Objects of this type MAY contain the additional properties specified in Section 3.5."
      },
      "prefLabel": {
        "en": "place"
      }
    },
    {
      "id": "http://activitystrea.ms/process",
      "inScheme": "http://activitystrea.ms/schema/1.0.0",
      "type": "ActivityType",
      "definition": {
        "en": "Represents any form of process. For instance, a long-running task that is started and expected to continue operating for a period of time."
      },
      "prefLabel": {
        "en": "process"
      }
    },
    {
      "id": "http://activitystrea.ms/product",
      "inScheme": "http://activitystrea.ms/schema/1.0.0",
      "type": "ActivityType",
      "definition": {
        "en": "Represents a commercial good or service. Objects of this type MAY contain an additional fullImage property whose value is an Activity Streams Media Link to an image resource representative of the product."
      },
      "prefLabel": {
        "en": "product"
      }
    },
    {
      "id": "http://activitystrea.ms/question",
      "exactMatch": [ "http://adlnet.gov/expapi/activities/question" ],
      "inScheme": "http://activitystrea.ms/schema/1.0.0",
      "type": "ActivityType",
      "definition": {
        "en": "Represents a question or a poll. Objects of this type MAY contain an additional options property whose value is an Array of possible answers to the question in the form of Activity Stream objects of any type."
      },
      "prefLabel": {
        "en": "question"
      }
    },
    {
      "id": "http://activitystrea.ms/review",
      "inScheme": "http://activitystrea.ms/schema/1.0.0",
      "type": "ActivityType",
      "definition": {
        "en": "Represents a primarily prose-based commentary on another object. Objects of this type MAY contain a rating property as specified in Section 4.4."
      },
      "prefLabel": {
        "en": "review"
      }
    },
    {
      "id": "http://activitystrea.ms/service",
      "inScheme": "http://activitystrea.ms/schema/1.0.0",
      "type": "ActivityType",
      "definition": {
        "en": "Represents any form of hosted or consumable service that performs some kind of work or benefit for other entities. Examples of such objects include websites, businesses, etc."
      },
      "prefLabel": {
        "en": "service"
      }
    },
    {
      "id": "http://activitystrea.ms/task",
      "inScheme": "http://activitystrea.ms/schema/1.0.0",
      "type": "ActivityType",
      "definition": {
        "en": "Represents an activity that has yet to be completed. Objects of this type can contain additional properties as specified in Section 3.6."
      },
      "prefLabel": {
        "en": "task"
      }
    },
    {
      "id": "http://activitystrea.ms/video",
      "inScheme": "http://activitystrea.ms/schema/1.0.0",
      "exactMatch": [ "https://w3id.org/xapi/acrossx/activities/video", "https://w3id.org/xapi/video/activity-type/video" ],
      "type": "ActivityType",
      "definition": {
        "en": "Represents video content of any kind. Objects of this type MAY contain additional properties as specified in Section 3.1."
      },
      "prefLabel": {
        "en": "video"
      }
    }
  ]
},

{
  "@context": "https://w3id.org/xapi/profiles/context",
  "id": "https://w3id.org/xapi/adb",
  "type": "Profile",
  "conformsTo": "https://w3id.org/xapi/profiles#1.0.0",
  "prefLabel": {
  	"en": "Actionable Data Book (ADB) Profile"
  },
  "definition": {
    "en": "The xAPI ABD profile is used to identify interactions between an actor and an eBook activity based on the IEEE ADB project."
  },
  "seeAlso": "https://standards.ieee.org/develop/indconn/adb/",
  "author": {
    "type": "Organization",
    "name": "IEEE Industry Connections"
  },
  "versions": [
    {
      "id": "https://w3id.org/xapi/adb/v1.1.0",
      "generatedAtTime": "2017-06-30T8:26:00Z",
      "wasRevisionOf": ["https://w3id.org/xapi/adb/v1"]
    }
  ],
  "concepts": [
    {
      "id": "https://w3id.org/xapi/adb/verbs/annotated",
      "inScheme": "https://w3id.org/xapi/adb/v1.1.0",
      "type": "Verb",
      "definition": {
        "en": "Provide notes or symbols for further explanation or thoughts while reading."
      },
      "narrower": [ "https://w3id.org/xapi/adb/verbs/highlighted" ],
      "relatedMatch": [ "http://risc-inc.com/annotator/verbs/annotated", "https://w3id.org/xapi/acrossx/verbs/annotated" ],
      "prefLabel": {
        "en": "annotated"
      }
    },
    {
      "id": "https://w3id.org/xapi/adb/verbs/arrived",
      "inScheme": "https://w3id.org/xapi/adb/v1.1.0",
      "type": "Verb",
      "broadMatch": ["http://adlnet.gov/expapi/verbs/progressed"],
      "definition": {
        "en": "Indicates the actor arrived a specific location by movement or progress. To arrive a specific scene within a story or book experience."
      },
        "prefLabel": {
        "en": "arrived"
      }
    },
    {
      "id": "https://w3id.org/xapi/adb/verbs/attended",
      "inScheme": "https://w3id.org/xapi/adb/v1.1.0",
      "type": "Verb",
      "exactMatch": [ "http://adlnet.gov/expapi/verbs/attended" ],
      "relatedMatch": [ "http://adlnet.gov/expapi/verbs/attended" ],
      "definition": {
        "en": "Indicates the actor was present at a virtual or physical event or activity. "
      },
      "prefLabel": {
        "en": "attended"
      }
    },
    {
      "id": "https://w3id.org/xapi/adb/verbs/bookmarked",
      "inScheme": "https://w3id.org/xapi/adb/v1.1.0",
      "type": "Verb",
      "definition": {
        "en": "Persisting the current location (page) where the reader stopped the ebook activity."
      },
        "prefLabel": {
        "en": "bookmarked"
      },
      "related": ["https://w3id.org/xapi/adb/verbs/annotated"]
    },
    {
      "id": "https://w3id.org/xapi/adb/verbs/coached",
      "inScheme": "https://w3id.org/xapi/adb/v1.1.0",
      "type": "Verb",
      "definition": {
        "en": "To teach or lead another person through an activity. Coached is a direct response to the Requested verb. The receiver of a Requested statement will periodically respond by sending a Coached statement that clears out the coach's queue."
      },
        "prefLabel": {
        "en": "coached"
      }
    },
    {
      "id": "https://w3id.org/xapi/adb/verbs/demanded",
      "inScheme": "https://w3id.org/xapi/adb/v1.1.0",
      "type": "Verb",
      "definition": {
        "en": "Indicates a request for eBook session or redirect. Shall be distinct from requested which refers to actor conversations (e.g., requested help fom instructor)."
      },
        "prefLabel": {
        "en": "demanded"
      },
      "related": ["https://w3id.org/xapi/adb/verbs/requested"]
    },
    {
      "id": "https://w3id.org/xapi/adb/verbs/described",
      "inScheme": "https://w3id.org/xapi/adb/v1.1.0",
      "type": "Verb",
      "definition": {
        "en": "Detailed answer as a result of an interaction in an ebook activity or assessment."
      },
        "prefLabel": {
        "en": "described"
      }
    },
    {
      "id": "https://w3id.org/xapi/adb/verbs/highlighted",
      "inScheme": "https://w3id.org/xapi/adb/v1.1.0",
      "type": "Verb",
      "broader": ["https://w3id.org/xapi/adb/verbs/annotated"],
      "prefLabel": {
      "en": "highlighted"
      },
      "definition": {
        "en": "Highlight important areas in an eBook for the purpose of later review or note taking."
      },
      "narrower": ["https://w3id.org/xapi/adb/verbs/noted"]

    },
    {
      "id": "https://w3id.org/xapi/adb/verbs/initiated",
      "inScheme": "https://w3id.org/xapi/adb/v1.1.0",
      "type": "Verb",
      "definition": {
        "en": "Used to initiate text code, user preferences or accessibility preferences to a teacher."
      },
        "prefLabel": {
        "en": "initiated"
      }
    },
    {
      "id": "https://w3id.org/xapi/adb/verbs/noted",
      "inScheme": "https://w3id.org/xapi/adb/v1.1.0",
      "type": "Verb",
      "broader": ["https://w3id.org/xapi/adb/verbs/annotated"],
      "definition": {
        "en": "Add annotation or notes to selected text within an ebook or highlight."
      },
        "prefLabel": {
        "en": "noted"
      }
    },
    {
      "id": "https://w3id.org/xapi/adb/verbs/read",
      "inScheme": "https://w3id.org/xapi/adb/v1.1.0",
      "type": "Verb",
      "exactMatch": ["http://activitystrea.ms/schema/1.0.0/read"],
      "definition": {
        "en": "Indicates that the actor read the object. This is typically only applicable for objects representing printed or written content, such as a book, a message or a comment."
      },
        "prefLabel": {
        "en": "read"
      }
    },
    {
      "id": "https://w3id.org/xapi/adb/verbs/referenced",
      "inScheme": "https://w3id.org/xapi/adb/v1.1.0",
      "type": "Verb",
      "definition": {
        "en": "Use dictionary or other resource to look up a selected word. A learner might reference outside information in support of the topic and could reference additional reading for his/her colleagues or mentor."
      },
        "prefLabel": {
        "en": "referenced"
      }
    },
    {
      "id": "https://w3id.org/xapi/adb/verbs/requested",
      "inScheme": "https://w3id.org/xapi/adb/v1.1.0",
      "type": "Verb",
      "exactMatch": ["http://activitystrea.ms/schema/1.0.0/request"],
      "definition": {
        "en": "Indicates the actor needed or demanded an object or another actor. Requested indicates a comment that is shared with peers as a group or Coach as a trainer. The request for coaching or help prompts users to respond giving them coaching credit."
      },
        "prefLabel": {
        "en": "requested"
      }
    },
    {
      "id": "https://w3id.org/xapi/adb/verbs/selected",
      "inScheme": "https://w3id.org/xapi/adb/v1.1.0",
      "type": "Verb",
      "definition": {
        "en": "Choose section of text to copy to clipboard."
      },
        "prefLabel": {
        "en": "selected"
      }
    },
    {
      "id": "https://w3id.org/xapi/adb/verbs/watched",
      "inScheme": "https://w3id.org/xapi/adb/v1.1.0",
      "type": "Verb",
      "exactMatch": [ "http://activitystrea.ms/schema/1.0.0/watch", "https://w3id.org/xapi/acrossx/verbs/watched" ],
      "definition": {
        "en": "Indicates that the actor has watched the object. This verb is typically applicable only when the object represents dynamic, visible content such as a movie, a television show or a public performance."
      },
        "prefLabel": {
        "en": "watched"
      }
    }
  ]
},

{
   "@context": "https://w3id.org/xapi/profiles/context",
    "id": "https://w3id.org/xapi/adl",
    "type": "Profile",
    "prefLabel": {
        "en": "ADL Vocabulary"
    },
    "definition": {
      "en": "The ADL vocabulary list includes Verbs and Activity Types used to represent common learning experiences in xAPI."
    },
    "conformsTo": "https://w3id.org/xapi/profiles#1.0.0",
    "versions": [
        {
            "id": "https://w3id.org/xapi/adl/v1.1.0",
            "generatedAtTime": "2017-08-21T14:25:59.295Z",
            "wasRevisionOf": ["https://w3id.org/xapi/adl/v1"]
        }
    ],
    "author": {
        "type": "Organization",
        "name": "Advanced Distributed Learning(ADL) Initiative"
    },
    "concepts": [
    {
      "type": "Verb",
      "id": "http://adlnet.gov/expapi/verbs/answered",
      "inScheme": "https://w3id.org/xapi/adl/v1.1.0",
      "prefLabel": {
        "en": "answered"
      },
      "definition": {
        "en": "Indicates the actor replied to a question, where the object is generally an activity representing the question. The text of the answer will often be included in the response inside result."
      }
    },
    {
      "type": "Verb",
      "id": "http://adlnet.gov/expapi/verbs/asked",
      "inScheme": "https://w3id.org/xapi/adl/v1.1.0",
      "prefLabel": {
        "en": "asked"
      },
      "definition": {
        "en": "Indicates an inquiry by an actor with the expectation of a response or answer to a question."
      }
    },
    {
      "type": "Verb",
      "id": "http://adlnet.gov/expapi/verbs/attempted",
      "inScheme": "https://w3id.org/xapi/adl/v1.1.0",
      "prefLabel": {
        "en": "attempted"
      },
      "definition": {
        "en": "Indicates the actor made an effort to access the object. An attempt statement without additional activities could be considered incomplete in some cases."
      }
    },
    {
      "type": "Verb",
      "id": "http://adlnet.gov/expapi/verbs/attended",
      "inScheme": "https://w3id.org/xapi/adl/v1.1.0",
      "prefLabel": {
        "en": "attended"
      },
      "relatedMatch": [ "https://w3id.org/xapi/adb/verbs/attended", "http://activitystrea.ms/schema/1.0.0/attend" ],
      "definition": {
        "en": "Indicates the actor was present at a virtual or physical event or activity."
      }
    },
    {
      "type": "Verb",
      "id": "http://adlnet.gov/expapi/verbs/commented",
      "inScheme": "https://w3id.org/xapi/adl/v1.1.0",
      "prefLabel": {
        "en": "commented"
      },
      "definition": {
        "en": "Indicates the actor provided digital or written annotations on or about an object."
      }
    },
    {
      "type": "Verb",
      "id": "http://adlnet.gov/expapi/verbs/exited",
      "inScheme": "https://w3id.org/xapi/adl/v1.1.0",
      "prefLabel": {
        "en": "exited"
      },
      "definition": {
        "en": "Indicates the actor intentionally departed from the activity or object."
      }
    },
      {
        "type": "Verb",
        "id": "http://adlnet.gov/expapi/verbs/experienced",
        "inScheme": "https://w3id.org/xapi/adl/v1.1.0",
        "exactMatch": [ "http://adlnet.gov/expapi/verbs/experienced" ],
        "prefLabel": {
          "en": "experienced"
        },
        "definition": {
          "en": "Indicates the actor only encountered the object, and is applicable in situations where a specific achievement or completion is not required."
        }
      },
    {
      "type": "Verb",
      "id": "http://adlnet.gov/expapi/verbs/imported",
      "inScheme": "https://w3id.org/xapi/adl/v1.1.0",
      "prefLabel": {
        "en": "imported"
      },
      "definition": {
        "en": "Indicates the actor introduced an object into a physical or virtual location."
      }
    },
      {
        "type": "Verb",
        "id": "http://adlnet.gov/expapi/verbs/interacted",
        "inScheme": "https://w3id.org/xapi/adl/v1.1.0",
        "relatedMatch": [ "http://activitystrea.ms/schema/1.0/interact" ],
        "prefLabel": {
          "en": "interacted"
        },
        "definition": {
          "en": "Indicates the actor engaged with a physical or virtual object."
        }
      },
    {
      "type": "Verb",
      "id": "http://adlnet.gov/expapi/verbs/launched",
      "inScheme": "https://w3id.org/xapi/adl/v1.1.0",
      "prefLabel": {
        "en": "launched"
      },
      "definition": {
        "en": "Indicates the actor attempted to start an activity."
      }
    },
    {
      "type": "Verb",
      "id": "http://adlnet.gov/expapi/verbs/mastered",
      "inScheme": "https://w3id.org/xapi/adl/v1.1.0",
      "prefLabel": {
        "en": "mastered"
      },
      "definition": {
        "en": "Indicates the highest level of comprehension or competence the actor performed in an activity."
      }
    },
    {
      "type": "Verb",
      "id": "http://adlnet.gov/expapi/verbs/preferred",
      "inScheme": "https://w3id.org/xapi/adl/v1.1.0",
      "prefLabel": {
        "en": "preferred"
      },
      "definition": {
        "en": "Indicates the selected choices, favored options or settings of an actor in relation to an object or activity."
      }
    },
    {
      "type": "Verb",
      "id": "http://adlnet.gov/expapi/verbs/progressed",
      "inScheme": "https://w3id.org/xapi/adl/v1.1.0",
      "prefLabel": {
        "en": "progressed"
      },
      "definition": {
        "en": "Indicates a value of how much of an actor has advanced or moved through an activity."
      }
    },
    {
      "type": "Verb",
      "id": "http://adlnet.gov/expapi/verbs/registered",
      "inScheme": "https://w3id.org/xapi/adl/v1.1.0",
      "prefLabel": {
        "en": "registered"
      },
      "definition": {
        "en": "Indicates the actor is officially enrolled or inducted in an activity."
      }
    },
      {
        "type": "Verb",
        "id": "http://adlnet.gov/expapi/verbs/shared",
        "inScheme": "https://w3id.org/xapi/adl/v1.1.0",
        "exactMatch": [ "http://activitystrea.ms/schema/1.0.0/share" ],
        "prefLabel": {
          "en": "shared"
        },
        "definition": {
          "en": "Indicates the actor's intent to openly provide access to an object of common interest to other actors or groups."
        }
      },
    {
      "type": "Verb",
      "id": "http://adlnet.gov/expapi/verbs/voided",
      "inScheme": "https://w3id.org/xapi/adl/v1.1.0",
      "prefLabel": {
        "en": "voided"
      },
      "definition": {
        "en": "A special reserved verb used by a LRS or application to mark a statement as invalid. See the xAPI specification for details on Voided statements."
      }
    },
    {
      "type": "Verb",
      "id": "https://w3id.org/xapi/adl/verbs/logged-in",
      "inScheme": "https://w3id.org/xapi/adl/v1.1.0",
      "definition": {
        "en": "Indicates the actor gained access to a system or service by identifying and authenticating with the credentials provided by the actor."
      },
      "prefLabel": {
        "en": "logged-in"
      }
    },
    {
      "type": "Verb",
      "id": "https://w3id.org/xapi/adl/verbs/logged-out",
      "inScheme": "https://w3id.org/xapi/adl/v1.1.0",
      "definition": {
        "en": "Indicates the actor either lost or discontinued access to a system or service."
      },
      "prefLabel": {
        "en": "logged-out"
      }
    },
    {
      "type": "ActivityType",
      "id": "http://adlnet.gov/expapi/activities/file",
      "inScheme": "https://w3id.org/xapi/adl/v1.1.0",
      "prefLabel": {
        "en": "file"
      },
      "definition": {
        "en": "A file is similar to a link, only the resource is more likely to be used at a) a different time, b) can be used offline, and/or c) could be used with a different system. Only the expectation changes. Files are not considered learning content or SCOs. If a file is intended for this purpose, it should be re-categorized."
      }
    },
    {
      "type": "ActivityType",
      "id": "http://adlnet.gov/expapi/activities/link",
      "inScheme": "https://w3id.org/xapi/adl/v1.1.0",
      "prefLabel": {
        "en": "link"
      },
      "definition": {
        "en": "A link is simply a means of expressing a link to another resource within, or external to, an activity. A link is not synonymous with launching another resource and should be considered external to the current resource. Links are not learning content, nor SCOs. If a link is intended for this purpose, it should be re-categorized."
      }
    },
    {
      "type": "ActivityType",
      "id": "http://adlnet.gov/expapi/activities/media",
      "inScheme": "https://w3id.org/xapi/adl/v1.1.0",
      "prefLabel": {
        "en": "media"
      },
      "definition": {
        "en": "Media refers to text, audio, or video used to convey information. Media can be consumed (tracked: completed), but doesn’t have an interactive component that may result in a score, success, or failure."
      }
    },
    {
      "type": "ActivityType",
      "id": "http://adlnet.gov/expapi/activities/meeting",
      "inScheme": "https://w3id.org/xapi/adl/v1.1.0",
      "prefLabel": {
        "en": "meeting"
      },
      "definition": {
        "en": "A meeting is a gathering of multiple people for a common cause or interest."
      }
    },
    {
      "type": "ActivityType",
      "id": "http://adlnet.gov/expapi/activities/performance",
      "inScheme": "https://w3id.org/xapi/adl/v1.1.0",
      "prefLabel": {
        "en": "performance"
      },
      "definition": {
        "en": "A performance is an attempted task or series of tasks within a particular context. Tasks would likely take on the form of interactions, or the performance could be self-contained content. It emphasizes students or learners being able to do, or perform, specific skills as a result of the instruction."
      }
    },
      {
        "type": "ActivityType",
        "id": "http://adlnet.gov/expapi/activities/question",
        "exactMatch": [ "http://activitystrea.ms/schema/1.0.0/question" ],
        "inScheme": "https://w3id.org/xapi/adl/v1.1.0",
        "prefLabel": {
          "en": "question"
        },
        "definition": {
          "en": "A question is typically part of an assessment and requires a response from the learner, a response that is then evaluated for correctness."
        }
      },
    {
      "type": "ActivityType",
      "id": "http://adlnet.gov/expapi/activities/simulation",
      "inScheme": "https://w3id.org/xapi/adl/v1.1.0",
      "prefLabel": {
        "en": "simulation"
      },
      "definition": {
        "en": "A simulation is an attempted task or series of tasks in an artificial context that mimics reality. Tasks would likely take on the form of interactions, or the simulation could be self-contained content."
      }
    }
    ]
},

{
   "@context": "https://w3id.org/xapi/profiles/context",
    "id": "https://w3id.org/xapi/cmi5",
    "type": "Profile",
    "conformsTo": "https://w3id.org/xapi/profiles#1.0",
    "prefLabel": {
        "en": "cmi5 Profile"
    },
    "definition": {
        "en": "This specification describes interoperable runtime communication between Learning Management Systems (LMS) and Assignable Units (AU).\n\nThe runtime communication and behavior of all parts of the system are carefully described in the full specification, which can be found at https://github.com/AICC/CMI-5_Spec_Current/blob/quartz/cmi5_spec.md . This is a structured representation of cmi5 concepts, statement structure, and statement communications patterns that the additional rules in the full specification build upon and provide the definitive interpretation of."
    },
    "seeAlso": "https://github.com/AICC/CMI-5_Spec_Current/blob/quartz/cmi5_spec.md",
    "versions": [
        {
            "id": "https://w3id.org/xapi/cmi5/v1.0.0",
            "generatedAtTime": "2017-03-27T12:30:00-07:00"
        }
    ],
    "author": {
        "type": "Organization",
        "name": "cmi5 Working Group"
    },
    "concepts": [
      {
        "@id": "https://w3id.org/xapi/adl/verbs/abandoned",
        "inScheme": "https://w3id.org/xapi/cmi5/v1.0.0",
        "@type": "Verb",
        "definition": {
          "en": "Indicates that the AU session was abnormally terminated by a learner's action (or due to a system failure)."
        },
        "prefLabel": {
          "en": "abandoned"
        }
      },
      {
        "@id": "https://w3id.org/xapi/adl/verbs/abandoned",
        "inScheme": "https://w3id.org/xapi/cmi5/v1.0.0",
        "@type": "Verb",
        "definition": {
          "en": "Indicates that the AU session was abnormally terminated by a learner's action (or due to a system failure)."
        },
        "prefLabel": {
          "en": "abandoned"
        }
      },
    {
      "@id": "https://w3id.org/xapi/adl/verbs/satisfied",
      "inScheme": "https://w3id.org/xapi/cmi5/v1.0.0",
      "@type": "Verb",
      "definition": {
        "en": "Indicates that the authority or activity provider determined the actor has fulfilled the criteria of the object or activity."
      },
      "prefLabel": {
        "en": "satisfied"
      }
    },
    {
      "@id": "https://w3id.org/xapi/adl/verbs/waived",
      "inScheme": "https://w3id.org/xapi/cmi5/v1.0.0",
      "@type": "Verb",
      "definition": {
        "en": "Indicates that the learning activity requirements were met by means other than completing the activity. A waived statement is used to indicate that the activity may be skipped by the actor."
      },
      "prefLabel": {
        "en": "waived"
      }
    },
   	{
		"@id": "https://w3id.org/xapi/cmi5/activities/block",
        "inScheme": "https://w3id.org/xapi/cmi5/v1.0.0",
		"@type": "ActivityType",
		"definition": {
			"en": "A block represents a number of Assignable Units of which progress (completion/success) is rolled up to.  In cmi5 it is every level above the AU and below the Course."
		},
		"prefLabel": {
			"en": "block"
		}
	},
      {
        "@id": "https://w3id.org/xapi/cmi5/activities/course",
        "inScheme": "https://w3id.org/xapi/cmi5/v1.0.0",
        "@type": "ActivityType",
        "exactMatch": [ "http://adlnet.gov/expapi/activities/course" ],
        "definition": {
          "en": "A course represents an amount of content that is published and registered for with the purpose of gaining completion.  It is represented with a Course Structure Format in cmi5 as the highest level of content (above Block and AU)."
        },
        "prefLabel": {
          "en": "course"
        }
      },
  {
      "id": "https://w3id.org/xapi/cmi5/result/extensions/progress",
      "inScheme": "https://w3id.org/xapi/cmi5/v1.0.0",
      "type": "ResultExtension",
      "prefLabel": {
          "en": "progress"
      },
      "definition": {
          "en": "An integer value between 0 and 100 (inclusive) indicating the completion of the AU as a percentage.\n\nThe AU may set this value in statements to indicate level of completion. The AU SHOULD NOT set a progress value in a Completed statement or if it has previously issued a Completed statement for the AU in the current registration."
      },
      "inlineSchema": "{ \"type\": \"number\", \"maximum\": 100, \"minimum\": 0, \"multipleOf\": 1.0 }"
  },
  {
      "id": "https://w3id.org/xapi/cmi5/result/extensions/reason",
      "inScheme": "https://w3id.org/xapi/cmi5/v1.0.0",
      "type": "ResultExtension",
      "prefLabel": {
          "en": "reason"
      },
      "definition": {
          "en": "Indicates the reason why an AU was 'waived' (marked complete by an alternative means)"
      },
      "inlineSchema": "{ \"type\": \"string\" }"
  },
      {
        "id": "https://w3id.org/xapi/cmi5/context/extensions/sessionid",
        "inScheme": "https://w3id.org/xapi/cmi5/v1.0.0",
        "type": "ContextExtension",
        "exactMatch": [ "id", "https://w3id.org/xapi/video/extensions/session-id" ],
        "prefLabel": {
          "en": "session ID"
        },
        "definition": {
          "en": "A unique identifier for a single AU launch session based on actor and course registration."
        },
        "inlineSchema": "{ \"type\": \"string\" }"
      },
  {
      "id": "https://w3id.org/xapi/cmi5/context/extensions/masteryscore",
      "inScheme": "https://w3id.org/xapi/cmi5/v1.0.0",
      "type": "ContextExtension",
      "prefLabel": {
          "en": "mastery score"
      },
      "definition": {
          "en": "'masteryScore' as provided in the LMS Launch Data for the AU plus registration used to determine the pass/fail result based on score"
      },
      "inlineSchema": "{ \"type\": \"number\",  \"maximum\": 1, \"minimum\": 0 }"
  },
  {
      "id": "https://w3id.org/xapi/cmi5/context/extensions/launchmode",
      "inScheme": "https://w3id.org/xapi/cmi5/v1.0.0",
      "type": "ContextExtension",
      "prefLabel": {
          "en": "launch mode"
      },
      "definition": {
          "en": "Indicates what launch mode an AU was launched with by the LMS"
      },
      "inlineSchema": "{ \"enum\": [\"Normal\", \"Browse\", \"Review\"] }"
  },
  {
      "id": "https://w3id.org/xapi/cmi5/context/extensions/launchurl",
      "inScheme": "https://w3id.org/xapi/cmi5/v1.0.0",
      "type": "ContextExtension",
      "prefLabel": {
          "en": "launch URL"
      },
      "definition": {
          "en": "The URL used by the LMS to launch the AU"
      },
      "inlineSchema": "{ \"type\": \"string\", \"format\": \"uri\" }"
  },
  {
      "id": "https://w3id.org/xapi/cmi5/context/extensions/launchparameters",
      "inScheme": "https://w3id.org/xapi/cmi5/v1.0.0",
      "type": "ContextExtension",
      "prefLabel": {
          "en": "launch parameters"
      },
      "definition": {
          "en": "'launchParameters' as provided in the LMS Launch Data for the AU plus registration"
      },
      "inlineSchema": "{ \"type\": \"string\" }"
  },
  {
      "id": "https://w3id.org/xapi/cmi5/context/extensions/moveon",
      "inScheme": "https://w3id.org/xapi/cmi5/v1.0.0",
      "type": "ContextExtension",
      "prefLabel": {
          "en": "move on"
      },
      "definition": {
          "en": "'moveOn' as provided in the LMS Launch Data for the AU plus registration"
      },
      "inlineSchema": "{ \"enum\": [\"Passed\", \"Completed\", \"CompletedAndPassed\", \"CompletedOrPassed\", \"NotApplicable\"] }"
  }
],
    "templates": [
        {
            "id": "https://w3id.org/xapi/cmi5#generalrestrictions",
            "type": "StatementTemplate",
            "inScheme": "https://w3id.org/xapi/cmi5/v1.0.0",
            "prefLabel": {
                "en": "Restrictions for all cmi5-defined Statements"
            },
            "rules": [
                {
                    "location": "$.id",
                    "presence": "included"
                },
                {
                    "location": "$.timestamp",
                    "presence": "included"
                },
                {
                    "location": "$.context.contextActivities.grouping[*]",
                    "presence": "included",
                    "scopeNote": "An Activity object with an 'id' property whose value is the unaltered value of the AU's id attribute from the course structure (See Section 13.1.4 AU Metadata – id) MUST be included in the 'grouping' context activities."
                },
                {
                    "location": "$.context.extensions['https://w3id.org/xapi/cmi5/context/extensions/sessionid']",
                    "presence": "included"
                }
            ]
        }, {
            "id": "https://w3id.org/xapi/cmi5#launched",
            "type": "StatementTemplate",
            "prefLabel": {
                "en": "Launched"
            },
            "inScheme": "https://w3id.org/xapi/cmi5/v1.0.0",
            "verb": "http://adlnet.gov/expapi/verbs/launched",
            "rules": [
                {
                    "location": "$.result.score",
                    "presence": "excluded"
                },
                {
                    "location": "$.result.success",
                    "presence": "excluded"
                },
                {
                    "location": "$.result.completion",
                    "presence": "excluded"
                },
                {
                    "location": "$.context.contextActivities.category[*].id",
                    "none": "https://w3id.org/xapi/cmi5/context/categories/moveon"
                },
                {
                    "location": "$.context.extensions['https://w3id.org/xapi/cmi5/context/extensions/launchmode']",
                    "presence": "included",
                    "all": ["Normal", "Browse", "Review"]
                },
                {
                    "location": "$.context.extensions['https://w3id.org/xapi/cmi5/context/extensions/launchurl']",
                    "presence": "included",
                    "scopeNote": "The LMS MUST put a fully qualified URL equivalent to the one that the LMS used to launch the AU without the name/value pairs included as defined in section 8.1 in the context extensions of the 'Launched' statement."
                },
                {
                    "location": "$.context.extensions['https://w3id.org/xapi/cmi5/context/extensions/moveon']",
                    "presence": "included",
                    "all": ["Passed", "Completed", "CompletedAndPassed", "CompletedOrPassed", "NotApplicable"]
                },
                {
                    "location": "$.context.extensions['https://w3id.org/xapi/cmi5/context/extensions/launchparameters']",
                    "presence": "included"
                }
            ]
        }, {
            "id": "https://w3id.org/xapi/cmi5#initialized",
            "type": "StatementTemplate",
            "prefLabel": {
                "en": "Initialized"
            },
            "inScheme": "https://w3id.org/xapi/cmi5/v1.0.0",
            "verb": "http://adlnet.gov/expapi/verbs/initialized",
            "rules": [
                {
                    "location": "$.result.score",
                    "presence": "excluded"
                },
                {
                    "location": "$.result.success",
                    "presence": "excluded"
                },
                {
                    "location": "$.result.completion",
                    "presence": "excluded"
                },
                {
                    "location": "$.context.contextActivities.category[*].id",
                    "none": "https://w3id.org/xapi/cmi5/context/categories/moveon"
                }
            ]
        }, {
            "id": "https://w3id.org/xapi/cmi5#completed",
            "type": "StatementTemplate",
            "prefLabel": {
                "en": "Completed"
            },
            "inScheme": "https://w3id.org/xapi/cmi5/v1.0.0",
            "verb": "http://adlnet.gov/expapi/verbs/completed",
            "rules": [
                {
                    "location": "$.result.score",
                    "presence": "excluded"
                },
                {
                    "location": "$.result.success",
                    "presence": "excluded"
                },
                {
                    "location": "$.result.completion",
                    "presence": "included",
                    "all": [true]
                },
                {
                    "location": "$.result.duration",
                    "presence": "included",
                    "scopeNote": "The AU SHOULD calculate duration as the time spent by the learner to achieve completion status."
                },
                {
                    "location": "$.context.contextActivities.category[*].id",
                    "presence": "included",
                    "any": "https://w3id.org/xapi/cmi5/context/categories/moveon"
                }
            ]
        }, {
            "id": "https://w3id.org/xapi/cmi5#passed",
            "type": "StatementTemplate",
            "prefLabel": {
                "en": "Passed"
            },
            "inScheme": "https://w3id.org/xapi/cmi5/v1.0.0",
            "verb": "http://adlnet.gov/expapi/verbs/passed",
            "rules": [
                {
                    "location": "$.result.score",
                    "presence": "recommended"
                },
                {
                    "location": "$.result.success",
                    "presence": "included",
                    "all": [true]
                },
                {
                    "location": "$.result.completion",
                    "presence": "excluded"
                },
                {
                    "location": "$.result.duration",
                    "presence": "included",
                    "scopeNote": "The AU SHOULD calculate duration as the time spent by the learner to attempt and succeed in a judged activity of the AU."
                },
                {
                    "location": "$.context.contextActivities.category[*].id",
                    "presence": "included",
                    "any": "https://w3id.org/xapi/cmi5/context/categories/moveon"
                }
            ]
        }, {
            "id": "https://w3id.org/xapi/cmi5#failed",
            "type": "StatementTemplate",
            "prefLabel": {
                "en": "Failed"
            },
            "inScheme": "https://w3id.org/xapi/cmi5/v1.0.0",
            "verb": "http://adlnet.gov/expapi/verbs/failed",
            "rules": [
                {
                    "location": "$.result.score",
                    "presence": "recommended"
                },
                {
                    "location": "$.result.success",
                    "presence": "included",
                    "all": [false]
                },
                {
                    "location": "$.result.completion",
                    "presence": "excluded"
                },
                {
                    "location": "$.result.duration",
                    "presence": "included",
                    "scopeNote": "The AU SHOULD calculate duration as the time spent by the learner to attempt and fail in a judged activity of the AU."
                },
                {
                    "location": "$.context.contextActivities.category[*].id",
                    "presence": "included",
                    "any": "https://w3id.org/xapi/cmi5/context/categories/moveon"
                }
            ]
        }, {
            "id": "https://w3id.org/xapi/cmi5#abandoned",
            "type": "StatementTemplate",
            "prefLabel": {
                "en": "Abandoned"
            },
            "inScheme": "https://w3id.org/xapi/cmi5/v1.0.0",
            "verb": "https://w3id.org/xapi/adl/verbs/abandoned",
            "rules": [
                {
                    "location": "$.result.score",
                    "presence": "excluded"
                },
                {
                    "location": "$.result.success",
                    "presence": "excluded"
                },
                {
                    "location": "$.result.completion",
                    "presence": "excluded"
                },
                {
                    "location": "$.result.duration",
                    "presence": "included",
                    "scopeNote": "The duration property MUST, at a minimum, be set as the total session time, calculated as the time between the 'Launched' statement and the last statement (of any kind) issued by the AU. The LMS SHOULD also use other (LMS specific) methods (if available) to determine if the total session time was longer."
                },
                {
                    "location": "$.context.contextActivities.category[*].id",
                    "none": "https://w3id.org/xapi/cmi5/context/categories/moveon"
                }
            ]
        }, {
            "id": "https://w3id.org/xapi/cmi5#waived",
            "type": "StatementTemplate",
            "prefLabel": {
                "en": "Waived"
            },
            "inScheme": "https://w3id.org/xapi/cmi5/v1.0.0",
            "verb": "http://adlnet.gov/expapi/verbs/waived",
            "rules": [
                {
                    "location": "$.result.score",
                    "presence": "excluded"
                },
                {
                    "location": "$.result.success",
                    "presence": "included",
                    "all": [true]
                },
                {
                    "location": "$.result.completion",
                    "presence": "included",
                    "all": [true]
                },
                {
                    "location": "$.result['https://w3id.org/xapi/cmi5/result/extensions/reason']",
                    "presence": "included"
                },
                {
                    "location": "$.context.contextActivities.category[*].id",
                    "presence": "included",
                    "any": "https://w3id.org/xapi/cmi5/context/categories/moveon"
                }
            ]
        }, {
            "id": "https://w3id.org/xapi/cmi5#terminated",
            "type": "StatementTemplate",
            "prefLabel": {
                "en": "Terminated"
            },
            "inScheme": "https://w3id.org/xapi/cmi5/v1.0.0",
            "verb": "http://adlnet.gov/expapi/verbs/terminated",
            "rules": [
                {
                    "location": "$.result.score",
                    "presence": "excluded"
                },
                {
                    "location": "$.result.success",
                    "presence": "excluded"
                },
                {
                    "location": "$.result.completion",
                    "presence": "excluded"
                },
                {
                    "location": "$.result.duration",
                    "presence": "included",
                    "scopeNote": "The AU SHOULD calculate duration for Terminated statements as the time difference between the 'Initialized' statement and the 'Terminated' statement. The AU may use other methods to calculate the duration based on criteria determined by the AU."
                },
                {
                    "location": "$.context.contextActivities.category[*].id",
                    "none": "https://w3id.org/xapi/cmi5/context/categories/moveon"
                }
            ]
        }, {
            "id": "https://w3id.org/xapi/cmi5#satisfied",
            "type": "StatementTemplate",
            "prefLabel": {
                "en": "Satisfied"
            },
            "inScheme": "https://w3id.org/xapi/cmi5/v1.0.0",
            "verb": "http://adlnet.gov/expapi/verbs/satisfied",
            "rules": [
                {
                    "location": "$.result.score",
                    "presence": "excluded"
                },
                {
                    "location": "$.result.success",
                    "presence": "excluded"
                },
                {
                    "location": "$.result.completion",
                    "presence": "excluded"
                },
                {
                    "location": "$.context.contextActivities.category[*].id",
                    "none": "https://w3id.org/xapi/cmi5/context/categories/moveon"
                },
                {
                    "location": "$.object.definition.type",
                    "presence": "included",
                    "any": [
                        "https://w3id.org/xapi/cmi5/activitytype/block",
                        "https://w3id.org/xapi/cmi5/activitytype/course"
                    ]
                }
            ]
        }],
    "patterns": [
        {
            "id": "https://w3id.org/xapi/cmi5#satisfieds",
            "type": "Pattern",
            "prefLabel": {
                "en": "Satisfieds"
            },
            "inScheme": "https://w3id.org/xapi/cmi5/v1.0.0",
            "zeroOrMore": "https://w3id.org/xapi/cmi5#satisfied"
        },
        {
            "id": "https://w3id.org/xapi/cmi5#waivedsession",
            "type": "Pattern",
            "prefLabel": {
                "en": "Waived Session"
            },
            "inScheme": "https://w3id.org/xapi/cmi5/v1.0.0",
            "sequence": ["https://w3id.org/xapi/cmi5#satisfieds", "https://w3id.org/xapi/cmi5#waived", "https://w3id.org/xapi/cmi5#satisfieds"]
        },
        {
            "id": "https://w3id.org/xapi/cmi5#noresultsession",
            "type": "Pattern",
            "prefLabel": {
                "en": "No Result Session"
            },
            "inScheme": "https://w3id.org/xapi/cmi5/v1.0.0",
            "sequence": ["https://w3id.org/xapi/cmi5#launched", "https://w3id.org/xapi/cmi5#initialized", "https://w3id.org/xapi/cmi5#terminatedorabandoned"]
        },
        {
            "id": "https://w3id.org/xapi/cmi5#completionnosuccesssession",
            "type": "Pattern",
            "prefLabel": {
                "en": "Completion No Success Session"
            },
            "inScheme": "https://w3id.org/xapi/cmi5/v1.0.0",
            "sequence": ["https://w3id.org/xapi/cmi5#launched", "https://w3id.org/xapi/cmi5#initialized", "https://w3id.org/xapi/cmi5#completed", "https://w3id.org/xapi/cmi5#satisfieds", "https://w3id.org/xapi/cmi5#terminatedorabandoned"]
        },
        {
            "id": "https://w3id.org/xapi/cmi5#passedsession",
            "type": "Pattern",
            "prefLabel": {
                "en": "Completed And Maybe Failed"
            },
            "inScheme": "https://w3id.org/xapi/cmi5/v1.0.0",
            "sequence": ["https://w3id.org/xapi/cmi5#launched", "https://w3id.org/xapi/cmi5#initialized", "https://w3id.org/xapi/cmi5#passed", "https://w3id.org/xapi/cmi5#satisfieds", "https://w3id.org/xapi/cmi5#terminatedorabandoned"]
        },
        {
            "id": "https://w3id.org/xapi/cmi5#completionpassedsession",
            "type": "Pattern",
            "prefLabel": {
                "en": "Completed And Passed Session"
            },
            "inScheme": "https://w3id.org/xapi/cmi5/v1.0.0",
            "sequence": ["https://w3id.org/xapi/cmi5#launched", "https://w3id.org/xapi/cmi5#initialized", "https://w3id.org/xapi/cmi5#completedandpassed", "https://w3id.org/xapi/cmi5#satisfieds", "https://w3id.org/xapi/cmi5#terminatedorabandoned"]
        },
        {
            "id": "https://w3id.org/xapi/cmi5#failedsession",
            "type": "Pattern",
            "prefLabel": {
                "en": "Failed Session"
            },
            "inScheme": "https://w3id.org/xapi/cmi5/v1.0.0",
            "sequence": ["https://w3id.org/xapi/cmi5#launched", "https://w3id.org/xapi/cmi5#initialized", "https://w3id.org/xapi/cmi5#failed", "https://w3id.org/xapi/cmi5#terminatedorabandoned"]
        },
        {
            "id": "https://w3id.org/xapi/cmi5#completionmaybefailedsession",
            "type": "Pattern",
            "prefLabel": {
                "en": "Completion Maybe Failed Session"
            },
            "inScheme": "https://w3id.org/xapi/cmi5/v1.0.0",
            "sequence": ["https://w3id.org/xapi/cmi5#launched", "https://w3id.org/xapi/cmi5#initialized", "https://w3id.org/xapi/cmi5#completedandmaybefailed", "https://w3id.org/xapi/cmi5#satisfieds", "https://w3id.org/xapi/cmi5#terminatedorabandoned"]
        },
        {
            "id": "https://w3id.org/xapi/cmi5#terminatedorabandoned",
            "type": "Pattern",
            "prefLabel": {
                "en": "Terminated Or Abandoned"
            },
            "inScheme": "https://w3id.org/xapi/cmi5/v1.0.0",
            "alternates": ["https://w3id.org/xapi/cmi5#terminated", "https://w3id.org/xapi/cmi5#abandoned"]
        },
        {
            "id": "https://w3id.org/xapi/cmi5#completedandpassed",
            "type": "Pattern",
            "prefLabel": {
                "en": "Completed And Passed"
            },
            "inScheme": "https://w3id.org/xapi/cmi5/v1.0.0",
            "alternates": ["https://w3id.org/xapi/cmi5#completedthenpassed", "https://w3id.org/xapi/cmi5#passedthencompleted"]
        },
        {
            "id": "https://w3id.org/xapi/cmi5#completedthenpassed",
            "type": "Pattern",
            "prefLabel": {
                "en": "Completed Then Passed"
            },
            "inScheme": "https://w3id.org/xapi/cmi5/v1.0.0",
            "sequence": ["https://w3id.org/xapi/cmi5#completed", "https://w3id.org/xapi/cmi5#satisfieds", "https://w3id.org/xapi/cmi5#passed"]
        },
        {
            "id": "https://w3id.org/xapi/cmi5#passedthencompleted",
            "type": "Pattern",
            "prefLabel": {
                "en": "Passed Then Completed"
            },
            "inScheme": "https://w3id.org/xapi/cmi5/v1.0.0",
            "sequence": ["https://w3id.org/xapi/cmi5#passed", "https://w3id.org/xapi/cmi5#satisfieds", "https://w3id.org/xapi/cmi5#completed"]
        },
        {
            "id": "https://w3id.org/xapi/cmi5#completedandmaybefailed",
            "type": "Pattern",
            "prefLabel": {
                "en": "Completed And Maybe Failed"
            },
            "inScheme": "https://w3id.org/xapi/cmi5/v1.0.0",
            "alternates": ["https://w3id.org/xapi/cmi5#maybecompletedthenfailed", "https://w3id.org/xapi/cmi5#failedthenmaybecompleted"]
        },
        {
            "id": "https://w3id.org/xapi/cmi5#maybecompletedthenfailed",
            "type": "Pattern",
            "prefLabel": {
                "en": "Maybe Completed Then Failed"
            },
            "inScheme": "https://w3id.org/xapi/cmi5/v1.0.0",
            "sequence": ["https://w3id.org/xapi/cmi5#maybecompleted", "https://w3id.org/xapi/cmi5#satisfieds", "https://w3id.org/xapi/cmi5#failed"]
        },
        {
            "id": "https://w3id.org/xapi/cmi5#failedthenmaybecompleted",
            "type": "Pattern",
            "prefLabel": {
                "en": "Failed Then Maybe Completed"
            },
            "inScheme": "https://w3id.org/xapi/cmi5/v1.0.0",
            "sequence": ["https://w3id.org/xapi/cmi5#failed", "https://w3id.org/xapi/cmi5#maybecompleted"]
        },
        {
            "id": "https://w3id.org/xapi/cmi5#maybecompleted",
            "type": "Pattern",
            "prefLabel": {
                "en": "Maybe Completed"
            },
            "inScheme": "https://w3id.org/xapi/cmi5/v1.0.0",
            "optional": "https://w3id.org/xapi/cmi5#completed"
        },
        {
            "id": "https://w3id.org/xapi/cmi5#typicalsession",
            "type": "Pattern",
            "prefLabel": {
                "en": "Typical Session"
            },
            "inScheme": "https://w3id.org/xapi/cmi5/v1.0.0",
            "alternates": [
                "https://w3id.org/xapi/cmi5#completionmaybefailedsession",
                "https://w3id.org/xapi/cmi5#completionpassedsession",
                "https://w3id.org/xapi/cmi5#failedsession",
                "https://w3id.org/xapi/cmi5#noresultsession",
                "https://w3id.org/xapi/cmi5#passedsession",
                "https://w3id.org/xapi/cmi5#completionnosuccesssession",
                "https://w3id.org/xapi/cmi5#waivedsession"
            ]
        },
        {
            "id": "https://w3id.org/xapi/cmi5#typicalsessions",
            "type": "Pattern",
            "prefLabel": {
                "en": "Typical Sessions"
            },
            "definition": {
                "en": "This pattern provides an option to use zero or more of the alernates for the Typical Session pattern."
            },
            "inScheme": "https://w3id.org/xapi/cmi5/v1.0.0",
            "zeroOrMore": "https://w3id.org/xapi/cmi5#typicalsession"
        },
        {
            "id": "https://w3id.org/xapi/cmi5#toplevel",
            "type": "Pattern",
            "primary": true,
            "prefLabel": {
                "en": "General Pattern"
            },
            "definition": {
                "en": "This pattern describes the sequence of statements sent over the an entire course registration."
            },
            "inScheme": "https://w3id.org/xapi/cmi5/v1.0.0",
            "sequence": ["https://w3id.org/xapi/cmi5#satisfieds", "typicalsessions"]
        }


    ]
},

{
  "@context": "https://w3id.org/xapi/profiles/context",
  "id": "http://activitystrea.ms/schema/",
  "type": "Profile",
  "conformsTo": "https://w3id.org/xapi/profiles#1.0",
  "prefLabel": {
    "en": "xAPI Open Badges Profile"
  },
  "definition": {
    "en": "A profile that combines xAPI with Mozilla Open Badges."
  },
  "seeAlso": "https://registry.tincanapi.com/#profile/44",
  "author": {
    "type": "Organization",
    "name": "xAPI Open Badges Community of Practice"
  },
  "versions": [
    {
      "id": "http://activitystrea.ms/schema/1.0.0/",
      "generatedAtTime": "2017-07-14T11:35:00Z"
    }],
  "concepts": [
    {
        "id": "http://specification.openbadges.org/xapi/extensions/badgeassertion",
        "inScheme": "http://activitystrea.ms/schema/1.0.0/",
        "type": "ResultExtension",
        "definition": {
          "en": "Result Extension containing an object with an @id property pointing to the IRI of a hosted Open Badge Assertion."
        },
        "prefLabel": {
          "en": "open badge assertion"
        }
    },
    {
        "id": "http://specification.openbadges.org/xapi/extensions/badgeclass",
        "inScheme": "http://activitystrea.ms/schema/1.0.0/",
        "type": "ContextExtension",
        "definition": {
          "en": "Activity Definition Extension containing an object with an @id property pointing to the IRI of a hosted Open Badge Class definition."
        },
        "prefLabel": {
          "en": "open badge class"
        }
    },
    {
        "id": "http://specification.openbadges.org/xapi/attachment/badge",
        "inScheme": "http://activitystrea.ms/schema/1.0.0/",
        "type": "AttachmentUsageType",
        "definition": {
          "en": "An attached Baked Badge Image. This is a png image containing additional metadata as defined by the Open Badges specification."
        },
        "prefLabel": {
          "en": "open badges baked badge image"
        }
    }
  ]
},

{
  "@context": "https://w3id.org/xapi/profiles/context",
  "id": "http://www.risc-inc.com/annotator",
  "type": "Profile",
  "conformsTo": "https://w3id.org/xapi/profiles#1.0",
  "prefLabel": {
    "en": "PDF Annotator"
  },
  "definition": {
    "en": "A profile for recording PDF annotations."
  },
  "seeAlso": "http://risc-inc.com/pdf-annotation-cloud-real-world-xapi-application/",
  "author": {
    "type": "Organization",
    "name": "RISC, Inc"
  },
  "versions": [
    {
      "id": "http://www.risc-inc.com/annotator/1.0.0",
      "generatedAtTime": "2017-07-14T11:35:00Z"
    }],
  "concepts": [
  {
      "id": "http://www.risc-inc.com/annotator/extensions/color",
      "inScheme": "http://www.risc-inc.com/annotator/1.0.0",
      "type": "ContextExtension",
      "definition": {
        "en": "This extension is used to describe the RGB colour of a PDF annotation highlight, underline of typewriter annotation. The value of this extension is a string, for example #FFCC66. For any use cases outside of PDF annotations, consider the tincan color extension to record the colour of an activity."
      },
      "prefLabel": {
        "en": "pdf annotation highlight colour"
      }
  },
  {
      "id": "http://www.risc-inc.com/annotator/extensions/highlightedString",
      "inScheme": "http://www.risc-inc.com/annotator/1.0.0",
      "type": "ContextExtension",
      "definition": {
        "en": "Activity definition extension used with highlight and underline activity types. Stores the string of text that has been highlighted or underlined."
      },
      "prefLabel": {
        "en": "highlighted string"
      }
  },
  {
      "id": "http://www.risc-inc.com/annotator/extensions/page",
      "inScheme": "http://www.risc-inc.com/annotator/1.0.0",
      "type": "ContextExtension",
      "definition": {
        "en": "Activity Definition extension used for activities representing entities on a page, for example highlights or notes on an annotated PDF. The value of this extension is an integer that represents the zero-based page index of the document that the activity is on. This document should be listed as the contextActivities parent. Note that the page index is not normally equal to the page number printed on the document."
      },
      "prefLabel": {
        "en": "page index"
      }
  },
  {
      "id": "http://www.risc-inc.com/annotator/extensions/rects",
      "inScheme": "http://www.risc-inc.com/annotator/1.0.0",
      "type": "ContextExtension",
      "definition": {
        "en": "A collection of rectangles marking an area within a PDF document. This is used to denote the location of an element on a page such as a highlight or annotation on a PDF document. Multiple rectangles may represent a single element. The value of the extension is an array of rectangle objects. Each rectangle object has x, y, width and height properties. The value of each of these properties is a number measured in PDF Units. The X and Y coordinates are taken from the bottom left of the page. Note that in some implementations, this the value of this extension has been a string containing a JSON encoded array of rectangle objects. This is not recommended, but tools reading statements using this extension may wish to additionally accept this JSON encoded format."
      },
      "prefLabel": {
        "en": "pdf Rectangle map"
      }
  },
  {
      "id": "http://risc-inc.com/annotator/activities/highlight",
      "inScheme": "http://www.risc-inc.com/annotator/1.0.0",
      "type": "ActivityType",
      "definition": {
        "en": "An annotation of the highlight type. Highlights are used to mark strings of text in a document with a color. This activity type should only be used for highlighted text and not for highlighted images or other elements."
      },
      "prefLabel": {
        "en": "highlighted text annotation"
      }
  },
  {
      "id": "http://risc-inc.com/annotator/activities/note",
      "inScheme": "http://www.risc-inc.com/annotator/1.0.0",
      "type": "ActivityType",
      "definition": {
        "en": "Indicates an annotation made to a document of the note form. This is a string of text appended to the document at a specified location. Note annotations can be added anywhere on the page. This activity type should not be used for other types of note that are not annotations to a document."
      },
      "prefLabel": {
        "en": "note annotation"
      }
  },
    {
      "id": "http://risc-inc.com/annotator/activities/underline",
      "inScheme": "http://www.risc-inc.com/annotator/1.0.0",
      "type": "ActivityType",
      "exactMatch": [ "http://risc-inc.com/annotator/activities/underline" ],
      "definition": {
        "en": "An annotation of the underline type. Underlines are used to mark strings of text in a document with a line underneath the text. This activity type should only be used for underlined text and not for images or other elements."
      },
      "prefLabel": {
        "en": "underline annotation"
      }
    },
  {
      "id": "http://www.risc-inc.com/annotator/activities/freetext",
      "inScheme": "http://www.risc-inc.com/annotator/1.0.0",
      "type": "ActivityType",
      "definition": {
        "en": "Indicates an annotation made to a document of the freetext form. This is a string of text written direction onto the document at a specified location. Freetext annotations can be added anywhere on the page. Unlike note annotations, they have no border or background."
      },
      "prefLabel": {
        "en": "freetext annotation"
      }
  },
    {
      "id": "http://risc-inc.com/annotator/verbs/annotated",
      "inScheme": "http://www.risc-inc.com/annotator/1.0.0",
      "relatedMatch": [ "https://w3id.org/xapi/adb/verbs/annotated", "https://w3id.org/xapi/acrossx/verbs/annotated" ],
      "type": "Verb",
      "definition": {
        "en": "Indicates a new annotation has been added to a document. This verb may be used with PDFs, images, assignment submissions or any other type of document which may be annotated."
      },
      "prefLabel": {
        "en": "annotated"
      }
    },
  {
      "id": "http://risc-inc.com/annotator/verbs/modified",
      "inScheme": "http://www.risc-inc.com/annotator/1.0.0",
      "type": "Verb",
      "definition": {
        "en": "This verb is used on annotations created with the annotated verb. It indicates that an existing annotation has been modified, for example editing the text of a note annotation or adjusting the position of a underline or highlight."
      },
      "prefLabel": {
        "en": "modified annotation"
      }
  }

  ]
},

{
   "@context": "https://w3id.org/xapi/profiles/context",
    "id": "https://w3id.org/xapi/scorm",
    "type": "Profile",
    "prefLabel": {
        "en": "SCORM Profile"
    },
    "definition": {
      "en": "The SCORM profile includes Verbs, Activity Types and xAPI Document definitions used to represent SCORM learning experiences in xAPI."
    },
    "conformsTo": "https://w3id.org/xapi/profiles#1.0",
    "seeAlso": "https://adl.gitbooks.io/scorm-profile-xapi/content/",
    "versions": [
        {
            "id": "https://w3id.org/xapi/scorm/v1.1.0",
            "generatedAtTime": "2017-08-21T14:25:59.295Z",
            "wasRevisionOf": ["https://w3id.org/xapi/scorm/v1"]
        }
    ],
    "author": {
        "type": "Organization",
        "name": "Advanced Distributed Learning(ADL) Initiative"
    },
    "concepts": [

      {
        "type": "Verb",
        "id": "http://adlnet.gov/expapi/verbs/completed",
        "inScheme": "https://w3id.org/xapi/scorm/v1.1.0",
        "exactMatch": [ "http://activitystrea.ms/schema/1.0/complete" ],
        "prefLabel": {
          "en": "completed"
        },
        "definition": {
          "en": "Indicates the actor finished or concluded the activity normally."
        }
      },
    {
      "type": "Verb",
      "id": "http://adlnet.gov/expapi/verbs/failed",
      "inScheme": "https://w3id.org/xapi/scorm/v1.1.0",
      "prefLabel": {
        "en": "failed"
      },
      "definition": {
        "en": "Indicates the actor did not successfully pass an activity to a level of predetermined satisfaction."
      }
    },
    {
      "type": "Verb",
      "id": "http://adlnet.gov/expapi/verbs/initialized",
      "inScheme": "https://w3id.org/xapi/scorm/v1.1.0",
      "prefLabel": {
        "en": "initialized"
      },
      "definition": {
        "en": "Indicates the activity provider has determined that the actor successfully started an activity."
      }
    },
    {
      "type": "Verb",
      "id": "http://adlnet.gov/expapi/verbs/passed",
      "inScheme": "https://w3id.org/xapi/scorm/v1.1.0",
      "prefLabel": {
        "en": "passed"
      },
      "definition": {
        "en": "Indicates the actor successfully passed an activity to a level of predetermined satisfaction."
      },
      "broader": ["http://adlnet.gov/expapi/verbs/completed"]
    },
    {
      "type": "Verb",
      "id": "http://adlnet.gov/expapi/verbs/responded",
      "inScheme": "https://w3id.org/xapi/scorm/v1.1.0",
      "prefLabel": {
        "en": "responded"
      },
      "definition": {
        "en": "Indicates an actor reacted or replied to an object."
      }
    },
    {
      "type": "Verb",
      "id": "http://adlnet.gov/expapi/verbs/resumed",
      "inScheme": "https://w3id.org/xapi/scorm/v1.1.0",
      "prefLabel": {
        "en": "resumed"
      },
      "definition": {
        "en": "Indicates the application has determined that the actor continued or reopened a suspended attempt on an activity."
      }
    },
    {
      "type": "Verb",
      "id": "http://adlnet.gov/expapi/verbs/scored",
      "inScheme": "https://w3id.org/xapi/scorm/v1.1.0",
      "prefLabel": {
        "en": "scored"
      },
      "definition": {
        "en": "Indicates a numerical value related to an actor's performance on an activity."
      }
    },
      {
        "type": "Verb",
        "id": "http://adlnet.gov/expapi/verbs/suspended",
        "exactMatch": [ "http://activitystrea.ms/schema/1.0/terminate" ],
        "inScheme": "https://w3id.org/xapi/scorm/v1.1.0",
        "prefLabel": {
          "en": "suspended"
        },
        "definition": {
          "en": "Indicates the status of a temporarily halted activity when an actor's intent is returning to the or object activity at a later time."
        }
      },
    {
      "type": "Verb",
      "id": "http://adlnet.gov/expapi/verbs/terminated",
      "inScheme": "https://w3id.org/xapi/scorm/v1.1.0",
      "prefLabel": {
        "en": "terminated"
      },
      "definition": {
        "en": "Indicates that the actor successfully ended an activity."
      }
    },
    {
      "type": "ActivityType",
      "id": "http://adlnet.gov/expapi/activities/assessment",
      "inScheme": "https://w3id.org/xapi/scorm/v1.1.0",
      "prefLabel": {
        "en": "assessment"
      },
      "definition": {
        "en": "An assessment is an activity type that determines a learner’s mastery of a particular subject area. An assessment typically has one or more questions."
      }
    },
    {
      "type": "ActivityType",
      "id": "http://adlnet.gov/expapi/activities/attempt",
      "inScheme": "https://w3id.org/xapi/scorm/v1.1.0",
      "prefLabel": {
        "en": "attempt"
      },
      "definition": {
        "en": "An attempt is a discrete set of learner experiences in an activity. This activity gives systems the ability to uniquely identify experiences when they may have happened in different interactions with the same activity."
      }
    },
      {
        "type": "ActivityType",
        "id": "http://adlnet.gov/expapi/activities/course",
        "inScheme": "https://w3id.org/xapi/scorm/v1.1.0",
        "exactMatch": [ "https://w3id.org/xapi/cmi5/activities/course" ],
        "prefLabel": {
          "en": "course"
        },
        "definition": {
          "en": "A course represents an entire “content package” worth of material. The largest level of granularity. Unless flat, a course consists of multiple modules."
        }
      },
    {
      "type": "ActivityType",
      "id": "http://adlnet.gov/expapi/activities/interaction",
      "inScheme": "https://w3id.org/xapi/scorm/v1.1.0",
      "prefLabel": {
        "en": "interaction"
      },
      "definition": {
        "en": "An interaction is typically a part of a larger activity (such as a assessment, game, or simulation) and refers to a control to which a learner provides input. An interaction can be either an asset or function independently."
      }
    },
    {
      "type": "ActivityType",
      "id": "http://adlnet.gov/expapi/activities/lesson",
      "inScheme": "https://w3id.org/xapi/scorm/v1.1.0",
      "prefLabel": {
        "en": "lesson"
      },
      "definition": {
        "en": "A lesson is learning content that may or may not take on the form of a SCO (formal, tracked learning). A lesson may stand-alone or may be part of a larger course."
      }
    },
    {
      "type": "ActivityType",
      "id": "http://adlnet.gov/expapi/activities/module",
      "inScheme": "https://w3id.org/xapi/scorm/v1.1.0",
      "prefLabel": {
        "en": "module"
      },
      "definition": {
        "en": "A module represents any “content aggregation” at least one level below the course level. Modules of modules can exist for layering purposes. Modules are not content. Modules are one level up from all content."
      }
    },
    {
      "type": "ActivityType",
      "id": "http://adlnet.gov/expapi/activities/objective",
      "inScheme": "https://w3id.org/xapi/scorm/v1.1.0",
      "prefLabel": {
        "en": "objective"
      },
      "definition": {
        "en": "An objective determines whether competency has been achieved in a desired area. Objectives typically are associated with questions and assessments. Objectives are not learning content and cannot be SCOs."
      }
    },
    {
      "type": "ActivityType",
      "id": "http://adlnet.gov/expapi/activities/profile",
      "inScheme": "https://w3id.org/xapi/scorm/v1.1.0",
      "exactMatch": ["https://w3id.org/xapi/profiles/ontology#Profile"],
      "prefLabel": {
        "en": "profile"
      },
      "definition": {
        "en": "A profile is an activity that defines a set of rules and recommendations for generating xAPI statements for a particular domain. The inclusion of a profile activity in a statement identifies that statement as following the rules outlined in the profile."
      }
    },
    {
      "type": "StateResource",
      "id": "https://w3id.org/xapi/scorm/activity-state",
      "inScheme": "https://w3id.org/xapi/scorm/v1.1.0",
      "prefLabel": {
        "en": "SCORM Activity State"
      },
      "definition": {
        "en": "Used to store document data associated with the activity and not intended to capture learning experience data in the form of a statement. The SCORM Activity State Object contains a list of Attempt IRIs for the specified Activity."
      },
      "contentType": "application/json",
      "schema": "https://raw.githubusercontent.com/adlnet/xAPI-SCORM-Profile/master/document-schemas/scorm.profile.activity.state.schema.json"
    },
    {
      "type": "StateResource",
      "id": "https://w3id.org/xapi/scorm/attempt-state",
      "inScheme": "https://w3id.org/xapi/scorm/v1.1.0",
      "prefLabel": {
        "en": "SCORM Activity Attempt State"
      },
      "definition": {
        "en": "The SCORM Activity Attempt State Object contains the state data for the specified attempt on an Activity. It has the following properties: credit, mode, location, preferences, total_time, and adl_data."
      },
      "contentType": "application/json",
      "schema": "https://raw.githubusercontent.com/adlnet/xAPI-SCORM-Profile/master/document-schemas/scorm.profile.attempt.state.schema.json",
      "context": "https://raw.githubusercontent.com/adlnet/xAPI-SCORM-Profile/master/context/attempt-state-context.jsonld"
    },
    {
      "type": "ActivityProfileResource",
      "id": "https://w3id.org/xapi/scorm/activity-profile",
      "inScheme": "https://w3id.org/xapi/scorm/v1.1.0",
      "definition": {
        "en": "Used to store document data associated with the activity and not intended to capture learning experience data in the form of a statement. The SCORM Activity Profile Object contains the profile data for the specified Activity."
      },
      "prefLabel": {
        "en": "SCORM Activity Profile"
      },
      "contentType": "application/json",
      "schema": "https://w3id.org/xapi/scorm/activity-profile/scorm.profile.activity.profile.schema"
    },
    {
      "type": "AgentProfileResource",
      "id": "https://w3id.org/xapi/scorm/agent-profile",
      "inScheme": "https://w3id.org/xapi/scorm/v1.1.0",
      "definition": {
        "en": "The SCORM Activity State Object contains the profile data for the specified Agent. The agent profile has three properties: learner_id, learner_name, and preferences. "
      },
      "prefLabel": {
        "en": "SCORM Agent Profile"
      },
      "contentType": "application/json",
      "schema": "https://raw.githubusercontent.com/adlnet/xAPI-SCORM-Profile/master/document-schemas/scorm.profile.agent.profile.schema.json"
    }
  ],
    "templates": [
        {
            "id": "https://w3id.org/xapi/scorm#generalrestrictions",
            "type": "StatementTemplate",
            "prefLabel": {
                "en": "general restrictions on statements"
            },
            "definition": {
              "en": "This is the general template that defines restrictions for all statements conforming to the SCORM profile."
            },
            "rules": [
                {
                    "location": "context.contextActivities.grouping[*].definition.type",
                    "any": ["http://adlnet.gov/expapi/activities/attempt"]
                },
                {
                    "location": "context.contextActivities.grouping[*].definition.type",
                    "any": ["http://adlnet.gov/expapi/activities/course"]
                },
                {
                    "location": "timestamp",
                    "presence": "included"
                }
            ]
        },
        {
            "id": "https://w3id.org/xapi/scorm#initialization",
            "type": "StatementTemplate",
            "prefLabel": {
                "en": "initialization"
            },
            "definition": {
              "en": "The statement template used for when initilizing communication with the LMS."
            },
            "verb": "http://adlnet.gov/expapi/verbs/initialized",
            "objectActivityType": "http://adlnet.gov/expapi/activities/lesson",
            "rules": [
            ]
        },
        {
            "id": "https://w3id.org/xapi/scorm#termination",
            "type": "StatementTemplate",
            "prefLabel": {
                "en": "termination"
            },
            "definition": {
              "en": "The statement template used for when terminating communication with the LMS."
            },
            "verb": "http://adlnet.gov/expapi/verbs/terminated",
            "objectActivityType": "http://adlnet.gov/expapi/activities/lesson",
            "rules": [
            ]
        },
        {
            "id": "https://w3id.org/xapi/scorm#suspension",
            "type": "StatementTemplate",
            "prefLabel": {
                "en": "suspension"
            },
            "definition": {
              "en": "The statement template used for when suspending the attempt on the lesson."
            },
            "verb": "http://adlnet.gov/expapi/verbs/suspended",
            "objectActivityType": "http://adlnet.gov/expapi/activities/lesson",
            "rules": [
            ]
        },
        {
            "id": "https://w3id.org/xapi/scorm#resumption",
            "type": "StatementTemplate",
            "prefLabel": {
                "en": "resumption"
            },
            "definition": {
              "en": "The statement template used for when resuming a suspended attempt."
            },
            "verb": "http://adlnet.gov/expapi/verbs/resumed",
            "objectActivityType": "http://adlnet.gov/expapi/activities/lesson",
            "rules": [
            ]
        },
        {
            "id": "https://w3id.org/xapi/scorm#scoactivity",
            "type": "StatementTemplate",
            "prefLabel": {
                "en": "SCO activity"
            },
            "definition": {
              "en": "The statement template used for any general lesson activity."
            },
            "objectActivityType": "http://adlnet.gov/expapi/activities/lesson",
            "rules": [
            ]
        },
        {
            "id": "https://w3id.org/xapi/scorm#commenting",
            "type": "StatementTemplate",
            "prefLabel": {
              "en": "commenting"
            },
            "definition": {
              "en": "The statement template used for making comments about the lesson."
            },
            "verb": "http://adlnet.gov/expapi/verbs/commented",
            "objectActivityType": "http://adlnet.gov/expapi/activities/lesson",
            "rules": [
                {
                    "location": "result.response",
                    "presence": "included"
                }
            ]
        },
        {
            "id": "https://w3id.org/xapi/scorm#completing",
            "type": "StatementTemplate",
            "prefLabel": {
              "en": "completing"
            },
            "definition": {
              "en": "The statement template used for completing the lesson."
            },
            "verb": "http://adlnet.gov/expapi/verbs/completed",
            "objectActivityType": "http://adlnet.gov/expapi/activities/lesson",
            "rules": [
            ]
        },
        {
            "id": "https://w3id.org/xapi/scorm#otheractivity",
            "type": "StatementTemplate",
            "prefLabel": {
              "en": "other activity"
            },
            "definition": {
              "en": "The statement template used for other types of activities."
            },
            "contextParentActivityType": "http://adlnet.gov/expapi/activities/lesson",
            "rules": [
            ]
        },
        {
            "id": "https://w3id.org/xapi/scorm#interactionactivity",
            "type": "StatementTemplate",
            "prefLabel": {
              "en": "interaction activity"
            },
            "definition": {
              "en": "The statement template used for cmi interaction activities."
            },
            "verb": "http://adlnet.gov/expapi/verbs/responded",
            "objectActivityType": "http://adlnet.gov/expapi/activities/cmi.interaction",
            "contextParentActivityType": "http://adlnet.gov/expapi/activities/lesson",
            "rules": [
            ]
        }
    ],
    "patterns": [
        {
            "id": "https://w3id.org/xapi/scorm#generalpattern",
            "type": "Pattern",
            "primary": true,
            "prefLabel": {
                "en": "general pattern"
            },
            "definition": {
                "en": "This pattern describes the overall sequence of statements sent over the course of an attempt"
            },
            "sequence": ["https://w3id.org/xapi/scorm#initialization", "https://w3id.org/xapi/scorm#middlestatements", "https://w3id.org/xapi/scorm#optionallycontinue", "https://w3id.org/xapi/scorm#termination"]
        },
        {
            "id": "https://w3id.org/xapi/scorm#activitystatements",
            "prefLabel": {
              "en": "activity statements"
            },
            "definition": {
              "en": "This pattern provides all of the alternate options for SCORM activity statements."
            },
            "type": "Pattern",
            "alternates": ["https://w3id.org/xapi/scorm#scoactivity", "https://w3id.org/xapi/scorm#otheractivity", "https://w3id.org/xapi/scorm#commenting", "https://w3id.org/xapi/scorm#interactionactivity", "https://w3id.org/xapi/scorm#completing"]
        },
        {
            "id": "https://w3id.org/xapi/scorm#middlestatements",
            "prefLabel": {
              "en": "middle statements"
            },
            "definition": {
              "en": "This pattern provides that zero or more activity statement patterns will be used."
            },
            "type": "Pattern",
            "zeroOrMore": "https://w3id.org/xapi/scorm#activitystatements"
        },
        {
            "id": "https://w3id.org/xapi/scorm#suspendresume",
            "prefLabel": {
              "en": "suspend resume"
            },
            "definition": {
              "en": "This pattern provides the sequence used for for suspending and resuming."
            },
            "type": "Pattern",
            "sequence": ["https://w3id.org/xapi/scorm#suspension", "https://w3id.org/xapi/scorm#resumption", "https://w3id.org/xapi/scorm#middlestatements"]
        },
        {
            "id": "https://w3id.org/xapi/scorm#optionallycontinue",
            "prefLabel": {
              "en": "optionally continue"
            },
            "definition": {
              "en": "This pattern provies an option for suspending and resuming."
            },
            "type": "Pattern",
            "zeroOrMore": "https://w3id.org/xapi/scorm#suspendresume"
        }

    ]
},

{
  "@context": "https://w3id.org/xapi/profiles/context",
  "id": "https://w3id.org/xapi/seriousgames",
  "type": "Profile",
  "conformsTo": "https://w3id.org/xapi/profiles#1.0",
  "prefLabel": {
    "en": "Serious Games Profile"
  },
  "definition": {
  "en": "The serous games profile of the xAPI was created to identify and standardize the common interactions that can be tracked in a serious game. This profile was designed as part of the RAGE project."
},
  "seeAlso": "https://github.com/e-ucm/xapi-seriousgames",
  "author": {
    "type": "Organization",
    "name": "The RAGE project"
  },
  "versions": [
    {
      "id": "https://w3id.org/xapi/seriousgames/v1.1.0",
      "generatedAtTime": "2017-07-14T10:00:00Z",
      "wasRevisionOf": ["https://w3id.org/xapi/seriousgames/v1"]
      }],
  "concepts": [
    {
      "id": "https://w3id.org/xapi/seriousgames/activity-types/area",
      "type": "ActivityType",
      "inScheme": "https://w3id.org/xapi/seriousgames/v1.1.0",
      "definition": {
        "en": "An identified area inside the game world. In some games they can also be worlds. Represents an aggregation of zones."
      },
      "prefLabel": {
        "en": "area"
      }
    },
    {
      "id": "https://w3id.org/xapi/seriousgames/activity-types/controller",
      "type": "ActivityType",
      "inScheme": "https://w3id.org/xapi/seriousgames/v1.1.0",
      "definition": {
        "en": "A game controller whose input affects the action in an activity. Game controllers are common in non-pc games. This activity represents this device."
      },
      "prefLabel": {
        "en": "controller"
      }
    },
    {
      "id": "https://w3id.org/xapi/seriousgames/activity-types/cutscene",
      "type": "ActivityType",
      "inScheme": "https://w3id.org/xapi/seriousgames/v1.1.0",
      "definition": {
        "en": "A non-interactive scene that can be skipped. A cutscene is a non-interactive scene within the game (e.g., a video, a conversation, an automated sequence). The player can usually skip them pressing some button."
      },
      "prefLabel": {
        "en": "cutscene"
      }
    },
    {
      "id": "https://w3id.org/xapi/seriousgames/activity-types/dialog-tree",
      "type": "ActivityType",
      "inScheme": "https://w3id.org/xapi/seriousgames/v1.1.0",
      "definition": {
        "en": "An alternative presented during a conversation with an non-playable character. Dialog trees are a common mechanic in video games, where players can answer questions to NPC. This activity represents that type of alternative."
      },
      "prefLabel": {
        "en": "dialog-tree"
      }
    },
    {
      "id": "https://w3id.org/xapi/seriousgames/activity-types/enemy",
      "type": "ActivityType",
      "inScheme": "https://w3id.org/xapi/seriousgames/v1.1.0",
      "definition": {
        "en": "A game object that poses a threat inside the game world. Enemies are common elements in video games. Defeating them indicates a player accomplishment."
      },
      "prefLabel": {
        "en": "enemy"
      }
    },
    {
      "id": "https://w3id.org/xapi/seriousgames/activity-types/item",
      "type": "ActivityType",
      "inScheme": "https://w3id.org/xapi/seriousgames/v1.1.0",
      "definition": {
        "en": "A collectable game object whose use or interaction results in an effect in a game. Items are common elements in video games. Players can collect/use/combine them."
      },
      "prefLabel": {
        "en": "item"
      }
    },
    {
      "id": "https://w3id.org/xapi/seriousgames/activity-types/keyboard",
      "type": "ActivityType",
      "inScheme": "https://w3id.org/xapi/seriousgames/v1.1.0",
      "definition": {
        "en": "A keyboard whose keystrokes affects the action in an activity. Somes games can receive inputs from keyboards: physical keyboards in a PC, or virtual keyboards in a smartphone screen. This activity represent both."
      },
      "prefLabel": {
        "en": "keyboard"
      }
    },
    {
      "id": "https://w3id.org/xapi/seriousgames/activity-types/level",
      "type": "ActivityType",
      "inScheme": "https://w3id.org/xapi/seriousgames/v1.1.0",
      "exactMatch": {
        "id": "http://curatr3.com/define/type/level"
      },
      "definition": {
        "en": "A level of a game or of a gamified learning platform. A level is logic partition of progression in any video game. Completing a level means advancing in the progression of the game."
      },
      "prefLabel": {
        "en": "level"
      }
    },
    {
      "id": "https://w3id.org/xapi/seriousgames/activity-types/menu",
      "type": "ActivityType",
      "inScheme": "https://w3id.org/xapi/seriousgames/v1.1.0",
      "definition": {
        "en": "A menu with several buttons/options whose selection produces different effects. Represents a menu, integrated in the user interface (UI), with several a options."
      },
      "prefLabel": {
        "en": "menu"
      }
    },
    {
      "id": "https://w3id.org/xapi/seriousgames/activity-types/mouse",
      "type": "ActivityType",
      "inScheme": "https://w3id.org/xapi/seriousgames/v1.1.0",
      "definition": {
        "en": "A mouse device whose clicks and movement affects the action in an activity. PC games are usually controlled by mouse interaction. This activity represents this device."
      },
      "prefLabel": {
        "en": "mouse"
      }
    },
    {
      "id": "https://w3id.org/xapi/seriousgames/activity-types/non-player-character",
      "type": "ActivityType",
      "inScheme": "https://w3id.org/xapi/seriousgames/v1.1.0",
      "definition": {
        "en": "A character that can offer a conversation or other type of interaction inside a game. Players usually have conversations with non-player characters."
      },
      "prefLabel": {
        "en": "non-player-character"
      }
    },
    {
      "id": "https://w3id.org/xapi/seriousgames/activity-types/quest",
      "type": "ActivityType",
      "inScheme": "https://w3id.org/xapi/seriousgames/v1.1.0",
      "definition": {
        "en": "A accomplishable challenge or mission presented inside a game. Completing quests marks the players' progress."
      },
      "prefLabel": {
        "en": "quest"
      }
    },
    {
      "id": "https://w3id.org/xapi/seriousgames/activity-types/screen",
      "type": "ActivityType",
      "inScheme": "https://w3id.org/xapi/seriousgames/v1.1.0",
      "definition": {
        "en": "A game screen where a concrete game task is developed. Games are usually composed by a set of screens the player navigates. A screen has a concrete function within the game. A screen contains a menu, or the gameplay. To define virtual zones inside the game world, it is recommended to use area or zone."
      },
      "prefLabel": {
        "en": "screen"
      }
    },
    {
      "id": "https://w3id.org/xapi/seriousgames/activity-types/serious-game",
      "type": "ActivityType",
      "inScheme": "https://w3id.org/xapi/seriousgames/v1.1.0",
      "definition": {
        "en": "A game designed for a primary purpose other than pure entertainment. For instance, an educational game or a game-like simulation. A serious game is the root container for the rest of game elements."
      },
      "prefLabel": {
        "en": "serious-game"
      }
    },
    {
      "id": "https://w3id.org/xapi/seriousgames/activity-types/touchscreen",
      "type": "ActivityType",
      "inScheme": "https://w3id.org/xapi/seriousgames/v1.1.0",
      "definition": {
        "en": "A screen the player can touch or press."
      },
      "prefLabel": {
        "en": "touchscreen"
      }
    },
    {
      "id": "https://w3id.org/xapi/seriousgames/activity-types/zone",
      "type": "ActivityType",
      "inScheme": "https://w3id.org/xapi/seriousgames/v1.1.0",
      "definition": {
        "en": "An identified zone inside an area of the game world. A zone is inside an area, and defines a logic self-contained place."
      },
      "prefLabel": {
        "en": "zone"
      }
    },
    {
      "id": "https://w3id.org/xapi/seriousgames/extensions/progress",
      "type": "ResultExtension",
      "inScheme": "https://w3id.org/xapi/seriousgames/v1.1.0",
      "definition": {
        "en": "A decimal number (3 significant figures with 2 figures following the decimal point) between 0 and 1 (inclusive) to indicate the value of progress in a completable. Indicates the progress in a completable. This extension appears in the Statement's result."
      },
      "prefLabel": {
        "en": "progress"
      }
    },
    {
      "id": "https://w3id.org/xapi/seriousgames/extensions/health",
      "type": "ResultExtension",
      "inScheme": "https://w3id.org/xapi/seriousgames/v1.1.0",
      "definition": {
        "en": "A decimal number (3 significant figures with 2 figures following the decimal point) between 0 and 1 (inclusive) to indicate the remaining health or stamina within a game. Used to represent the remaining health of the player (e.g., number of hearts, energy bar). This extension appears in the Statement's result."
      },
      "prefLabel": {
        "en": "health"
      }
    },
    {
      "id": "https://w3id.org/xapi/seriousgames/extensions/position",
      "type": "ResultExtension",
      "inScheme": "https://w3id.org/xapi/seriousgames/v1.1.0",
      "definition": {
        "en": "An object with attributes x, y and z indicating the position of the player within a particular area in a game. Used to represent the current position of the player inside the game world. This position should be expressed in a coordinate system known by the data analysts. This extension appears in the Statement's result."
      },
      "prefLabel": {
        "en": "position"
      }
    },
    {
      "id": "https://w3id.org/xapi/seriousgames/verbs/accessed",
      "type": "Verb",
      "relatedMatch": [ "http://activitystrea.ms/access" ],
      "inScheme": "https://w3id.org/xapi/seriousgames/v1.1.0",
      "exactMatch": {
        "id": "http://activitystrea.ms/access"
      },
      "definition": {
        "en": "Indicates that the actor has gained access to the object. Associated to the virtual places a player visits during a gameplay."
      },
      "prefLabel": {
        "en": "accessed"
      }
    },
    {
      "id": "https://w3id.org/xapi/seriousgames/verbs/pressed",
      "type": "Verb",
      "inScheme": "https://w3id.org/xapi/seriousgames/v1.1.0",
      "exactMatch": {
        "id": "http://future-learning.info/xAPI/verb/pressed"
      },
      "definition": {
        "en": "Indicates that the actor made physical contact with the object. Used when the player presses some button in an input device. Press the left button in a mouse, press the X button in a XBox controller, etc. "
      },
      "prefLabel": {
        "en": "pressed"
      }
    },
    {
      "id": "https://w3id.org/xapi/seriousgames/verbs/released",
      "type": "Verb",
      "inScheme": "https://w3id.org/xapi/seriousgames/v1.1.0",
      "exactMatch": {
        "id": "http://future-learning.info/xAPI/verb/released"
      },
      "definition": {
        "en": "Indicates that the actor released the object from one's grip from or a specific state. Used when the player releases a previously pressed button."
      },
      "prefLabel": {
        "en": "released"
      }
    },
    {
      "id": "https://w3id.org/xapi/seriousgames/verbs/unlocked",
      "type": "Verb",
      "inScheme": "https://w3id.org/xapi/seriousgames/v1.1.0",
      "definition": {
        "en": "Indicates the actor unlocked an option that was previously unavailable. Used when the player unlocks an option in an alternative."
      },
      "prefLabel": {
        "en": "unlocked"
      }
    },
    {
      "id": "https://w3id.org/xapi/seriousgames/verbs/used",
      "type": "Verb",
      "exactMatch": [ "http://activitystrea.ms/schema/use" ],
      "inScheme": "https://w3id.org/xapi/seriousgames/v1.1.0",
      "definition": {
        "en": "Indicates the actor used a virtual object. Used when player uses items they find during the gameplay, to obtain different benefits."
      },
      "prefLabel": {
        "en": "used"
      }
    }
  ]
},

{
  "@context": "https://w3id.org/xapi/profiles/context",
  "id": "https://registry.tincanapi.com",
  "type": "Profile",
  "conformsTo": "https://w3id.org/xapi/profiles#1.0",
  "prefLabel": {
    "en": "TinCan Vocabulary"
  },
  "definition": {
    "en": "A list of vocabulary concepts originally created in the TinCan registry."
  },
  "seeAlso": "https://registry.tincanapi.com",
  "author": {
    "type": "Organization",
    "name": "Rustici Software"
  },
  "concepts": [
    {
       "id": "http://id.tincanapi.com/verb/adjourned",
       "prefLabel": {
          "en": "adjourned"
        },
       "definition": {
         "en": "Indicates the actor temporarily ended an event (e.g. a meeting). It is expected (but not required) that the event will be resumed at a future point in time. The actor of the statement should be somebody who has authority to adjourn the event, for example the event organizer."
         },

       "inScheme": "http://registry.tincanapi.com",
       "type": "Verb"
    },
    {
       "id": "http://id.tincanapi.com/verb/applauded",
       "prefLabel": {
          "en": "applauded"
        },
       "definition": {
         "en": "Indicates that the actor approves of the content or message. Analogous to praising."
         },

       "inScheme": "http://registry.tincanapi.com",
       "type": "Verb"
    },
    {
       "id": "http://id.tincanapi.com/verb/arranged",
       "prefLabel": {
          "en": "arranged"
        },
       "definition": {
         "en": "Indicates that the actor arranged the object within a collection or set of elements. The extension http://id.tincanapi.com/extension/position should be used to indicate the new position."
         },

       "inScheme": "http://registry.tincanapi.com",
       "type": "Verb"
    },
    {
       "id": "http://id.tincanapi.com/verb/bookmarked",
       "prefLabel": {
          "en": "bookmarked"
        },
       "definition": {
         "en": "Indicates the user determined the content was important enough to keep a reference to it for later. A different verb should be used for tracking the location in a set of text that a reader has reached, as in a physical bookmark."
         },

       "inScheme": "http://registry.tincanapi.com",
       "type": "Verb"
    },
    {
       "id": "http://id.tincanapi.com/verb/called",
       "prefLabel": {
          "en": "called"
        },
       "definition": {
         "en": "Indicates that the actor placed a phone call to the object."
         },

       "inScheme": "http://registry.tincanapi.com",
       "type": "Verb"
    },
    {
       "id": "http://id.tincanapi.com/verb/closed-sale",
       "prefLabel": {
          "en": "closed sale"
        },
       "definition": {
         "en": "Indicates that the actor has closed a sale."
         },

       "inScheme": "http://registry.tincanapi.com",
       "type": "Verb"
    },
    {
       "id": "http://id.tincanapi.com/verb/created-opportunity",
       "prefLabel": {
          "en": "created opportunity"
        },
       "definition": {
         "en": "Indicates that the actor has created a new opportunity, such as one might do in a CRM tool."
         },

       "inScheme": "http://registry.tincanapi.com",
       "type": "Verb"
    },
    {
       "id": "http://id.tincanapi.com/verb/defined",
       "prefLabel": {
          "en": "defined"
        },
       "definition": {
         "en": "Indicates that the actor has defined the object. Note that this is a more specific form of the verb ���create��. For instance, a learner defining a goal."
         },

       "inScheme": "http://registry.tincanapi.com",
       "type": "Verb"
    },
    {
       "id": "http://id.tincanapi.com/verb/disabled",
       "prefLabel": {
          "en": "disabled"
        },
       "definition": {
         "en": "Indicates that the actor turned off a particular part or feature of the system."
         },

       "inScheme": "http://registry.tincanapi.com",
       "type": "Verb"
    },
    {
       "id": "http://id.tincanapi.com/verb/discarded",
       "prefLabel": {
          "en": "discarded"
        },
       "definition": {
         "en": "Indicates that the actor discarded a previous selection. This verb works with the verb selected."
         },

       "inScheme": "http://registry.tincanapi.com",
       "type": "Verb"
    },
    {
       "id": "http://id.tincanapi.com/verb/downloaded",
       "prefLabel": {
          "en": "downloaded"
        },
       "definition": {
         "en": "Indicates that the actor downloaded (rather than accessed or opened) a file or document."
         },

       "inScheme": "http://registry.tincanapi.com",
       "type": "Verb"
    },
    {
       "id": "http://id.tincanapi.com/verb/earned",
       "prefLabel": {
          "en": "earned"
        },
       "definition": {
         "en": "Indicates that the actor has earned or has been awarded the object."
         },
       "exactMatch": ["http://specification.openbadges.org/xapi/verbs/earned"],
       "inScheme": "http://registry.tincanapi.com",
       "type": "Verb"
    },
    {
       "id": "http://id.tincanapi.com/verb/enabled",
       "prefLabel": {
          "en": "enabled"
        },
       "definition": {
         "en": "Indicates that the actor turned on a particular part or feature of the system. It works with the verb disabled."
         },

       "inScheme": "http://registry.tincanapi.com",
       "type": "Verb"
    },
    {
       "id": "http://id.tincanapi.com/verb/frame/entered",
       "prefLabel": {
          "en": "entered frame"
        },
       "definition": {
         "en": "Indicates that the actor has entered the frame of a camera or viewing device."
         },

       "inScheme": "http://registry.tincanapi.com",
       "type": "Verb"
    },
    {
       "id": "http://id.tincanapi.com/verb/estimated-duration",
       "prefLabel": {
          "en": "estimated duration"
        },
       "definition": {
         "en": "Indicates that the actor has estimated the duration of the object. For instance, a learner estimating the duration of a task."
         },

       "inScheme": "http://registry.tincanapi.com",
       "type": "Verb"
    },
    {
       "id": "http://id.tincanapi.com/verb/frame/exited",
       "prefLabel": {
          "en": "exited frame"
        },
       "definition": {
         "en": "Indicates that the actor has exited the frame of a camera or viewing device."
         },

       "inScheme": "http://registry.tincanapi.com",
       "type": "Verb"
    },
    {
       "id": "http://id.tincanapi.com/verb/expected",
       "prefLabel": {
          "en": "expected"
        },
       "definition": {
         "en": "Indicates that the actor expected particular results from the object. The expected results should be recorded in the results field."
         },

       "inScheme": "http://registry.tincanapi.com",
       "type": "Verb"
    },
    {
       "id": "http://id.tincanapi.com/verb/expired",
       "prefLabel": {
          "en": "expired"
        },
       "definition": {
         "en": "Indicates that the object (a competency or certification) has expired for the actor."
         },

       "inScheme": "http://registry.tincanapi.com",
       "type": "Verb"
    },
    {
       "id": "http://id.tincanapi.com/verb/focused",
       "prefLabel": {
          "en": "focused"
        },
       "definition": {
         "en": "Indicates that a user has focused on a target object. This is the opposite of 'unfocused'. For example, it indicates that the user has clicked to focus or regain focus on the application, content or activity."
         },

       "inScheme": "http://registry.tincanapi.com",
       "type": "Verb"
    },
    {
       "id": "http://id.tincanapi.com/verb/hired",
       "prefLabel": {
          "en": "hired"
        },
       "definition": {
         "en": "An offer of employment that has been made by an agent and accepted by another."
         },

       "inScheme": "http://registry.tincanapi.com",
       "type": "Verb"
    },
    {
       "id": "http://id.tincanapi.com/verb/interviewed",
       "prefLabel": {
          "en": "interviewed"
        },
       "definition": {
         "en": "For use when one agent or group interviews another agent or group. It could be used for the purposes of hiring, creating news articles, shows, research, etc."
         },

       "inScheme": "http://registry.tincanapi.com",
       "type": "Verb"
    },
    {
       "id": "http://id.tincanapi.com/verb/laughed",
       "prefLabel": {
          "en": "laughed"
        },
       "definition": {
         "en": "Indicates that the actor found the content funny and enjoyable. May be used with an \"Ending Point\" extension (see http://id.tincanapi.com/extension/ending-point) value capturing the point in time within the Activity."
         },

       "inScheme": "http://registry.tincanapi.com",
       "type": "Verb"
    },
    {
       "id": "http://id.tincanapi.com/verb/marked-unread",
       "prefLabel": {
          "en": "marked as unread"
        },
       "definition": {
         "en": "The object was marked as unread."
         },

       "inScheme": "http://registry.tincanapi.com",
       "type": "Verb"
    },
    {
       "id": "http://id.tincanapi.com/verb/mentioned",
       "prefLabel": {
          "en": "mentioned"
        },
       "definition": {
         "en": "Indicates that the actor mentioned the object, for example in a tweet."
         },

       "inScheme": "http://registry.tincanapi.com",
       "type": "Verb"
    },
    {
       "id": "http://id.tincanapi.com/verb/mentored",
       "prefLabel": {
          "en": "mentored"
        },
       "definition": {
         "en": "Indicates that that the actor has mentored the object. For instance, a manager mentoring an employee, or a teacher mentoring a student."
         },

       "inScheme": "http://registry.tincanapi.com",
       "type": "Verb"
    },
    {
      "id": "http://id.tincanapi.com/verb/paused",
      "narrowMatch": [ "https://w3id.org/xapi/video/verbs/paused"  ],
      "prefLabel": {
        "en": "paused"
      },
      "definition": {
        "en": "To indicate an actor has ceased or suspended an activity temporarily."
      },

      "inScheme": "http://registry.tincanapi.com",
      "type": "Verb"
    },
    {
       "id": "http://id.tincanapi.com/verb/performed-offline",
       "prefLabel": {
          "en": "performed offline"
        },
       "definition": {
         "en": "Indicates that the actor has performed the object offline for a period of time (episode). For instance, a learner performed task X, which is an offline task like reading a book, for 30 minutes. This is used to record the time spent on offline activities."
         },

       "inScheme": "http://registry.tincanapi.com",
       "type": "Verb"
    },
    {
       "id": "http://id.tincanapi.com/verb/personalized",
       "prefLabel": {
          "en": "personalized"
        },
       "definition": {
         "en": "Indicates that the actor personalized the object. The idea is that the actor personalizes an object created by a third party to adapt it for his/her personal use. This can be used for personalizing a strategy, method, a cooking recipe, etc."
         },

       "inScheme": "http://registry.tincanapi.com",
       "type": "Verb"
    },
    {
       "id": "http://id.tincanapi.com/verb/previewed",
       "prefLabel": {
          "en": "previewed"
        },
       "definition": {
         "en": "Used to indicate that an actor has taken a first glance at a piece of content that they plan to return to for a more in depth experience later. For instance someone may come across a webpage that they don't have enough time to read at that time, but plan to come back to and read fully."
         },

       "inScheme": "http://registry.tincanapi.com",
       "type": "Verb"
    },
    {
       "id": "http://id.tincanapi.com/verb/promoted",
       "prefLabel": {
          "en": "promoted"
        },
       "definition": {
         "en": "The act of promoting a content item such that it appears more highly in search results or is promoted to users in some other way."
         },

       "inScheme": "http://registry.tincanapi.com",
       "type": "Verb"
    },
    {
       "id": "http://id.tincanapi.com/verb/rated",
       "prefLabel": {
          "en": "rated"
        },
       "definition": {
         "en": "Action of giving a rating to an object. Should only be used when the action is the rating itself, as opposed to another action such as \"reading\" where a rating can be applied to the object as part of that action. In general the rating should be included in the Result with a Score object."
         },

       "inScheme": "http://registry.tincanapi.com",
       "type": "Verb"
    },
    {
       "id": "http://id.tincanapi.com/verb/replied",
       "prefLabel": {
          "en": "replied"
        },
       "definition": {
         "en": "The actor posted a reply to a forum, comment thread or discussion."
         },

       "inScheme": "http://registry.tincanapi.com",
       "type": "Verb"
    },
    {
       "id": "http://id.tincanapi.com/verb/replied-to-tweet",
       "prefLabel": {
          "en": "replied to tweet"
        },
       "definition": {
         "en": "This is an extension of the tweeted verb for the specific case of a tweet replying to another. This can be used to track group discussions experience. As with Retweeted we expect to find the original tweet id in the context as well as the person's handle to which the reply is addressed using the tweet extension URI http://id.tincanapi.com/extension/tweet"
         },

       "inScheme": "http://registry.tincanapi.com",
       "type": "Verb"
    },
    {
       "id": "http://id.tincanapi.com/verb/requested-attention",
       "prefLabel": {
          "en": "requested attention"
        },
       "definition": {
         "en": "Indicates that the actor is requesting the attention of an instructor, presenter or moderator."
         },

       "inScheme": "http://registry.tincanapi.com",
       "type": "Verb"
    },
    {
       "id": "http://id.tincanapi.com/verb/retweeted",
       "prefLabel": {
          "en": "retweeted"
        },
       "definition": {
         "en": "Used when an agent repeats a tweet written by another user. Usage in a statement is similar to tweeted but we expect to find the URI to the original tweet in the context of the statement, as well as the username of the original author as a context extension. The extension URI used for this should be http://id.tincanapi.com/extension/tweet"
         },

       "inScheme": "http://registry.tincanapi.com",
       "type": "Verb"
    },
    {
       "id": "http://id.tincanapi.com/verb/reviewed",
       "prefLabel": {
          "en": "reviewed"
        },
       "definition": {
         "en": "Indicates that the actor has reviewed the object. For instance, a person reviewing an employee or a person reviewing an owner's manual."
         },
       "exactMatch": ["https://brindlewaye.com/xAPITerms/verbs/reviewed/"],
       "inScheme": "http://registry.tincanapi.com",
       "type": "Verb"
    },
    {
       "id": "http://id.tincanapi.com/verb/secured",
       "prefLabel": {
          "en": "secured"
        },
       "definition": {
         "en": "Indicates that the actor secured the object. The object used with this verb might be a device, piece of software, location, etc."
         },

       "inScheme": "http://registry.tincanapi.com",
       "type": "Verb"
    },
    {
       "id": "http://id.tincanapi.com/verb/selected",
       "prefLabel": {
          "en": "selected"
        },
       "definition": {
         "en": "Indicates that the actor selects an object from a collection or set to use it in an activity. The collection would be the context parent element."
         },

       "inScheme": "http://registry.tincanapi.com",
       "type": "Verb"
    },
    {
       "id": "http://id.tincanapi.com/verb/skipped",
       "prefLabel": {
          "en": "skipped"
        },
       "definition": {
         "en": "To indicate an actor has passed over or omitted an interval, screen, segment, item, or step."
         },

       "inScheme": "http://registry.tincanapi.com",
       "type": "Verb"
    },
    {
       "id": "http://id.tincanapi.com/verb/talked-with",
       "prefLabel": {
          "en": "talkedwith"
        },
       "definition": {
         "en": "Indicates that the actor talked to another agent or group. The object of statements using this verb should be an agent or group, for example a teacher, an NPC in a simulation, a group of colleagues. This verb is intended to be used where one actor initiates and leads a conversation, rather than an equal discussion between two parties."
         },

       "inScheme": "http://registry.tincanapi.com",
       "type": "Verb"
    },
    {
       "id": "http://id.tincanapi.com/verb/tweeted",
       "prefLabel": {
          "en": "tweeted"
        },
       "definition": {
         "en": "Use this verb when an agent tweets on Twitter. It is open for use also for other short messages (microblogging services) based on the URI as the activityId. We expect activityId to be a URI to the tweet."
         },

       "inScheme": "http://registry.tincanapi.com",
       "type": "Verb"
    },
    {
       "id": "http://id.tincanapi.com/verb/unfocused",
       "prefLabel": {
          "en": "unfocused"
        },
       "definition": {
         "en": "Indicates that the user has lost focus of the target object. For example, this could be used when the user clicks outside a given application, window or activity."
         },

       "inScheme": "http://registry.tincanapi.com",
       "type": "Verb"
    },
    {
       "id": "http://id.tincanapi.com/verb/unregistered",
       "prefLabel": {
          "en": "unregistered"
        },
       "definition": {
         "en": "Indicates the actor unregistered for a learning activity. This verb is used in combination with http://adlnet.gov/expapi/verbs/registered for the registering and unregistering of learners."
         },

       "inScheme": "http://registry.tincanapi.com",
       "type": "Verb"
    },
    {
       "id": "http://id.tincanapi.com/verb/viewed",
       "prefLabel": {
          "en": "viewed"
        },
       "definition": {
         "en": "Indicates that the actor has viewed the object."
         },

       "inScheme": "http://registry.tincanapi.com",
       "type": "Verb"
    },
    {
       "id": "http://id.tincanapi.com/verb/voted-down",
       "prefLabel": {
          "en": "voted down"
        },
       "definition": {
         "en": "Indicates that the actor has voted down for a specific object. This is analogous to giving a thumbs down."
         },
       "exactMatch": ["http://curatr3.com/define/verb/voted-down"],
       "inScheme": "http://registry.tincanapi.com",
       "type": "Verb"
    },
    {
       "id": "http://id.tincanapi.com/verb/voted-up",
       "prefLabel": {
          "en": "voted up"
        },
       "definition": {
         "en": "Indicates that the actor has voted up for a specific object. This is analogous to giving a thumbs up."
         },
       "exactMatch": ["http://curatr3.com/define/verb/voted-up"],
       "inScheme": "http://registry.tincanapi.com",
       "type": "Verb"
    },
    {
      "id": "http://id.tincanapi.com/activitytype/blog",
      "inScheme": "http://registry.tincanapi.com",
      "type": "ActivityType",
      "definition": {
        "en": "A regularly updated website or web page, typically one authored by an individual or small group, that is written in an informal or conversational style."
      },
      "prefLabel": {
        "en": "blog"
      }
    },
    {
        "id": "http://id.tincanapi.com/activitytype/book",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ActivityType",
        "definition": {
          "en": "A book, generally paper, but could also be an ebook. The Activity's ID will often include an ISBN though it is not required. The Definition can likely leverage the ISBN extension, http://id.tincanapi.com/extension/isbn, if known."
        },
        "prefLabel": {
          "en": "book"
        }
    },
    {
        "id": "http://id.tincanapi.com/activitytype/category",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ActivityType",
        "definition": {
          "en": "Activity generally used in the category Context Activities lists to mark a statement as being related to a particular subject area. Distinct from tag in that it is used in conjunction with Subcategory to imply a hierarchy of categorization."
        },
        "prefLabel": {
          "en": "category"
        }
    },

    {
        "id": "http://id.tincanapi.com/activitytype/chapter",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ActivityType",
        "definition": {
          "en": "A chapter of a book or e-book."
        },
        "prefLabel": {
          "en": "chapter"
        }
    },

    {
        "id": "http://id.tincanapi.com/activitytype/chat-channel",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ActivityType",
        "definition": {
          "en": "A channel, room or conversation within an instant chat application such as Slack."
        },
        "prefLabel": {
          "en": "chat channel"
        }
    },

    {
        "id": "http://id.tincanapi.com/activitytype/chat-message",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ActivityType",
        "definition": {
          "en": "A message sent or received within the context of an instant chat platform such as Slack. The id of this activity should uniquely identify the particular chat message."
        },
        "prefLabel": {
          "en": "chat message"
        }
    },

    {
        "id": "http://id.tincanapi.com/activitytype/checklist",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ActivityType",
        "definition": {
          "en": "A list of tasks to be completed, names to be consulted, conditions to be verified and similar."
        },
        "prefLabel": {
          "en": "checklist"
        }
    },

    {
        "id": "http://id.tincanapi.com/activitytype/checklist-item",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ActivityType",
        "definition": {
          "en": "An individual item contained in a checklist."
        },
        "prefLabel": {
          "en": "checklist item"
        }
    },

    {
        "id": "http://id.tincanapi.com/activitytype/code-commit",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ActivityType",
        "definition": {
          "en": "A commit to a code repository e.g. Github."
        },
        "prefLabel": {
          "en": "code commit"
        }
    },

    {
        "id": "http://id.tincanapi.com/activitytype/collection-simple",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ActivityType",
        "definition": {
          "en": "It is a collection of items of the same activity type, for example, a collection of games. The collection can be generic, that is, the activity type of the items can be specified using the extension 'collection type', but it is optional."
        },
        "prefLabel": {
          "en": "simple collection"
        }
    },

    {
        "id": "http://id.tincanapi.com/activitytype/community-site",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ActivityType",
        "definition": {
          "en": "A space on a social platform (or other platform with social features) for a community to communicate, share and collaborate. For example a Google Plus Community, a Facebook Group, a Jive Space or a Pathgather Gathering."
        },
        "prefLabel": {
          "en": "community site"
        }
    },

    {
        "id": "http://id.tincanapi.com/activitytype/conference",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ActivityType",
        "definition": {
          "en": "A formal meeting which includes presentations or discussions."
        },
        "prefLabel": {
          "en": "conference"
        }
    },

    {
        "id": "http://id.tincanapi.com/activitytype/conference-session",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ActivityType",
        "definition": {
          "en": "A single presentation, discussion, gathering, or panel within a conference."
        },
        "prefLabel": {
          "en": "conference session"
        }
    },

    {
        "id": "http://id.tincanapi.com/activitytype/conference-track",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ActivityType",
        "definition": {
          "en": "A specific field of study within a conference."
        },
        "prefLabel": {
          "en": "conference track"
        }
    },

    {
        "id": "http://id.tincanapi.com/activitytype/discussion",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ActivityType",
        "definition": {
          "en": "Represents an ongoing conversation between persons, such as an email thread or a forum topic."
        },
        "prefLabel": {
          "en": "discussion"
        }
    },

    {
        "id": "http://id.tincanapi.com/activitytype/document",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ActivityType",
        "definition": {
          "en": "An electronic document of the type produced by office productivity software such as a word processing document, spreadsheet, slides etc."
        },
        "prefLabel": {
          "en": "document"
        }
    },

    {
        "id": "http://id.tincanapi.com/activitytype/doubt",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ActivityType",
        "definition": {
          "en": "Refers to something that the actor needs to cast light on, something that can be answered or solved."
        },
        "prefLabel": {
          "en": "doubt"
        }
    },

    {
        "id": "http://id.tincanapi.com/activitytype/email",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ActivityType",
        "definition": {
          "en": "Electronic message sent over a computer network from a sender to one or many recipients."
        },
        "prefLabel": {
          "en": "email"
        }
    },

    {
        "id": "http://id.tincanapi.com/activitytype/essay",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ActivityType",
        "definition": {
          "en": "A short literary composition on a single subject, usually presenting the personal view of the author."
        },
        "prefLabel": {
          "en": "essay"
        }
    },

    {
        "id": "http://id.tincanapi.com/activitytype/forum-reply",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ActivityType",
        "definition": {
          "en": "Any post in a forum or discussion board thread that isn't the first."
        },
        "prefLabel": {
          "en": "forum reply"
        }
    },

    {
        "id": "http://id.tincanapi.com/activitytype/forum-topic",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ActivityType",
        "definition": {
          "en": "The first post in a thread on a forum or discussion board."
        },
        "prefLabel": {
          "en": "forum topic"
        }
    },
    {
        "id": "http://id.tincanapi.com/activitytype/goal",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ActivityType",
        "definition": {
          "en": "A goal is something that the actor wants to achieve, the purpose of doing a task or group of tasks. It can have subtasks and subgoals."
        },
        "prefLabel": {
          "en": "goal"
        }
    },

    {
        "id": "http://id.tincanapi.com/activitytype/legacy-learning-standard",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ActivityType",
        "definition": {
          "en": "Activity representing a statement generated by a course originally implemented in a legacy learning standard such as SCORM 1.2, 2004, or AICC."
        },
        "prefLabel": {
          "en": "legacy learning standard"
        }
    },
    {
        "id": "http://id.tincanapi.com/activitytype/lms",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ActivityType",
        "definition": {
          "en": "Learning Management System. At it's core, a platform used to launch and track learning experiences. Many LMS also have a number of other additional features."
        },
        "prefLabel": {
          "en": "lms"
        }
    },

    {
        "id": "http://id.tincanapi.com/activitytype/paragraph",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ActivityType",
        "definition": {
          "en": "A distinct division of written or printed matter that begins on a new, usually indented line, consists of one or more sentences, and typically deals with a single thought or topic or quotes one speaker's continuous words."
        },
        "prefLabel": {
          "en": "paragraph"
        }
    },
    {
        "id": "http://id.tincanapi.com/activitytype/playlist",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ActivityType",
        "definition": {
          "en": "A collection of resources or experiences grouped together as recommended resources by an individual. Generally used for informally curated resources rather than official collections such as an LMS course."
        },
        "prefLabel": {
          "en": "playlist"
        }
    },

    {
        "id": "http://id.tincanapi.com/activitytype/project",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ActivityType",
        "definition": {
          "en": "A project is a specific plan or set of tasks with a common goal. It can have subtasks and subgoals, resources, etc."
        },
        "prefLabel": {
          "en": "project"
        }
    },

    {
        "id": "http://id.tincanapi.com/activitytype/project-site",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ActivityType",
        "definition": {
          "en": "A site, perhaps within a project management tool or social platform, used to manage a particular project."
        },
        "prefLabel": {
          "en": "project site"
        }
    },
    {
        "id": "http://id.tincanapi.com/activitytype/research-report",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ActivityType",
        "definition": {
          "en": "A research report from a government organization or other authoritative body giving information or proposals on an issue."
        },
        "prefLabel": {
          "en": "research report"
        }
    },

    {
        "id": "http://id.tincanapi.com/activitytype/resource",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ActivityType",
        "definition": {
          "en": "A resource is a generic item that the actor may use for something. It could be a video, a text article, a device, etc. However, it is recommended to use a more specific activity type like those mentioned."
        },
        "prefLabel": {
          "en": "resource"
        }
    },
    {
        "id": "http://id.tincanapi.com/activitytype/reward",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ActivityType",
        "definition": {
          "en": "Refers to a compensation that the actor wants to get for achieving something."
        },
        "prefLabel": {
          "en": "reward"
        }
    },

    {
        "id": "http://id.tincanapi.com/activitytype/sales-opportunity",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ActivityType",
        "definition": {
          "en": "Represents a sales opportunity, such as one might create in a CRM tool."
        },
        "prefLabel": {
          "en": "sales opportunity"
        }
    },
    {
        "id": "http://id.tincanapi.com/activitytype/scenario",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ActivityType",
        "definition": {
          "en": "delivering the content embedded within a story or scenario rather than just pushing the content straight out. Usually a story or a situation is presented to ask for learner's action, feedback or branching follow. In this way learners see how the learning is applied to job environments or real world problems."
        },
        "prefLabel": {
          "en": "scenario"
        }
    },

    {
        "id": "http://id.tincanapi.com/activitytype/school-assignment",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ActivityType",
        "definition": {
          "en": "A school task performed by a student to satisfy the teacher. Examples are assessments, assigned reading, practice exercises, watch video, etc."
        },
        "prefLabel": {
          "en": "school assignment"
        }
    },
    {
        "id": "http://id.tincanapi.com/activitytype/section",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ActivityType",
        "definition": {
          "en": "A section of an application or platform. For sales performance app might be divided into client demo, learning materials and reference documents sections."
        },
        "prefLabel": {
          "en": "section"
        }
    },

    {
        "id": "http://id.tincanapi.com/activitytype/security-role",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ActivityType",
        "definition": {
          "en": "A feature that enables system administrators to restrict system access and manage access on a per-user or per-group basis."
        },
        "prefLabel": {
          "en": "security role"
        }
    },
    {
        "id": "http://id.tincanapi.com/activitytype/slide",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ActivityType",
        "definition": {
          "en": "Slides are defined as a single page of a presentation or e-learning lesson."
        },
        "prefLabel": {
          "en": "slide"
        }
    },

    {
        "id": "http://id.tincanapi.com/activitytype/slide-deck",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ActivityType",
        "definition": {
          "en": "A deck of slides generally used for a presentation."
        },
        "prefLabel": {
          "en": "slide deck"
        }
    },
    {
        "id": "http://id.tincanapi.com/activitytype/solution",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ActivityType",
        "definition": {
          "en": "Refers to the answer for a doubt that provides a solution. If the answer is not a solution, it should be coded as answer, or if it is just a comment, as comment."
        },
        "prefLabel": {
          "en": "solution"
        }
    },

    {
        "id": "http://id.tincanapi.com/activitytype/source",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ActivityType",
        "definition": {
          "en": "Used with activities within the Context Activities category property of a Statement. Indicates the authoring tool, template or framework used to create the activity provider. This may help reporting tools to recognise that that data has come from a particular origin and handle the data correctly based on that information."
        },
        "prefLabel": {
          "en": "source"
        }
    },
    {
        "id": "http://id.tincanapi.com/activitytype/status-update",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ActivityType",
        "definition": {
          "en": "A status update e.g. on a social platform."
        },
        "prefLabel": {
          "en": "status update"
        }
    },

    {
        "id": "http://id.tincanapi.com/activitytype/step",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ActivityType",
        "definition": {
          "en": "A step is one of several actions that the actor has to do to achieve something, for instance, a goal or the completion of a task. For instance, a method, strategy or task could be divided into smaller steps."
        },
        "prefLabel": {
          "en": "step"
        }
    },
    {
        "id": "http://id.tincanapi.com/activitytype/strategy",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ActivityType",
        "definition": {
          "en": "A strategy is a plan or method for achieving any specific goal, and can be formed by a group of steps."
        },
        "prefLabel": {
          "en": "strategy"
        }
    },
    {
        "id": "http://id.tincanapi.com/activitytype/strategy-embedded",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ActivityType",
        "definition": {
          "en": "Refers to a functionality embedded in the software system to facilitate the implementation of a strategy."
        },
        "prefLabel": {
          "en": "embedded strategy"
        }
    },

    {
        "id": "http://id.tincanapi.com/activitytype/subcategory",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ActivityType",
        "definition": {
          "en": "Activity generally used in the category Context Activities lists to mark a statement as being related to a particular subject area. Distinct from tag in that it is used in conjunction with Category to imply a hierarchy of categorization."
        },
        "prefLabel": {
          "en": "subcategory"
        }
    },
    {
        "id": "http://id.tincanapi.com/activitytype/suggestion",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ActivityType",
        "definition": {
          "en": "A posted suggestion or idea. Typically these are things that can be discussed and/or voted on."
        },
        "prefLabel": {
          "en": "suggestion"
        }
    },
    {
        "id": "http://id.tincanapi.com/activitytype/test-data-batch",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ActivityType",
        "definition": {
          "en": "A test data batch is an Activity that is used in the Context Activities category property of a Statement to indicate that the Statement is part of a particular collection of test data. The Id of this Activity represents a single collection of test data e.g. the data generated for a particular test or by a particular tool."
        },
        "prefLabel": {
          "en": "test data batch"
        }
    },

    {
        "id": "http://id.tincanapi.com/activitytype/tag",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ActivityType",
        "definition": {
          "en": "Activity generally used in the other or grouping Context Activities lists to mark a statement as being related to a particular subject area. Implemented as a one word identifier used for search filtering or tag cloud generation."
        },
        "prefLabel": {
          "en": "tag"
        }
    },
    {
        "id": "http://id.tincanapi.com/activitytype/tutor-session",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ActivityType",
        "definition": {
          "en": "This represents a tutoring session."
        },
        "prefLabel": {
          "en": "tutor session"
        }
    },
    {
        "id": "http://id.tincanapi.com/activitytype/tweet",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ActivityType",
        "definition": {
          "en": "A short message sent on Twitter. Used with the 'tweeted' verb."
        },
        "prefLabel": {
          "en": "tweet"
        }
    },

    {
        "id": "http://id.tincanapi.com/activitytype/unit-test",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ActivityType",
        "definition": {
          "en": "A unit test in a test suite that is part of a programming project."
        },
        "prefLabel": {
          "en": "unit test"
        }
    },
    {
        "id": "http://id.tincanapi.com/activitytype/unit-test-suite",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ActivityType",
        "definition": {
          "en": "Suite of unit tests used by a programming project."
        },
        "prefLabel": {
          "en": "unit test suite"
        }
    },
    {
        "id": "http://id.tincanapi.com/activitytype/user-profile",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ActivityType",
        "definition": {
          "en": "A page displaying information about a user."
        },
        "prefLabel": {
          "en": "user profile"
        }
    },

    {
        "id": "http://id.tincanapi.com/activitytype/vocabulary-word",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ActivityType",
        "definition": {
          "en": "Refers to a word that the learner defines or translates. The vocabulary word can be part of a collection. that is part of a vocabulary collection. An actor can use more than one vocabulary collection, for instance, for several languages or several topics. Besides the “name” (the word) and a “description” (meaning or translation), we recommend the use of moreInfo to link to a definition in an online dictionary. As an option, you can use the extension tags to classify the words."
        },
        "prefLabel": {
          "en": "vocabulary word"
        }
    },
    {
        "id": "http://id.tincanapi.com/activitytype/voicemail",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ActivityType",
        "definition": {
          "en": "A recorded audio message left for someone, generally via a phone or similar communication system."
        },
        "prefLabel": {
          "en": "voicemail"
        }
    },
    {
        "id": "http://id.tincanapi.com/activitytype/webinar",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ActivityType",
        "definition": {
          "en": "A seminar conducted over the Internet which may be live or recorded."
        },
        "prefLabel": {
          "en": "webinar"
        }
    },

    {
        "id": "http://risc-inc.com/annotator/activities/highlight",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ActivityType",
        "definition": {
          "en": "An annotation of the 'highlight' type. Highlights are used to mark strings of text in a document with a color. This activity type should only be used for highlighted text and not for highlighted images or other elements."
        },
        "prefLabel": {
          "en": "highlighted text annotation"
        }
    },
    {
        "id": "http://risc-inc.com/annotator/activities/note",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ActivityType",
        "definition": {
          "en": "Indicates an annotation made to a document of the 'note' form. This is a string of text appended to the document at a specified location. Note annotations can be added anywhere on the page. This activity type should not be used for other types of note that are not annotations to a document."
        },
        "prefLabel": {
          "en": "note annotation"
        }
    },
    {
      "id": "http://risc-inc.com/annotator/activities/underline",
      "inScheme": "http://registry.tincanapi.com",
      "type": "ActivityType",
      "exactMatch": [ "http://risc-inc.com/annotator/activities/underline" ],
      "definition": {
        "en": "An annotation of the 'underline' type. Underlines are used to mark strings of text in a document with a line underneath the text. This activity type should only be used for underlined text and not for images or other elements."
      },
      "prefLabel": {
        "en": "underline annotation"
      }
    },

    {
        "id": "http://www.risc-inc.com/annotator/activities/freetext",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ActivityType",
        "definition": {
          "en": "Indicates an annotation made to a document of the 'freetext' form. This is a string of text written direction onto the document at a specified location. Freetext annotations can be added anywhere on the page. Unlike note annotations, they have no border or background."
        },
        "prefLabel": {
          "en": "freetext annotation"
        }
    },
    {
        "id": "http://www.tincanapi.co.uk/activitytypes/grade_classification",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ActivityType",
        "definition": {
          "en": "Represents a grade given or received within a particular context, for example ‘distinction’ within XYZ music test or ‘A’ for ABC qualification."
        },
        "prefLabel": {
          "en": "grade classification"
        }
    },
    {
        "id": "https://www.opigno.org/en/tincan_registry/activity_type/certificate",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ActivityType",
        "definition": {
          "en": "A document attesting to the fact that a person has completed an educational course."
        },
        "prefLabel": {
          "en": "certificate"
        }
    },

    {
        "id": "http://id.tincanapi.com/extension/apm",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ResultExtension",
        "definition": {
          "en": "A result extension used in the Tetris prototype at http://tincanapi.com/prototypes. Actions per minute (APM) is a commonly reported on statistic in gaming as one mechanism for measuring the player's skill. See http://en.wikipedia.org/wiki/Actions_per_minute."
        },
        "prefLabel": {
          "en": "actionsper minute"
        }
    },
    {
        "id": "http://id.tincanapi.com/extension/assessment-type",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ContextExtension",
        "definition": {
          "en": "A value representing the type of assessment like formative, summative, pretest, posttest, etc."
        },
        "prefLabel": {
          "en": "assessment type"
        }
    },
    {
        "id": "http://id.tincanapi.com/extension/attempt-id",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ContextExtension",
        "definition": {
          "en": "Used to differentiate between attempts within a given registration. This extension is especially useful for games, for example in the Tetris prototype at http://tincanapi.com/prototypes this extension is used as an identifier for each new game of Tetris."
        },
        "prefLabel": {
          "en": "attempt ID"
        }
    },
    {
        "id": "http://id.tincanapi.com/extension/browser-info",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ContextExtension",
        "definition": {
          "en": "Value is an object containing key/value pairs describing various elements of a web browser. Same as user-agent."
        },
        "exactMatch": ["https://w3id.org/xapi/video/extensions/user-agent"],
        "prefLabel": {
          "en": "browser information"
        }
    },
    {
        "id": "http://id.tincanapi.com/extension/cmi-interaction-weighting",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ContextExtension",
        "definition": {
          "en": "A number that indicates the importance of this interaction relative to other interactions. Corresponds to cmi.interactions[x].weighting"
        },
        "prefLabel": {
          "en": "cmi interaction weighting"
        }
    },
    {
        "id": "http://id.tincanapi.com/extension/collection-type",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ContextExtension",
        "definition": {
          "en": "Represents the activity type of the objects of a simple collection."
        },
        "prefLabel": {
          "en": "collection type"
        }
    },
    {
        "id": "http://id.tincanapi.com/extension/color",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ContextExtension",
        "definition": {
          "en": "A value representing a specific color as defined via a provided color model. Because the representation of a color depends on the model in which it was defined the value used should be an object that specifies two (at least) properties, specifically the 'model' used as well as the 'value' for the specific color within the color space."
        },
        "prefLabel": {
          "en": "color"
        }
    },
    {
        "id": "http://id.tincanapi.com/extension/condition-type",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ContextExtension",
        "definition": {
          "en": "Represents the type of condition that the actor needs to achieve to do what the verb in the statement expresses."
        },
        "prefLabel": {
          "en": "condition type"
        }
    },
    {
        "id": "http://id.tincanapi.com/extension/condition-value",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ContextExtension",
        "definition": {
          "en": "Represents the value (if necessary) to accomplish the condition. For instance, if the condition is a time limit, the condition value is the time expressed in the ISO8601 format, the same used in the result duration property."
        },
        "prefLabel": {
          "en": "condition value"
        }
    },
    {
        "id": "http://id.tincanapi.com/extension/data-uri",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ContextExtension",
        "definition": {
          "en": "Extension whose value is a string that follows the Data URI scheme as defined by RFC 2397."
        },
        "prefLabel": {
          "en": "data URI"
        }
    },
    {
        "id": "http://id.tincanapi.com/extension/date",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ContextExtension",
        "definition": {
          "en": "Value representing a calendar date, such as 2013-08-27. Value should be a string formatted as an ISO8601 date to match the rest of the specification values."
        },
        "prefLabel": {
          "en": "date"
        }
    },
    {
        "id": "http://id.tincanapi.com/extension/datetime",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ContextExtension",
        "definition": {
          "en": "Value representing a calendar date and time, such as 2013-08-27 09:26:45.001. Value should be a string formatted as an ISO8601 date and time to match the rest of the specification values."
        },
        "prefLabel": {
          "en": "datetime"
        }
    },
    {
        "id": "http://id.tincanapi.com/extension/drop-down",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ContextExtension",
        "definition": {
          "en": "Contains an interaction component for a non standard question type. Non-standard question type used in e-learning: any number of drop-down on a graphic. Each drop-down is a subquestion. "
        },
        "prefLabel": {
          "en": "drop-down"
        }
    },
    {
        "id": "http://id.tincanapi.com/extension/duration",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ResultExtension",
        "definition": {
          "en": "Value representing a length of time, for example the length of a video. Value should be either a string formatted as an ISO8601 duration to match the Result.duration property or a float that uses the same units as expected with correlating information (other extensions). This extension will generally be used within an Activity Definition to indicate a length of an Activity as compared to the Result.duration which captures the length of time for a specific event. For example a video may be 5 minutes long (this Extension), but an actor may have only watched 30 seconds of it (the Result.duration)."
        },
        "prefLabel": {
          "en": "duration"
        }
    },
    {
        "id": "http://id.tincanapi.com/extension/ending-point",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ResultExtension",
        "definition": {
          "en": "The final point at which an actor ceases an activity. For example stopping the playing of a video at a specific position either manually or automatically. Goes along with Starting Point. Can be used with types of media and/or activities other than video."
        },
        "prefLabel": {
          "en": "ending point"
        }
    },
    {
        "id": "http://id.tincanapi.com/extension/ending-position",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ContextExtension",
        "definition": {
          "en": "Final position within an ordinal set of numbers. Can also be thought of as a rank. For example the ending position of a car or runner in a race. To be used with Starting Position."
        },
        "prefLabel": {
          "en": "ending position"
        }
    },
    {
        "id": "http://id.tincanapi.com/extension/feedback",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ContextExtension",
        "definition": {
          "en": "A value representing a piece of feedback relating to a statement. The feedback should be a string."
        },
        "prefLabel": {
          "en": "feedback"
        }
    },
    {
        "id": "http://id.tincanapi.com/extension/irl",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ContextExtension",
        "definition": {
          "en": "Value should be a fully qualified IRL that is resolvable. In so far as the IRL space contains all possible URLs this is provided in place of a more specific URL to match the expectation of the specification for using IRI/IRL."
        },
        "prefLabel": {
          "en": "irl"
        }
    },
    {
        "id": "http://id.tincanapi.com/extension/geojson",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ContextExtension",
        "definition": {
          "en": "Value should be a GeoJSON object as defined by the GeoJSON specification. GeoJSON can be used to represent GPS coordinates, as well as other geometrical entities. See http://www.geojson.org/ for more information."
        },
        "prefLabel": {
          "en": "geo JSON"
        }
    },
    {
        "id": "http://id.tincanapi.com/extension/invitee",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ContextExtension",
        "definition": {
          "en": "To be used in the context. Contains a single object representing the actor which is being invited to the experience. For example the group on a social learning site. When using this extension, it is recommended to use the same actor objects that are used in other statements."
        },
        "prefLabel": {
          "en": "invitee"
        }
    },
    {
        "id": "http://id.tincanapi.com/extension/ip-address",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ContextExtension",
        "definition": {
          "en": "Value is a string representing an Internet Protocol address (IP address) in either IPv4 or IPv6 format. An example usage may be to help identify the client's real address location on internet as a Context extension. Another example may be to include relevant information about the http://activitystrea.ms/schema/1.0/page Activity type. IPv4 Address A string in decimal-dot notation, consisting of four decimal integers in the inclusive range 0-255, separated by dots (e.g. 192.168.0.1)."
        },
        "prefLabel": {
          "en": "ip address"
        }
    },
    {
        "id": "http://id.tincanapi.com/extension/isbn",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ContextExtension",
        "definition": {
          "en": "Value should be either a 10 digit ISBN or 13 digit ISBN string. Either value is acceptable as implementing systems can easily distinguish the two based on the length of the value. For more information see ISO 2108."
        },
        "prefLabel": {
          "en": "isbn"
        }
    },
    {
        "id": "http://id.tincanapi.com/extension/jws-certificate-location",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ContextExtension",
        "definition": {
          "en": "Context extension containing the URL of a public certificate that can be used to verify the signature of the statement."
        },
        "prefLabel": {
          "en": "jws certificate location"
        }
    },
    {
        "id": "http://id.tincanapi.com/extension/latitude",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ContextExtension",
        "definition": {
          "en": "A geographic coordinate that specifies the north-south position of a point on the Earth's surface."
        },
        "prefLabel": {
          "en": "latitude"
        }
    },
    {
        "id": "http://id.tincanapi.com/extension/location",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ContextExtension",
        "definition": {
          "en": "A non-specific (as in format) string value representing a location in which an activity took place. May contain an address, but for formal addresses a more specific format should be used with accompanying Extension."
        },
        "prefLabel": {
          "en": "location"
        }
    },
    {
        "id": "http://id.tincanapi.com/extension/longitude",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ContextExtension",
        "definition": {
          "en": "A geographic coordinate that specifies the east-west position of a point on the Earth's surface."
        },
        "prefLabel": {
          "en": "longitude"
        }
    },
    {
        "id": "http://id.tincanapi.com/extension/measurement",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ContextExtension",
        "definition": {
          "en": "Value that represents a measured unit or physical quantity such as a distance or weight. For interoperability the value should be a string that follows the SI (International System of Units) recommendations for formatting and may include any value that can be described by its units. For additional information see the ISO 80000 standard."
        },
        "prefLabel": {
          "en": "measurement"
        }
    },
    {
        "id": "http://id.tincanapi.com/extension/monetary-value",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ContextExtension",
        "definition": {
          "en": "A value representing the currency and amount of money. The value is an object with two properties, 'amount' which is a float and 'currency' which should hold an ISO 4217 code or number code."
        },
        "prefLabel": {
          "en": "monetary value"
        }
    },
    {
        "id": "http://id.tincanapi.com/extension/observer",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ContextExtension",
        "definition": {
          "en": "Context extension containing an Agent or Group object representing an agent or group who observed the experience."
        },
        "prefLabel": {
          "en": "observer"
        }
    },
    {
        "id": "http://id.tincanapi.com/extension/planned-duration",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ContextExtension",
        "definition": {
          "en": "Context extension containing an ISO 8601 duration representing the planned duration of a scheduled or planned event."
        },
        "prefLabel": {
          "en": "planned duration"
        }
    },
    {
        "id": "http://id.tincanapi.com/extension/planned-start-time",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ContextExtension",
        "definition": {
          "en": "Context extension containing an ISO 8601 timestamp representing the planned start time of a scheduled or planned event."
        },
        "prefLabel": {
          "en": "planned start time"
        }
    },
    {
        "id": "http://id.tincanapi.com/extension/position",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ContextExtension",
        "definition": {
          "en": "Represents the position of the object in a group or collection of elements. It is needed when the group of elements should be in order."
        },
        "prefLabel": {
          "en": "position"
        }
    },
    {
        "id": "http://id.tincanapi.com/extension/powered-by",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ContextExtension",
        "definition": {
          "en": "Information about what software is used to run a system."
        },
        "prefLabel": {
          "en": "powered by"
        }
    },
    {
        "id": "http://id.tincanapi.com/extension/private-area",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ContextExtension",
        "definition": {
          "en": "An area, for instance within a Learning Management System (LMS), in which students and teachers can share pedagogical objects and interact privately."
        },
        "prefLabel": {
          "en": "private area"
        }
    },
    {
        "id": "http://id.tincanapi.com/extension/published",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ContextExtension",
        "definition": {
          "en": "Activity definition extension. The date and time at which the activity was published. Corresponds to the Activity Streams 1.0 'published' property."
        },
        "prefLabel": {
          "en": "published"
        }
    },
    {
        "id": "http://id.tincanapi.com/extension/purpose",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ContextExtension",
        "definition": {
          "en": "Represents the purpose of the object or result, as a way of classification."
        },
        "prefLabel": {
          "en": "purpose"
        }
    },
    {
        "id": "http://id.tincanapi.com/extension/quality-rating",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ResultExtension",
        "definition": {
          "en": "Value is an object that is similar to the Result's 'score' property in that it should include a 'raw' value as well as 'min' and 'max' range indicators. So that a phrase such as '4 out of 5 stars' can be indicated such as: { raw: 4, min: 1, max: 5 }."
        },
        "prefLabel": {
          "en": "quality-rating"
        }
    },
    {
        "id": "http://id.tincanapi.com/extension/referrer",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ContextExtension",
        "definition": {
          "en": "To be used in the context. Contains a single activity object representing the activity which referred the learner to the experience. For example the page of an e-learning course that sent the learner to their current location. When using this extension, it is recommended to also include the activity object as one of the 'other' contextActivities of the statement as well for tools that don't recognize this extension."
        },
        "prefLabel": {
          "en": "referrer"
        }
    },
    {
        "id": "http://id.tincanapi.com/extension/reflection",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ContextExtension",
        "definition": {
          "en": "Represents a reflection of the actor about the object."
        },
        "prefLabel": {
          "en": "reflection"
        }
    },
    {
        "id": "http://id.tincanapi.com/extension/severity",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ContextExtension",
        "definition": {
          "en": "Indicates the associated level of an event. For example it could be used to indicate the level of an injury or incident."
        },
        "prefLabel": {
          "en": "severity"
        }
    },
    {
        "id": "http://id.tincanapi.com/extension/share-medium",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ContextExtension",
        "definition": {
          "en": "Context extension used with the verb http://adlnet.gov/expapi/verbs/shared. Indicates the medium that the object has been shared over. Contains a single word lowercase string representing the share medium e.g. email, sms, twitter, facebook."
        },
        "prefLabel": {
          "en": "share-medium"
        }
    },
    {
        "id": "http://id.tincanapi.com/extension/starting-point",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ContextExtension",
        "definition": {
          "en": "The initial point from which an agent begins an activity. For example starting to play a video from a specific position in the video. Goes along with 'Ending Point.' Can be used with types of media and/or activities other than video."
        },
        "prefLabel": {
          "en": "starting-point"
        }
    },
    {
        "id": "http://id.tincanapi.com/extension/starting-position",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ContextExtension",
        "definition": {
          "en": "Initial position within an ordinal set of numbers. Can also be thought of as a rank. For example the starting position of a car or runner in a race. To be used with 'Ending Position.'"
        },
        "prefLabel": {
          "en": "starting-position"
        }
    },
    {
        "id": "http://id.tincanapi.com/extension/tags",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ContextExtension",
        "definition": {
          "en": "A list of arbitrary tags to associate with a statement. Value of the extension should be an array with each tag being a string value as an element of the array."
        },
        "prefLabel": {
          "en": "tags"
        }
    },
    {
        "id": "http://id.tincanapi.com/extension/target",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ContextExtension",
        "definition": {
          "en": "Based on the Activity Streams target property. Contains the target of the statement e.g. Brian Shared 'statements deep dive' with Andrew - Andrew is the target. The value of this extension can be anything that would be a legal value of the statement's object property."
        },
        "prefLabel": {
          "en": "target"
        }
    },
    {
        "id": "http://id.tincanapi.com/extension/tetris-lines",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ResuExtension",
        "definition": {
          "en": "The number of lines achieved in a game of Tetris or another game of a similar type. This extension is used by the Tetris game prototype at http://tincanapi.com/prototypes."
        },
        "prefLabel": {
          "en": "tetris-lines"
        }
    },
    {
        "id": "http://id.tincanapi.com/extension/time",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ResultExtension",
        "definition": {
          "en": "Value representing a moment in time but not specific to a date, such as 12:34:56.789. Value should be a string formatted as an ISO8601 time to match the rest of the specification values."
        },
        "prefLabel": {
          "en": "time"
        }
    },
    {
        "id": "http://id.tincanapi.com/extension/topic",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ContextExtension",
        "definition": {
          "en": "A value that contains a topic for a statement."
        },
        "prefLabel": {
          "en": "topic"
        }
    },
    {
        "id": "http://id.tincanapi.com/extension/training-provider",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ContextExtension",
        "definition": {
          "en": "An agent or group representing the company or organization that offers a training session."
        },
        "prefLabel": {
          "en": "training-provider"
        }
    },
    {
        "id": "http://id.tincanapi.com/extension/tweet",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ContextExtension",
        "definition": {
          "en": "An ID for a tweet, such as 373445672076197889. It is advised to also supply the author of the tweet's handle and the text of the tweet as values with this extension."
        },
        "prefLabel": {
          "en": "tweet"
        }
    },
    {
        "id": "http://id.tincanapi.com/extension/updated",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ContextExtension",
        "definition": {
          "en": "The date and time at which a previously published activity has been modified. Corresponds to the Activity Streams 1.0 'updated' property."
        },
        "prefLabel": {
          "en": "updated"
        }
    },
    {
        "id": "http://id.tincanapi.com/extension/valid-until",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ResultExtension",
        "definition": {
          "en": "An extension on the Result object indicating for how long the completion of this training is considered valid, before the actor needs to re-certify. The type should be an ISO8601 timestamp."
        },
        "prefLabel": {
          "en": "valid-until"
        }
    },

    {
        "id": "http://www.tincanapi.co.uk/extensions/result/classification",
        "inScheme": "http://registry.tincanapi.com",
        "type": "ResultExtension",
        "definition": {
          "en": "A result extension used to store the grade awarded as a result of the experience. The value of this extension is an activity object representing the grade earned. This activity object should have an activity type of http://www.tincanapi.co.uk/activitytypes/grade_classification. The name of the activity should contain the value of the grade (e.g. “A”). An activity object is used rather than a single letter string as grade letters in different contexts, for example a grade A for a nationally recognized qualification has very different meaning to an A awarded by a teacher to a small child for a drawing of a cat. The activity used should represent the grade within the context it is awarded."
        },
        "prefLabel": {
          "en": "classification"
        }
    },
    {
        "id": "http://id.tincanapi.com/attachment/certificate-of-completion",
        "inScheme": "http://registry.tincanapi.com",
        "type": "AttachmentUsageType",
        "definition": {
          "en": "Certificate provided upon completion of an exercise, perhaps as part of a formal learning activity."
        },
        "prefLabel": {
          "en": "certificate of completion"
        }
    },
    {
        "id": "http://id.tincanapi.com/attachment/contract",
        "inScheme": "http://registry.tincanapi.com",
        "type": "AttachmentUsageType",
        "definition": {
          "en": "A contract intended to be legally binding between two parties. May be part of a sales process, hiring process, real estate transaction, etc."
        },
        "prefLabel": {
          "en": "contract"
        }
    },
    {
        "id": "http://id.tincanapi.com/attachment/supporting_media",
        "inScheme": "http://registry.tincanapi.com",
        "type": "AttachmentUsageType",
        "definition": {
          "en": "A media file that supports the experience. For example a video that shows the experience taking place."
        },
        "prefLabel": {
          "en": "supporting media"
        }
    }
  ]
},

{
  "@context": "https://w3id.org/xapi/profiles/context",
  "id": "https://w3id.org/xapi/video",
  "type": "Profile",
  "conformsTo": "https://w3id.org/xapi/profiles#1.0",
  "prefLabel": {
    "en": "Video Profile"
  },
  "definition": {
    "en": "The video profile of the xAPI was created to identify and standardize the common types of interactions that can be tracked in any video player."
  },
  "seeAlso": "https://github.com/liveaspankaj/xapi-video-cop",
  "author": {
    "type": "Organization",
    "name": "Advanced Distributed Learning(ADL) Initiative"
  },
  "versions": [
    {
      "id": "https://w3id.org/xapi/video/v1.1.0",
      "generatedAtTime": "2017-06-29T10:45:00Z",
      "wasRevisionOf": ["https://w3id.org/xapi/video/v1"]
      }],
  "concepts": [
    {
      "id": "https://w3id.org/xapi/video/verbs/paused",
      "inScheme": "https://w3id.org/xapi/video/v1.1.0",
      "type": "Verb",
      "broadMatch": [
        "http://id.tincanapi.com/verb/paused"
       ],
      "definition": {
        "en": "Indicates the actor paused the video being played at a specific point."
      },
      "prefLabel": {
        "en": "paused"
      }
    },
    {
      "id": "https://w3id.org/xapi/video/verbs/played",
      "inScheme": "https://w3id.org/xapi/video/v1.1.0",
      "type": "Verb",
      "exactMatch": ["http://activitystrea.ms/schema/1.0/play"],
      "definition": {
        "en": "Indicates that the actor started experiencing the recorded media object."
      },
      "prefLabel": {
        "en": "played"
      }
    },
    {
      "id": "https://w3id.org/xapi/video/verbs/seeked",
      "inScheme": "https://w3id.org/xapi/video/v1.1.0",
      "type": "Verb",
      "definition": {
        "en": "Indicates the actor changed the progress towards a specific point."
      },
      "prefLabel": {
        "en": "seeked"
      }
    },
    {
      "id": "https://w3id.org/xapi/video/activity-type/video",
      "inScheme": "https://w3id.org/xapi/video/v1.1.0",
      "type": "ActivityType",
      "exactMatch": [ "http://activitystrea.ms/schema/1.0/video", "https://w3id.org/xapi/acrossx/activities/video" ],
      "definition": {
        "en": "A recording of both the visual and audible components made available on a display screen."
      },
      "prefLabel": {
        "en": "video"
      }
    },
    {
      "id": "https://w3id.org/xapi/video/extensions/cc-subtitle-enabled",
      "inScheme": "https://w3id.org/xapi/video/v1.1.0",
      "type": "ContextExtension",
      "definition": {
        "en": "Used to expresses whether subtitle or closed captioning is enabled."
      },
      "prefLabel": {
        "en": "cc-subtitle-enabled"
      },
      "inlineSchema": "{ \"type\": \"boolean\" }"
    },
    {
      "id": "https://w3id.org/xapi/video/extensions/cc-subtitle-lang",
      "inScheme": "https://w3id.org/xapi/video/v1.1.0",
      "type": "ContextExtension",
      "definition": {
        "en": "Used to express the language of subtitle or closed captioning."
      },
      "prefLabel": {
        "en": "cc-subtitle-lang"
      },
      "inlineSchema": "{ \"type\": \"string\" }"
    },
    {
      "id": "https://w3id.org/xapi/video/extensions/frame-rate",
      "inScheme": "https://w3id.org/xapi/video/v1.1.0",
      "type": "ContextExtension",
      "definition": {
        "en": "Used to express the frame rate or frames per second of a video (or average rate of frames per second in the case of variable frame-rate)."
      },
      "prefLabel": {
        "en": "frame-rate"
      },
      "inlineSchema": "{ \"type\": \"number\" }"
    },
    {
      "id": "https://w3id.org/xapi/video/extensions/full-screen",
      "inScheme": "https://w3id.org/xapi/video/v1.1.0",
      "type": "ContextExtension",
      "definition": {
        "en": "Used to expresses that the video is played in full screen mode."
      },
      "prefLabel": {
        "en": "full-screen"
      },
      "inlineSchema": "{ \"type\": \"boolean\" }"
    },
    {
      "id": "https://w3id.org/xapi/video/extensions/quality",
      "inScheme": "https://w3id.org/xapi/video/v1.1.0",
      "type": "ContextExtension",
      "definition": {
        "en": "Used to express the video resolution or quality. Integer Value (e.g., 360, 480, 720, 1080, etc.)."
      },
      "prefLabel": {
        "en": "quality"
      },
      "inlineSchema": "{ \"type\": \"number\" }"
    },
    {
      "id": "https://w3id.org/xapi/video/extensions/session-id",
      "inScheme": "https://w3id.org/xapi/video/v1.1.0",
      "exactMatch": [ "https://w3id.org/xapi/cmi5/context/extensions/sessionid" ],
      "type": "ContextExtension",
      "definition": {
        "en": "Used to provide the session identifier associated with the activity."
      },
      "prefLabel": {
        "en": "session-id"
      },
      "inlineSchema": "{ \"type\": \"string\", \"pattern\": \"^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[8-9a-bA-B][0-9a-fA-F]{3}-[0-9a-fA-F]{12}\" }"
    },
    {
      "id": "https://w3id.org/xapi/video/extensions/screen-size",
      "inScheme": "https://w3id.org/xapi/video/v1.1.0",
      "type": "ContextExtension",
      "definition": {
        "en": "Used to express the device playback screen size or the maximum available screensize for Video playback."
      },
      "prefLabel": {
        "en": "screen-size"
      },
      "inlineSchema": "{ \"type\": \"string\" }"
    },
    {
      "id": "https://w3id.org/xapi/video/extensions/speed",
      "inScheme": "https://w3id.org/xapi/video/v1.1.0",
      "type": "ContextExtension",
      "definition": {
        "en": "Used to express the play-back speed (e.g., 1x,2x,0,-1x,-2x)."
      },
      "prefLabel": {
        "en": "speed"
      },
      "inlineSchema": "{ \"type\": \"string\" }"
    },
    {
      "id": "https://w3id.org/xapi/video/extensions/track",
      "inScheme": "https://w3id.org/xapi/video/v1.1.0",
      "type": "ContextExtension",
      "definition": {
        "en": "Used to identify the name of the audio track in a media object."
      },
      "prefLabel": {
        "en": "track"
      },
      "inlineSchema": "{ \"type\": \"string\" }"
    },
    {
      "id": "https://w3id.org/xapi/video/extensions/user-agent",
      "inScheme": "https://w3id.org/xapi/video/v1.1.0",
      "type": "ContextExtension",
      "definition": {
        "en": "Used to identify the User Agent string of the browser, if the video is launched in browser."
      },
      "prefLabel": {
        "en": "user-agent"
      },
      "inlineSchema": "{ \"type\": \"string\" }"
    },
    {
      "id": "https://w3id.org/xapi/video/extensions/volume",
      "inScheme": "https://w3id.org/xapi/video/v1.1.0",
      "type": "ContextExtension",
      "definition": {
        "en": "Used to identify the loudness of sound specified for a media object."
      },
      "prefLabel": {
        "en": "volume"
      },
      "inlineSchema": "{ \"type\": \"number\" }"
    },
    {
      "id": "https://w3id.org/xapi/video/extensions/video-playback-size",
      "inScheme": "https://w3id.org/xapi/video/v1.1.0",
      "type": "ContextExtension",
      "definition": {
        "en": "Used to identify the size in Width x Height of the video as viewed by the user."
      },
      "prefLabel": {
        "en": "video-playback-size"
      },
      "inlineSchema": "{ \"type\": \"string\" }"
    },
    {
      "id": "https://w3id.org/xapi/video/extensions/played-segments",
      "inScheme": "https://w3id.org/xapi/video/v1.1.0",
      "type": "ResultExtension",
      "definition": {
        "en": "Played segments reveals potential heat map data for showing parts of the video the actor watched during current registration in chronological order (e.g., 0.000[.]12.000[,]14.000[.]21.000[,]18.000[.]30.000)."
      },
      "prefLabel": {
        "en": "played-segments"
      },
      "inlineSchema": "{ \"type\": \"string\" }"
    },
    {
      "id": "https://w3id.org/xapi/video/extensions/progress",
      "inScheme": "https://w3id.org/xapi/video/v1.1.0",
      "type": "ResultExtension",
      "definition": {
        "en": "Used to expresses the percentage of media consumed by the actor."
      },
      "prefLabel": {
        "en": "progress"
      },
      "inlineSchema": "{ \"type\": \"number\" }"
    },
    {
      "id": "https://w3id.org/xapi/video/extensions/time",
      "inScheme": "https://w3id.org/xapi/video/v1.1.0",
      "type": "ResultExtension",
      "definition": {
        "en": "Used to express the time into the video. (e.g., “00000.000” in seconds and milliseconds)."
      },
      "prefLabel": {
        "en": "time"
      },
      "inlineSchema": "{ \"type\": \"number\" }"
    },
    {
      "id": "https://w3id.org/xapi/video/extensions/time-from",
      "inScheme": "https://w3id.org/xapi/video/v1.1.0",
      "type": "ResultExtension",
      "definition": {
        "en": "Used to identify the point in time the actor changed from in a media object (eg: “200.000” in seconds and milliseconds)."
      },
      "prefLabel": {
        "en": "time-from"
      },
      "inlineSchema": "{ \"type\": \"number\" }"
    },
    {
      "id": "https://w3id.org/xapi/video/extensions/time-to",
      "inScheme": "https://w3id.org/xapi/video/v1.1.0",
      "type": "ResultExtension",
      "definition": {
        "en": "Used to identify the point in time the actor changed to in a media object (eg: “300.000” in seconds and milliseconds)."
      },
      "prefLabel": {
        "en": "time-to"
      },
      "inlineSchema": "{ \"type\": \"number\" }"
    }
  ],
  "templates": [
    {
      "id": "https://w3id.org/xapi/video/templates#generalrestrictions",
      "inScheme": "https://w3id.org/xapi/video/v1.1.0",
      "prefLabel": {
        "en": "General Restrictions"
      },
      "definition": {
        "en": "The general rules required for inclusion in all Video Profile Statements."
      },
      "rules": [
        {
          "location": "$.id",
          "presence": "included"
        },
        {
          "location": "$.timestamp",
          "presence": "included"
        },
        {
          "location": "$.context.extensions['https://w3id.org/xapi/video/extensions/session-id']",
          "presence": "included"
        }
      ]
    },
    {
      "id": "https://w3id.org/xapi/video/templates#started",
      "inScheme": "https://w3id.org/xapi/video/v1.1.0",
      "prefLabel": {
        "en": "Started"
      },
      "definition": {
        "en": "The statement template and rules associated with a video being initialized."
      },
      "verb": "http://adlnet.gov/expapi/verbs/initialized",
      "rules": [
        {
          "location": "$.context.extensions['https://w3id.org/xapi/video/extensions/volume']",
          "presence": "recommended"
        },
        {
          "location": "$.context.extensions['https://w3id.org/xapi/video/extensions/video-playback-size']",
          "presence": "recommended"
        },
        {
          "location": "$.context.extensions['https://w3id.org/xapi/video/extensions/user-agent']",
          "presence": "recommended"
        },
        {
          "location": "$.context.extensions['https://w3id.org/xapi/video/extensions/cc-enabled']",
          "presence": "recommended"
        },
        {
          "location": "$.context.extensions['https://w3id.org/xapi/video/extensions/cc-subtitle-lang']",
          "presence": "recommended"
        },
        {
          "location": "$.context.extensions['https://w3id.org/xapi/video/extensions/screen-size']",
          "presence": "recommended"
        },
        {
          "location": "$.context.extensions['https://w3id.org/xapi/video/extensions/speed']",
          "presence": "recommended"
        },
        {
          "location": "$.context.extensions['https://w3id.org/xapi/video/extensions/full-screen']",
          "presence": "recommended"
        }
      ]
    },
    {
      "id": "https://w3id.org/xapi/video/templates#played",
      "inScheme": "https://w3id.org/xapi/video/v1.1.0",
      "prefLabel": {
        "en": "Played"
      },
      "definition": {
        "en": "The statement template and rules associated with a video being played."
      },
      "verb": "https://w3id.org/xapi/video/verbs/played",
      "objectActivityType": "https://w3id.org/xapi/video/activity-type/video",
      "rules": [
        {
          "location": "$.result.extensions['https://w3id.org/xapi/video/extensions/time']",
          "presence": "included"
        },
        {
          "location": "$.result.extensions['https://w3id.org/xapi/video/extensions/played-segments']",
          "presence": "recommended"
        }
      ]
    },
    {
      "id": "https://w3id.org/xapi/video/templates#paused",
      "inScheme": "https://w3id.org/xapi/video/v1.1.0",
      "prefLabel": {
        "en": "Paused"
      },
      "definition": {
        "en": "The statement template and rules associated with a video being paused."
      },
      "verb": "https://w3id.org/xapi/video/verbs/paused",
      "objectActivityType": "https://w3id.org/xapi/video/activity-type/video",
      "rules": [
        {
          "location": "$.result.extensions['https://w3id.org/xapi/video/extensions/time']",
          "presence": "included"
        },
        {
          "location": "$.result.extensions['https://w3id.org/xapi/video/extensions/played-segments']",
          "presence": "recommended"
        },
        {
          "location": "$.result.extensions['https://w3id.org/xapi/video/extensions/progress']",
          "presence": "recommended"
        }
      ]
    },
    {
      "id": "https://w3id.org/xapi/video/templates#seeked",
      "inScheme": "https://w3id.org/xapi/video/v1.1.0",
      "prefLabel": {
        "en": "Seeked"
      },
      "definition": {
        "en": "The statement template and rules associated with a video seekbar being moved from and to a specific position in the video."
      },
      "verb": "https://w3id.org/xapi/video/verbs/seeked",
      "objectActivityType": "https://w3id.org/xapi/video/activity-type/video",
      "rules": [
        {
          "location": "$.result.extensions['https://w3id.org/xapi/video/extensions/time-to']",
          "presence": "included"
        },
        {
          "location": "$.result.extensions['https://w3id.org/xapi/video/extensions/time-from']",
          "presence": "included"
        }
      ]
    },
    {
      "id": "https://w3id.org/xapi/video/templates#completed",
      "inScheme": "https://w3id.org/xapi/video/v1.1.0",
      "prefLabel": {
        "en": "Completed"
      },
      "definition": {
        "en": "The statement template and rules associated with a video being completed."
      },
      "verb": "http://adlnet.gov/expapi/verbs/completed",
      "objectActivityType": "https://w3id.org/xapi/video/activity-type/video",
      "rules": [
        {
          "location": "$.result.extensions['https://w3id.org/xapi/video/extensions/time']",
          "presence": "included"
        },
        {
          "location": "$.result.extensions['https://w3id.org/xapi/video/extensions/progress']",
          "presence": "included"
        }
      ]
    },
    {
      "id": "https://w3id.org/xapi/video/templates#volumechange",
      "inScheme": "https://w3id.org/xapi/video/v1.1.0",
      "prefLabel": {
        "en": "Volume Change Interaction"
      },
      "verb": "http://adlnet.gov/expapi/verbs/interacted",
      "objectActivityType": "https://w3id.org/xapi/video/activity-type/video",
      "rules": [
        {
          "location": "$.result.extensions['https://w3id.org/xapi/video/extensions/time']",
          "presence": "included"
        },
        {
          "location": "$.context.extensions['https://w3id.org/xapi/video/extensions/volume']",
          "presence": "included"
        }
      ]
    },
    {
      "id": "https://w3id.org/xapi/video/templates#screenchange",
      "inScheme": "https://w3id.org/xapi/video/v1.1.0",
      "prefLabel": {
        "en": "Screen Change Interaction"
      },
      "verb": "http://adlnet.gov/expapi/verbs/interacted",
      "objectActivityType": "https://w3id.org/xapi/video/activity-type/video",
      "rules": [
        {
          "location": "$.result.extensions['https://w3id.org/xapi/video/extensions/time']",
          "presence": "included"
        },
        {
          "location": "$.context.extensions['https://w3id.org/xapi/video/extensions/full-screen']",
          "presence": "included"
        },
        {
          "location": "$.context.extensions['https://w3id.org/xapi/video/extensions/screen-size']",
          "presence": "included"
        },
        {
          "location": "$.context.extensions['https://w3id.org/xapi/video/extensions/video-playback-size']",
          "presence": "included"
        }
      ]
    }
  ],
  "patterns": [
      {
         "id": "https://w3id.org/xapi/video/patterns#generalpattern",
         "primary": true,
         "prefLabel": {
           "en": "General Pattern and Sequence"
         },
          "definition": {
              "en": "The general pattern and sequence of Statement templates using the Video Profile."
          },
          "sequence": ["https://w3id.org/xapi/video/templates#started", "https://w3id.org/xapi/video/patterns#optionalmiddlestatements"]
      },
      {
          "id": "https://w3id.org/xapi/video/patterns#all-activities-pattern",
          "prefLabel": {
            "en": "All Activities Pattern"
          },
           "definition": {
               "en": "All of the Video Profile templates."
           },
          "alternates": ["https://w3id.org/xapi/video/templates#played", "https://w3id.org/xapi/video/templates#paused", "https://w3id.org/xapi/video/templates#seeked", "https://w3id.org/xapi/video/templates#volumechange", "https://w3id.org/xapi/video/templates#screenchange", "https://w3id.org/xapi/video/templates#completed"]
      },
      {
          "id": "https://w3id.org/xapi/video/patterns#optionalmiddlestatements",
          "prefLabel": {
            "en": "Optional Middle Statements"
          },
           "definition": {
               "en": "A combined pattern of zero or more Video Profile templates that can be used after the primary pattern."
           },
          "type": "Pattern",
			    "zeroOrMore": "https://w3id.org/xapi/video/patterns#all-activities-pattern"

      }

  ]
},

{
  "@context": "https://w3id.org/xapi/profiles/context",
  "id": "https://w3id.org/xapi/virtual-patient",
  "type": "Profile",
  "conformsTo": "https://w3id.org/xapi/profiles#1.0",
  "prefLabel": {
    "en": "Virtual Patient Profile"
  },
  "definition": {
    "en": "The Virtual Patient Profile describes health professions education verbs, activities and learner performance with the goal of understanding the needs of health profession educators."
  },
  "seeAlso": "http://groups.medbiq.org/medbiq/display/XIG/Learning+Experience+Group+Home",
  "author": {
    "type": "Organization",
    "name": "MedBiquitous Learning Experience Working Group"
  },
  "versions": [
    {
      "id": "https://w3id.org/xapi/virtual-patient/v1.0.0",
      "generatedAtTime": "2016-07-21T10:45:00Z",
      "wasRevisionOf": ["https://w3id.org/xapi/virtual-patient/v0.1"]
      }],
  "concepts": [
    {
      "id": "https://w3id.org/xapi/medbiq/verbs/ignored",
      "relatedMatch": [ "http://activitystrea.ms//ignore" ],
      "inScheme": "https://w3id.org/xapi/virtual-patient/v1.0.0",
      "type": "Verb",
      "definition": {
        "en": "Indicates the actor did not acknowledge an object or activity. User has ignored a flag or other simulation data. This is a flag or action sent by either an instructor or the simulation software to indicate that an action was expected by this point in time and had not occurred. Sometimes this is a good thing, and while absent, is not necessarily a negative aspect - for example, if there is a distractor in place that the actor is supposed to ignore as irrelevant."
      },
      "prefLabel": {
        "en": "ignored"
      }
    },
    {
      "id": "https://w3id.org/xapi/medbiq/verbs/updated",
      "inScheme": "https://w3id.org/xapi/virtual-patient/v1.0.0",
      "type": "Verb",
      "broadMatch": [ "http://activitystrea.ms/update" ],
      "definition": {
        "en": "Indicates the actor prompted a change in a data value or information associated with the object.The Virtual Patient player engine has changed a counter value. This may be triggered by arrival at a particular node, or by a rule within the case design created by the virtual patient author, or by a timer expiration point. Although the counter value may be regarded as a score, note that the ADL verb ‘scored’ is overall score for the case or exam (http://adlnet.gov/expapi/verbs/scored), which is not the same thing."
      },
      "prefLabel": {
        "en": "updated"
      }
    }
  ]
},
{
	"@context": "https://w3id.org/xapi/profiles/context",
	"id": "https://w3id.org/xapi/dod-isd",
	"type": "Profile",
	"conformsTo": "https://w3id.org/xapi/profiles#1.0",
	"prefLabel": {
		"en": "DOD ISD"
	},
	"definition": {
		"en": "Verbs and extensions for use in creating DOD IMI, per MIL-HDBK-29612-1A."
	},
	"seeAlso": "MIL-HDBK-29612-1A",
	"versions": [
		{
			"id": "https://w3id.org/xapi/dod-isd/v1.0",
			"generatedAtTime": "2017-10-24"
		}
	],
	"author": {
		"type": "Organization",
		"name": "CAE USA"
	},
	"concepts": [
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/advised",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "advised"
			},
			"definition": {
				"en": "Offer suggestions or factual information about the best course of action. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Fact Learning', and with the 'Interactivity Level' extension with a value of 1 or 2."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/answered",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "answered"
			},
			"definition": {
				"en": "Provide the required responses to a test, quiz, or question. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Fact Learning', and with the 'Interactivity Level' extension with a value of 1 or 2."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/briefed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "briefed"
			},
			"definition": {
				"en": "Instruct or inform someone thoroughly, especially in preparation for a task. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Fact Learning', and with the 'Interactivity Level' extension with a value of 1 or 2."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/calculated",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "calculated"
			},
			"definition": {
				"en": "Determine the amount or number of something mathematically. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Fact Learning', and with the 'Interactivity Level' extension with a value of 1 or 2."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/defined",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "defined"
			},
			"definition": {
				"en": "State or describe exactly the nature, scope, or meaning of something. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Fact Learning', and with the 'Interactivity Level' extension with a value of 1 or 2."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/elaborated",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "elaborated"
			},
			"definition": {
				"en": "Develop or present a theory, policy, or system in detail. Add more detail concerning what has already been said. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Fact Learning', and with the 'Interactivity Level' extension with a value of 1 or 2."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/expressed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "expressed"
			},
			"definition": {
				"en": "Convey a thought or feeling in words or by gestures and conduct. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Fact Learning', and with the 'Interactivity Level' extension with a value of 1 or 2."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/identified",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "identified"
			},
			"definition": {
				"en": "Establish or indicate who or what someone or something is. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Fact Learning', and with the 'Interactivity Level' extension with a value of 1 or 2."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/informed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "informed"
			},
			"definition": {
				"en": "Provide facts or information about someone or something. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Fact Learning', and with the 'Interactivity Level' extension with a value of 1 or 2."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/instructed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "instructed"
			},
			"definition": {
				"en": "Direct or command someone to do something, especially as an official order. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Fact Learning', and with the 'Interactivity Level' extension with a value of 1 or 2."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/listed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "listed"
			},
			"definition": {
				"en": "Make a number of connected items or names in consecutive order. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Fact Learning', and with the 'Interactivity Level' extension with a value of 1 or 2."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/named",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "named"
			},
			"definition": {
				"en": "Identify by name; give the correct name for a person, animal, place, or thing which is known, addressed, or being referred to. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Fact Learning', and with the 'Interactivity Level' extension with a value of 1 or 2."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/read",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "read"
			},
			"definition": {
				"en": "Look at and comprehend the meaning of written matter by mentally interpreting the characters or symbols of which it is composed. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Fact Learning', and with the 'Interactivity Level' extension with a value of 1 or 2."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/recalled",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "recalled"
			},
			"definition": {
				"en": "Bring (a fact, event, or situation) back into ones mind, especially so as to recount it to others; remember. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Fact Learning', and with the 'Interactivity Level' extension with a value of 1 or 2."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/recommended",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "recommended"
			},
			"definition": {
				"en": "Advise or suggest something as a course of action. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Fact Learning', and with the 'Interactivity Level' extension with a value of 1 or 2."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/recounted",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "recounted"
			},
			"definition": {
				"en": "Give an account of an event or experience. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Fact Learning', and with the 'Interactivity Level' extension with a value of 1 or 2."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/specified",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "specified"
			},
			"definition": {
				"en": "Identify clearly and definitely. State a fact or requirement clearly and precisely. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Fact Learning', and with the 'Interactivity Level' extension with a value of 1 or 2."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/stated",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "stated"
			},
			"definition": {
				"en": "Express something definitely or clearly in speech or writing. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Fact Learning', and with the 'Interactivity Level' extension with a value of 1 or 2."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/told",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "told"
			},
			"definition": {
				"en": "Communicate information, facts, or news to someone. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Fact Learning', and with the 'Interactivity Level' extension with a value of 1 or 2."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/appraised",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "appraised"
			},
			"definition": {
				"en": "Assess the value or quality of something. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Rule Learning', and with the 'Interactivity Level' extension with a value of 1 or 2."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/compiled",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "compiled"
			},
			"definition": {
				"en": "Collect information in order to produce something. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Rule Learning', and with the 'Interactivity Level' extension with a value of 1 or 2."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/composed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "composed"
			},
			"definition": {
				"en": "Constitute or make a whole from its parts or elements. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Rule Learning', and with the 'Interactivity Level' extension with a value of 1 or 2."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/computed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "computed"
			},
			"definition": {
				"en": "Make a calculation of a figure or amount. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Rule Learning', and with the 'Interactivity Level' extension with a value of 1 or 2."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/encrypted",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "encrypted"
			},
			"definition": {
				"en": "Convert information or data into a cipher or code, especially to prevent unauthorized access. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Rule Learning', and with the 'Interactivity Level' extension with a value of 1 or 2."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/estimated",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "estimated"
			},
			"definition": {
				"en": "Roughly calculate or judge the value, number, quantity, or extent. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Rule Learning', and with the 'Interactivity Level' extension with a value of 1 or 2."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/evaluated",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "evaluated"
			},
			"definition": {
				"en": "Form an idea of the amount, number, or value of; assess. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Rule Learning', and with the 'Interactivity Level' extension with a value of 1 or 2."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/formatted",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "formatted"
			},
			"definition": {
				"en": "Prepare a storage medium to receive data. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Rule Learning', and with the 'Interactivity Level' extension with a value of 1 or 2."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/forwarded",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "forwarded"
			},
			"definition": {
				"en": "Send, dispatch, or redirect data to a further destination. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Rule Learning', and with the 'Interactivity Level' extension with a value of 1 or 2."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/measured",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "measured"
			},
			"definition": {
				"en": "Ascertain the size, amount, or degree of something by using an instrument or device marked in standard units or by comparing it with an object of known size. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Rule Learning', and with the 'Interactivity Level' extension with a value of 1 or 2."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/outlined",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "outlined"
			},
			"definition": {
				"en": "Provide a summary or rough idea of something. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Rule Learning', and with the 'Interactivity Level' extension with a value of 1 or 2."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/routed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "routed"
			},
			"definition": {
				"en": "Send or direct along a specified course. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Rule Learning', and with the 'Interactivity Level' extension with a value of 1 or 2."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/checked",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "checked"
			},
			"definition": {
				"en": "Examine something in order to verify its accuracy, quality, or condition, or to detect the presence of something. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Procedure Learning', and with the 'Interactivity Level' extension with a value of 2 or 3."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/condensed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "condensed"
			},
			"definition": {
				"en": "Make something more concentrated. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Procedure Learning', and with the 'Interactivity Level' extension with a value of 2 or 3."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/edited",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "edited"
			},
			"definition": {
				"en": "Change data on a computer or document. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Procedure Learning', and with the 'Interactivity Level' extension with a value of 2 or 3."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/deleted",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "deleted"
			},
			"definition": {
				"en": "Remove data from a computer or document. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Procedure Learning', and with the 'Interactivity Level' extension with a value of 2 or 3."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/implemented",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "implemented"
			},
			"definition": {
				"en": "Put a decision, plan, agreement, etc., into effect. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Procedure Learning', and with the 'Interactivity Level' extension with a value of 2 or 3."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/initiated",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "initiated"
			},
			"definition": {
				"en": "Cause a process or action to begin. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Procedure Learning', and with the 'Interactivity Level' extension with a value of 2 or 3."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/paused",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "paused"
			},
			"definition": {
				"en": "Interrupt an action. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Procedure Learning', and with the 'Interactivity Level' extension with a value of 2 or 3."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/resumed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "resumed"
			},
			"definition": {
				"en": "Begin to perform or pursue something again after a pause or interruption. Use either with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Procedure Learning', and with the 'Interactivity Level' extension with a value of 2 or 3; or with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Responding', and with the 'Interactivity Level' extension with a value of 2, 3, or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/set-up",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "set up"
			},
			"definition": {
				"en": "Place or bring something into a specified state. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Procedure Learning', and with the 'Interactivity Level' extension with a value of 2 or 3."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/started",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "started"
			},
			"definition": {
				"en": "Cause something such as an event or process to happen, or to cause machinery to begin working. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Procedure Learning', and with the 'Interactivity Level' extension with a value of 2 or 3."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/stopped",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "stopped"
			},
			"definition": {
				"en": " Cause something such as an event or process to end, or to cause machinery to cease working. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Procedure Learning', and with the 'Interactivity Level' extension with a value of 2 or 3."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/allocated",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "allocated"
			},
			"definition": {
				"en": "Distribute resources or duties for a particular purpose. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Discrimination Learning', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/arranged",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "arranged"
			},
			"definition": {
				"en": "Organize something into a required order. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Discrimination Learning', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/assigned",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "assigned"
			},
			"definition": {
				"en": "Designate or set something or someone aside for a specific purpose. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Discrimination Learning', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/categorized",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "categorized"
			},
			"definition": {
				"en": "Place in a particular class or group. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Discrimination Learning', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/classified",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "classified"
			},
			"definition": {
				"en": "Arrange a group of people or things in classes or categories according to shared qualities or characteristics. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Discrimination Learning', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/collated",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "collated"
			},
			"definition": {
				"en": "Collect and combine texts, information, or sets of figures in proper order. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Discrimination Learning', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/compared",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "compared"
			},
			"definition": {
				"en": "Estimate, measure, or make note of the similarity or dissimilarity between one thing and another for purposes of explanation or clarification. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Discrimination Learning', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/confirmed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "confirmed"
			},
			"definition": {
				"en": "Establish with assurance that something is true. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Discrimination Learning', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/consolidated",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "consolidated"
			},
			"definition": {
				"en": "Combine a number of things into a single more effective or coherent whole. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Discrimination Learning', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/contrasted",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "contrasted"
			},
			"definition": {
				"en": "Compare in such a way as to emphasize differences. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Discrimination Learning', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/correlated",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "correlated"
			},
			"definition": {
				"en": "Establish a mutual relationship or connection between two or more things. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Discrimination Learning', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/cross-checked",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "cross-checked"
			},
			"definition": {
				"en": "Verify figures or information by using an alternative source or method. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Discrimination Learning', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/designated",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "designated"
			},
			"definition": {
				"en": "Officially assign a specified status or ascribe a specified name or quality to something or someone. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Discrimination Learning', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/differentiated",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "differentiated"
			},
			"definition": {
				"en": "Recognize or ascertain what makes someone or something different. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Discrimination Learning', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/discriminated",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "discriminated"
			},
			"definition": {
				"en": "Recognize a distinction between one or more things; differentiate. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Discrimination Learning', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/distinguished",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "distinguished"
			},
			"definition": {
				"en": "Perceive or point out a difference. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Discrimination Learning', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/distributed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "distributed"
			},
			"definition": {
				"en": "Assign or share data or items across an area. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Discrimination Learning', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/divided",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "divided"
			},
			"definition": {
				"en": "Find how many times a number contains another, or separate into parts. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Discrimination Learning', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/eliminated",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "eliminated"
			},
			"definition": {
				"en": "Remove a variable from an equation, typically by substituting another that is shown by a different equation to be equivalent; exclude from consideration. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Discrimination Learning', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/extracted",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "extracted"
			},
			"definition": {
				"en": "Remove or take out. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Discrimination Learning', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/finalized",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "finalized"
			},
			"definition": {
				"en": "Produce or agree on a finished and definitive version of something. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Discrimination Learning', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/grouped",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "grouped"
			},
			"definition": {
				"en": "Put together or place into categories or classifications. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Discrimination Learning', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/labeled",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "labeled"
			},
			"definition": {
				"en": "Assign or designate something to a category. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Discrimination Learning', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/leveled",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "leveled"
			},
			"definition": {
				"en": "Make something equal or similar in order to remove a disparity. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Discrimination Learning', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/matched",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "matched"
			},
			"definition": {
				"en": "Put in a set possessing equal or harmonizing attributes. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Discrimination Learning', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/organized",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "organized"
			},
			"definition": {
				"en": "Form into a coherent unity or functioning whole. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Discrimination Learning', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/ranked",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "ranked"
			},
			"definition": {
				"en": "Determine the relative position of something. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Discrimination Learning', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/realigned",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "realigned"
			},
			"definition": {
				"en": "Change the position, direction, or organization of something again usually in relation to something else. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Discrimination Learning', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/redistributed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "redistributed"
			},
			"definition": {
				"en": "Alter the distribution of data or items across an area. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Discrimination Learning', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/reexamined",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "reexamined"
			},
			"definition": {
				"en": "Examine again or further. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Discrimination Learning', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/reorganized",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "reorganized"
			},
			"definition": {
				"en": "Change the way in which something is organized. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Discrimination Learning', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/restated",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "restated"
			},
			"definition": {
				"en": "State something again or differently, especially in order to correct or to make more clear or convincing. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Discrimination Learning', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/scheduled",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "scheduled"
			},
			"definition": {
				"en": "Arrange or plan something to take place at a particular time. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Discrimination Learning', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/selected",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "selected"
			},
			"definition": {
				"en": "Carefully choose as being the best or most suitable. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Discrimination Learning', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/separated",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "separated"
			},
			"definition": {
				"en": "Cause to move or be apart. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Discrimination Learning', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/sorted",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "sorted"
			},
			"definition": {
				"en": "Arrange systematically in groups; separate according to type, class, etc… Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Discrimination Learning', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/tasked",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "tasked"
			},
			"definition": {
				"en": "Assign a piece of work to someone or something. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Discrimination Learning', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/templated",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "templated"
			},
			"definition": {
				"en": "Set up text or data using a template. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Discrimination Learning', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/translated",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "translated"
			},
			"definition": {
				"en": "Express the sense of words or text in another language; move from one place or condition to another. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Discrimination Learning', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/tuned",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "tuned"
			},
			"definition": {
				"en": "Adjust or adapt something to a particular purpose, situation, or frequency. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Discrimination Learning', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/analyzed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "analyzed"
			},
			"definition": {
				"en": "Examine methodically and in detail the constitution or structure of something, especially information, typically for purposes of explanation and interpretation. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Problem Solving', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/annotated",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "annotated"
			},
			"definition": {
				"en": "Add notes to a text or diagram giving explanation or comment. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Problem Solving', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/applied",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "applied"
			},
			"definition": {
				"en": "Be applicable or relevant. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Problem Solving', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/changed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "changed"
			},
			"definition": {
				"en": "Make or become different. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Problem Solving', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/combined",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "combined"
			},
			"definition": {
				"en": "Unite or merge one thing with another. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Problem Solving', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/concluded",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "concluded"
			},
			"definition": {
				"en": "Arrive at a judgment or opinion by reasoning; bring something to an end. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Problem Solving', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/converted",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "converted"
			},
			"definition": {
				"en": "Cause to change in form, character, or function. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Problem Solving', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/created",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "created"
			},
			"definition": {
				"en": "Bring something into existence as a result of one’s actions. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Problem Solving', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/criticized",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "criticized"
			},
			"definition": {
				"en": "Form and express a sophisticated judgment of something or someone. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Problem Solving', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/decided",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "decided"
			},
			"definition": {
				"en": "Make a choice from a number of alternatives; come to a resolution. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Problem Solving', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/defended",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "defended"
			},
			"definition": {
				"en": "Speak or write in favor of an action or person; attempt to justify. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Problem Solving', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/derived",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "derived"
			},
			"definition": {
				"en": "Base a concept on a logical extension or modification of another concept. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Problem Solving', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/designed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "designed"
			},
			"definition": {
				"en": "Do or plan something with a specific purpose or intention in mind. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Problem Solving', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/determined",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "determined"
			},
			"definition": {
				"en": "Ascertain or establish exactly, typically as a result of research or calculation. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Problem Solving', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/diagrammed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "diagrammed"
			},
			"definition": {
				"en": "Represent something in graphic form. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Problem Solving', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/discovered",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "discovered"
			},
			"definition": {
				"en": "Become aware of a fact or situation. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Problem Solving', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/drafted",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "drafted"
			},
			"definition": {
				"en": "Prepare a preliminary version of a text. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Problem Solving', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/effected",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "effected"
			},
			"definition": {
				"en": "Cause something to happen; bring about. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Problem Solving', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/explained",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "explained"
			},
			"definition": {
				"en": "Make an idea, situation, or problem clear to someone by describing it in more detail or revealing relevant facts or ideas. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Problem Solving', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/extended",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "extended"
			},
			"definition": {
				"en": "Cause to cover a larger area; make or last longer or make wider; include within one’s scope. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Problem Solving', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/found",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "found"
			},
			"definition": {
				"en": "Recognize or discover something to be present. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Problem Solving', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/generalized",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "generalized"
			},
			"definition": {
				"en": "Make a general or broad statement by inferring from specific cases. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Problem Solving', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/generated",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "generated"
			},
			"definition": {
				"en": "Cause something to arise or come about; produce a set or sequence of items by performing specified mathematical or logical operations on an initial set. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Problem Solving', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/hypothesized",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "hypothesized"
			},
			"definition": {
				"en": "Put (something) forward as a hypothesis. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Problem Solving', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/illustrated",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "illustrated"
			},
			"definition": {
				"en": "Explain or make something clear by using examples, charts, pictures, etc. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Problem Solving', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/inferred",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "inferred"
			},
			"definition": {
				"en": "Deduce or conclude (information) from evidence and reasoning rather than from explicit statements. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Problem Solving', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/investigated",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "investigated"
			},
			"definition": {
				"en": "Carry out research or study into a subject, typically one in a scientific or academic field so as to discover facts or information. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Problem Solving', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/located",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "located"
			},
			"definition": {
				"en": "Discover the exact place or position of something or someone. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Problem Solving', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/manipulated",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "manipulated"
			},
			"definition": {
				"en": "Alter, edit, or move text or data on a computer; exert control or influence over a person or situation. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Problem Solving', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/modified",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "modified"
			},
			"definition": {
				"en": "Make partial or minor changes to something, typically so as to improve it or to make it less extreme. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Problem Solving', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/planned",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "planned"
			},
			"definition": {
				"en": "Form a detailed proposal or diagram for doing, arranging or achieving something. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Problem Solving', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/predicted",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "predicted"
			},
			"definition": {
				"en": "Say or estimate that a specified thing will happen in the future or will be a consequence of something. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Problem Solving', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/produced",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "produced"
			},
			"definition": {
				"en": "Show or provide something for consideration, inspection, or use. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Problem Solving', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/projected",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "projected"
			},
			"definition": {
				"en": "Estimate or forecast something on the basis of present trends. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Problem Solving', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/resolved",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "resolved"
			},
			"definition": {
				"en": "Settle or find a solution to a problem. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Problem Solving', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/revised",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "revised"
			},
			"definition": {
				"en": "Reconsider and alter something in the light of further evidence. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Problem Solving', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/searched",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "searched"
			},
			"definition": {
				"en": "Try to find something by looking or otherwise seeking carefully and thoroughly. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Problem Solving', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/solved",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "solved"
			},
			"definition": {
				"en": "Find an answer to, explanation for, or means of effectively dealing with a problem or mystery. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Problem Solving', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/summarized",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "summarized"
			},
			"definition": {
				"en": "Give a brief statement of the main points of something. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Problem Solving', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/synthesized",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "synthesized"
			},
			"definition": {
				"en": "Combine a number of things into a coherent whole. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Problem Solving', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/triaged",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "triaged"
			},
			"definition": {
				"en": " Assign degrees of urgency to situations; or medically to wounded or ill patients. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Problem Solving', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/used",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "used"
			},
			"definition": {
				"en": "Take, hold, or deploy something as a means of accomplishing a purpose or achieving a result; employ. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Problem Solving', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/war-gamed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "war gamed"
			},
			"definition": {
				"en": "Engage in a campaign or course of action using the strategies of a military exercise. Use with the 'KSA' extension with a value of 'K', with the 'Category' extension with a value of 'Problem Solving', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/detected",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "detected"
			},
			"definition": {
				"en": "Discover or identify the presence or existence of something or someone. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Perception', and with the 'Interactivity Level' extension with a value of 1, 2, or 3."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/felt",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "felt"
			},
			"definition": {
				"en": "Be aware of a person or object through touching or being touched. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Perception', and with the 'Interactivity Level' extension with a value of 1, 2, or 3."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/heard",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "heard"
			},
			"definition": {
				"en": "Perceive with the ear the sound made by someone or something. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Perception', and with the 'Interactivity Level' extension with a value of 1, 2, or 3."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/scanned",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "scanned"
			},
			"definition": {
				"en": "Look at all parts of something carefully in order to detect some feature. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Perception', and with the 'Interactivity Level' extension with a value of 1, 2, or 3."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/saw",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "saw"
			},
			"definition": {
				"en": "Perceive with the eyes; discern visually. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Perception', and with the 'Interactivity Level' extension with a value of 1, 2, or 3."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/smelled",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "smelled"
			},
			"definition": {
				"en": "Perceive or detect the odor or scent of something. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Perception', and with the 'Interactivity Level' extension with a value of 1, 2, or 3."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/tasted",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "tasted"
			},
			"definition": {
				"en": "Perceive or experience the flavor of something. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Perception', and with the 'Interactivity Level' extension with a value of 1, 2, or 3."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/visualized",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "visualized"
			},
			"definition": {
				"en": "Form a mental image of something; imagine. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Perception', and with the 'Interactivity Level' extension with a value of 1, 2, or 3."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/assaulted",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "assaulted"
			},
			"definition": {
				"en": "Make a physical attack on; carry out a military attack or raid on an enemy position. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Gross Motor Skills', and with the 'Interactivity Level' extension with a value of 2 or 3."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/carried",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "carried"
			},
			"definition": {
				"en": "Support and move someone or something from one place to another. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Gross Motor Skills', and with the 'Interactivity Level' extension with a value of 2 or 3."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/crept",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "crept"
			},
			"definition": {
				"en": "Move slowly and carefully, especially in order to avoid being heard or noticed. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Gross Motor Skills', and with the 'Interactivity Level' extension with a value of 2 or 3."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/departed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "departed"
			},
			"definition": {
				"en": "Leave, typically in order to start a journey. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Gross Motor Skills', and with the 'Interactivity Level' extension with a value of 2 or 3."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/fell",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "fell"
			},
			"definition": {
				"en": "Move downward, typically rapidly and freely without control, from a higher to a lower level. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Gross Motor Skills', and with the 'Interactivity Level' extension with a value of 2 or 3."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/held",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "held"
			},
			"definition": {
				"en": "Grasp, carry, or support with ones arms or hands; (of a ship or an aircraft) continue to follow a particular course. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Gross Motor Skills', and with the 'Interactivity Level' extension with a value of 2 or 3."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/jumped",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "lifted"
			},
			"definition": {
				"en": "Raise to a higher position or level. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Gross Motor Skills', and with the 'Interactivity Level' extension with a value of 2 or 3."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/pulled",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "pulled"
			},
			"definition": {
				"en": "Exert force on someone or something, typically by taking hold of them, in order to move or try to move them toward oneself or the origin of the force. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Gross Motor Skills', and with the 'Interactivity Level' extension with a value of 2 or 3."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/ran",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "ran"
			},
			"definition": {
				"en": "Move at a speed faster than a walk, never having both or all the feet on the ground at the same time. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Gross Motor Skills', and with the 'Interactivity Level' extension with a value of 2 or 3."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/stayed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "stayed"
			},
			"definition": {
				"en": "Remain in the same place. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Gross Motor Skills', and with the 'Interactivity Level' extension with a value of 2 or 3."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/swam",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "swam"
			},
			"definition": {
				"en": "Propel the body through water by using the limbs or other bodily movement. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Gross Motor Skills', and with the 'Interactivity Level' extension with a value of 2 or 3."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/threw",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "threw"
			},
			"definition": {
				"en": "Propel something with force through the air by a movement of the arm and hand. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Gross Motor Skills', and with the 'Interactivity Level' extension with a value of 2 or 3."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/turned",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "turned"
			},
			"definition": {
				"en": "Move or cause to move in a circular direction wholly or partly around an axis or point. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Gross Motor Skills', and with the 'Interactivity Level' extension with a value of 2 or 3."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/twisted",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "twisted"
			},
			"definition": {
				"en": "Form into a bent, curling, or distorted shape. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Gross Motor Skills', and with the 'Interactivity Level' extension with a value of 2 or 3."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/wore",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "wore"
			},
			"definition": {
				"en": "Have on ones body or a part of ones body as clothing, decoration, protection, or for some other purpose. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Gross Motor Skills', and with the 'Interactivity Level' extension with a value of 2 or 3."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/advanced",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "advanced"
			},
			"definition": {
				"en": "Move forward, typically in a purposeful way. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Continuous Movement', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/controlled",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "controlled"
			},
			"definition": {
				"en": "The power to influence or direct peoples behavior or the course of events; the ability to manage a machine, vehicle, or other moving object. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Continuous Movement', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/followed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "followed"
			},
			"definition": {
				"en": "Go or come after a person or thing proceeding ahead; move or travel behind. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Continuous Movement', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/guided",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "guided"
			},
			"definition": {
				"en": "Show or indicate the way to someone or something. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Continuous Movement', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/hovered",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "hovered"
			},
			"definition": {
				"en": "Remain in one place in the air. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Continuous Movement', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/landed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "landed"
			},
			"definition": {
				"en": "Come down through the air and alight on the ground; bring an aircraft or spacecraft or similar object to the ground or the surface of water, especially in a controlled way. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Continuous Movement', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/maneuvered",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "maneuvered"
			},
			"definition": {
				"en": "Move skillfully or carefully; guide or manipulate something in order to achieve an end. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Continuous Movement', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/regulated",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "regulated"
			},
			"definition": {
				"en": "Control or maintain the rate or speed of a machine or process so that it operates properly. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Continuous Movement', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/steered",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "steered"
			},
			"definition": {
				"en": "Guide or control the movement of a vehicle, vessel, or aircraft, for example by turning a wheel or operating a rudder. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Continuous Movement', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/took-off",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "took off"
			},
			"definition": {
				"en": "Become airborne. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Continuous Movement', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/tracked",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "tracked"
			},
			"definition": {
				"en": "Follow the course or trail of someone or something, typically in order to find them or note their location at various points. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Continuous Movement', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/traversed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "traversed"
			},
			"definition": {
				"en": "Travel across or through a location. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Continuous Movement', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/abled",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "abled"
			},
			"definition": {
				"en": "Gain a quality sufficient to perform a task. NOTE: Able intends to show readiness from a military perspective. While technical it is not a verb, The DoD utilizes it as active. Example, Able yourself! Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Readiness', and with the 'Interactivity Level' extension with a value of 2 or 3."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/assisted",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "assisted"
			},
			"definition": {
				"en": "Help someone, typically by doing a share of the work. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Readiness', and with the 'Interactivity Level' extension with a value of 2 or 3."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/challenged",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "challenged"
			},
			"definition": {
				"en": "Make a rival claim to or threaten someones hold on a position. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Readiness', and with the 'Interactivity Level' extension with a value of 2 or 3."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/crossed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "crossed"
			},
			"definition": {
				"en": "Pass in an opposite or different direction; intersect. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Readiness', and with the 'Interactivity Level' extension with a value of 2 or 3."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/delayed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "delayed"
			},
			"definition": {
				"en": "Postpone or defer an action. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Readiness', and with the 'Interactivity Level' extension with a value of 2 or 3."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/guarded",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "guarded"
			},
			"definition": {
				"en": "Watch over in order to protect or control. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Readiness', and with the 'Interactivity Level' extension with a value of 2 or 3."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/prepared",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "prepared"
			},
			"definition": {
				"en": "Make something or someone ready for use or consideration. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Readiness', and with the 'Interactivity Level' extension with a value of 2 or 3."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/primed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "primed"
			},
			"definition": {
				"en": "Make something ready for use or action, in particular by using oil or fuel in a piece of machinery or a firearm. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Readiness', and with the 'Interactivity Level' extension with a value of 2 or 3."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/readied",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "readied"
			},
			"definition": {
				"en": "Prepare someone or something for an activity or purpose. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Readiness', and with the 'Interactivity Level' extension with a value of 2 or 3."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/set",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "set"
			},
			"definition": {
				"en": "Put, lay, stand, or cause something in a specified place or position. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Readiness', and with the 'Interactivity Level' extension with a value of 2 or 3."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/stood-to",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "stood to"
			},
			"definition": {
				"en": "Stand ready for an attack, especially one before dawn or after dark. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Readiness', and with the 'Interactivity Level' extension with a value of 2 or 3."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/accessed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "accessed"
			},
			"definition": {
				"en": "Approach or enter a place; obtain, examine, or retrieve data or a file. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/activated",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "activated"
			},
			"definition": {
				"en": "Make something active or operative. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/actuated",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "actuated"
			},
			"definition": {
				"en": "Cause a machine or device to operate. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/adjusted",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "adjusted"
			},
			"definition": {
				"en": "Alter or move something slightly in order to achieve the desired fit, appearance, or result. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/administered",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "administered"
			},
			"definition": {
				"en": "Manage and be responsible for the operation or use of a resource, team, organization, etc. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/aligned",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "aligned"
			},
			"definition": {
				"en": "Lie in a straight line, or in correct relative positions. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/archived",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "archived"
			},
			"definition": {
				"en": "Place or store something in an archive. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/armed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "armed"
			},
			"definition": {
				"en": "Supply or provide with weapons; activate a weapon so that it is ready. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/assembled",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "assembled"
			},
			"definition": {
				"en": "Fit together the separate component parts of a machine or other object; bring people or things together for a common purpose. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/attached",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "attached"
			},
			"definition": {
				"en": "Fasten; join one thing to another. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/balanced",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "balanced"
			},
			"definition": {
				"en": "Establish equal or appropriate proportions of elements; keep or put something in a steady position. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/breached",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "breached"
			},
			"definition": {
				"en": "Make a gap in and break through a wall, barrier, or defense. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/calibrated",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "calibrated"
			},
			"definition": {
				"en": "Correlate the readings of an instrument with those of a standard in order to check the instruments accuracy.; adjust experimental results to take external factors into account or to allow comparison with other data. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/camouflaged",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "camouflaged"
			},
			"definition": {
				"en": "Hide or disguise the presence of (a person, animal, or object) by means of camouflage. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/centered",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "centered"
			},
			"definition": {
				"en": "Place in the middle (physical); have or cause to have something as a major concern or theme (mental). Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/charged",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "charged"
			},
			"definition": {
				"en": "Rush forward in attack; store electrical energy in a battery or battery-operated device; entrust someone with a task as a duty or responsibility. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/cleaned",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "cleaned"
			},
			"definition": {
				"en": "Make something or someone free of dirt or unwanted matter, marks, or mess, especially by washing, wiping, or brushing. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/cleared",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "cleared"
			},
			"definition": {
				"en": "Remove an obstruction or unwanted item from somewhere. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/closed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "closed"
			},
			"definition": {
				"en": "Move or cause to move so as to cover an opening. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/collected",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "collected"
			},
			"definition": {
				"en": "Bring or gather together things. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/connected",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "connected"
			},
			"definition": {
				"en": "Bring together or into contact so that a real or notional link is established. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/covered",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "covered"
			},
			"definition": {
				"en": "Put something such as a cloth or lid on top of or in front of something in order to protect or conceal it; aim a gun at someone in order to prevent them from moving or escaping. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/debriefed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "debriefed"
			},
			"definition": {
				"en": "Question someone, typically in a military position about a completed mission or undertaking. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/debugged",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "debugged"
			},
			"definition": {
				"en": "Identify and remove errors from computer hardware or software; detect and remove concealed microphones from an area. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/decontaminated",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "decontaminated"
			},
			"definition": {
				"en": "Neutralize or remove dangerous substances, radioactivity, or germs from an area, object, or person. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/delivered",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "delivered"
			},
			"definition": {
				"en": "Bring and hand over an object; launch or aim an attack. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/destroyed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "destroyed"
			},
			"definition": {
				"en": "Put an end to the existence of something by damaging or attacking it. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/diagnosed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "diagnosed"
			},
			"definition": {
				"en": "Identify the nature of an illness or other problem by examination of the symptoms. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/dug",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "dug"
			},
			"definition": {
				"en": "Break up and move earth with a tool, machine, or with hands. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/disassembled",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "disassembled"
			},
			"definition": {
				"en": "Take something apart. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/disconnected",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "disconnected"
			},
			"definition": {
				"en": "Break the connection of or between. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/disengaged",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "disengaged"
			},
			"definition": {
				"en": "Separate or release someone or something from something to which they are attached or connected; remove troops from an area of conflict. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/dismantled",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "dismantled"
			},
			"definition": {
				"en": "Take a machine or structure to pieces. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/dispatched",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "dispatched"
			},
			"definition": {
				"en": "Send off to a destination or for a purpose; eliminate a task, problem, or opponent quickly and efficiently. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/displaced",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "displaced"
			},
			"definition": {
				"en": "Cause something to move from its proper or usual place. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/displayed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "displayed"
			},
			"definition": {
				"en": "Make a prominent exhibition of something in a place where it can be easily seen. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/disposed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "disposed"
			},
			"definition": {
				"en": "Eliminating something or someone by throwing away, removing, or destroying. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/disseminated",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "disseminated"
			},
			"definition": {
				"en": "Spread or disperse something, especially information widely. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/drove",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "drove"
			},
			"definition": {
				"en": "Propel or carry along by force in a specified direction; operate and control the direction and speed of a vehicle. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/egressed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "egressed"
			},
			"definition": {
				"en": "Go out of or leave a place. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/elevated",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "elevated"
			},
			"definition": {
				"en": "Raise or lift something up to a higher position. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/emplaced",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "emplaced"
			},
			"definition": {
				"en": "Put in place or position. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/employed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "employed"
			},
			"definition": {
				"en": "Make use of something or someone; provide work to someone for payment. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/engaged",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "engaged"
			},
			"definition": {
				"en": "Occupy, attract, or involve someone; enter into conflict or combat with an enemy. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/energized",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "energized"
			},
			"definition": {
				"en": "Give energy, vitality and/or enthusiasm to someone or something. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/entered",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "entered"
			},
			"definition": {
				"en": "Come or go into a place. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/established",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "established"
			},
			"definition": {
				"en": "Show something to be true or certain by determining the facts; achieve permanent acceptance or recognition for something. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/evacuated",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "evacuated"
			},
			"definition": {
				"en": "Remove someone or something from a place of danger to a safe place. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/exchanged",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "exchanged"
			},
			"definition": {
				"en": "Give or receive one thing in place of another. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/filled-out",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "filled out"
			},
			"definition": {
				"en": "Enter data into a form. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/fired",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "fired"
			},
			"definition": {
				"en": "Discharge a gun or other weapon in order to explosively propel ammunition. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/fit",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "fit"
			},
			"definition": {
				"en": "Provide, furnish, or equip something or someone so that it is suitable for a purpose. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/fueled",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "fueled"
			},
			"definition": {
				"en": "Supply with fuel. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/grounded",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "grounded"
			},
			"definition": {
				"en": "Prohibit or prevent a pilot or an aircraft from flying; (with reference to a ship) run or go aground. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/hardened",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "hardened"
			},
			"definition": {
				"en": "Make or become hard or harder. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/hoisted",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "hoisted"
			},
			"definition": {
				"en": "Raise something by means of ropes and pulleys. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/initialized",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "initialized"
			},
			"definition": {
				"en": "Set to the value or put in the condition appropriate to the start of an operation. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/input",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "input"
			},
			"definition": {
				"en": "Put data into a computer. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/inserted",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "inserted"
			},
			"definition": {
				"en": "Place, fit, or thrust something into another thing. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/inspected",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "inspected"
			},
			"definition": {
				"en": "Examine someone or something to ensure that they reach an official standard. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/installed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "installed"
			},
			"definition": {
				"en": "Place or fix equipment or machinery in position ready for use; load software into a computer. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/integrated",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "integrated"
			},
			"definition": {
				"en": "Combine one thing with another so that they become a whole. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/intercepted",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "intercepted"
			},
			"definition": {
				"en": "Obstruct someone or something so as to prevent them from continuing to a destination. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/isolated",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "isolated"
			},
			"definition": {
				"en": "Cause a person, animal, or place to be or remain alone or apart from others. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/issued",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "issued"
			},
			"definition": {
				"en": "Formally send out or make known. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/jacked",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "jacked"
			},
			"definition": {
				"en": "Use of a specialized tool in order to elevate an object or machinery. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/launched",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "launched"
			},
			"definition": {
				"en": "Start or set in motion an activity or enterprise; send a missile, satellite, vessel, or spacecraft on its course or into orbit. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/loaded",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "loaded"
			},
			"definition": {
				"en": "Put a load or large amount of something on or in a vehicle, ship, container, etc.; charge a firearm with ammunition. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/logged",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "logged"
			},
			"definition": {
				"en": "Enter an incident or fact in the log of a ship or aircraft or in another systematic record. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/lubricated",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "lubricated"
			},
			"definition": {
				"en": "Apply a substance such as oil or grease to an engine or component to minimize friction and allow smooth movement. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/maintained",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "maintained"
			},
			"definition": {
				"en": "Cause or enable a condition or state of affairs to continue. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/managed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "managed"
			},
			"definition": {
				"en": "Be in charge of a group, establishment, or undertaking; administer; run or handle something in a successful manner. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/mounted",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "mounted"
			},
			"definition": {
				"en": "Place or fix a person or an object in its operating position. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/moved",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "moved"
			},
			"definition": {
				"en": "Change or cause to change from one state, location, opinion, sphere, or activity to another. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/navigated",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "navigated"
			},
			"definition": {
				"en": "Plan and direct the route or course of a ship, aircraft, or other form of transportation, especially by using instruments or maps. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/obtained",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "obtained"
			},
			"definition": {
				"en": "Get, acquire, or secure something. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/opened",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "opened"
			},
			"definition": {
				"en": "Move or adjust a closed object so as to allow access and/or view. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/operated",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "operated"
			},
			"definition": {
				"en": "Control the functioning of a machine, process, or system; perform a surgical procedure. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/ordered",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "ordered"
			},
			"definition": {
				"en": "Give an authoritative direction or instruction to do something; arrange something in a methodical or appropriate way. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/parked",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "parked"
			},
			"definition": {
				"en": "Deposit and leave something such as a vehicle in a place until required. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/performed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "performed"
			},
			"definition": {
				"en": "Carry out, accomplish, or fulfill an action, task, or function. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/placed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "placed"
			},
			"definition": {
				"en": "Put in a particular position. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/plotted",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "plotted"
			},
			"definition": {
				"en": "Mark a route, point or position on a chart or graph. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/policed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "policed"
			},
			"definition": {
				"en": "Enforce regulations. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/positioned",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "positioned"
			},
			"definition": {
				"en": "Put or arrange someone or something in a particular place or way. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/posted",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "posted"
			},
			"definition": {
				"en": "Display something within public view. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/pressed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "pressed"
			},
			"definition": {
				"en": "Move or cause to move into a position of contact with something by exerting continuous physical force. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/pressurized",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "pressurized"
			},
			"definition": {
				"en": "Produce or maintain raised pressure artificially in a gas or its container. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/processed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "processed"
			},
			"definition": {
				"en": "Perform a series of mechanical or chemical operations on something in order to change or preserve it; operate on computer data by means of a program; deal with someone using an official and established procedure. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/procured",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "procured"
			},
			"definition": {
				"en": "Obtain something, especially with care or effort. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/provided",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "provided"
			},
			"definition": {
				"en": "Make available for use; supply. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/published",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "published"
			},
			"definition": {
				"en": "Print, issue, or make available online written content so as to make it generally known. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/raised",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "raised"
			},
			"definition": {
				"en": "Lift or move to a higher position or level. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/ranged",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "ranged"
			},
			"definition": {
				"en": "Obtain the range of a target by adjustment after firing past it or short of it, or by the use of radar or laser equipment; vary or extend between specified limits; travel or wander over a wide area. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/reached",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "reached"
			},
			"definition": {
				"en": "Stretch out an arm in a specified direction in order to touch or grasp something; arrive at; get as far as. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/received",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "received"
			},
			"definition": {
				"en": "Be given, presented with, or paid something; take delivery of something sent or communicated. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/recorded",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "recorded"
			},
			"definition": {
				"en": "Set down in writing or other permanent form for later reference, especially officially; convert sound or a performance into permanent form for later reproduction. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/reestablished",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "reestablished"
			},
			"definition": {
				"en": "Establish something again or anew. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/refueled",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "refueled"
			},
			"definition": {
				"en": "Supply something such as a vehicle with more fuel. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/released",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "released"
			},
			"definition": {
				"en": "Allow something to move, act, or flow freely. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/relocated",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "relocated"
			},
			"definition": {
				"en": "Move to a new place. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/removed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "removed"
			},
			"definition": {
				"en": "Take something away or off from the position occupied; get rid of. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/repaired",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "repaired"
			},
			"definition": {
				"en": "Fix or mend something damaged or faulty. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/replaced",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "replaced"
			},
			"definition": {
				"en": "Take the place of something or someone else. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/replenished",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "replenished"
			},
			"definition": {
				"en": "Fill something up again. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/reset",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "reset"
			},
			"definition": {
				"en": "Set again or differently. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/retrieved",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "retrieved"
			},
			"definition": {
				"en": "Get or bring something back; regain possession of. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/returned",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "returned"
			},
			"definition": {
				"en": "Come or go back to a place or person; give, put, or send something back to a place or person. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/rotated",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "rotated"
			},
			"definition": {
				"en": "Move or cause to move in a circle around an axis or center. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/saved",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "saved"
			},
			"definition": {
				"en": "Keep safe or rescue someone or something from harm or danger; keep and store up something for future use. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/secured",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "secured"
			},
			"definition": {
				"en": "Fix or attach something firmly so that it cannot be moved or lost; protect against threats; make safe; capture. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/sent",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "sent"
			},
			"definition": {
				"en": "Cause to go or be taken to a particular destination. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/serviced",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "serviced"
			},
			"definition": {
				"en": "Perform routine maintenance or repair work on something such as a vehicle or machine. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/shut-down",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "shut down"
			},
			"definition": {
				"en": "Cease or cause something to cease operation. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/sighted",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "sighted"
			},
			"definition": {
				"en": "Manage to see or observe someone or something; catch an initial glimpse of; take aim by looking through the sights of a gun. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/signaled",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "signaled"
			},
			"definition": {
				"en": "Transmit information or instructions by means of a gesture, action, or sound. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/splinted",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "splinted"
			},
			"definition": {
				"en": "Secure a broken limb with a splint or splints. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/squeezed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "squeezed"
			},
			"definition": {
				"en": "Firmly apply pressure on something with one’s hand or finger; shoot a round or shot from a gun. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/stockpiled",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "stockpiled"
			},
			"definition": {
				"en": "Accumulate a large stock of goods or materials. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/stored",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "stored"
			},
			"definition": {
				"en": "Keep or accumulate something for future use; retain or enter information for future electronic retrieval. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/stowed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "stowed"
			},
			"definition": {
				"en": "Pack or store an object carefully and neatly in a particular place. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/struck",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "struck"
			},
			"definition": {
				"en": "Hit forcibly and deliberately with ones hand or a weapon or other implement. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/submitted",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "submitted"
			},
			"definition": {
				"en": "Accept or yield to a superior force or to the authority or will of another person; present a proposal, application, or other document to a person or body for consideration or judgment. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/supervised",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "supervised"
			},
			"definition": {
				"en": "Observe and direct the execution of a task, project, or activity. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/supported",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "supported"
			},
			"definition": {
				"en": "Bear all or part of the weight of; hold up; give assistance to. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/swept",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "swept"
			},
			"definition": {
				"en": "Move swiftly and smoothly; cover an entire area with a gun; examine a place or thing for electronic listening devices; search an area for something; clean an area. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/took",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "took"
			},
			"definition": {
				"en": "Reach for and hold; gain or aquire. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/took-charge",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "took charge"
			},
			"definition": {
				"en": "Assume control or responsibility. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/tapped",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "tapped"
			},
			"definition": {
				"en": "Exploit or draw a supply from a resource; connect a device to so that conversation can be listened to secretly. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/tested",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "tested"
			},
			"definition": {
				"en": "Take measures to check the quality, performance, or reliability of something or someone. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/tightened",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "tightened"
			},
			"definition": {
				"en": "Make or become tight or tighter. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/traced",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "traced"
			},
			"definition": {
				"en": "Find or discover by investigation; copy by drawing; give an outline. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/transferred",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "transferred"
			},
			"definition": {
				"en": "Move from one place to another. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/transmitted",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "transmitted"
			},
			"definition": {
				"en": "Cause something to pass on from one place or person to another; broadcast or send out. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/transported",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "transported"
			},
			"definition": {
				"en": "Take or carry people or goods from one place to another by means of a vehicle, aircraft, or ship. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/treated",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "treated"
			},
			"definition": {
				"en": "Behave toward or deal with in a certain way; give medical care or attention to; negotiate terms with someone, especially an opponent. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/troubleshot",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "troubleshot"
			},
			"definition": {
				"en": "Solve serious problems for an organization; trace and correct faults in a mechanical or electronic system. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/typed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "typed"
			},
			"definition": {
				"en": "Write something on a typewriter or computer by pressing the keys. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/unloaded",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "unloaded"
			},
			"definition": {
				"en": "Remove goods from a vehicle, ship, container, etc. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/updated",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "updated"
			},
			"definition": {
				"en": "Provide the latest information. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/utilized",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "utilized"
			},
			"definition": {
				"en": "Make practical and effective use of. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/wrote",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "wrote"
			},
			"definition": {
				"en": "Mark letters, words, or other symbols on a surface or in a computer system. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/zeroed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "zeroed"
			},
			"definition": {
				"en": "Adjust an instrument to zero; set the sights of a gun or weapon for firing. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Mechanism', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/acclimatized",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "acclimatized"
			},
			"definition": {
				"en": "Respond physiologically or behaviorally to changes in a complex of environmental factors. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Adaptation', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/accommodated",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "accommodated"
			},
			"definition": {
				"en": "Provide lodging or sufficient space for; adapt the environment or situation to meet the needs of someone. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Adaptation', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/adapted",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "adapted"
			},
			"definition": {
				"en": "Make something suitable for a new use or purpose; modify. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Adaptation', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/ambushed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "ambushed"
			},
			"definition": {
				"en": "Make a surprise attack on someone from a concealed position. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Adaptation', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/attacked",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "attacked"
			},
			"definition": {
				"en": "Take aggressive action against a place or enemy forces with weapons or armed force. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Adaptation', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/bypassed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "bypassed"
			},
			"definition": {
				"en": "Go past or around. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Adaptation', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/conducted",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "conducted"
			},
			"definition": {
				"en": "Organize and carry out. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Adaptation', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/deployed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "deployed"
			},
			"definition": {
				"en": "Move troops or equipment into position for military action. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Adaptation', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/directed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "directed"
			},
			"definition": {
				"en": "Control the operations of; manage or govern. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Adaptation', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/drew",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "drew"
			},
			"definition": {
				"en": "Produce a picture or diagram by making lines and marks; extract an object or liquid from a container or receptacle. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Adaptation', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/evaded",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "evaded"
			},
			"definition": {
				"en": "Escape or avoid. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Adaptation', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/infiltrated",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "infiltrated"
			},
			"definition": {
				"en": "Enter or gain access to an organization, place, etc. surreptitiously and gradually. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Adaptation', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/laid",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "laid"
			},
			"definition": {
				"en": "Put down; follow a specified nautical course. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Adaptation', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/led",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "led"
			},
			"definition": {
				"en": "Be in charge or command of; organize and direct. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Adaptation', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/mapped",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "mapped"
			},
			"definition": {
				"en": "Represent an area on a map; make a map of. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Adaptation', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/neutralized",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "neutralized"
			},
			"definition": {
				"en": "Render something or someone ineffective or harmless by applying an opposite force or effect. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Adaptation', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/occupied",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "occupied"
			},
			"definition": {
				"en": "Fill or take up a space or time; take control of a place. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Adaptation', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/oriented",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "oriented"
			},
			"definition": {
				"en": "Align or position something or someone to a specified position or condition. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Adaptation', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/packed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "packed"
			},
			"definition": {
				"en": "Fill baggage or place something in a container, especially for transportation or storage. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Adaptation', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/patrolled",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "patrolled"
			},
			"definition": {
				"en": "Keep watch over an area by regularly walking or traveling around or through it. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Adaptation', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/prevented",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "prevented"
			},
			"definition": {
				"en": "Keep something from happening or arising; make someone unable to do something. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Adaptation', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/programmed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "programmed"
			},
			"definition": {
				"en": "Provide a computer or other machine with coded instructions for the automatic performance of a particular task. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Adaptation', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/protected",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "protected"
			},
			"definition": {
				"en": "Keep safe from harm or injury. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Adaptation', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/queued",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "queued"
			},
			"definition": {
				"en": "Take ones place in a line or sequence. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Adaptation', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/reconciled",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "reconciled"
			},
			"definition": {
				"en": "Cause to coexist in harmony; make or show to be compatible. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Adaptation', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/recovered",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "recovered"
			},
			"definition": {
				"en": "Return to a normal state of health, mind, or strength; regain possession of something. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Adaptation', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/reduced",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "reduced"
			},
			"definition": {
				"en": "Make smaller or less in amount, degree, or size. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Adaptation', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/relieved",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "relieved"
			},
			"definition": {
				"en": "Release someone from duty by taking their place; take a burden, pain, or distress from someone. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Adaptation', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/suppressed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "suppressed"
			},
			"definition": {
				"en": "Prevent the development, action, or expression of a feeling, impulse, idea, etc.; restrain. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Adaptation', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/tailored",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "tailored"
			},
			"definition": {
				"en": "Make or adapt for a particular purpose or person. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Adaptation', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/tempered",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "tempered"
			},
			"definition": {
				"en": "Improve the consistency or resiliency of a substance by heating it or adding particular substances to it; serve as a neutralizing or counterbalancing force to something. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Adaptation', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/trained",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "trained"
			},
			"definition": {
				"en": "Teach a particular skill or type of behavior through practice and instruction. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Adaptation', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/caused",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "caused"
			},
			"definition": {
				"en": "Make something happen. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Origination', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/constructed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "constructed"
			},
			"definition": {
				"en": "Build something. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Origination', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/contrived",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "contrived"
			},
			"definition": {
				"en": "Create or bring about an object or a situation by deliberate use of skill and artifice. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Origination', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/corrected",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "corrected"
			},
			"definition": {
				"en": "Put (an error or fault) right. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Origination', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/invented",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "invented"
			},
			"definition": {
				"en": "Create or design something that has not existed before; be the originator of. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Origination', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/made",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "made"
			},
			"definition": {
				"en": "Form something by putting parts together or combining substances; construct; create. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Origination', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/originated",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "originated"
			},
			"definition": {
				"en": "Create or initiate something. Use with the 'KSA' extension with a value of 'S', with the 'Category' extension with a value of 'Origination', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/attended-closely",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "attended closely"
			},
			"definition": {
				"en": "Manage with care. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Receiving', and with the 'Interactivity Level' extension with a value of 2, 3, or 4."
			}
		},
		{

			"id": "https://w3id.org/xapi/dod-isd/verbs/listened",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "listened"
			},
			"definition": {
				"en": "Make an effort to hear something; be alert and ready to hear something. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Receiving', and with the 'Interactivity Level' extension with a value of 2, 3, or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/listened-attentively",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "listened attentively"
			},
			"definition": {
				"en": "Make an significant effort to hear something; be alert and ready to hear something while paying close attention. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Receiving', and with the 'Interactivity Level' extension with a value of 2, 3, or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/monitored",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "monitored"
			},
			"definition": {
				"en": "Maintain regular surveillance over. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Receiving', and with the 'Interactivity Level' extension with a value of 2, 3, or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/observed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "observed"
			},
			"definition": {
				"en": "Watch someone or something carefully and attentively. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Receiving', and with the 'Interactivity Level' extension with a value of 2, 3, or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/perceived",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "perceived"
			},
			"definition": {
				"en": "Interpret or look on someone or something in a particular way; regard as. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Receiving', and with the 'Interactivity Level' extension with a value of 2, 3, or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/recognized",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "recognized"
			},
			"definition": {
				"en": "Acknowledge the existence, validity, or legality of someone or something. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Receiving', and with the 'Interactivity Level' extension with a value of 2, 3, or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/reconnoitered",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "reconnoitered"
			},
			"definition": {
				"en": "Make a military observation of a region. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Receiving', and with the 'Interactivity Level' extension with a value of 2, 3, or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/showed-awareness",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "showed awareness"
			},
			"definition": {
				"en": "Demonstrate knowledge or perception of a situation or fact. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Receiving', and with the 'Interactivity Level' extension with a value of 2, 3, or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/showed-sensitivity",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "showed sensitivity"
			},
			"definition": {
				"en": "Be considerate, take care. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Receiving', and with the 'Interactivity Level' extension with a value of 2, 3, or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/waited",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "waited"
			},
			"definition": {
				"en": "Stay where one is or delay action until a particular time or until something else happens. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Receiving', and with the 'Interactivity Level' extension with a value of 2, 3, or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/accomplished",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "accomplished"
			},
			"definition": {
				"en": "Achieve or complete successfully. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Responding', and with the 'Interactivity Level' extension with a value of 2, 3, or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/achieved",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "achieved"
			},
			"definition": {
				"en": "Successfully bring about or reach a desired objective, level, or result by effort, skill, or courage. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Responding', and with the 'Interactivity Level' extension with a value of 2, 3, or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/acknowledged",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "acknowledged"
			},
			"definition": {
				"en": "Recognize the fact or importance or quality of something. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Responding', and with the 'Interactivity Level' extension with a value of 2, 3, or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/announced",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "announced"
			},
			"definition": {
				"en": "Make a public and typically formal declaration about a fact, occurrence, or intention. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Responding', and with the 'Interactivity Level' extension with a value of 2, 3, or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/asked",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "asked"
			},
			"definition": {
				"en": "Say something in order to obtain an answer or some information. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Responding', and with the 'Interactivity Level' extension with a value of 2, 3, or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/communicated",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "communicated"
			},
			"definition": {
				"en": "Share or exchange information, news, or ideas. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Responding', and with the 'Interactivity Level' extension with a value of 2, 3, or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/completed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "completed"
			},
			"definition": {
				"en": "Make something whole or perfect. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Responding', and with the 'Interactivity Level' extension with a value of 2, 3, or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/completed-assignment",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "completed assignment"
			},
			"definition": {
				"en": "Finish making or doing a given task. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Responding', and with the 'Interactivity Level' extension with a value of 2, 3, or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/complied",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "complied"
			},
			"definition": {
				"en": "Act in accordance with a wish or command. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Responding', and with the 'Interactivity Level' extension with a value of 2, 3, or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/demonstrated",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "demonstrated"
			},
			"definition": {
				"en": "Show or express a feeling or quality by ones actions. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Responding', and with the 'Interactivity Level' extension with a value of 2, 3, or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/described",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "described"
			},
			"definition": {
				"en": "Give an account in words of someone or something, including all the relevant characteristics, qualities, or events. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Responding', and with the 'Interactivity Level' extension with a value of 2, 3, or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/encoded",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "encoded"
			},
			"definition": {
				"en": "Convert into a coded form. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Responding', and with the 'Interactivity Level' extension with a value of 2, 3, or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/executed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "executed"
			},
			"definition": {
				"en": "Carry out or put into effect a plan, order, or course of action. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Responding', and with the 'Interactivity Level' extension with a value of 2, 3, or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/gave",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "gave"
			},
			"definition": {
				"en": "Freely transfer the possession of something to someone; hand over to. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Responding', and with the 'Interactivity Level' extension with a value of 2, 3, or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/indicated",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "indicated"
			},
			"definition": {
				"en": "Suggest as a desirable or necessary course of action. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Responding', and with the 'Interactivity Level' extension with a value of 2, 3, or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/interpreted",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "interpreted"
			},
			"definition": {
				"en": "Explain the meaning of information, words, or actions. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Responding', and with the 'Interactivity Level' extension with a value of 2, 3, or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/notified",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "notified"
			},
			"definition": {
				"en": "Inform someone of something, typically in a formal or official manner. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Responding', and with the 'Interactivity Level' extension with a value of 2, 3, or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/obeyed-rules",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "obeyed rules"
			},
			"definition": {
				"en": "Comply with the command, direction, or request of a person or a law; submit to the authority of. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Responding', and with the 'Interactivity Level' extension with a value of 2, 3, or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/reacted",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "reacted"
			},
			"definition": {
				"en": "Respond or behave in a particular way in response to something. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Responding', and with the 'Interactivity Level' extension with a value of 2, 3, or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/reported",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "reported"
			},
			"definition": {
				"en": "Give a spoken or written account of something that one has observed, heard, done, or investigated; present oneself formally as having arrived at a particular place or as ready to do something. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Responding', and with the 'Interactivity Level' extension with a value of 2, 3, or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/requested",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "requested"
			},
			"definition": {
				"en": "Politely or formally ask for. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Responding', and with the 'Interactivity Level' extension with a value of 2, 3, or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/responded",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "responded"
			},
			"definition": {
				"en": "Act or behave in reaction to someone or something. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Responding', and with the 'Interactivity Level' extension with a value of 2, 3, or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/showed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "showed"
			},
			"definition": {
				"en": "Demonstrate or prove. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Responding', and with the 'Interactivity Level' extension with a value of 2, 3, or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/alerted",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "alerted"
			},
			"definition": {
				"en": "Warn someone of a danger, threat, or problem, typically with the intention of having it avoided or dealt with. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Valuing', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/appreciated",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "appreciated"
			},
			"definition": {
				"en": "Recognize the full worth of someone or something. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Valuing', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/approved",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "approved"
			},
			"definition": {
				"en": "Officially agree to or accept as satisfactory. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Valuing', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/assessed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "assessed"
			},
			"definition": {
				"en": "Evaluate or estimate the nature, ability, or quality of. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Valuing', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/authenticated",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "authenticated"
			},
			"definition": {
				"en": "Validate. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Valuing', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/believed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "believed"
			},
			"definition": {
				"en": "Hold something as an opinion; think or suppose. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Valuing', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/canceled",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "canceled"
			},
			"definition": {
				"en": "Annul or revoke a formal arrangement which is in effect. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Valuing', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/chose",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "chose"
			},
			"definition": {
				"en": "Pick out or select someone or something as being the best or most appropriate of two or more alternatives. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Valuing', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/judged",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "judged"
			},
			"definition": {
				"en": "Form an opinion or conclusion about. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Valuing', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/justified",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "justified"
			},
			"definition": {
				"en": "Show or prove to be right or reasonable. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Valuing', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/prioritized",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "prioritized"
			},
			"definition": {
				"en": "Determine the order for dealing with a series of items or tasks according to their relative importance. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Valuing', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/proposed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "proposed"
			},
			"definition": {
				"en": "Put forward an idea or plan for consideration or discussion by others. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Valuing', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/qualified",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "qualified"
			},
			"definition": {
				"en": "Be or make properly entitled to be classed in a particular way. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Valuing', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/reassessed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "reassessed"
			},
			"definition": {
				"en": "Consider or assess again, especially while paying attention to new or different factors. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Valuing', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/reviewed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "reviewed"
			},
			"definition": {
				"en": "Examine or assess something formally with the possibility or intention of instituting change if necessary. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Valuing', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/shared",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "shared"
			},
			"definition": {
				"en": "Have or provide a part in something. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Valuing', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/studied",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "studied"
			},
			"definition": {
				"en": "Investigate and analyze a subject or situation in detail. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Valuing', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/validated",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "validated"
			},
			"definition": {
				"en": "Check or prove the validity or accuracy of something. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Valuing', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/verified",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "verified"
			},
			"definition": {
				"en": "Make sure or demonstrate that something is true, accurate, or justified. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Valuing', and with the 'Interactivity Level' extension with a value of 3 or 4."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/allowed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "allowed"
			},
			"definition": {
				"en": "Give the necessary time or opportunity for something or someone; make provision or provide scope for something. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Competence', and with the 'Interactivity Level' extension with a value of 3."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/altered",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "altered"
			},
			"definition": {
				"en": "Change or cause to change in character or composition, typically in a comparatively small but significant way. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Competence', and with the 'Interactivity Level' extension with a value of 3."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/assumed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "assumed"
			},
			"definition": {
				"en": "Take or begin to have power or responsibility. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Competence', and with the 'Interactivity Level' extension with a value of 3."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/commanded",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "commanded"
			},
			"definition": {
				"en": "Have authority over; be in charge of a unit. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Competence', and with the 'Interactivity Level' extension with a value of 3."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/coordinated",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "coordinated"
			},
			"definition": {
				"en": "Bring the different elements of a complex activity or organization into a relationship that will ensure efficiency or harmony. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Competence', and with the 'Interactivity Level' extension with a value of 3."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/enforced",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "enforced"
			},
			"definition": {
				"en": "Compel observance of or compliance with a law, rule, or obligation. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Competence', and with the 'Interactivity Level' extension with a value of 3."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/ensured",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "ensured"
			},
			"definition": {
				"en": "Make certain that something shall occur or be the case. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Competence', and with the 'Interactivity Level' extension with a value of 3."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/influenced",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "influenced"
			},
			"definition": {
				"en": "Have an impact on; affect. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Competence', and with the 'Interactivity Level' extension with a value of 3."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/prescribed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "prescribed"
			},
			"definition": {
				"en": "State authoritatively or as a rule that an action or procedure should be carried out. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Competence', and with the 'Interactivity Level' extension with a value of 3."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/served",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "served"
			},
			"definition": {
				"en": "Perform duties or services for another person or an organization. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Competence', and with the 'Interactivity Level' extension with a value of 3."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/conceived",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "conceived"
			},
			"definition": {
				"en": "Form or devise a plan or idea in the mind. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Innovation', and with the 'Interactivity Level' extension with a value of 3."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/conjectured",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "conjectured"
			},
			"definition": {
				"en": "Form an opinion or supposition about something on the basis of incomplete information. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Innovation', and with the 'Interactivity Level' extension with a value of 3."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/developed",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "developed"
			},
			"definition": {
				"en": "Start to exist, experience, or possess. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Innovation', and with the 'Interactivity Level' extension with a value of 3."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/devised",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "devised"
			},
			"definition": {
				"en": "Plan or invent a complex procedure, system, or mechanism by careful thought. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Innovation', and with the 'Interactivity Level' extension with a value of 3."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/formulated",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "formulated"
			},
			"definition": {
				"en": "Create or devise methodically a strategy or a proposal. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Innovation', and with the 'Interactivity Level' extension with a value of 3."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/imagined",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "imagined"
			},
			"definition": {
				"en": "Form a mental image or concept of something or someone. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Innovation', and with the 'Interactivity Level' extension with a value of 3."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/verbs/innovated",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "Verb",
			"prefLabel": {
				"en": "innovated"
			},
			"definition": {
				"en": "Introduce something new, especially a product. Use with the 'KSA' extension with a value of 'A', with the 'Category' extension with a value of 'Innovation', and with the 'Interactivity Level' extension with a value of 3."
			}
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/extensions/interactivity-level",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "ContextExtension",
			"prefLabel": {
				"en": "Interactivity Level"
			},
			"definition": {
				"en": "Levels of Interactivity are general classes of richness, sophistication and realism of interactivity the student experiences in Computer Based Training (CBT)."
			},
      "inlineSchema": "{\"type\": \"integer\", \"enum\": [1, 2, 3, 4]}"
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/extensions/category",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "ContextExtension",
			"prefLabel": {
				"en": "Category"
			},
			"definition": {
				"en": "A further descriptive level for verbs within KSAs."
			},
      "inlineSchema": "{\"type\": \"string\", \"enum\": [\"Fact Learning\", \"Rule Learning\", \"Procedure Learning\", \"Discrimination Learning\", \"Problem Solving\", \"Perception\", \"Gross Motor Skills\", \"Continuous Movement\", \"Readiness\", \"Mechanism\", \"Adaptation\", \"Origination\", \"Receiving\", \"Responding\", \"Valuing\", \"Competence\", \"Innovation\"]}"
		},
		{
			"id": "https://w3id.org/xapi/dod-isd/extensions/ksa",
			"inScheme": "https://w3id.org/xapi/dod-isd/v1.0",
			"type": "ContextExtension",
			"prefLabel": {
				"en": "KSA"
			},
			"definition": {
				"en": "Knowledge, Skills, Attitude"
			},
      "inlineSchema": "{\"type\": \"string\", \"enum\": [\"Knowledge\", \"Skills\", \"Attitude\"]}"
		}
	]
}
]
