
import React from 'react'

import { createStackNavigator } from "react-navigation"

import MainMenu from './MainMenu'

import Idea from './Idea'
import Buttons from './Buttons'
import Spinners from './Spinners'
import Avatars from './Avatars'
import Forms from './Forms'
import IconsTexts from './IconsTexts'
import Tabs from './Tabs'
import Headers from './Headers'

const MenuStack = createStackNavigator({
    MainMenu:       MainMenu,
    Idea:           Idea,
    Buttons:        Buttons,
    Spinners:       Spinners,
    Avatars:        Avatars,
    Forms:          Forms,
    IconsTexts:     IconsTexts,
    Tabs:           Tabs,
    Headers:        Headers,
})

export default MenuStack
