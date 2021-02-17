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
const GoBanner = (props) => {
    return (
        <View style={{ padding: 16, paddingBottom: 0 }} >
            <View style={{ position: 'relative' }}>
                <Image source={props.image} style={{ height: 170, width: '100%', borderRadius: 10, }} />
                <View style={{ height: '100%', width: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: 0.15, borderRadius: 10 }} ></View>
                <View style={{ height: 15, width: 55, position: 'absolute', top: 16, left: 16 }}>
                    <Image source={require('../../../assets/logo/white.png')} style={{ height: undefined, width: undefined, resizeMode: 'contain', flex: 1 }} />
                </View>
                <View style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', flexDirection: 'row', alignItems: 'center', paddingHorizontal: jarakRL, paddingBottom: jarakRL }} >
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', marginBottom: 8 }} >{props.title}</Text>
                        <Text style={{ fontSize: 12, fontWeight: '500', color: 'white' }} >{props.subTitle}</Text>
                    </View>
                    <View style={{ flex: 1, paddingLeft: 12 }} >
                        <TouchableOpacity style={{ backgroundColor: '#61A756', paddingHorizontal: 12, paddingVertical: 11, alignSelf: 'stretch', borderRadius: 4 }}>
                            <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>GET VOUCHER</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{ borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginTop: 16 }}>
            </View>
        </View>
    )
}

export default GoBanner
