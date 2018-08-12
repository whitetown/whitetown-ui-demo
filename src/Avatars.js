import React from 'react'
import { View } from "react-native";

import {
    WhiteTownComponent,
    Container,
    Content,
    Avatar,
    AvatarPlaceholder,
    Row,
    Col,
    Text,
} from 'whitetown-ui'

const url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Steve_Jobs_Headshot_2010-CROP.jpg/245px-Steve_Jobs_Headshot_2010-CROP.jpg'

export default class Avatars extends WhiteTownComponent {

    async componentWillMount() {
        const theme = this.getCurrentTheme()
        const themeColors = theme.defaultValues.colors
        this.props.navigation.setParams({ themeColors: themeColors })
    }

    render() {

        return (
            <Container>
                <Content sm>

                    <Row xs>
                        <Col style={{ flex:1 }}><Avatar xs url={url} initials={'SJ'} /></Col>
                        <Col style={{ flex:1 }}><AvatarPlaceholder xs initials={'SJ'} /></Col>
                    </Row>

                    <Row sm>
                        <Col style={{ flex:1 }}><Avatar sm url={url} initials={'SJ'} /></Col>
                        <Col style={{ flex:1 }}><AvatarPlaceholder sm success initials={'XY'} /></Col>
                    </Row>

                    <Row md>
                        <Col style={{ flex:1 }}><Avatar md url={url} initials={'SJ'} /></Col>
                        <Col style={{ flex:1 }}><AvatarPlaceholder md danger initials={'AB'} /></Col>
                    </Row>

                    <Row lg>
                        <Col style={{ flex:1 }}><Avatar lg url={url} initials={'SJ'} /></Col>
                        <Col style={{ flex:1 }}><AvatarPlaceholder lg primary initials={'WT'} /></Col>
                    </Row>

                </Content>
            </Container>
        )
    }

}

const ScreenTitle = (props) => (
    <View style={{ flex:1, alignItems:'center', justifyContent:'center' }} >
        <Text adjustsFontSizeToFit={true} minimumFontScale={0.5} numberOfLines={1} dark style={{ fontSize:19, fontWeight:'700', textAlign:'center' }}>
            {props.title}
        </Text>
    </View>
)

Avatars.navigationOptions = ({ navigation }) => {

    let themeColors = navigation.getParam('themeColors')
    if (!themeColors) return {}

    return {
        headerStyle: { backgroundColor: themeColors.headerColor },
        headerTintColor: themeColors.primary,
        headerTitle: ( <ScreenTitle title={'Avatars and Placeholders'} /> ),
    }
}
