import React from 'react';
import { Image } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import Welcome from '../screens/Welcome';
import Signup from '../screens/Signup';
import Login from '../screens/Login';
import Forgot from '../screens/Forgot';
import Bible from '../screens/Bible';
import Hymn from '../screens/Hymn';
import Note from '../screens/Note';
import Settings from '../screens/Settings';
import EditProfile from '../screens/EditProfile';

import { theme } from '../constants';

const screens = createStackNavigator(
    {
        Welcome,
        Signup,
        Login,
        Forgot,
        Bible,
        Hymn,
        Note,
        Settings,
        EditProfile,
    },
    {
        defaultNavigationOptions: {
            headerStyle: {},
            headerBackImage: <Image />,
            headerBackTitle: null,
            headerLeftContainerStyle: {},
            headerRightContainerStyle: {},
        },
    }
);

export default createAppContainer(screens);

