import React from 'react'

import {
    WhiteTownComponent,
    Container,
    Content,
    Form,
    Item,
    Label,
    Input,
    Textarea,
    Text,
    Space,
} from 'whitetown-ui'


export default class Forms extends WhiteTownComponent {

    state = {
        default: '',
        fixed: '',
        floating: '',
        stacked: '',
        textarea: '',
    }

    async componentWillMount() {
        const theme = this.getCurrentTheme()
        const themeColors = theme.defaultValues.colors
        this.props.navigation.setParams({ themeColors: themeColors })
    }

    render() {
        return (
            <Container>
                <Content sm>

                    <Form rounded sm>
                        <Item>
                            <Label>Default</Label>
                            <Input onChangeText={(text)=>this.setState({default:text})} value={this.state.default} placeholder={'try me'} />
                        </Item>
                        <Space xs/>
                        <Item fixed error md>
                            <Label>Fixed</Label>
                            <Input onChangeText={(text)=>this.setState({fixed:text})} value={this.state.fixed} />
                        </Item>
                    </Form>

                    <Space xs/>

                    <Form bordered xs>
                        <Item floating rounded>
                            <Label>Floating</Label>
                            <Input onChangeText={(text)=>this.setState({floating:text})} value={this.state.floating} />
                        </Item>
                        <Space xs/>
                        <Item floating rounded lg>
                            <Label>Floating</Label>
                            <Input onChangeText={(text)=>this.setState({floating:text})} value={this.state.floating} />
                        </Item>
                    </Form>

                    <Space xs/>

                    <Form bordered xs>
                        <Item stacked bordered>
                            <Label>Stacked</Label>
                            <Input onChangeText={(text)=>this.setState({stacked:text})} value={this.state.stacked} />
                        </Item>
                        <Space xs/>
                        <Item stacked nounderline md>
                            <Label>Stacked</Label>
                            <Input onChangeText={(text)=>this.setState({stacked:text})} value={this.state.stacked} />
                        </Item>
                    </Form>

                    <Text>Textarea</Text>
                    <Item bordered rounded>
                        <Textarea rowSpan={5} onChangeText={(text)=>this.setState({textarea:text})} value={this.state.textarea} placeholder={'enter something'} />
                    </Item>

                </Content>
            </Container>
        )
    }

}

Forms.navigationOptions = ({ navigation }) => {

    let themeColors = navigation.getParam('themeColors')
    if (!themeColors) return {}

    return {
        title: 'Input fields',
        headerStyle: { backgroundColor: themeColors.headerColor },
        headerTintColor: themeColors.primary,
    }
}
