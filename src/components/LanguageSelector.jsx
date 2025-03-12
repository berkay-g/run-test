import { Box, Text, Button } from '@chakra-ui/react'
import React from 'react'
import {
    MenuContent,
    MenuItem,
    MenuRoot,
    MenuTrigger,
} from "./ui/menu"
import { LANGUAGE_VERSIONS } from './constants'


const LanguageSelector = ({ language, onSelect }) => {

    const languages = Object.entries(LANGUAGE_VERSIONS);

    return (
        <Box ml={2} mb={4}>
            <Text mb={2} fontSize='lg'>Language</Text>
            <MenuRoot lazyMount>
                <MenuTrigger asChild>
                    <Button variant="outline" size="sm">
                        {language}
                    </Button>
                </MenuTrigger>
                <MenuContent>
                    {
                        languages.map(([lang, version]) => {
                            return (
                                <MenuItem
                                    key={lang}
                                    value={lang}
                                    onClick={() => onSelect(lang)}
                                    color={language === lang ? 'blue.400': ''}
                                >
                                    {lang}&nbsp;
                                    <Text color='gray.600' fontSize='sm'>{version}</Text>
                                </MenuItem>
                            )
                        })
                    }
                </MenuContent>
            </MenuRoot>
        </Box>
    )
}

export default LanguageSelector 