import React from 'react'
import {
    View,
    Image,
    ScrollView,
    Text,
    Dimensions
} from 'react-native';
import ScrollableItem from "../../../molecules/ScrollableItem";

const windowWidth = Dimensions.get('window').width;
const jarakRL = windowWidth - (windowWidth - 17);
const ScrollableProducts = () => {
    return (
        <View style={{ padding: jarakRL }} >
            <View style={{ height: 15, width: 55, marginBottom: 10 }} >
                <Image source={require('../../../../assets/logo/go-food.png')} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1C1C1C' }} >Nearby Restaurant</Text>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#61A756' }} >See All</Text>
            </View>
            <View style={{ flexDirection: 'row', paddingTop: 16 }} >
                <ScrollView horizontal={true}>
                    <ScrollableItem image={require('../../../../assets/dummy/go-food-gm.jpg')} title="Bakmi GM" />
                    <ScrollableItem image={require('../../../../assets/dummy/go-food-banka.jpg')} title="Martabak Bangka" />
                    <ScrollableItem image={require('../../../../assets/dummy/go-food-kfc.jpg')} title="KFC" />
                    <ScrollableItem image={require('../../../../assets/dummy/go-food-orins.jpg')} title="Martabak Orins" />
                    <ScrollableItem image={require('../../../../assets/dummy/go-food-pak-boss.jpg')} title="Geprek Pak Boss" />
                </ScrollView>
                <View style={{ borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginTop: 16 }}></View>
            </View>
        </View>
    )
}

export default ScrollableProducts
