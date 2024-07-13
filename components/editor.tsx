"use client";

import { BlockNoteEditor } from "@blocknote/core";
import { useTheme } from "next-themes";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useMemo } from "react";
import { useEdgeStore } from "@/lib/edgestore";
import { Doc } from "@/convex/_generated/dataModel";

interface EditorProps {
  isEditable: boolean;
  onChange: (value: string) => void;
  document: Doc<"documents">;
}

const Editor = ({ isEditable = true, onChange, document }: EditorProps) => {
  const { resolvedTheme } = useTheme();
  const { edgestore } = useEdgeStore();

  const editor = useMemo(() => {
    const initialContent = document.content ?? undefined;

    return BlockNoteEditor.create({
      uploadFile: async (file: File) => {
        const response = await edgestore.publicFiles.upload({ file });

        return response.url;
      },
      initialContent: initialContent
        ? JSON.parse(initialContent)
        : initialContent,
    });
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <BlockNoteView
        editable={isEditable}
        editor={editor}
        theme={resolvedTheme === "dark" ? "dark" : "light"}
        onChange={() => {
          onChange(JSON.stringify(editor.document));
        }}
      />
    </>
  );
};

export default Editor;
