// Questions data loaded from WDQuestions.docx
const questionsData = [
  {
    "number": 1,
    "question": "Which HTML5 element is most appropriate for sectioning thematic content?",
    "options": [
      {
        "label": "A",
        "text": "<div>"
      },
      {
        "label": "B",
        "text": "<section>"
      },
      {
        "label": "C",
        "text": "<span>"
      },
      {
        "label": "D",
        "text": "<br>"
      }
    ],
    "topic": "HTML"
  },
  {
    "number": 2,
    "question": "What does 'position: relative' primarily do?",
    "options": [
      {
        "label": "A",
        "text": "Removes element from document flow"
      },
      {
        "label": "B",
        "text": "Positions relative to viewport"
      },
      {
        "label": "C",
        "text": "Allows offset relative to its normal position"
      },
      {
        "label": "D",
        "text": "Fixes element permanently"
      }
    ],
    "topic": "CSS"
  },
  {
    "number": 3,
    "question": "What is the output of the following HTML?\n<p>First</p>\n<p>Second</p>",
    "options": [
      {
        "label": "A",
        "text": "First Second (same line)"
      },
      {
        "label": "B",
        "text": "First and Second on separate lines"
      },
      {
        "label": "C",
        "text": "Error"
      },
      {
        "label": "D",
        "text": "Nothing displayed"
      }
    ],
    "topic": "HTML"
  },
  {
    "number": 4,
    "question": "Which symbol is used to prefix variables in PHP?",
    "options": [
      {
        "label": "A",
        "text": "#"
      },
      {
        "label": "B",
        "text": "&"
      },
      {
        "label": "C",
        "text": "$"
      },
      {
        "label": "D",
        "text": "%"
      }
    ],
    "topic": "PHP"
  },
  {
    "number": 5,
    "question": "Which HTML5 element is most appropriate for sectioning thematic content?",
    "options": [
      {
        "label": "A",
        "text": "<div>"
      },
      {
        "label": "B",
        "text": "<section>"
      },
      {
        "label": "C",
        "text": "<span>"
      },
      {
        "label": "D",
        "text": "<br>"
      }
    ],
    "topic": "HTML"
  },
  {
    "number": 6,
    "question": "Which method converts JSON text into a JavaScript object?",
    "options": [
      {
        "label": "A",
        "text": "JSON.parse()"
      },
      {
        "label": "B",
        "text": "JSON.stringify()"
      },
      {
        "label": "C",
        "text": "JSON.convert()"
      },
      {
        "label": "D",
        "text": "JSON.decode()"
      }
    ],
    "topic": "JavaScript"
  },
  {
    "number": 7,
    "question": "What does 'position: relative' primarily do?",
    "options": [
      {
        "label": "A",
        "text": "Removes element from document flow"
      },
      {
        "label": "B",
        "text": "Positions relative to viewport"
      },
      {
        "label": "C",
        "text": "Allows offset relative to its normal position"
      },
      {
        "label": "D",
        "text": "Fixes element permanently"
      }
    ],
    "topic": "CSS"
  },
  {
    "number": 8,
    "question": "What does 'position: relative' primarily do?",
    "options": [
      {
        "label": "A",
        "text": "Removes element from document flow"
      },
      {
        "label": "B",
        "text": "Positions relative to viewport"
      },
      {
        "label": "C",
        "text": "Allows offset relative to its normal position"
      },
      {
        "label": "D",
        "text": "Fixes element permanently"
      }
    ],
    "topic": "CSS"
  },
  {
    "number": 9,
    "question": "Which symbol is used to prefix variables in PHP?",
    "options": [
      {
        "label": "A",
        "text": "#"
      },
      {
        "label": "B",
        "text": "&"
      },
      {
        "label": "C",
        "text": "$"
      },
      {
        "label": "D",
        "text": "%"
      }
    ],
    "topic": "PHP"
  },
  {
    "number": 10,
    "question": "Which method converts JSON text into a JavaScript object?",
    "options": [
      {
        "label": "A",
        "text": "JSON.parse()"
      },
      {
        "label": "B",
        "text": "JSON.stringify()"
      },
      {
        "label": "C",
        "text": "JSON.convert()"
      },
      {
        "label": "D",
        "text": "JSON.decode()"
      }
    ],
    "topic": "JavaScript"
  },
  {
    "number": 11,
    "question": "Which HTML5 element is most appropriate for sectioning thematic content?",
    "options": [
      {
        "label": "A",
        "text": "<div>"
      },
      {
        "label": "B",
        "text": "<section>"
      },
      {
        "label": "C",
        "text": "<span>"
      },
      {
        "label": "D",
        "text": "<br>"
      }
    ],
    "topic": "HTML"
  },
  {
    "number": 12,
    "question": "Which HTML5 element is most appropriate for sectioning thematic content?",
    "options": [
      {
        "label": "A",
        "text": "<div>"
      },
      {
        "label": "B",
        "text": "<section>"
      },
      {
        "label": "C",
        "text": "<span>"
      },
      {
        "label": "D",
        "text": "<br>"
      }
    ],
    "topic": "HTML"
  },
  {
    "number": 13,
    "question": "What does 'position: relative' primarily do?",
    "options": [
      {
        "label": "A",
        "text": "Removes element from document flow"
      },
      {
        "label": "B",
        "text": "Positions relative to viewport"
      },
      {
        "label": "C",
        "text": "Allows offset relative to its normal position"
      },
      {
        "label": "D",
        "text": "Fixes element permanently"
      }
    ],
    "topic": "CSS"
  },
  {
    "number": 14,
    "question": "Given the CSS:\ndiv {\n  width: 100px;\n  padding: 10px;\n  border: 5px solid black;\n}\nWhat is the total rendered width (default box-sizing)?",
    "options": [
      {
        "label": "A",
        "text": "100px"
      },
      {
        "label": "B",
        "text": "110px"
      },
      {
        "label": "C",
        "text": "130px"
      },
      {
        "label": "D",
        "text": "150px"
      }
    ],
    "topic": "CSS"
  },
  {
    "number": 15,
    "question": "Which HTML5 element is most appropriate for sectioning thematic content?",
    "options": [
      {
        "label": "A",
        "text": "<div>"
      },
      {
        "label": "B",
        "text": "<section>"
      },
      {
        "label": "C",
        "text": "<span>"
      },
      {
        "label": "D",
        "text": "<br>"
      }
    ],
    "topic": "HTML"
  },
  {
    "number": 16,
    "question": "Which method converts JSON text into a JavaScript object?",
    "options": [
      {
        "label": "A",
        "text": "JSON.parse()"
      },
      {
        "label": "B",
        "text": "JSON.stringify()"
      },
      {
        "label": "C",
        "text": "JSON.convert()"
      },
      {
        "label": "D",
        "text": "JSON.decode()"
      }
    ],
    "topic": "JavaScript"
  },
  {
    "number": 17,
    "question": "What will this PHP code output?\n<?php\n$a = 5;\n$b = \"5\";\nvar_dump($a == $b);\n?>",
    "options": [
      {
        "label": "A",
        "text": "bool(false)"
      },
      {
        "label": "B",
        "text": "bool(true)"
      },
      {
        "label": "C",
        "text": "5"
      },
      {
        "label": "D",
        "text": "Error"
      }
    ],
    "topic": "HTML"
  },
  {
    "number": 18,
    "question": "What is the output?\nlet x = 5;\nconsole.log(typeof x);",
    "options": [
      {
        "label": "A",
        "text": "number"
      },
      {
        "label": "B",
        "text": "integer"
      },
      {
        "label": "C",
        "text": "string"
      },
      {
        "label": "D",
        "text": "undefined"
      }
    ],
    "topic": "JavaScript"
  },
  {
    "number": 19,
    "question": "What does 'position: relative' primarily do?",
    "options": [
      {
        "label": "A",
        "text": "Removes element from document flow"
      },
      {
        "label": "B",
        "text": "Positions relative to viewport"
      },
      {
        "label": "C",
        "text": "Allows offset relative to its normal position"
      },
      {
        "label": "D",
        "text": "Fixes element permanently"
      }
    ],
    "topic": "CSS"
  },
  {
    "number": 20,
    "question": "What does 'position: relative' primarily do?",
    "options": [
      {
        "label": "A",
        "text": "Removes element from document flow"
      },
      {
        "label": "B",
        "text": "Positions relative to viewport"
      },
      {
        "label": "C",
        "text": "Allows offset relative to its normal position"
      },
      {
        "label": "D",
        "text": "Fixes element permanently"
      }
    ],
    "topic": "CSS"
  },
  {
    "number": 21,
    "question": "Which symbol is used to prefix variables in PHP?",
    "options": [
      {
        "label": "A",
        "text": "#"
      },
      {
        "label": "B",
        "text": "&"
      },
      {
        "label": "C",
        "text": "$"
      },
      {
        "label": "D",
        "text": "%"
      }
    ],
    "topic": "PHP"
  },
  {
    "number": 22,
    "question": "Which symbol is used to prefix variables in PHP?",
    "options": [
      {
        "label": "A",
        "text": "#"
      },
      {
        "label": "B",
        "text": "&"
      },
      {
        "label": "C",
        "text": "$"
      },
      {
        "label": "D",
        "text": "%"
      }
    ],
    "topic": "PHP"
  },
  {
    "number": 23,
    "question": "Which HTML5 element is most appropriate for sectioning thematic content?",
    "options": [
      {
        "label": "A",
        "text": "<div>"
      },
      {
        "label": "B",
        "text": "<section>"
      },
      {
        "label": "C",
        "text": "<span>"
      },
      {
        "label": "D",
        "text": "<br>"
      }
    ],
    "topic": "HTML"
  },
  {
    "number": 24,
    "question": "Which symbol is used to prefix variables in PHP?",
    "options": [
      {
        "label": "A",
        "text": "#"
      },
      {
        "label": "B",
        "text": "&"
      },
      {
        "label": "C",
        "text": "$"
      },
      {
        "label": "D",
        "text": "%"
      }
    ],
    "topic": "PHP"
  },
  {
    "number": 25,
    "question": "Which method converts JSON text into a JavaScript object?",
    "options": [
      {
        "label": "A",
        "text": "JSON.parse()"
      },
      {
        "label": "B",
        "text": "JSON.stringify()"
      },
      {
        "label": "C",
        "text": "JSON.convert()"
      },
      {
        "label": "D",
        "text": "JSON.decode()"
      }
    ],
    "topic": "JavaScript"
  },
  {
    "number": 26,
    "question": "Which symbol is used to prefix variables in PHP?",
    "options": [
      {
        "label": "A",
        "text": "#"
      },
      {
        "label": "B",
        "text": "&"
      },
      {
        "label": "C",
        "text": "$"
      },
      {
        "label": "D",
        "text": "%"
      }
    ],
    "topic": "PHP"
  },
  {
    "number": 27,
    "question": "What is the output of the following HTML?\n<p>First</p>\n<p>Second</p>",
    "options": [
      {
        "label": "A",
        "text": "First Second (same line)"
      },
      {
        "label": "B",
        "text": "First and Second on separate lines"
      },
      {
        "label": "C",
        "text": "Error"
      },
      {
        "label": "D",
        "text": "Nothing displayed"
      }
    ],
    "topic": "HTML"
  },
  {
    "number": 28,
    "question": "What does 'position: relative' primarily do?",
    "options": [
      {
        "label": "A",
        "text": "Removes element from document flow"
      },
      {
        "label": "B",
        "text": "Positions relative to viewport"
      },
      {
        "label": "C",
        "text": "Allows offset relative to its normal position"
      },
      {
        "label": "D",
        "text": "Fixes element permanently"
      }
    ],
    "topic": "CSS"
  },
  {
    "number": 29,
    "question": "Which HTML5 element is most appropriate for sectioning thematic content?",
    "options": [
      {
        "label": "A",
        "text": "<div>"
      },
      {
        "label": "B",
        "text": "<section>"
      },
      {
        "label": "C",
        "text": "<span>"
      },
      {
        "label": "D",
        "text": "<br>"
      }
    ],
    "topic": "HTML"
  },
  {
    "number": 30,
    "question": "Which HTML5 element is most appropriate for sectioning thematic content?",
    "options": [
      {
        "label": "A",
        "text": "<div>"
      },
      {
        "label": "B",
        "text": "<section>"
      },
      {
        "label": "C",
        "text": "<span>"
      },
      {
        "label": "D",
        "text": "<br>"
      }
    ],
    "topic": "HTML"
  },
  {
    "number": 31,
    "question": "Which HTML5 element is most appropriate for sectioning thematic content?",
    "options": [
      {
        "label": "A",
        "text": "<div>"
      },
      {
        "label": "B",
        "text": "<section>"
      },
      {
        "label": "C",
        "text": "<span>"
      },
      {
        "label": "D",
        "text": "<br>"
      }
    ],
    "topic": "HTML"
  },
  {
    "number": 32,
    "question": "Which HTML5 element is most appropriate for sectioning thematic content?",
    "options": [
      {
        "label": "A",
        "text": "<div>"
      },
      {
        "label": "B",
        "text": "<section>"
      },
      {
        "label": "C",
        "text": "<span>"
      },
      {
        "label": "D",
        "text": "<br>"
      }
    ],
    "topic": "HTML"
  },
  {
    "number": 33,
    "question": "Which HTML5 element is most appropriate for sectioning thematic content?",
    "options": [
      {
        "label": "A",
        "text": "<div>"
      },
      {
        "label": "B",
        "text": "<section>"
      },
      {
        "label": "C",
        "text": "<span>"
      },
      {
        "label": "D",
        "text": "<br>"
      }
    ],
    "topic": "HTML"
  },
  {
    "number": 34,
    "question": "Which method converts JSON text into a JavaScript object?",
    "options": [
      {
        "label": "A",
        "text": "JSON.parse()"
      },
      {
        "label": "B",
        "text": "JSON.stringify()"
      },
      {
        "label": "C",
        "text": "JSON.convert()"
      },
      {
        "label": "D",
        "text": "JSON.decode()"
      }
    ],
    "topic": "JavaScript"
  },
  {
    "number": 35,
    "question": "Given the CSS:\ndiv {\n  width: 100px;\n  padding: 10px;\n  border: 5px solid black;\n}\nWhat is the total rendered width (default box-sizing)?",
    "options": [
      {
        "label": "A",
        "text": "100px"
      },
      {
        "label": "B",
        "text": "110px"
      },
      {
        "label": "C",
        "text": "130px"
      },
      {
        "label": "D",
        "text": "150px"
      }
    ],
    "topic": "CSS"
  },
  {
    "number": 36,
    "question": "Which HTML5 element is most appropriate for sectioning thematic content?",
    "options": [
      {
        "label": "A",
        "text": "<div>"
      },
      {
        "label": "B",
        "text": "<section>"
      },
      {
        "label": "C",
        "text": "<span>"
      },
      {
        "label": "D",
        "text": "<br>"
      }
    ],
    "topic": "HTML"
  },
  {
    "number": 37,
    "question": "Which symbol is used to prefix variables in PHP?",
    "options": [
      {
        "label": "A",
        "text": "#"
      },
      {
        "label": "B",
        "text": "&"
      },
      {
        "label": "C",
        "text": "$"
      },
      {
        "label": "D",
        "text": "%"
      }
    ],
    "topic": "PHP"
  },
  {
    "number": 38,
    "question": "What does 'position: relative' primarily do?",
    "options": [
      {
        "label": "A",
        "text": "Removes element from document flow"
      },
      {
        "label": "B",
        "text": "Positions relative to viewport"
      },
      {
        "label": "C",
        "text": "Allows offset relative to its normal position"
      },
      {
        "label": "D",
        "text": "Fixes element permanently"
      }
    ],
    "topic": "CSS"
  },
  {
    "number": 39,
    "question": "Given the CSS:\ndiv {\n  width: 100px;\n  padding: 10px;\n  border: 5px solid black;\n}\nWhat is the total rendered width (default box-sizing)?",
    "options": [
      {
        "label": "A",
        "text": "100px"
      },
      {
        "label": "B",
        "text": "110px"
      },
      {
        "label": "C",
        "text": "130px"
      },
      {
        "label": "D",
        "text": "150px"
      }
    ],
    "topic": "CSS"
  },
  {
    "number": 40,
    "question": "Which HTML5 element is most appropriate for sectioning thematic content?",
    "options": [
      {
        "label": "A",
        "text": "<div>"
      },
      {
        "label": "B",
        "text": "<section>"
      },
      {
        "label": "C",
        "text": "<span>"
      },
      {
        "label": "D",
        "text": "<br>"
      }
    ],
    "topic": "HTML"
  },
  {
    "number": 41,
    "question": "What does 'position: relative' primarily do?",
    "options": [
      {
        "label": "A",
        "text": "Removes element from document flow"
      },
      {
        "label": "B",
        "text": "Positions relative to viewport"
      },
      {
        "label": "C",
        "text": "Allows offset relative to its normal position"
      },
      {
        "label": "D",
        "text": "Fixes element permanently"
      }
    ],
    "topic": "CSS"
  },
  {
    "number": 42,
    "question": "What does 'position: relative' primarily do?",
    "options": [
      {
        "label": "A",
        "text": "Removes element from document flow"
      },
      {
        "label": "B",
        "text": "Positions relative to viewport"
      },
      {
        "label": "C",
        "text": "Allows offset relative to its normal position"
      },
      {
        "label": "D",
        "text": "Fixes element permanently"
      }
    ],
    "topic": "CSS"
  },
  {
    "number": 43,
    "question": "Which HTML5 element is most appropriate for sectioning thematic content?",
    "options": [
      {
        "label": "A",
        "text": "<div>"
      },
      {
        "label": "B",
        "text": "<section>"
      },
      {
        "label": "C",
        "text": "<span>"
      },
      {
        "label": "D",
        "text": "<br>"
      }
    ],
    "topic": "HTML"
  },
  {
    "number": 44,
    "question": "What will this PHP code output?\n<?php\n$a = 5;\n$b = \"5\";\nvar_dump($a == $b);\n?>",
    "options": [
      {
        "label": "A",
        "text": "bool(false)"
      },
      {
        "label": "B",
        "text": "bool(true)"
      },
      {
        "label": "C",
        "text": "5"
      },
      {
        "label": "D",
        "text": "Error"
      }
    ],
    "topic": "HTML"
  },
  {
    "number": 45,
    "question": "Which HTML5 element is most appropriate for sectioning thematic content?",
    "options": [
      {
        "label": "A",
        "text": "<div>"
      },
      {
        "label": "B",
        "text": "<section>"
      },
      {
        "label": "C",
        "text": "<span>"
      },
      {
        "label": "D",
        "text": "<br>"
      }
    ],
    "topic": "HTML"
  },
  {
    "number": 46,
    "question": "What is the output of the following HTML?\n<p>First</p>\n<p>Second</p>",
    "options": [
      {
        "label": "A",
        "text": "First Second (same line)"
      },
      {
        "label": "B",
        "text": "First and Second on separate lines"
      },
      {
        "label": "C",
        "text": "Error"
      },
      {
        "label": "D",
        "text": "Nothing displayed"
      }
    ],
    "topic": "HTML"
  },
  {
    "number": 47,
    "question": "What does 'position: relative' primarily do?",
    "options": [
      {
        "label": "A",
        "text": "Removes element from document flow"
      },
      {
        "label": "B",
        "text": "Positions relative to viewport"
      },
      {
        "label": "C",
        "text": "Allows offset relative to its normal position"
      },
      {
        "label": "D",
        "text": "Fixes element permanently"
      }
    ],
    "topic": "CSS"
  },
  {
    "number": 48,
    "question": "What does 'position: relative' primarily do?",
    "options": [
      {
        "label": "A",
        "text": "Removes element from document flow"
      },
      {
        "label": "B",
        "text": "Positions relative to viewport"
      },
      {
        "label": "C",
        "text": "Allows offset relative to its normal position"
      },
      {
        "label": "D",
        "text": "Fixes element permanently"
      }
    ],
    "topic": "CSS"
  },
  {
    "number": 49,
    "question": "What does 'position: relative' primarily do?",
    "options": [
      {
        "label": "A",
        "text": "Removes element from document flow"
      },
      {
        "label": "B",
        "text": "Positions relative to viewport"
      },
      {
        "label": "C",
        "text": "Allows offset relative to its normal position"
      },
      {
        "label": "D",
        "text": "Fixes element permanently"
      }
    ],
    "topic": "CSS"
  },
  {
    "number": 50,
    "question": "What is the output of the following HTML?\n<p>First</p>\n<p>Second</p>",
    "options": [
      {
        "label": "A",
        "text": "First Second (same line)"
      },
      {
        "label": "B",
        "text": "First and Second on separate lines"
      },
      {
        "label": "C",
        "text": "Error"
      },
      {
        "label": "D",
        "text": "Nothing displayed"
      }
    ],
    "topic": "HTML"
  },
  {
    "number": 51,
    "question": "What does 'position: relative' primarily do?",
    "options": [
      {
        "label": "A",
        "text": "Removes element from document flow"
      },
      {
        "label": "B",
        "text": "Positions relative to viewport"
      },
      {
        "label": "C",
        "text": "Allows offset relative to its normal position"
      },
      {
        "label": "D",
        "text": "Fixes element permanently"
      }
    ],
    "topic": "CSS"
  },
  {
    "number": 52,
    "question": "Which method converts JSON text into a JavaScript object?",
    "options": [
      {
        "label": "A",
        "text": "JSON.parse()"
      },
      {
        "label": "B",
        "text": "JSON.stringify()"
      },
      {
        "label": "C",
        "text": "JSON.convert()"
      },
      {
        "label": "D",
        "text": "JSON.decode()"
      }
    ],
    "topic": "JavaScript"
  },
  {
    "number": 53,
    "question": "Which HTML5 element is most appropriate for sectioning thematic content?",
    "options": [
      {
        "label": "A",
        "text": "<div>"
      },
      {
        "label": "B",
        "text": "<section>"
      },
      {
        "label": "C",
        "text": "<span>"
      },
      {
        "label": "D",
        "text": "<br>"
      }
    ],
    "topic": "HTML"
  },
  {
    "number": 54,
    "question": "Which method converts JSON text into a JavaScript object?",
    "options": [
      {
        "label": "A",
        "text": "JSON.parse()"
      },
      {
        "label": "B",
        "text": "JSON.stringify()"
      },
      {
        "label": "C",
        "text": "JSON.convert()"
      },
      {
        "label": "D",
        "text": "JSON.decode()"
      }
    ],
    "topic": "JavaScript"
  },
  {
    "number": 55,
    "question": "What does 'position: relative' primarily do?",
    "options": [
      {
        "label": "A",
        "text": "Removes element from document flow"
      },
      {
        "label": "B",
        "text": "Positions relative to viewport"
      },
      {
        "label": "C",
        "text": "Allows offset relative to its normal position"
      },
      {
        "label": "D",
        "text": "Fixes element permanently"
      }
    ],
    "topic": "CSS"
  },
  {
    "number": 56,
    "question": "What is the output of the following HTML?\n<p>First</p>\n<p>Second</p>",
    "options": [
      {
        "label": "A",
        "text": "First Second (same line)"
      },
      {
        "label": "B",
        "text": "First and Second on separate lines"
      },
      {
        "label": "C",
        "text": "Error"
      },
      {
        "label": "D",
        "text": "Nothing displayed"
      }
    ],
    "topic": "HTML"
  },
  {
    "number": 57,
    "question": "Which method converts JSON text into a JavaScript object?",
    "options": [
      {
        "label": "A",
        "text": "JSON.parse()"
      },
      {
        "label": "B",
        "text": "JSON.stringify()"
      },
      {
        "label": "C",
        "text": "JSON.convert()"
      },
      {
        "label": "D",
        "text": "JSON.decode()"
      }
    ],
    "topic": "JavaScript"
  },
  {
    "number": 58,
    "question": "What does 'position: relative' primarily do?",
    "options": [
      {
        "label": "A",
        "text": "Removes element from document flow"
      },
      {
        "label": "B",
        "text": "Positions relative to viewport"
      },
      {
        "label": "C",
        "text": "Allows offset relative to its normal position"
      },
      {
        "label": "D",
        "text": "Fixes element permanently"
      }
    ],
    "topic": "CSS"
  },
  {
    "number": 59,
    "question": "What does 'position: relative' primarily do?",
    "options": [
      {
        "label": "A",
        "text": "Removes element from document flow"
      },
      {
        "label": "B",
        "text": "Positions relative to viewport"
      },
      {
        "label": "C",
        "text": "Allows offset relative to its normal position"
      },
      {
        "label": "D",
        "text": "Fixes element permanently"
      }
    ],
    "topic": "CSS"
  },
  {
    "number": 60,
    "question": "What is the output of the following HTML?\n<p>First</p>\n<p>Second</p>",
    "options": [
      {
        "label": "A",
        "text": "First Second (same line)"
      },
      {
        "label": "B",
        "text": "First and Second on separate lines"
      },
      {
        "label": "C",
        "text": "Error"
      },
      {
        "label": "D",
        "text": "Nothing displayed"
      }
    ],
    "topic": "HTML"
  },
  {
    "number": 61,
    "question": "What is the output?\nlet x = 5;\nconsole.log(typeof x);",
    "options": [
      {
        "label": "A",
        "text": "number"
      },
      {
        "label": "B",
        "text": "integer"
      },
      {
        "label": "C",
        "text": "string"
      },
      {
        "label": "D",
        "text": "undefined"
      }
    ],
    "topic": "JavaScript"
  },
  {
    "number": 62,
    "question": "Which HTML5 element is most appropriate for sectioning thematic content?",
    "options": [
      {
        "label": "A",
        "text": "<div>"
      },
      {
        "label": "B",
        "text": "<section>"
      },
      {
        "label": "C",
        "text": "<span>"
      },
      {
        "label": "D",
        "text": "<br>"
      }
    ],
    "topic": "HTML"
  },
  {
    "number": 63,
    "question": "What does 'position: relative' primarily do?",
    "options": [
      {
        "label": "A",
        "text": "Removes element from document flow"
      },
      {
        "label": "B",
        "text": "Positions relative to viewport"
      },
      {
        "label": "C",
        "text": "Allows offset relative to its normal position"
      },
      {
        "label": "D",
        "text": "Fixes element permanently"
      }
    ],
    "topic": "CSS"
  },
  {
    "number": 64,
    "question": "Which HTML5 element is most appropriate for sectioning thematic content?",
    "options": [
      {
        "label": "A",
        "text": "<div>"
      },
      {
        "label": "B",
        "text": "<section>"
      },
      {
        "label": "C",
        "text": "<span>"
      },
      {
        "label": "D",
        "text": "<br>"
      }
    ],
    "topic": "HTML"
  },
  {
    "number": 65,
    "question": "Which method converts JSON text into a JavaScript object?",
    "options": [
      {
        "label": "A",
        "text": "JSON.parse()"
      },
      {
        "label": "B",
        "text": "JSON.stringify()"
      },
      {
        "label": "C",
        "text": "JSON.convert()"
      },
      {
        "label": "D",
        "text": "JSON.decode()"
      }
    ],
    "topic": "JavaScript"
  },
  {
    "number": 66,
    "question": "Which symbol is used to prefix variables in PHP?",
    "options": [
      {
        "label": "A",
        "text": "#"
      },
      {
        "label": "B",
        "text": "&"
      },
      {
        "label": "C",
        "text": "$"
      },
      {
        "label": "D",
        "text": "%"
      }
    ],
    "topic": "PHP"
  },
  {
    "number": 67,
    "question": "What is the output of the following HTML?\n<p>First</p>\n<p>Second</p>",
    "options": [
      {
        "label": "A",
        "text": "First Second (same line)"
      },
      {
        "label": "B",
        "text": "First and Second on separate lines"
      },
      {
        "label": "C",
        "text": "Error"
      },
      {
        "label": "D",
        "text": "Nothing displayed"
      }
    ],
    "topic": "HTML"
  },
  {
    "number": 68,
    "question": "What is the output?\nlet x = 5;\nconsole.log(typeof x);",
    "options": [
      {
        "label": "A",
        "text": "number"
      },
      {
        "label": "B",
        "text": "integer"
      },
      {
        "label": "C",
        "text": "string"
      },
      {
        "label": "D",
        "text": "undefined"
      }
    ],
    "topic": "JavaScript"
  },
  {
    "number": 69,
    "question": "Which HTML5 element is most appropriate for sectioning thematic content?",
    "options": [
      {
        "label": "A",
        "text": "<div>"
      },
      {
        "label": "B",
        "text": "<section>"
      },
      {
        "label": "C",
        "text": "<span>"
      },
      {
        "label": "D",
        "text": "<br>"
      }
    ],
    "topic": "HTML"
  },
  {
    "number": 70,
    "question": "Which symbol is used to prefix variables in PHP?",
    "options": [
      {
        "label": "A",
        "text": "#"
      },
      {
        "label": "B",
        "text": "&"
      },
      {
        "label": "C",
        "text": "$"
      },
      {
        "label": "D",
        "text": "%"
      }
    ],
    "topic": "PHP"
  },
  {
    "number": 71,
    "question": "Given the CSS:\ndiv {\n  width: 100px;\n  padding: 10px;\n  border: 5px solid black;\n}\nWhat is the total rendered width (default box-sizing)?",
    "options": [
      {
        "label": "A",
        "text": "100px"
      },
      {
        "label": "B",
        "text": "110px"
      },
      {
        "label": "C",
        "text": "130px"
      },
      {
        "label": "D",
        "text": "150px"
      }
    ],
    "topic": "CSS"
  },
  {
    "number": 72,
    "question": "Which HTML5 element is most appropriate for sectioning thematic content?",
    "options": [
      {
        "label": "A",
        "text": "<div>"
      },
      {
        "label": "B",
        "text": "<section>"
      },
      {
        "label": "C",
        "text": "<span>"
      },
      {
        "label": "D",
        "text": "<br>"
      }
    ],
    "topic": "HTML"
  },
  {
    "number": 73,
    "question": "What is the output?\nlet x = 5;\nconsole.log(typeof x);",
    "options": [
      {
        "label": "A",
        "text": "number"
      },
      {
        "label": "B",
        "text": "integer"
      },
      {
        "label": "C",
        "text": "string"
      },
      {
        "label": "D",
        "text": "undefined"
      }
    ],
    "topic": "JavaScript"
  },
  {
    "number": 74,
    "question": "Which HTML5 element is most appropriate for sectioning thematic content?",
    "options": [
      {
        "label": "A",
        "text": "<div>"
      },
      {
        "label": "B",
        "text": "<section>"
      },
      {
        "label": "C",
        "text": "<span>"
      },
      {
        "label": "D",
        "text": "<br>"
      }
    ],
    "topic": "HTML"
  },
  {
    "number": 75,
    "question": "Which symbol is used to prefix variables in PHP?",
    "options": [
      {
        "label": "A",
        "text": "#"
      },
      {
        "label": "B",
        "text": "&"
      },
      {
        "label": "C",
        "text": "$"
      },
      {
        "label": "D",
        "text": "%"
      }
    ],
    "topic": "PHP"
  },
  {
    "number": 76,
    "question": "Which HTML5 element is most appropriate for sectioning thematic content?",
    "options": [
      {
        "label": "A",
        "text": "<div>"
      },
      {
        "label": "B",
        "text": "<section>"
      },
      {
        "label": "C",
        "text": "<span>"
      },
      {
        "label": "D",
        "text": "<br>"
      }
    ],
    "topic": "HTML"
  },
  {
    "number": 77,
    "question": "What does 'position: relative' primarily do?",
    "options": [
      {
        "label": "A",
        "text": "Removes element from document flow"
      },
      {
        "label": "B",
        "text": "Positions relative to viewport"
      },
      {
        "label": "C",
        "text": "Allows offset relative to its normal position"
      },
      {
        "label": "D",
        "text": "Fixes element permanently"
      }
    ],
    "topic": "CSS"
  },
  {
    "number": 78,
    "question": "Which HTML5 element is most appropriate for sectioning thematic content?",
    "options": [
      {
        "label": "A",
        "text": "<div>"
      },
      {
        "label": "B",
        "text": "<section>"
      },
      {
        "label": "C",
        "text": "<span>"
      },
      {
        "label": "D",
        "text": "<br>"
      }
    ],
    "topic": "HTML"
  },
  {
    "number": 79,
    "question": "What does 'position: relative' primarily do?",
    "options": [
      {
        "label": "A",
        "text": "Removes element from document flow"
      },
      {
        "label": "B",
        "text": "Positions relative to viewport"
      },
      {
        "label": "C",
        "text": "Allows offset relative to its normal position"
      },
      {
        "label": "D",
        "text": "Fixes element permanently"
      }
    ],
    "topic": "CSS"
  },
  {
    "number": 80,
    "question": "What does 'position: relative' primarily do?",
    "options": [
      {
        "label": "A",
        "text": "Removes element from document flow"
      },
      {
        "label": "B",
        "text": "Positions relative to viewport"
      },
      {
        "label": "C",
        "text": "Allows offset relative to its normal position"
      },
      {
        "label": "D",
        "text": "Fixes element permanently"
      }
    ],
    "topic": "CSS"
  },
  {
    "number": 81,
    "question": "What does 'position: relative' primarily do?",
    "options": [
      {
        "label": "A",
        "text": "Removes element from document flow"
      },
      {
        "label": "B",
        "text": "Positions relative to viewport"
      },
      {
        "label": "C",
        "text": "Allows offset relative to its normal position"
      },
      {
        "label": "D",
        "text": "Fixes element permanently"
      }
    ],
    "topic": "CSS"
  },
  {
    "number": 82,
    "question": "Which HTML5 element is most appropriate for sectioning thematic content?",
    "options": [
      {
        "label": "A",
        "text": "<div>"
      },
      {
        "label": "B",
        "text": "<section>"
      },
      {
        "label": "C",
        "text": "<span>"
      },
      {
        "label": "D",
        "text": "<br>"
      }
    ],
    "topic": "HTML"
  },
  {
    "number": 83,
    "question": "Given the CSS:\ndiv {\n  width: 100px;\n  padding: 10px;\n  border: 5px solid black;\n}\nWhat is the total rendered width (default box-sizing)?",
    "options": [
      {
        "label": "A",
        "text": "100px"
      },
      {
        "label": "B",
        "text": "110px"
      },
      {
        "label": "C",
        "text": "130px"
      },
      {
        "label": "D",
        "text": "150px"
      }
    ],
    "topic": "CSS"
  },
  {
    "number": 84,
    "question": "Which method converts JSON text into a JavaScript object?",
    "options": [
      {
        "label": "A",
        "text": "JSON.parse()"
      },
      {
        "label": "B",
        "text": "JSON.stringify()"
      },
      {
        "label": "C",
        "text": "JSON.convert()"
      },
      {
        "label": "D",
        "text": "JSON.decode()"
      }
    ],
    "topic": "JavaScript"
  },
  {
    "number": 85,
    "question": "What does 'position: relative' primarily do?",
    "options": [
      {
        "label": "A",
        "text": "Removes element from document flow"
      },
      {
        "label": "B",
        "text": "Positions relative to viewport"
      },
      {
        "label": "C",
        "text": "Allows offset relative to its normal position"
      },
      {
        "label": "D",
        "text": "Fixes element permanently"
      }
    ],
    "topic": "CSS"
  },
  {
    "number": 86,
    "question": "What does 'position: relative' primarily do?",
    "options": [
      {
        "label": "A",
        "text": "Removes element from document flow"
      },
      {
        "label": "B",
        "text": "Positions relative to viewport"
      },
      {
        "label": "C",
        "text": "Allows offset relative to its normal position"
      },
      {
        "label": "D",
        "text": "Fixes element permanently"
      }
    ],
    "topic": "CSS"
  },
  {
    "number": 87,
    "question": "What will this PHP code output?\n<?php\n$a = 5;\n$b = \"5\";\nvar_dump($a == $b);\n?>",
    "options": [
      {
        "label": "A",
        "text": "bool(false)"
      },
      {
        "label": "B",
        "text": "bool(true)"
      },
      {
        "label": "C",
        "text": "5"
      },
      {
        "label": "D",
        "text": "Error"
      }
    ],
    "topic": "HTML"
  },
  {
    "number": 88,
    "question": "What does 'position: relative' primarily do?",
    "options": [
      {
        "label": "A",
        "text": "Removes element from document flow"
      },
      {
        "label": "B",
        "text": "Positions relative to viewport"
      },
      {
        "label": "C",
        "text": "Allows offset relative to its normal position"
      },
      {
        "label": "D",
        "text": "Fixes element permanently"
      }
    ],
    "topic": "CSS"
  },
  {
    "number": 89,
    "question": "Which HTML5 element is most appropriate for sectioning thematic content?",
    "options": [
      {
        "label": "A",
        "text": "<div>"
      },
      {
        "label": "B",
        "text": "<section>"
      },
      {
        "label": "C",
        "text": "<span>"
      },
      {
        "label": "D",
        "text": "<br>"
      }
    ],
    "topic": "HTML"
  },
  {
    "number": 90,
    "question": "Which method converts JSON text into a JavaScript object?",
    "options": [
      {
        "label": "A",
        "text": "JSON.parse()"
      },
      {
        "label": "B",
        "text": "JSON.stringify()"
      },
      {
        "label": "C",
        "text": "JSON.convert()"
      },
      {
        "label": "D",
        "text": "JSON.decode()"
      }
    ],
    "topic": "JavaScript"
  },
  {
    "number": 91,
    "question": "Given the CSS:\ndiv {\n  width: 100px;\n  padding: 10px;\n  border: 5px solid black;\n}\nWhat is the total rendered width (default box-sizing)?",
    "options": [
      {
        "label": "A",
        "text": "100px"
      },
      {
        "label": "B",
        "text": "110px"
      },
      {
        "label": "C",
        "text": "130px"
      },
      {
        "label": "D",
        "text": "150px"
      }
    ],
    "topic": "CSS"
  },
  {
    "number": 92,
    "question": "Which HTML5 element is most appropriate for sectioning thematic content?",
    "options": [
      {
        "label": "A",
        "text": "<div>"
      },
      {
        "label": "B",
        "text": "<section>"
      },
      {
        "label": "C",
        "text": "<span>"
      },
      {
        "label": "D",
        "text": "<br>"
      }
    ],
    "topic": "HTML"
  },
  {
    "number": 93,
    "question": "What does 'position: relative' primarily do?",
    "options": [
      {
        "label": "A",
        "text": "Removes element from document flow"
      },
      {
        "label": "B",
        "text": "Positions relative to viewport"
      },
      {
        "label": "C",
        "text": "Allows offset relative to its normal position"
      },
      {
        "label": "D",
        "text": "Fixes element permanently"
      }
    ],
    "topic": "CSS"
  },
  {
    "number": 94,
    "question": "What does 'position: relative' primarily do?",
    "options": [
      {
        "label": "A",
        "text": "Removes element from document flow"
      },
      {
        "label": "B",
        "text": "Positions relative to viewport"
      },
      {
        "label": "C",
        "text": "Allows offset relative to its normal position"
      },
      {
        "label": "D",
        "text": "Fixes element permanently"
      }
    ],
    "topic": "CSS"
  },
  {
    "number": 95,
    "question": "What will this PHP code output?\n<?php\n$a = 5;\n$b = \"5\";\nvar_dump($a == $b);\n?>",
    "options": [
      {
        "label": "A",
        "text": "bool(false)"
      },
      {
        "label": "B",
        "text": "bool(true)"
      },
      {
        "label": "C",
        "text": "5"
      },
      {
        "label": "D",
        "text": "Error"
      }
    ],
    "topic": "HTML"
  },
  {
    "number": 96,
    "question": "What will this PHP code output?\n<?php\n$a = 5;\n$b = \"5\";\nvar_dump($a == $b);\n?>",
    "options": [
      {
        "label": "A",
        "text": "bool(false)"
      },
      {
        "label": "B",
        "text": "bool(true)"
      },
      {
        "label": "C",
        "text": "5"
      },
      {
        "label": "D",
        "text": "Error"
      }
    ],
    "topic": "HTML"
  },
  {
    "number": 97,
    "question": "Which HTML5 element is most appropriate for sectioning thematic content?",
    "options": [
      {
        "label": "A",
        "text": "<div>"
      },
      {
        "label": "B",
        "text": "<section>"
      },
      {
        "label": "C",
        "text": "<span>"
      },
      {
        "label": "D",
        "text": "<br>"
      }
    ],
    "topic": "HTML"
  },
  {
    "number": 98,
    "question": "What does 'position: relative' primarily do?",
    "options": [
      {
        "label": "A",
        "text": "Removes element from document flow"
      },
      {
        "label": "B",
        "text": "Positions relative to viewport"
      },
      {
        "label": "C",
        "text": "Allows offset relative to its normal position"
      },
      {
        "label": "D",
        "text": "Fixes element permanently"
      }
    ],
    "topic": "CSS"
  },
  {
    "number": 99,
    "question": "What does 'position: relative' primarily do?",
    "options": [
      {
        "label": "A",
        "text": "Removes element from document flow"
      },
      {
        "label": "B",
        "text": "Positions relative to viewport"
      },
      {
        "label": "C",
        "text": "Allows offset relative to its normal position"
      },
      {
        "label": "D",
        "text": "Fixes element permanently"
      }
    ],
    "topic": "CSS"
  },
  {
    "number": 100,
    "question": "Which HTML5 element is most appropriate for sectioning thematic content?",
    "options": [
      {
        "label": "A",
        "text": "<div>"
      },
      {
        "label": "B",
        "text": "<section>"
      },
      {
        "label": "C",
        "text": "<span>"
      },
      {
        "label": "D",
        "text": "<br>"
      }
    ],
    "topic": "HTML"
  }
];

