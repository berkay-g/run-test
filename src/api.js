import axios from 'axios';
import { LANGUAGE_VERSIONS } from './components/constants';

const API = axios.create({
    baseURL: "https://emkc.org/api/v2/piston"
})

export const executeCode = async (language, sourceCode, input) => {
    const response = await API.post('/execute', {
        "language": language,
        "version": LANGUAGE_VERSIONS[language],
        "files": [
            {
                "content": sourceCode
            }
        ],
        "stdin": input,
        "args": input.split("\n"),
        "compile_timeout": 10000,
        "run_timeout": 3000,
    })
    return response.data
}