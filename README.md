
# whitetown-ui-demo

How to use [whitetown-ui](https://github.com/whitetown/whitetown-ui) component library for React Native.
Displays basic components.

<p align="center">
<img src="https://raw.githubusercontent.com/whitetown/whitetown-ui-demo/master/screenshots/ios-ui.gif" alt="ios demo">
<br/>
<img src="https://raw.githubusercontent.com/whitetown/whitetown-ui-demo/master/screenshots/android-ui.gif" alt="android demo">
</p>

# installation and so on

install dependencies:

```shell
yarn
```

check that react-native-vector-icons are installed, if not link react-native-vector-icons:

```shell
react-native link
```

run:

```shell
react-native run-ios
react-native run-android
```

or you can run different configurations from VS Code

# switch themes

manually in this demo project:

open file: src/index.js

```jsx
    render() {

        let theme = themes[0]   // try: 0, 1, 2
        ...
    }
```
