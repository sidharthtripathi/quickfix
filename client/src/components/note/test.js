const obj1 = [
    {
        "id": "754a49bd-f0e7-42a4-a36a-d4bdaf2ec29f",
        "type": "paragraph",
        "props": {
            "textColor": "default",
            "backgroundColor": "red",
            "textAlignment": "left"
        },
        "content": [
            {
                "type": "text",
                "text": "hi i am "
            },
            {
                "type": "text",
                "text": "ikram",
                "styles": {
                    "bold": true
                }
            }
        ],
        "children": []
    },
    {
        "id": "2fa30c32-714a-4dcc-a555-a0fdabb34cb7",
        "type": "paragraph",
        "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
        },
        "content": [],
        "children": []
    }
]

// 
const obj2 =  [
    {
      "id": "754a49bd-f0e7-42a4-a36a-d4bdaf2ec29f",
      "type": "paragraph",
      "props": {
        "textColor": "default",
        "backgroundColor": "red",
        "textAlignment": "left"
      },
      "content": [
        {
          "type": "text",
          "text": "hi i am ",
          "styles": {}
        },
        {
          "type": "text",
          "text": "ikram",
          "styles": {
            "bold": true
          }
        }
      ],
      "children": []
    },
    {
      "id": "2fa30c32-714a-4dcc-a555-a0fdabb34cb7",
      "type": "paragraph",
      "props": {
        "textColor": "default",
        "backgroundColor": "default",
        "textAlignment": "left"
      },
      "content": [],
      "children": []
    }
  ]
const obj3 =  [
    {
      "id": "754a49bd-f0e7-42a4-a36a-d4bdaf2ec29f",
      "type": "paragraph",
      "props": {
        "textColor": "default",
        "backgroundColor": "red",
        "textAlignment": "left"
      },
      "content": [
        {
          "type": "text",
          "text": "hi i am ",
          "styles": {}
        },
        {
          "type": "text",
          "text": "ikram",
          "styles": {
            "bold": true
          }
        }
      ],
      "children": []
    },
    {
      "id": "2fa30c32-714a-4dcc-a555-a0fdabb34cb7",
      "type": "paragraph",
      "props": {
        "textColor": "default",
        "backgroundColor": "default",
        "textAlignment": "left"
      },
      "content": [],
      "children": []
    }
  ]

  console.log(JSON.stringify(obj1) == JSON.stringify(obj2))