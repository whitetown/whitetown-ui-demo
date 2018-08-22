import React from 'react'

import { View } from 'react-native'

import {
    WhiteTownComponent,
    Container,
    Content,
    Header,
    ListItem,
    Icon,
    Text,
    Button,
    Left,
    Body,
    Segments,
    Spinner,
    Card,
    CardItem,
} from 'whitetown-ui'

export default class Headers extends WhiteTownComponent {


    state = {
        index: 0,
        paddingTop:0,
        headerHeight: 0,
    }

    async componentWillMount() {
        const theme = this.getCurrentTheme()
        const themeColors = theme.defaultValues.colors
        this.props.navigation.setParams({ themeColors: themeColors })
    }

    onChangeHeight(height) {
        this.setState({
            paddingTop: this.state.index===7 ? height : 0,
            headerHeight: height,
        })
    }

    getHeader() {
        const theme = this.getCurrentTheme()

        const transparentColor = theme.defaultValues.colors.headerColor + 'AA'

        switch(this.state.index) {

            case 7:
                return <Header theme={theme} absolute
                    title={'Transparent header'}
                    subtitle={'Do not forget to adjust layout'}
                    navbarColor={transparentColor}
                    leftActions={[ { icon:'ios-arrow-back', action: ()=>this.props.navigation.goBack() } ]}
                    onChangeHeight={(h)=>this.onChangeHeight(h)}
                    />

            case 6:
                return <Header theme={theme} safe
                    title={'"safe" property adds left/right paddings'}
                    subtitle={'probably on iPhoneX only'}
                    leftActions={[ { icon:'ios-arrow-back', action: ()=>this.props.navigation.goBack() } ]}
                    rightActions={[{ text:'Got it', action: ()=>alert('I got it') } ]}
                    onChangeHeight={(h)=>this.onChangeHeight(h)}
                    />

            case 5:
                return <Header theme={theme}
                    title={'navbarColor changes both navBar and statusBar'}
                    subtitle={'statusBarColor changes statusBar background'}
                    navbarColor={'#BBBB88'}
                    statusBarColor={'#AAAA00'}
                    statusBarStyle={'light-content'}
                    leftActions={[ { icon:'ios-arrow-back', action: ()=>this.props.navigation.goBack() } ]}
                    onChangeHeight={(h)=>this.onChangeHeight(h)}
                    />

            case 4:
                return <Header theme={theme}
                    headerLeft={
                        <Button onPress={()=>this.props.navigation.goBack()} >
                            <Icon primary name={'ios-arrow-back'} danger />
                            <Spinner sm success />
                        </Button>
                        }
                    headerRight={
                        <Text style={{ paddingHorizontal:5}} >Static text</Text>
                        }
                    headerBody={
                        <View style={{ flex:1 }} >
                            <Segments xs items={['To be', 'or not to be?']} ratio={[1,2]} />
                        </View>
                    }
                    onChangeHeight={(h)=>this.onChangeHeight(h)}
                    />

            case 3:
                return <Header theme={theme}
                    title={'It has to be red'}
                    tintColor={'green'}
                    textColor={'red'}
                    leftActions={[ { icon:'ios-arrow-back', action: ()=>this.props.navigation.goBack() } ]}
                    rightActions={[{ text:'Got it', action: ()=>alert('I got it') } ]}
                    onChangeHeight={(h)=>this.onChangeHeight(h)}
                    />

            case 2:
                return <Header theme={theme}
                    title={'With right actions'}
                    leftActions={[ { icon:'ios-arrow-back', action: ()=>this.props.navigation.goBack() } ]}
                    rightActions={[
                        { icon:'ios-add', action: ()=>alert('Add pressed') },
                        { text:'Say Hi!', action: ()=>alert('Hi!') },
                        ]}
                    onChangeHeight={(h)=>this.onChangeHeight(h)}
                    />

            case 1:
                return <Header theme={theme}
                    title={'With subtitle'}
                    subtitle={'You can use subtitle without title'}
                    leftActions={[ { icon:'ios-arrow-back', action: ()=>this.props.navigation.goBack() } ]}
                    onChangeHeight={(h)=>this.onChangeHeight(h)}
                    />

            default:
                return <Header theme={theme}
                    title={'Default header'}
                    leftActions={[ { icon:'ios-arrow-back', action: ()=>this.props.navigation.goBack() } ]}
                    onChangeHeight={(h)=>this.onChangeHeight(h)}
                    />
        }
    }

    renderItem(item) {
        return (
            <ListItem key={item.id} onPress={()=>this.setState({
                        index:item.id,
                        paddingTop: item.id===7 ? this.state.headerHeight : 0,
                    })} >
                <Left><Icon name={'ios-checkmark'} primary={this.state.index===item.id} light={this.state.index!==item.id} /></Left>
                <Body><Text>{item.text}</Text></Body>
            </ListItem>
        )
    }

    render() {

        const items = [
            { id:0, text:'Default' },
            { id:1, text:'With subtitle' },
            { id:2, text:'With right actions' },
            { id:3, text:'TintColor, TextColor' },
            { id:4, text:'Custom Left, Body, Right' },
            { id:5, text:'Header color' },
            { id:6, text:'Safe header' },
            { id:7, text:'Transparent ' },
        ]


        return (
            <Container>
                {this.getHeader()}
                <Content sm contentContainerStyle={{ paddingTop:this.state.paddingTop }} >

                    <Card><CardItem md><Text>Here you can see different headers. </Text></CardItem></Card>

                    <Text bold>Select header:</Text>
                    { items.map( item => this.renderItem(item) ) }

                    <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>

                </Content>
            </Container>
        )
    }

}

Headers.navigationOptions = ({ navigation }) => {

    let themeColors = navigation.getParam('themeColors')
    if (!themeColors) return {}

    return {
        header: null,
        headerStyle: { backgroundColor: themeColors.headerColor },
    }
}
