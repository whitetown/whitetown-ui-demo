import React from 'react'

import {
    View,
    Switch,
} from 'react-native'

import {
    WhiteTownComponent,
    Container,
    Content,
    Space,
    Segments,
    Button,
    Text,
    Icon,
    Row,
    Card,
    Col,
} from 'whitetown-ui'

import randomIcon from './randomIcon'

const DemoButtons = ({iconLeft, iconRight, ...rest}) => (
    <View>
        <Button {...rest}>
            {iconLeft ? <Icon name={randomIcon()} /> : null}
            <Text>Default</Text>
            {iconRight ? <Icon name={randomIcon()} /> : null}
        </Button>
        <Space xs />
        <Button info {...rest}>
            {iconLeft ? <Icon name={randomIcon()} /> : null}
            <Text>Info</Text>
            {iconRight ? <Icon name={randomIcon()} /> : null}
        </Button>
        <Space xs />
        <Button success {...rest}>
            {iconLeft ? <Icon name={randomIcon()} /> : null}
            <Text>Success</Text>
            {iconRight ? <Icon name={randomIcon()} /> : null}
        </Button>
        <Space xs />
        <Button primary {...rest}>
            {iconLeft ? <Icon name={randomIcon()} /> : null}
            <Text>Primary</Text>
            {iconRight ? <Icon name={randomIcon()} /> : null}
        </Button>
        <Space xs />
        <Button danger {...rest}>
            {iconLeft ? <Icon name={randomIcon()} /> : null}
            <Text>Danger</Text>
            {iconRight ? <Icon name={randomIcon()} /> : null}
        </Button>
        <Space xs />
        <Button warning {...rest}>
            {iconLeft ? <Icon name={randomIcon()} /> : null}
            <Text>Warning</Text>
            {iconRight ? <Icon name={randomIcon()} /> : null}
        </Button>
        <Space xs />
        <Button dark {...rest}>
            {iconLeft ? <Icon name={randomIcon()} /> : null}
            <Text>Dark</Text>
            {iconRight ? <Icon name={randomIcon()} /> : null}
        </Button>
        <Space xs />
        <Button light {...rest}>
            {iconLeft ? <Icon name={randomIcon()} /> : null}
            <Text>Light</Text>
            {iconRight ? <Icon name={randomIcon()} /> : null}
        </Button>
    </View>
)

export default class Buttons extends WhiteTownComponent {

    state = {
        size: 1,
        full: false,
        bordered: false,
        block: true,
        rounded: false,
        iconLeft: false,
        iconRight: false,
    }

    async componentWillMount() {
        const theme = this.getCurrentTheme()
        const themeColors = theme.defaultValues.colors
        this.props.navigation.setParams({ themeColors: themeColors })
    }

    setSize(size) {
        this.setState({
            size:size,
        })
    }

    render() {
        return (
            <Container>
                <Content sm>
                    <Segments value={this.state.size}
                        xs={this.state.size===0} sm={this.state.size===1} md={this.state.size===2} lg={this.state.size===3}
                        items={[ 'xs', 'sm', 'md', 'lg', ]}
                        onChangeSegment={(index)=>this.setSize(index)} />

                    <Card>
                        <Row xs>
                            <Col style={{ alignItems:'center' }}>
                                <Switch value={this.state.full} onValueChange={(value)=>this.setState({full: !this.state.full})} />
                                <Text xs>full</Text>
                            </Col>
                            <Col style={{ alignItems:'center' }}>
                                <Switch value={this.state.bordered} onValueChange={(value)=>this.setState({bordered: !this.state.bordered})} />
                                <Text xs>bordered</Text>
                            </Col>
                            <Col style={{ alignItems:'center' }}>
                                <Switch value={this.state.block} onValueChange={(value)=>this.setState({block: !this.state.block})} />
                                <Text xs>block</Text>
                            </Col>
                            <Col style={{ alignItems:'center' }}>
                                <Switch value={this.state.rounded} onValueChange={(value)=>this.setState({rounded: !this.state.rounded})} />
                                <Text xs>rounded</Text>
                            </Col>
                        </Row>
                    </Card>
                    <Card>
                        <Row xs style={{ alignItems:'center', justifyContent:'space-between' }}>
                            <Switch value={this.state.iconLeft} onValueChange={(value)=>this.setState({iconLeft: !this.state.iconLeft})} />
                            <Text xs>Icons</Text>
                            <Switch value={this.state.iconRight} onValueChange={(value)=>this.setState({iconRight: !this.state.iconRight})} />
                        </Row>
                    </Card>

                    <DemoButtons
                        xs={this.state.size===0} sm={this.state.size===1} md={this.state.size===2} lg={this.state.size===3}
                        full={this.state.full}
                        bordered={this.state.bordered}
                        block={this.state.block}
                        rounded={this.state.rounded}
                        iconLeft={this.state.iconLeft}
                        iconRight={this.state.iconRight}
                    />

                </Content>
            </Container>
        )
    }

}

Buttons.navigationOptions = ({ navigation }) => {

    let themeColors = navigation.getParam('themeColors')
    if (!themeColors) return {}

    return {
        title: 'Buttons',
        headerStyle: { backgroundColor: themeColors.headerColor },
        headerTintColor: themeColors.primary,
    }
}
