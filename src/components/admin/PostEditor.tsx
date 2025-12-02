'use client';

import { useMemo } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  Alignment,
  Autoformat,
  AutoLink,
  BlockQuote,
  Bold,
  ClassicEditor,
  CodeBlock,
  Essentials,
  Heading,
  HorizontalLine,
  Indent,
  IndentBlock,
  Italic,
  Image,
  ImageCaption,
  ImageInsert,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  ImageTextAlternative,
  Link,
  LinkImage,
  List,
  ListProperties,
  MediaEmbed,
  Paragraph,
  PasteFromOffice,
  RemoveFormat,
  SimpleUploadAdapter,
  Strikethrough,
  Table,
  TableCellProperties,
  TableColumnResize,
  TableProperties,
  TableToolbar,
  Underline,
} from "ckeditor5";
import "ckeditor5/ckeditor5.css";

interface PostEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export default function PostEditor({ value, onChange }: PostEditorProps) {
  // Configure CKEditor features once to avoid unnecessary re-instantiations.
  const editorConfig = useMemo(() => {
    const headingOptions = [
      { model: "paragraph" as const, title: "Paragraph", class: "ck-heading_paragraph" },
      { model: "heading2" as const, view: "h2" as const, title: "Heading 2", class: "ck-heading_heading2" },
      { model: "heading3" as const, view: "h3" as const, title: "Heading 3", class: "ck-heading_heading3" },
      { model: "heading4" as const, view: "h4" as const, title: "Heading 4", class: "ck-heading_heading4" },
    ];

    return {
      licenseKey: "GPL",
      plugins: [
        Essentials,
        Paragraph,
        Heading,
        Bold,
        Italic,
        Underline,
        Strikethrough,
        BlockQuote,
        Link,
        LinkImage,
        AutoLink,
        List,
        ListProperties,
        Indent,
        IndentBlock,
        Alignment,
        Autoformat,
        CodeBlock,
        HorizontalLine,
        MediaEmbed,
        PasteFromOffice,
        RemoveFormat,
        Image,
        ImageToolbar,
        ImageCaption,
        ImageStyle,
        ImageResize,
        ImageInsert,
        ImageUpload,
        ImageTextAlternative,
        SimpleUploadAdapter,
        Table,
        TableToolbar,
        TableProperties,
        TableCellProperties,
        TableColumnResize,
      ],
      toolbar: {
        items: [
          "undo",
          "redo",
          "|",
          "heading",
          "|",
          "bold",
          "italic",
          "underline",
          "strikethrough",
          "|",
          "link",
          "blockQuote",
          "codeBlock",
          "|",
          "bulletedList",
          "numberedList",
          "|",
          "outdent",
          "indent",
          "alignment",
          "|",
          "insertImage",
          "insertTable",
          "mediaEmbed",
          "|",
          "horizontalLine",
          "removeFormat",
        ],
        shouldNotGroupWhenFull: true,
      },
      heading: {
        options: headingOptions,
      },
      list: {
        properties: {
          styles: true,
          startIndex: true,
          reversed: true,
        },
      },
      image: {
        toolbar: [
          "toggleImageCaption",
          "imageTextAlternative",
          "|",
          "imageStyle:inline",
          "imageStyle:block",
          "imageStyle:side",
          "|",
          "linkImage",
        ],
        insert: {
          integrations: ["upload", "url"],
        },
      },
      table: {
        contentToolbar: [
          "tableColumn",
          "tableRow",
          "mergeTableCells",
          "|",
          "tableProperties",
          "tableCellProperties",
        ],
      },
      mediaEmbed: {
        previewsInData: true,
      },
      simpleUpload: {
        uploadUrl: "/api/upload",
        withCredentials: true,
        headers: {
          Accept: "application/json",
        },
      },
      placeholder: "Write your post content here...",
    };
  }, []);

  return (
    <CKEditor
      editor={ClassicEditor}
      config={editorConfig}
      data={value}
      onChange={(_event, editor) => {
        onChange(editor.getData());
      }}
    />
  );
}
