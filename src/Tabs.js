import React from 'react'

import {
    WhiteTownComponent,
    Container,
    TabControl,
    Tab,
    TabHeader,
    Icon,
    Text,
} from 'whitetown-ui'

import Buttons from './Buttons'
import Spinners from './Spinners'
import Avatars from './Avatars'


export default class Tabs extends WhiteTownComponent {

    state = {
        currentTab: 0,
    }

    async componentWillMount() {
        const theme = this.getCurrentTheme()
        const themeColors = theme.defaultValues.colors
        this.props.navigation.setParams({ themeColors: themeColors })
    }

    tabSet(t) {
        this.setState({
            currentTab: t,
        })
    }

    render() {

        return (
            <Container>
                <TabControl onChangeTab={ (t)=>this.tabSet(t) }>

                    <Tab title={'Title'} iconName={'ios-laptop'} >
                        <Spinners navigation={this.props.navigation} />
                    </Tab>

                    <Tab header={
                        <TabHeader>
                            <Icon name="ios-star" primary={this.state.currentTab === 1} dark={this.state.currentTab !== 1} style={{ marginRight:5 }} />
                            <Text primary={this.state.currentTab === 1} >Custom</Text>
                        </TabHeader>
                    }>
                        <Buttons navigation={this.props.navigation} />
                    </Tab>

                    <Tab title={'Airplane'} icon={<Icon name="ios-airplane" danger />} >
                        <Avatars navigation={this.props.navigation} />
                    </Tab>

                </TabControl>
            </Container>
        )
    }

}

Tabs.navigationOptions = ({ navigation }) => {

    let themeColors = navigation.getParam('themeColors')
    if (!themeColors) return {}

    return {
        title: 'Scrollable tabs',
        headerStyle: {
            backgroundColor: themeColors.headerColor,
            elevation: 0,             //Android shadow
            borderBottomWidth: 0,     //iOS shadow
            borderBottomColor: null,  //iOS shadow
        },
        headerTintColor: themeColors.primary,
    }
}