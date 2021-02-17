import React from "react";
import {
    View,
    Text,
    Image
  } from 'react-native';

const MainFeature = (props) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ borderWidth: 1, borderColor: '#e8e8e8', padding: 6, borderRadius: 21, shadowRadius: 20 }}>
                <Image style={{ width: 44, height: 44 }} source={props.icon} />
            </View>
            <Text style={{ fontSize: 13, color: 'black', fontWeight: 'bold', marginTop: 5 }} >{props.title}</Text>
        </View>
);
}


export default MainFeature;