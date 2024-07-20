// const actions = {
//   "$schema": "http://json-schema.org/draft-07/schema#",
//   "type": "object",
//   "_boosting": {
//     "force": {
//       "threshold": 0.98,
//       "thought": "You MUST use the ***ACTION_NAME*** action here."
//     },
//     "encourage": {
//       "threshold": 0.9,
//       "thought": "You should consider the action ***ACTION_NAME***."
//     }
//   },
//   "properties": {
//     "update_order": {
//       "_description": "When items should be added to or removed from the order",
//       "type": "object",
//       "properties": {
//         "mains": {
//           "type": "array",
//           "items": {
//             "type": "object",
//             "properties": {
//               "main_type": {
//                 "type": "string",
//                 "enum": ["classic", "cheese", "veggie", "bacon", "double_classic", "double_cheese", "double_veggie", "double_bacon", "hot_dog"]
//               },
//               "quantity": {
//                 "type": "integer"
//               }
//             },
//             "required": ["main_type", "quantity"]
//           }
//         },
//         "sides": {
//           "type": "array",
//           "items": {
//             "type": "object",
//             "properties": {
//               "side_type": {
//                 "type": "string",
//                 "enum": ["fries", "taters"]
//               },
//               "size": {
//                 "type": "string",
//                 "enum": ["small", "medium", "large"]
//               },
//               "quantity": {
//                 "type": "integer"
//               }
//             },
//             "required": ["side_type", "size", "quantity"]
//           }
//         },
//         "drinks": {
//           "type": "array",
//           "items": {
//             "type": "object",
//             "properties": {
//               "drink_type": {
//                 "type": "string",
//                 "enum": ["cola", "diet_cola", "sprite", "water", "chocolate_milkshake", "strawberry_milkshake", "vanilla_milkshake"]
//               },
//               "size": {
//                 "type": "string",
//                 "enum": ["small", "medium", "large"]
//               },
//               "quantity": {
//                 "type": "integer"
//               }
//             },
//             "required": ["drink_type", "size", "quantity"]
//           }
//         }
//       },
//       "_examples": [
//         {
//           "user says": "I'd like a cheeseburger, two classic burgers, and remove one large fries",
//           "assistant action includes": {
//             "update_order": {
//               "mains": [
//                 {
//                   "main_type": "cheese",
//                   "quantity": 1
//                 },
//                 {
//                   "main_type": "classic",
//                   "quantity": 2
//                 }
//               ],
//               "sides": [
//                 {
//                   "side_type": "fries",
//                   "size": "large",
//                   "quantity": -1
//                 }
//               ]
//             }
//           }
//         },
//         {
//           "user says": "Add a medium cola and remove two small waters",
//           "assistant action includes": {
//             "update_order": {
//               "drinks": [
//                 {
//                   "drink_type": "cola",
//                   "size": "medium",
//                   "quantity": 1
//                 },
//                 {
//                   "drink_type": "water",
//                   "size": "small",
//                   "quantity": -2
//                 }
//               ]
//             }
//           }
//         },
//         {
//           "user says": "I want to add 3 veggie burgers and remove 1 hot dog",
//           "assistant action includes": {
//             "update_order": {
//               "mains": [
//                 {
//                   "main_type": "veggie",
//                   "quantity": 3
//                 },
//                 {
//                   "main_type": "hot_dog",
//                   "quantity": -1
//                 }
//               ]
//             }
//           }
//         }
//       ]
//     }
//   }
// }

// export default actions;


const actions = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "_boosting": {
    "force": {
      "threshold": 0.98,
      "thought": "You MUST take the ***ACTION_NAME*** action here."
    },
    "encourage": {
      "threshold": 0.9,
      "thought": "You should consider the action ***ACTION_NAME***."
    }
  },
  "properties": {
    "provide_feedback": {
      "_description": "When feedback is given to the student",
      "type": "object",
      "_examples": [],
      "properties": {
        "feedback_type": {
          "type": "string",
          "enum": ["positive", "negative", "neutral"]
        },
        "message": {
          "type": "string"
        }
      },
      "required": ["feedback_type", "message"]
    },
    "ask_question": {
      "_description": "When a question is asked to the student",
      "type": "object",
      "_examples": [],
      "properties": {
        "question_type": {
          "type": "string",
          "enum": ["multiple_choice", "open_ended"]
        },
        "question_text": {
          "type": "string"
        },
        "options": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "hint": {
          "type": "string"
        }
      },
      "required": ["question_type", "question_text"]
    },
    "provide_example": {
      "_description": "When an example is provided to the student",
      "_examples": [],
      "type": "object",
      "properties": {
        "example_text": {
          "type": "string"
        }
      },
      "required": ["example_text"]
    },
    "update_learning": {
      "_description": "When the learning progress should be updated",
      "type": "object",
      "_examples": [],
      "properties": {
        "vocabulary": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "word": { "type": "string" },
              "level": { "type": "integer" }
            },
            "required": ["word", "level"]
          }
        },
        "grammar": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "word": { "type": "string" },
              "level": { "type": "integer" }
            },
            "required": ["word", "level"]
          }
        },
        "phrases": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "word": { "type": "string" },
              "level": { "type": "integer" }
            },
            "required": ["word", "level"]
          }
        }
      }
    }
  }
}

export default actions;