import { StackActions } from '@react-navigation/compat';
import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Products from "../screens/Products";
import Pro from "../screens/Pro";
import Elements from "../screens/Elements";

//drawer
import CustomDrawerContent from "./Menu";

// header for screens
import { Icon, Header } from "../components";

export default function ProductsStack(props) {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator mode="card" headerMode="screen">
            <Stack.Screen
                name="Elements"
                component={Elements}
                option={{
                    header: ({navigation, scene}) => (
                        <Header 
                            title="Elements"
                            navigation={navigation}
                            scene={scene}
                        />
                    ),
                    cardStyle: { backgroundColor: "#F8F9FE" }
                }}
            />
            <Stack.Screen
                name="Pro"
                component={Pro}
                options={{
                    header: ({ navigation, scene }) => (
                <Header
                    title=""
                    back
                    white
                transparent
                navigation={navigation}
                scene={scene}
                />
            ),
            headerTransparent: true
            }}
            />
        </Stack.Navigator>
    );
}