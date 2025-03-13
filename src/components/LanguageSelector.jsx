import { Box, Text, Button } from '@chakra-ui/react'
import React from 'react'
import {
    MenuContent,
    MenuItem,
    MenuRoot,
    MenuTrigger,
} from "./ui/menu"
import { LANGUAGE_VERSIONS } from './constants'
import { HStack, IconButton, NumberInput } from "@chakra-ui/react"
import { LuMinus, LuPlus } from "react-icons/lu"


const LanguageSelector = ({ language, onSelect, setDefaultCode, fontSize, setFontSize }) => {

    const languages = Object.entries(LANGUAGE_VERSIONS);

    return (
        <Box ml={2} mb={4}>
            <Text mb={2} fontSize='lg'>Language</Text>
            <HStack>

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


                <Button size='sm' variant='outline' colorPalette='teal' onClick={() => { setDefaultCode(language) }}>Reset Code</Button>
                <NumberInput.Root defaultValue={fontSize} unstyled spinOnPress={true} onValueChange={(v) => setFontSize(v.valueAsNumber)} min={6}>
                    <HStack gap="1">
                        <NumberInput.DecrementTrigger asChild>
                            <IconButton variant="outline" size="xs">
                                <LuMinus />
                            </IconButton>
                        </NumberInput.DecrementTrigger>
                        <NumberInput.ValueText textAlign="center" fontSize="lg" minW="3ch" />
                        <NumberInput.IncrementTrigger asChild>
                            <IconButton variant="outline" size="xs">
                                <LuPlus />
                            </IconButton>
                        </NumberInput.IncrementTrigger>
                    </HStack>
                </NumberInput.Root>
            </HStack>



        </Box>
    )
}

export default LanguageSelector 