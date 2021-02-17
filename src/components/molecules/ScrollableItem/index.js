import React from 'react'
import { View, Image, Text } from 'react-native'

const ScrollableItem = (props) => {
    return (
        <View style={{ paddingRight: 16 }}>
            <Image source={props.image} style={{ height: 170, width: 170, borderRadius: 10, borderColor: '#E8E9ED', resizeMode: 'cover', flex: 1 }} />
            <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#1C1C1C', paddingTop: 16 }}>{props.title}</Text>
        </View>
    )
}

export default ScrollableItem
