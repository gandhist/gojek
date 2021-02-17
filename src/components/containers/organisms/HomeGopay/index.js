import React from 'react'
import {
    View, Image, Text, Dimensions
} from 'react-native';
import GopayFeature from '../../../molecules/GopayFeature';


const windowWidth = Dimensions.get('window').width;
const jarakRL = windowWidth - (windowWidth - 17);
const HomeGopay = () => {
    return (
        <View style={{ marginHorizontal: jarakRL, paddingTop: 8 }}>
            {/* header */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#2C5FB8', borderTopLeftRadius: 4, borderTopRightRadius: 4, padding: 14 }}>
                <Image source={require('../../../../assets/icon/gopay.png')} />
                <Text style={{ fontSize: 17, fontWeight: "bold", color: 'white' }} >RP 13.000.000</Text>
            </View>
            {/* end of header */}
            {/* details */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#2F65BD', borderBottomRightRadius: 4, borderBottomLeftRadius: 4, paddingTop: 20, paddingBottom: 14 }}>
                <GopayFeature title="Pay" img={require('../../../../assets/icon/pay.png')} />
                <GopayFeature title="Nearby" img={require('../../../../assets/icon/nearby.png')} />
                <GopayFeature title="Top Up" img={require('../../../../assets/icon/topup.png')} />
                <GopayFeature title="More" img={require('../../../../assets/icon/more.png')} />
            </View>
            {/* end of details */}
        </View>
    )
}

export default HomeGopay
