import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Colors from '../constants/Colors';
import ProductDetailsScreen from '../screens/shop/ProductDetailsScreen';
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';

const ProductsNavigator = createStackNavigator({
  ProductsOverview: ProductsOverviewScreen,
  ProductDetails: ProductDetailsScreen
},{
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
    },
    headerTitleStyle:{
      fontFamily: 'open-sans-bold',
    },
    headerTintColor: 'white',
    headerTint: Platform.OS === 'android' ? 'white' : Colors.primary
  }
});

export default createAppContainer(ProductsNavigator);