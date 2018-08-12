import React from 'react'

import { ThemeProvider, getTheme } from 'whitetown-ui'
import darkColors from 'whitetown-ui/themes/darkColors'
import blueColors from 'whitetown-ui/themes/blueColors'

import Foot from './Foot'

const themes = [
    { name: null,   colors: null },
    { name: 'dark', colors: darkColors },
    { name: 'blue', colors: blueColors },
]

class App extends React.Component {

    render() {

        let theme = themes[0]   // try: 0, 1, 2

        return (
            <ThemeProvider theme={getTheme(theme.name, theme.colors)} >
                <Foot />
            </ThemeProvider>
        )
    }
}

export default App
