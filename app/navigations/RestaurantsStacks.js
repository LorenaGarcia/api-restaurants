import { createStackNavigator } from 'react-navigation-stack'
import RestaurantsScreen from '../screens/Restarurants'

const RestaurantsScreenStacks = createStackNavigator(
    {
        Restaurants: {
            screen: RestaurantsScreen,
            navigationOptions: () => ({
                title: "Restaurantes"
            })
        }
    }
);

export default RestaurantsScreenStacks