import React from 'react'

import {
    WhiteTownComponent,
    Container,
    Content,
    ListItem,
    Left,
    Body,
    Right,
    Text,
    Icon,
} from 'whitetown-ui'

const MenuItem = (props) => (
    <ListItem sm onPress={props.onPress} >
        <Left><Icon name={props.icon} /></Left>
        <Body col={props.subtitle !== undefined}>
            <Text>{props.title}</Text>
            { props.subtitle ? <Text note>{props.subtitle}</Text> : null }
        </Body>
        <Right><Icon gray name={'ios-arrow-forward'} /></Right>
    </ListItem>
)

export default class MainMenu extends WhiteTownComponent {

    async componentWillMount() {
        const theme = this.getCurrentTheme()
        const themeColors = theme.defaultValues.colors
        this.props.navigation.setParams({ themeColors: themeColors })
    }

    openDetails(route) {
        this.props.navigation.navigate(route)
    }

    render() {
        return (
            <Container>
                <Content>

                    <MenuItem icon={'ios-bulb'} title={'Idea'} subtitle={'Why one more component library'} onPress={()=>this.openDetails('Idea')} />
                    <MenuItem icon={'ios-albums'} title={'Buttons'} onPress={()=>this.openDetails('Buttons')} />
                    <MenuItem icon={'ios-infinite'} title={'Spinners'} onPress={()=>this.openDetails('Spinners')} />
                    <MenuItem icon={'ios-person'} title={'Avatars'} onPress={()=>this.openDetails('Avatars')} />
                    <MenuItem icon={'ios-today'} title={'Forms'} onPress={()=>this.openDetails('Forms')} />
                    <MenuItem icon={'ios-aperture'} title={'Icons and Texts'} onPress={()=>this.openDetails('IconsTexts')} />
                    <MenuItem icon={'ios-keypad'} title={'Top scrollable tabs'} onPress={()=>this.openDetails('Tabs')} />
                    <MenuItem icon={'ios-card'} title={'Headers'} onPress={()=>this.openDetails('Headers')} />

                </Content>
            </Container>
        )
    }

}

MainMenu.navigationOptions = ({ navigation }) => {

    let themeColors = navigation.getParam('themeColors')
    if (!themeColors) return {}

    return {
        title: 'Components list',
        headerStyle: { backgroundColor: themeColors.headerColor },
        headerTintColor: themeColors.primary,
        headerBackTitle: null,
    }
}
