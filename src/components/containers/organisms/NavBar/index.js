import React from 'react'
import {
    View
} from 'react-native';
import NavBarIcon from "../../../molecules/NavBarIcon";
import { useNavigation } from '@react-navigation/native';



const NavBar = () => {
    const navigation = useNavigation();
    return (
        <View style={{ height: 54, flexDirection: 'row', backgroundColor: 'white' }}>
            <NavBarIcon icon={require('../../../../assets/icon/home-active.png')} title="Home" active />
            <NavBarIcon onPress={() => navigation.navigate('Orders')} icon={require('../../../../assets/icon/order.png')} title="Orders" />
            <NavBarIcon icon={require('../../../../assets/icon/help.png')} title="Help" />
            <NavBarIcon icon={require('../../../../assets/icon/inbox.png')} title="Inbox" />
            <NavBarIcon icon={require('../../../../assets/icon/account.png')} title="Account" />
        </View>
    )
}

export default NavBar
