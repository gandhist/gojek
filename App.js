/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <>
      <View style={{ flex: 1}} >
        <View style={{ flex: 1, backgroundColor: '#adc5ed' }}>
          {/* search bar */}
          <View style={{ flexDirection: 'row', backgroundColor: 'white', marginHorizontal: 17 }}>
              <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', position: 'relative' }} >
                <Image source={require('./icon/search.png')}
                  style={{ 
                    postion:'absolute',
                    top: 2,
                    left: 40
                  }}
                  />
                <TextInput placeholder="What do yout want to eat?" style={{
                  borderWidth: 1,
                  borderColor: '#e8e8e8',
                  borderRadius: 25,
                  paddingLeft: 45,
                  paddingRight: 14,
                  height: 40,
                  fontSize: 13
                }}
                />
              </View>
              <View>
                {/* icon promo */}
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Image source={require('./icon/promo.png')} />
                </View>
                {/* end of icon promo */}
              </View>
          </View>
          {/* end of search bar */}
        </View>
        <View style={{ height: 54, flexDirection: 'row', backgroundColor: 'white' }}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{ height: 26, width: 26 }} source={require('./icon/home-active.png')} />
            <Text style={{ fontSize: 10, color: '#545454', marginTop: 4, color: '#43AB4A' }}>Home</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{ height: 26, width: 26 }} source={require('./icon/order.png')} />
            <Text style={{ fontSize: 10, color: '#545454', marginTop: 4 }}>Orders</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{ height: 26, width: 26 }} source={require('./icon/help.png')} />
            <Text style={{ fontSize: 10, color: '#545454', marginTop: 4 }}>Help</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{ height: 26, width: 26 }} source={require('./icon/inbox.png')} />
            <Text style={{ fontSize: 10, color: '#545454', marginTop: 4 }}>Inbox</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{ height: 26, width: 26 }} source={require('./icon/inbox.png')} />
            <Text style={{ fontSize: 10, color: '#545454', marginTop: 4 }}>Account</Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
