import React, { useRef, useState } from "react"
import { Box, HStack, Button } from "@chakra-ui/react"
import { Editor } from "@monaco-editor/react"
import LanguageSelector from "./LanguageSelector";
import Output from "./Output";

function CodeEditor() {
    const editorRef = useRef(null);
    const [value, setValue] = useState('');
    const [language, setLanguage] = useState('javascript');

    const onMount = (editor) => {
        editorRef.current = editor;
        editor.focus();
    }

    function onSelect(language) {
        setLanguage(language)
    }

    

    return (
        <Box>
            <HStack borderSpacing={4}>
                <Box w='50%'>
                    <LanguageSelector language={language} onSelect={onSelect}></LanguageSelector>
                    <Editor height="75vh"
                        theme="vs-dark"
                        language={language}
                        value={value}
                        defaultValue={"console.log(\"Hello World\");"}
                        onChange={(val) => setValue(val ?? "")}
                        onMount={onMount}
                    />
                </Box>

                <Output editorRef={editorRef} language={language}></Output>
            </HStack>
        </Box>
    )
}

export default CodeEditor