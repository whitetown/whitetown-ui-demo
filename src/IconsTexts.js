import React from 'react'

import {
    WhiteTownComponent,
    Container,
    Content,
    Icon,
    Row,
    Text,
} from 'whitetown-ui'

import randomIcon from './randomIcon'

export default class IconsTexts extends WhiteTownComponent {

    async componentWillMount() {
        const theme = this.getCurrentTheme()
        const themeColors = theme.defaultValues.colors
        this.props.navigation.setParams({ themeColors: themeColors })
    }

    render() {

        return (
            <Container>
                <Content sm>
                    <Row style={{ justifyContent:'space-around' }}>
                    <Icon xs name={randomIcon()} />
                    <Icon sm name={randomIcon()} />
                    <Icon md name={randomIcon()} />
                    <Icon lg name={randomIcon()} />
                    </Row>

                    <Row style={{ justifyContent:'space-around' }}>
                    <Icon xs danger name={randomIcon()} />
                    <Icon sm success name={randomIcon()} />
                    <Icon md warning name={randomIcon()} />
                    <Icon lg info name={randomIcon()} />
                    </Row>

                    <Row style={{ justifyContent:'space-around' }}>
                    <Icon xs primary name={randomIcon()} />
                    <Icon sm dark name={randomIcon()} />
                    <Icon md light name={randomIcon()} />
                    <Icon lg size={120} name={randomIcon()} />
                    </Row>

                    <Text>Default</Text>
                    <Text note >Note</Text>
                    <Text xs primary>Primary</Text>
                    <Text md info>Info</Text>
                    <Text lg danger>Danger</Text>
                    <Text xs success>Success</Text>
                    <Text sm dark>Dark</Text>
                    <Text md warning>Warning</Text>
                    <Text lg light>Light</Text>

                    <Text italic>Italic</Text>
                    <Text bold>Bold</Text>


                </Content>
            </Container>
        )
    }

}

IconsTexts.navigationOptions = ({ navigation }) => {

    let themeColors = navigation.getParam('themeColors')
    if (!themeColors) return {}

    return {
        headerStyle: { backgroundColor: themeColors.headerColor },
        headerTintColor: themeColors.primary,
        headerTitle: ( <Text xs italic danger style={{ paddingHorizontal:5 }} >Icons and Texts, custom header</Text> ),
    }
}
