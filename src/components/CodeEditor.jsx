import React, { useRef, useState } from "react"
import { Box, HStack, Button, Text, VStack } from "@chakra-ui/react"
import { Editor } from "@monaco-editor/react"
import LanguageSelector from "./LanguageSelector";
import Output from "./Output";
import { DEFAULT_CODE } from "./constants";

function CodeEditor() {
    const editorRef = useRef(null);
    const [value, setValue] = useState('');
    const [language, setLanguage] = useState('javascript');
    const [fontSize, setFontSize] = useState(16);
    const [wordWrap, setWordWrap] = useState(true)

    const onMount = (editor) => {
        editorRef.current = editor;
        editor.focus();
    }

    function onSelect(language) {
        setLanguage(language)
    }

    function setDefaultCode(language) {
        setValue(DEFAULT_CODE[language]);
        console.log(wordWrap)
    }

    return (
        <Box>
            <HStack borderSpacing={4}>
                <Box w='70%'>
                    <LanguageSelector language={language} onSelect={onSelect} setDefaultCode={setDefaultCode} fontSize={fontSize} setFontSize={setFontSize} wordWrap={wordWrap} setWordWrap={setWordWrap}></LanguageSelector>
                    <Box border='2px solid' p={2} bg='#1e1e1e' borderRadius={4} borderColor='#1e1e1e'>
                        <Editor height="73vh"
                            theme="vs-dark"
                            language={language}
                            value={value}
                            defaultValue={"console.log(\"Hello World\");"}
                            onChange={(val) => setValue(val ?? "")}
                            onMount={onMount}
                            options=
                            {
                                {
                                    fontSize: fontSize,
                                    minimap: {
                                        enabled: false
                                    },
                                    scrollbar: {
                                        vertical: 'hidden'
                                    },
                                    overviewRulerBorder: false,
                                    overviewRulerLanes: 0,
                                    hideCursorInOverviewRuler: true,
                                    stickyScroll: {
                                        enabled: false
                                    },
                                    scrollBeyondLastLine: false,
                                    wordWrap: wordWrap
                                }
                            }
                        />
                    </Box>
                </Box>

                <Output editorRef={editorRef} language={language}></Output>
            </HStack>
        </Box>
    )
}

export default CodeEditor