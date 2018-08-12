
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './src';

import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'])

AppRegistry.registerComponent(appName, () => App);
