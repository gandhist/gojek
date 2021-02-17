import React from 'react'
import {
    View, Dimensions
} from 'react-native';
import MainFeature from '../../../molecules/MainFeature';


const windowWidth = Dimensions.get('window').width;
const jarakRL = windowWidth - (windowWidth - 17);
const HomeMainFeature = () => {
    return (
        <View style={{ marginHorizontal: jarakRL, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', }}>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '100%', paddingTop: 18 }}>
                <MainFeature title="GO-RIDE" icon={require('../../../../assets/icon/go-ride.png')} />
                <MainFeature title="GO-CAR" icon={require('../../../../assets/icon/go-car.png')} />
                <MainFeature title="GO-BLUEBIRD" icon={require('../../../../assets/icon/go-bluebird.png')} />
                <MainFeature title="GO-SEND" icon={require('../../../../assets/icon/go-send.png')} />
            </View>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '100%', paddingTop: 18 }}>
                <MainFeature title="GO-DEALS" icon={require('../../../../assets/icon/go-deals.png')} />
                <MainFeature title="GO-PULSA" icon={require('../../../../assets/icon/go-pulsa.png')} />
                <MainFeature title="GO-FOOD" icon={require('../../../../assets/icon/go-food.png')} />
                <MainFeature title="GO-MORE" icon={require('../../../../assets/icon/go-more.png')} />
            </View>
        </View>
    )
}

export default HomeMainFeature
