import React from 'react'
import {
    View,
    Image,
    TextInput,
    Dimensions,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const jarakRL = windowWidth - (windowWidth - 17);
const SearchFeature = () => {
    return (
        <View style={{ marginHorizontal: jarakRL, flexDirection: 'row' }}>
            <View style={{ position: 'relative', flex: 1 }}>
                <TextInput
                    placeholder={`Pelehlah, Nyari Apo?`}
                    style={{
                        borderWidth: 1,
                        borderColor: '#e8e8e8',
                        backgroundColor: 'white',
                        borderRadius: 25,
                        height: 40,
                        fontSize: 13,
                        paddingLeft: 45,
                        paddingRight: 14,
                        marginRight: windowWidth - (windowWidth - 13)
                    }}
                />
                <Image
                    source={require('../../../assets/icon/search.png')}
                    style={{
                        position: 'absolute',
                        top: 5,
                        left: 12
                    }}
                />
            </View>
            <View style={{ width: 40, justifyContent: 'center', alignItems: 'center' }}>
                {/* icon promo */}
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={require('../../../assets/icon/promo.png')} />
                </View>
                {/* end of icon promo */}
            </View>
        </View>
    )
}

export default SearchFeature
