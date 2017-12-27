import React from 'react';
import {TabBarBottom, TabNavigator} from 'react-navigation';
import {Icon} from 'react-native-elements';
import {StyleSheet, View} from 'react-native';

import Category from '../components/screens/Category';
import ListEvents from '../components/screens/ListEvents';


export const Tabs = TabNavigator({

        Category: {
            screen: Category,
            navigationOptions: {
                tabBarLabel: "Categorias",
                tabBarIcon: ({tintColor}) => (
                    <Icon name="sort" color={tintColor}/>
                ),
            }
        },
        ListEvents: {
            screen: ListEvents,
            navigationOptions: {
                tabBarLabel: "Listar Eventos",
                tabBarIcon: ({tintColor}) =>(
                        <Icon name="view-list" color={tintColor}/>
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
                fontSize: 14,
            },
            iconStyle: {
                height: 24,
                width: 24,
            },
            style: {
                height: 56,
                backgroundColor: 'transparent',
            },
            activeTintColor: "black",
            inactiveTintColor: "#888888"
        },
    });


