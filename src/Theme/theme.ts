import { extendTheme , ThemeConfig} from '@chakra-ui/react'

const config : ThemeConfig = {

    initialColorMode : "dark"

};

const Theme = extendTheme({ config});

export default Theme;