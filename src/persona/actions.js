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
    "mark_answer_correct_or_incorrect": {
      "_description": "When the student answers a learning question, you should grade it as correct or incorrect. You ONLY reply to answers with short confirmations or negations.",
      "type": "object",
      "_examples": [],
      "type": "boolean",
      "_react_after": {
        "wait": 0,
        "thought": "I should continue the lesson by asking a new question (ask_question)."
      }
    },
    "ask_question": {
      "_description": "When you ask a question to the student. You must always take this action when you ask a language question.",
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