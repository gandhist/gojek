import React from 'react'
import {
    View,
    Image,
    TouchableOpacity,
    Text,
    Dimensions
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const jarakRL = windowWidth - (windowWidth - 17);

const GoInfo = (props) => {
    return (
        <View style={{ padding: jarakRL, paddingBottom: 0 }}>
            <View style={{ height: 15, width: 55 }} >
                <Image source={require('../../../assets/logo/gojek.png')} />
            </View>
            <View style={{ paddingVertical: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1C1C1C' }} >{props.title}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ marginRight: 15 }} >
                    <Image source={props.image} />
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1C1C1C' }} >{props.subTitle}</Text>
                    <Text style={{ fontSize: 14, fontWeight: 'normal', color: '#7A7A7A', marginBottom: 11, width: '60%' }}>{props.desc}</Text>
                </View>
            </View>
            <View>
                <TouchableOpacity style={{ backgroundColor: '#61A756', paddingHorizontal: 12, paddingVertical: 11, alignSelf: 'flex-end', borderRadius: 4 }}>
                    <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>Connect</Text>
                </TouchableOpacity>
            </View>
            <View style={{ borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginTop: 16 }}>
            </View>
        </View>
    )
}

export default GoInfo
