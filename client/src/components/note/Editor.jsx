import React, { useEffect, useState } from "react";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/react/style.css";

const initialBlocks = [
    {
      "id": "140ca71a-965d-4384-adc3-1a7a47bad1c8",
      "type": "paragraph",
      "props": {
        "textColor": "default",
        "backgroundColor": "default",
        "textAlignment": "left"
      },
      "content": [
        {
          "type": "text",
          "text": "ikram bagban ",
          "styles": {}
        }
      ],
      "children": []
    },
    {
      "id": "d1035621-14dc-4805-888d-7420fcaead92",
      "type": "paragraph",
      "props": {
        "textColor": "default",
        "backgroundColor": "default",
        "textAlignment": "left"
      },
      "content": [],
      "children": []
    },
    {
      "id": "2e83f2e1-89a1-49b0-bd53-ba77e059b2a5",
      "type": "paragraph",
      "props": {
        "textColor": "default",
        "backgroundColor": "default",
        "textAlignment": "left"
      },
      "content": [
        {
          "type": "text",
          "text": "hu mai bhai",
          "styles": {}
        }
      ],
      "children": []
    },
    {
      "id": "0fbf7000-3c6b-4a5a-9919-f5435804a32e",
      "type": "paragraph",
      "props": {
        "textColor": "default",
        "backgroundColor": "default",
        "textAlignment": "left"
      },
      "content": [],
      "children": [
        {
          "id": "a49a43ab-70c3-4ee9-94ab-a51594db20b0",
          "type": "heading",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left",
            "level": 1
          },
          "content": [
            {
              "type": "text",
              "text": "sabke bask",
              "styles": {
                "italic": true,
                "underline": true
              }
            }
          ],
          "children": []
        },
        {
          "id": "8fdad6c0-470a-4486-b0fe-b124f08b164e",
          "type": "bulletListItem",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [
            {
              "type": "text",
              "text": "ki baat ni",
              "styles": {}
            }
          ],
          "children": [
            {
              "id": "1916f3b2-44b8-4ebc-966c-704f42be1c82",
              "type": "bulletListItem",
              "props": {
                "textColor": "default",
                "backgroundColor": "default",
                "textAlignment": "left"
              },
              "content": [
                {
                  "type": "text",
                  "text": "samjha kya lal",
                  "styles": {}
                }
              ],
              "children": [
                {
                  "id": "3227bbd1-4b75-4350-96c3-45ef74f68d76",
                  "type": "bulletListItem",
                  "props": {
                    "textColor": "default",
                    "backgroundColor": "default",
                    "textAlignment": "left"
                  },
                  "content": [
                    {
                      "type": "text",
                      "text": " baccha hai tu abhi",
                      "styles": {}
                    }
                  ],
                  "children": []
                },
                {
                  "id": "b905a1b8-378a-4a44-afc9-73524afe37de",
                  "type": "table",
                  "props": {
                    "textColor": "default",
                    "backgroundColor": "default"
                  },
                  "content": {
                    "type": "tableContent",
                    "rows": [
                      {
                        "cells": [
                          [
                            {
                              "type": "text",
                              "text": "\nhead",
                              "styles": {}
                            }
                          ],
                          [
                            {
                              "type": "text",
                              "text": "head2",
                              "styles": {}
                            }
                          ],
                          [
                            {
                              "type": "text",
                              "text": "head 2",
                              "styles": {}
                            }
                          ]
                        ]
                      },
                      {
                        "cells": [
                          [
                            {
                              "type": "text",
                              "text": "tu hai ",
                              "styles": {}
                            }
                          ],
                          [
                            {
                              "type": "text",
                              "text": "berozgar",
                              "styles": {}
                            }
                          ],
                          [
                            {
                              "type": "text",
                              "text": "nalla",
                              "styles": {}
                            }
                          ]
                        ]
                      }
                    ]
                  },
                  "children": []
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "0fe7a5ba-049e-4cbd-b5b5-0857f5bf7107",
      "type": "paragraph",
      "props": {
        "textColor": "default",
        "backgroundColor": "default",
        "textAlignment": "left"
      },
      "content": [],
      "children": []
    },
    {
      "id": "4fb9d839-408b-423a-8d20-0bbbe5bee7f5",
      "type": "paragraph",
      "props": {
        "textColor": "default",
        "backgroundColor": "default",
        "textAlignment": "left"
      },
      "content": [
        {
          "type": "text",
          "text": "/",
          "styles": {}
        }
      ],
      "children": []
    },
    {
      "id": "1781d200-9722-4aa3-a300-9b50cf20f472",
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

const Editor = ({block}) => {
  const [blocks, setBlocks] = useState(null);
  const editor = useBlockNote({
    onEditorContentChange: (editor) => {
      setBlocks(editor.topLevelBlocks);
      console.log(editor.topLevelBlocks);
    },
  });

  useEffect(() => {
    if (!block) {
      console.log("not", block);
      return;
    }
    console.log("inserting", block);

    // editor.insertBlocks(b,editor.topLevelBlocks, "before")
    editor.insertBlocks(
        block,
      editor.getTextCursorPosition().block,
      "after"
    );
  }, []);
  return (
    <>
      <BlockNoteView editor={editor} theme={"dark"} />
      <pre> {JSON.stringify(blocks, null,2)} </pre>
    </>
  );
};

export default Editor;
