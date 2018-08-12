import React from "react"

import { Platform } from 'react-native'

import { createStackNavigator, createBottomTabNavigator } from "react-navigation"

import {
    Footer,
    FooterTab,
    Icon,
    Text,
} from 'whitetown-ui'

import Idea from './Idea'
import MenuStack from './MenuStack'
import Avatars from './Avatars'
import IconsTexts from './IconsTexts'

const IdeaStack = createStackNavigator({ IdeaTab: Idea })
const AvatarsStack = createStackNavigator({ AvatarsTab: Avatars })
const IconsStack = createStackNavigator({ IconsTextsTab: IconsTexts })

const Foot = createBottomTabNavigator({
    IdeaStack,
    MenuStack,
    AvatarsStack,
    IconsStack,
    },
    {
        tabBarComponent: (props)=> <CustomTabBar {...props} />,
        navigationOptions:{
            tabBarVisible: true,
            headerStyle: { header: null },
        },
        tabBarOptions: {
            tabStyle: Platform.isPad ? { justifyContent:'space-evenly' } : {},
        },
    }
)

const labelStyle = { fontSize:11, flex:undefined }

const FooterText = (props) => (
    <Text primary={props.index===props.current} dark={props.index!==props.current} style={labelStyle} numberOfLines={1} adjustsFontSizeToFit={true} minimumFontScale={0.2}>
            {props.children}
    </Text>
)

class CustomTabBar extends React.Component {

    render() {

        const index = this.props.navigation.state.index

        return (
            <Footer>
                <FooterTab onPress={ ()=> this.props.navigation.navigate('IdeaTab') } >
                    <Icon name="ios-bulb" primary={index===0} dark={index!==0} />
                    <FooterText index={index} current={0} >Idea</FooterText>
                </FooterTab>
                <FooterTab onPress={ ()=> this.props.navigation.navigate('MainMenu') } >
                    <Icon name="ios-list" primary={index===1} dark={index!==1} />
                    <FooterText index={index} current={1} >Menu</FooterText>
                </FooterTab>
                <FooterTab onPress={ ()=> this.props.navigation.navigate('AvatarsTab') } >
                    <Icon name="ios-person" primary={index===2} dark={index!==2} />
                    <FooterText index={index} current={2} >Avatars</FooterText>
                </FooterTab>
                <FooterTab onPress={ ()=> this.props.navigation.navigate('IconsTextsTab') } >
                    <Icon name="ios-aperture" primary={index===3} dark={index!==3} />
                    <FooterText index={index} current={3} >Icon,Text</FooterText>
                </FooterTab>
            </Footer>
        )
    }
}

export default Foot