// Correct answers from marking scheme
const correctAnswers = {"1": "B", "2": "C", "3": "B", "4": "C", "5": "B", "6": "A", "7": "C", "8": "C", "9": "C", "10": "A", "11": "B", "12": "B", "13": "C", "14": "C", "15": "B", "16": "A", "17": "B", "18": "A", "19": "C", "20": "C", "21": "C", "22": "C", "23": "B", "24": "C", "25": "A", "26": "C", "27": "B", "28": "C", "29": "B", "30": "B", "31": "B", "32": "B", "33": "B", "34": "A", "35": "C", "36": "B", "37": "C", "38": "C", "39": "C", "40": "B", "41": "C", "42": "C", "43": "B", "44": "B", "45": "B", "46": "B", "47": "C", "48": "C", "49": "C", "50": "B", "51": "C", "52": "A", "53": "B", "54": "A", "55": "C", "56": "B", "57": "A", "58": "C", "59": "C", "60": "B", "61": "A", "62": "B", "63": "C", "64": "B", "65": "A", "66": "C", "67": "B", "68": "A", "69": "B", "70": "C", "71": "C", "72": "B", "73": "A", "74": "B", "75": "C", "76": "B", "77": "C", "78": "B", "79": "C", "80": "C", "81": "C", "82": "B", "83": "C", "84": "A", "85": "C", "86": "C", "87": "B", "88": "C", "89": "B", "90": "A", "91": "C", "92": "B", "93": "C", "94": "C", "95": "B", "96": "B", "97": "B", "98": "C", "99": "C", "100": "B"};
