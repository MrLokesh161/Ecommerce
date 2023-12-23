import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from './Pages/Signup';
import SignUp2Screen from './Pages/Signup2';
import LoginScreen from './Pages/Login';
import CodeVerification from './Pages/CodeVerification';
import Home from './Pages/Home';
import PaymentPage from './Pages/PaymentPage1';
import Test from './Pages/Test';
import PaymentPage2 from './Pages/PaymentPage2';
import PaymentPage3 from './Pages/PaymentPage3';
import PaymentPage4 from './Pages/PaymentPage4';
import Confirmed from './Pages/ConfirmedPage';
import OrderPage from './Pages/Orderpage';
import Deals from './Pages/Deals';
import Category from './Pages/Category';
import Menswear from './Pages/Menswear';
import Womenswear from './Pages/Womenswear';
import Groceries from './Pages/Groceries';
import Sproduct from './Pages/Singleproduct';
import AllProduct from './Pages/Allproducts';
import Dashboard from './Pages/Dashboard';
import Filter from './Pages/Filter';
import Cart from './Pages/Cart';
import User from './Pages/User';
import ProductItem from './Pages/ProductItem';
import Gifts from './Pages/Gifts';
import Manager1 from './Pages/Manager1';
import Manager2 from './Pages/Manager2';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Signup" component={SignUpScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Sign2up" component={SignUp2Screen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CodeVerification" component={CodeVerification} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Payment" component={PaymentPage} options={{ headerShown: false }} />
        <Stack.Screen name="Payment2" component={PaymentPage2} options={{ headerShown: false }} />
        <Stack.Screen name="Payment3" component={PaymentPage3} options={{ headerShown: false }} />
        <Stack.Screen name="Payment4" component={PaymentPage4} options={{ headerShown: false }} />
        <Stack.Screen name="confirmed" component={Confirmed} options={{ headerShown: false }} />
        <Stack.Screen name="TrackOrder" component={OrderPage} options={{ headerShown: false }} />
        <Stack.Screen name="Rest" component={Test} options={{ headerShown: false }} />
        <Stack.Screen name="Deals" component={Deals} options={{ headerShown: false }} />
        <Stack.Screen name="Category" component={Category} options={{ headerShown: false }} />
        <Stack.Screen name="Menswear" component={Menswear} options={{ headerShown: false }} />
        <Stack.Screen name="Womenswear" component={Womenswear} options={{ headerShown: false }} />
        <Stack.Screen name="Groceries" component={Groceries} options={{ headerShown: false }} />
        <Stack.Screen name="SProduct" component={Sproduct} options={{ headerShown: false }} />
        <Stack.Screen name="ProductList" component={ProductItem} options={{ headerShown: false }} />
        <Stack.Screen name="AProduct" component={AllProduct} options={{ headerShown: false }} />
        <Stack.Screen name="Filter" component={Filter} options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
        <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
        <Stack.Screen name="Gifts" component={Gifts} options={{ headerShown: false }} />
        <Stack.Screen name="User" component={User} options={{ headerShown: false }} />
        <Stack.Screen name="Manager1" component={Manager1} options={{ headerShown: false }} />
        <Stack.Screen name="Manager2" component={Manager2} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

AppRegistry.registerComponent(appName, () => App);
