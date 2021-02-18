import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//pages
import { Home, NewsDetail, Orders, OrderDetail, ScanQRCode } from "../../containers/pages";


const Stack = createStackNavigator();

function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home" >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="NewsDetail" component={NewsDetail} />
                <Stack.Screen name="Orders" component={Orders} />
                <Stack.Screen name="OrderDetail" component={OrderDetail} />
                <Stack.Screen name="ScanQRCode" component={ScanQRCode} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Router;
