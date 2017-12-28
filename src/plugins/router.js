import React from 'react';
import {TabBarBottom, TabNavigator, StackNavigator} from 'react-navigation';
import {Icon} from 'react-native-elements';
import {StyleSheet, View} from 'react-native';

import Category from '../components/screens/Category';
import ListEvents from '../components/screens/ListEvents';


export const Tabs = TabNavigator({
        Category: {
            screen: Category,
            screenProps: 'none',
            navigationOptions: {
                tabBarLabel: "Categorias",
                tabBarIcon: ({tintColor}) => (
                    <Icon name="filter-list" color={tintColor}/>
                ),
            }
        },
        ListEvents: {
            screen: ListEvents,
            screenProps: 'none',            
            navigationOptions: {
                tabBarLabel: "Listar Eventos",
                tabBarIcon: ({tintColor}) =>(
                        <Icon name="format-list-bulleted" color={tintColor}/>
                )
            }
        },
        Profile: {
            screen: ListEvents,
            screenProps: 'none',            
            navigationOptions: {
                tabBarLabel: "Perfil",
                tabBarIcon: ({tintColor}) =>(
                        <Icon name="perm-identity" color={tintColor}/>
                )
            }
        },
        Config: {
            screen: ListEvents,
            screenProps: 'none',            
            navigationOptions: {
                tabBarLabel: "Configurações",
                tabBarIcon: ({tintColor}) =>(
                        <Icon name="settings" color={tintColor}/>
                )
            }
        }
    },
    {
        lazy: true,
        tabBarPosition: 'bottom',
        animationEnabled: true,
        tabBarComponent: TabBarBottom,
        tabBarOptions: {
            showLabel: false,
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
            activeTintColor: "black",
            inactiveTintColor: "#888888"
        },  
    });


