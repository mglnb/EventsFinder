import React from 'react';
import { TabBarBottom, TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';

import Category from '../components/screens/Category';
import ListEvents from '../components/screens/ListEvents';

const MainTab = StackNavigator({
    Category: {
        screen: Category,
        path: '/',
        navigationOptions: {
            title: 'Categorias',
        },
    },
    ListEvents: {
        screen: ListEvents,
        path: '/:filter',
        navigationOptions: ({ navigation }) => {
            let title = navigation && navigation.state && navigation.state.params && navigation.state.params.filter || "Lista de Eventos"
            return {
                title: `${title}`,
            }
        },
    },
},
    {
        navigationOptions: {
            headerTitleStyle: {
                color: "white",
            },
            headerStyle: {
                backgroundColor: "#5480F3"
            },
            headerTintColor: "white"
            
        }
    });

const ListTab = StackNavigator({
    ListEventsNotFilter: {
        screen: ListEvents,
        navigationOptions: ({ navigation }) => {
            let title = navigation && navigation.state && navigation.state.params && navigation.state.params.filter || "Lista de Eventos"
            return {
                title: `Lista de Eventos`,
            }
        },
    },
}, {
        navigationOptions: {
            headerTitleStyle: {
                color: "white"
            },
            headerStyle: {
                backgroundColor: "#5480F3"
            },
            headerTintColor: "white"
        }
    });

export const Tabs = TabNavigator({
    TabCategory: {
        screen: MainTab,
        screenProps: 'none',
        navigationOptions: {
            tabBarLabel: "Categorias",
            tabBarIcon: ({ tintColor }) => (
                <Icon name="filter-list" color={tintColor} />
            ),
        }
    },
    TabEvents: {
        screen: ListTab,
        screenProps: 'none',
        navigationOptions: {
            tabBarLabel: "Listar Eventos",
            tabBarIcon: ({ tintColor }) => (
                <Icon name="format-list-bulleted" color={tintColor} />
            )
        }
    },
    Config: {
        screen: ListEvents,
        screenProps: 'none',
        navigationOptions: {
            tabBarLabel: "Configurações",
            tabBarIcon: ({ tintColor }) => (
                <Icon name="settings" color={tintColor} />
            )
        }
    }
},
    {
        tabBarPosition: 'bottom',
        animationEnabled: true,
        tabBarComponent: TabBarBottom,
        tabBarOptions: {
            showLabel: true,
            showIcon: true,
            labelStyle: {
                fontSize: 12,
            },
            iconStyle: {
                height: 24,
                width: 24,
            },
            style: {
                height: 56,
                backgroundColor: 'transparent',
            },
            activeTintColor: "#5480F3",
            inactiveTintColor: "black"
        },
    });


