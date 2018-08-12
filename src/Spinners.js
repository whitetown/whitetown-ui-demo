import React from 'react'

import {
    WhiteTownComponent,
    Container,
    Content,
    Spinner,
    Row,
    Col,
} from 'whitetown-ui'


export default class Spinners extends WhiteTownComponent {

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
                        <Col style={{ flex:1 }}><Spinner sm /></Col>
                        <Col style={{ flex:1 }}><Spinner lg /></Col>
                    </Row>

                    <Row sm>
                        <Col style={{ flex:1 }}><Spinner lg success /></Col>
                        <Col style={{ flex:1 }}><Spinner sm danger /></Col>
                    </Row>

                    <Row md>
                        <Col style={{ flex:1 }}><Spinner sm warning /></Col>
                        <Col style={{ flex:1 }}><Spinner lg dark /></Col>
                    </Row>

                    <Row lg>
                        <Col style={{ flex:1 }}><Spinner lg info /></Col>
                        <Col style={{ flex:1 }}><Spinner sm color={'blue'} /></Col>
                    </Row>

                </Content>
            </Container>
        )
    }

}

Spinners.navigationOptions = ({ navigation }) => {

    let themeColors = navigation.getParam('themeColors')
    if (!themeColors) return {}

    return {
        title: 'Spinners',
        headerStyle: { backgroundColor: themeColors.headerColor },
        headerTintColor: themeColors.primary,
    }
}
