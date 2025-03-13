import React from 'react'
import { Box, Text, Button, Input, HStack, Textarea } from '@chakra-ui/react'
import { executeCode } from '../api';
import { useState } from 'react';
import { toaster } from "./ui/toaster"

const Output = ({ editorRef, language }) => {
    const [output, setOutput] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [inputValue, setInputValue] = useState('');
    const [defaultOutputText, setDefaultOutputText] = useState("Click \"Run Code\"")

    const runCode = async () => {
        const sourceCode = editorRef.current.getValue();
        if (!sourceCode) return;

        try {
            setIsLoading(true);
            const { run: result } = await executeCode(language, sourceCode, inputValue);
            result.stderr ? setIsError(true) : setIsError(false)

            setOutput(result.output)
            if (result.code != 0) {
                setIsError(true);
                setOutput(o => "ERROR: Some limit exceeded\n" + o);
            }
        } catch (error) {
            console.log(error);
            toaster.create({
                title: error.message | 'error',
                type: 'error'
            })
        } finally {
            setIsLoading(false)
            setDefaultOutputText("No Output")
        }
    };

    return (
        <Box w='40%'>
            <Text fontSize='lg'>Output</Text>

            <HStack mb={2}>

                <Button variant='outline' colorPalette='green' loading={isLoading} onClick={runCode}>
                    Run Code
                </Button>

                <Box>
                    <Textarea
                        resize='both'
                        placeholder="Input (stdin)"
                        size="xs"
                        variant="subtle"
                        border="1px solid"
                        onChange={(e) => setInputValue(e.target.value)}
                        value={inputValue}
                    />
                </Box>

            </HStack>


            <Box
                maxH='75vh'
                height='75vh'
                p={2}
                color={isError ? "red.400" : ""}
                border='1px solid'
                borderRadius={4}
                borderColor={isError ? "red.500" : '#333'}
                scrollBehavior="smooth"
                overflowY="auto"
                overflowX="auto"
                textWrap="pretty"
            >
                <Text whiteSpace='pre-wrap' color={isError ? "red.300" : !output ? 'gray.500' : 'white'}>
                    {
                        output ? output : defaultOutputText
                    }
                </Text>
            </Box>
        </Box>
    )
}

export default Output