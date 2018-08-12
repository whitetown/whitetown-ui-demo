import React from 'react'

import { Linking } from 'react-native'

import {
    WhiteTownComponent,
    Container,
    Content,
    Card,
    CardItem,
    Text,
    Row,
    Space,
    Button,
} from 'whitetown-ui'

export default class Idea extends WhiteTownComponent {

    async componentWillMount() {
        const theme = this.getCurrentTheme()
        const themeColors = theme.defaultValues.colors
        this.props.navigation.setParams({ themeColors: themeColors })
    }

    render() {

        return (
            <Container>
                <Content sm safe>
                    <Card success>
                        <CardItem>
                            <Text bold>Why?</Text>
                            <Text>- I do not want to write style={'{all the time}'}</Text>
                            <Text>- I need a simple way to switch between color themes or change sizes/paddings</Text>
                            <Text>- I prefer to have as less as possible dependencies</Text>
                        </CardItem>
                    </Card>

                    <Card danger md>
                        <CardItem>
                            <Text bold>Do I know about other libraries?</Text>
                            <Text>Sure!</Text>
                            <Text>First I was inspired with native-base, react-native-elements, ...</Text>
                        </CardItem>
                    </Card>

                    <Text bold md>Basic approach</Text>

                    <Card >
                        <CardItem>
                            <Text bold>Sizes / paddings</Text>
                            <Text>Most components accept props:</Text>
                            <Row style={{ justifyContent: 'space-around', alignItems:'center' }}>
                                <Text xs>xs</Text>
                                <Text sm>sm</Text>
                                <Text md>md</Text>
                                <Text lg>lg</Text>
                            </Row>
                            <Text>For Text, Icon, Avatar, Spinner - this is size (fontSize)</Text>
                            <Text>For Button, ListItem, Item, Input, Space - this is height</Text>
                            <Text>For Views - this is padding</Text>
                        </CardItem>
                    </Card>

                    <Card >
                        <CardItem>
                            <Text bold>Colors</Text>
                            <Text>Many components accept color props:</Text>
                                <Text>default</Text>
                                <Text primary>primary</Text>
                                <Text info>info</Text>
                                <Text success>success</Text>
                                <Text danger>danger</Text>
                                <Text warning>warning</Text>
                                <Text dark>dark</Text>
                                <Text light>light</Text>
                                <Text note>note (not only color but size as well)</Text>
                                <Space xs />
                                <Text>Becides there are a few common colors, such as 'headerColor', 'appBackground', 'alternate', etc.. which are used indirectly</Text>
                        </CardItem>
                    </Card>

                    <Card warning>
                        <CardItem>
                            <Text bold>Any plans?</Text>
                            <Text>For now the library contains components which I needed for my last project in React Native, however I plan to add a few more</Text>
                        </CardItem>
                    </Card>

                    <Button onPress={()=>{ Linking.openURL('https://github.com/whitetown/whitetown-ui') }} >
                        <Text>Feedback? :-)</Text>
                    </Button>

                </Content>
            </Container>
        )
    }

}

Idea.navigationOptions = ({ navigation }) => {

    let themeColors = navigation.getParam('themeColors')
    if (!themeColors) return {}

    return {
        title: 'What is WhiteTown UI',
        headerStyle: { backgroundColor: themeColors.headerColor },
        headerTintColor: themeColors.primary,
        headerBackTitle: '',
    }
}
