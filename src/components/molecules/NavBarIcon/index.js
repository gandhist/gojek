import React from 'react'
import {
    View,
    Image,
    Text,
} from 'react-native';
const NavBarIcon = (props) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{ height: 26, width: 26 }} source={props.icon} />
            {/* color: '#43AB4A' */}
            <Text style={{ fontSize: 10, color: props.active ? '#43AB4A' : '#545454', marginTop: 4 }}>{props.title}</Text>
        </View>
    )
}

export default NavBarIcon
