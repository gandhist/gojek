import React from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity
  } from 'react-native';
  const GopayFeature = (props) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity onPress={props.onPress}>
          <Image style={{ width: 36, height: 36 }} source={props.img} />
          <Text style={{ fontSize: 13, color: 'white', fontWeight: 'bold', marginTop: 5, textAlign: 'center' }} >{props.title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
export default GopayFeature;