import React from 'react'
import { Box, Text, Button } from '@chakra-ui/react'
import { executeCode } from '../api';
import { useState } from 'react';
import { toaster } from "./ui/toaster"

const Output = ({ editorRef, language }) => {
    const [output, setOutput] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    const runCode = async () => {
        const sourceCode = editorRef.current.getValue();
        if (!sourceCode) return;

        try {
            setIsLoading(true);
            const { run: result } = await executeCode(language, sourceCode);
            result.stderr ? setIsError(true) : setIsError(false)
            setOutput(result.output.split('\n'))
        } catch (error) {
            console.log(error);
            toaster.create({
                title: error.message | 'error',
                type: 'error'
            })
        } finally {
            setIsLoading(false)
        }
    };

    return (
        <Box w='50%'>
            <Text mb={2} fontSize='lg'>Output</Text>
            <Button variant='outline' colorPalette='green' mb={4} loading={isLoading} onClick={runCode}>
                Run Code
            </Button>

            <Box height='75vh' p={2} color={isError ? "red.400" : ""} border='1px solid' borderRadius={4} borderColor={isError ? "red.500" : '#333'}>
                {
                    output ? output.map((line, index) => <Text key={index} color='white'>{line}</Text>) : "Click \"Run Code\""
                }
            </Box>
        </Box>
    )
}

export default Output