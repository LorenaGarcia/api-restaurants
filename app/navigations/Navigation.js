import React from 'react'
import { Icon } from 'react-native-elements'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator, createTabNavigator } from 'react-navigation-tabs'

import RestaurantsScreenStacks from './RestaurantsStacks'
import TopListScreenStacks from './TopListStacks'
import SearchScreenStacks from './SearchStacks'
import AccountScreenStacks from './AccountStacks'

const NavigationStacks = createBottomTabNavigator({
    Restaurants: {
        screen: RestaurantsScreenStacks,
        navigationOptions: () => ({
            tabBarLabel: "Restaurantes",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    type="material-community"
                    name="compass-outline"
                    size={22}
                    color={tintColor}
                />
            )
        })
    },
    TopLists: {
        screen: TopListScreenStacks,
        navigationOptions: () => ({
            tabBarLabel: "Ranking",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    type="material-community"
                    name="star-outline"
                    size={22}
                    color={tintColor}
                />
            )
        })
    },
    Search: {
        screen: SearchScreenStacks,
        navigationOptions: () => ({
            tabBarLabel: "Buscar",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    type="material-community"
                    name="magnify"
                    size={22}
                    color={tintColor}
                />
            )
        })
    },
    Account: {
        screen: AccountScreenStacks,
        navigationOptions: () => ({
            tabBarLabel: "Cuenta",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    type="material-community"
                    name="home-outline"
                    size={22}
                    color={tintColor}
                />
            )
        })
    },
},
    {
        initialRouteName: "Restaurants",
        order: ["Restaurants", "TopLists", "Search", "Account"],
        tabBarOptions: {
            inactiveTintColor: "rgb(128, 128, 128)",
            activeTintColor: "rgb(0, 139, 139)"
        }
    }
);

export default createAppContainer(NavigationStacks)