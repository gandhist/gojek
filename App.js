import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
  Dimensions,
  Button,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const jarakRL = windowWidth - (windowWidth - 17);
const App = () => {
  return (
    <>
      <View style={{ flex: 1 }} >
        <ScrollView style={{ flex: 1, backgroundColor: 'white', paddingTop: windowHeight - (windowHeight - 15) }}>
          {/* section search bar */}
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
                source={require('./icon/search.png')}
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
                <Image source={require('./icon/promo.png')} />
              </View>
              {/* end of icon promo */}
            </View>
          </View>
          {/* end section of search bar */}
          {/* section gopay */}
          <View style={{ marginHorizontal: jarakRL, paddingTop: 8 }}>
            {/* header */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#2C5FB8', borderTopLeftRadius: 4, borderTopRightRadius: 4, padding: 14 }}>
              <Image source={require('./icon/gopay.png')} />
              <Text style={{ fontSize: 17, fontWeight: "bold", color: 'white' }} >RP 130.000</Text>
            </View>
            {/* end of header */}
            {/* details */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#2F65BD', borderBottomRightRadius: 4, borderBottomLeftRadius: 4, paddingTop: 20, paddingBottom: 14 }}>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image style={{ width: 36, height: 36 }} source={require('./icon/pay.png')} />
                <Text style={{ fontSize: 13, color: 'white', fontWeight: 'bold', marginTop: 5 }} >Pay</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image style={{ width: 36, height: 36 }} source={require('./icon/nearby.png')} />
                <Text style={{ fontSize: 13, color: 'white', fontWeight: 'bold', marginTop: 5 }} >Nearby</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image style={{ width: 36, height: 36 }} source={require('./icon/topup.png')} />
                <Text style={{ fontSize: 13, color: 'white', fontWeight: 'bold', marginTop: 5 }} >Top Up</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image style={{ width: 36, height: 36 }} source={require('./icon/more.png')} />
                <Text style={{ fontSize: 13, color: 'white', fontWeight: 'bold', marginTop: 5 }} >More</Text>
              </View>
            </View>
            {/* end of details */}
          </View>
          {/* end of section gopay */}

          {/* main menu */}
          <View style={{ marginHorizontal: jarakRL, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', }}>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '100%', paddingTop: 18 }}>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ borderWidth: 1, borderColor: '#e8e8e8', padding: 6, borderRadius: 21, shadowRadius: 20 }}>
                  <Image style={{ width: 44, height: 44 }} source={require('./icon/go-ride.png')} />
                </View>
                <Text style={{ fontSize: 13, color: 'black', fontWeight: 'bold', marginTop: 5 }} >GO-RIDE</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ borderWidth: 1, borderColor: '#e8e8e8', padding: 6, borderRadius: 21, shadowRadius: 20 }}>
                  <Image style={{ width: 44, height: 44 }} source={require('./icon/go-car.png')} />
                </View>
                <Text style={{ fontSize: 13, color: 'black', fontWeight: 'bold', marginTop: 5 }} >GO-CAR</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ borderWidth: 1, borderColor: '#e8e8e8', padding: 6, borderRadius: 21, shadowRadius: 20 }}>
                  <Image style={{ width: 44, height: 44 }} source={require('./icon/go-bluebird.png')} />
                </View>
                <Text style={{ fontSize: 13, color: 'black', fontWeight: 'bold', marginTop: 5 }} >GO-BLUEBIRD</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ borderWidth: 1, borderColor: '#e8e8e8', padding: 6, borderRadius: 21, shadowRadius: 20 }}>
                  <Image style={{ width: 44, height: 44 }} source={require('./icon/go-send.png')} />
                </View>
                <Text style={{ fontSize: 13, color: 'black', fontWeight: 'bold', marginTop: 5 }} >GO-SEND</Text>
              </View>
            </View>
            {/* </View>
          <View style={{ marginHorizontal: jarakRL, paddingTop: 20, flexDirection: 'row', justifyContent: 'space-between', }}> */}
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '100%', paddingTop: 18 }}>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ borderWidth: 1, borderColor: '#e8e8e8', padding: 6, borderRadius: 21, shadowRadius: 20 }}>
                  <Image style={{ width: 44, height: 44 }} source={require('./icon/go-deals.png')} />
                </View>
                <Text style={{ fontSize: 13, color: 'black', fontWeight: 'bold', marginTop: 5 }} >GO-DEALS</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ borderWidth: 1, borderColor: '#e8e8e8', padding: 6, borderRadius: 21, shadowRadius: 20 }}>
                  <Image style={{ width: 44, height: 44 }} source={require('./icon/go-pulsa.png')} />
                </View>
                <Text style={{ fontSize: 13, color: 'black', fontWeight: 'bold', marginTop: 5 }} >GO-PULSA</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ borderWidth: 1, borderColor: '#e8e8e8', padding: 6, borderRadius: 21, shadowRadius: 20 }}>
                  <Image style={{ width: 44, height: 44 }} source={require('./icon/go-food.png')} />
                </View>
                <Text style={{ fontSize: 13, color: 'black', fontWeight: 'bold', marginTop: 5 }} >GO-FOOD</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ borderWidth: 1, borderColor: '#e8e8e8', padding: 6, borderRadius: 21, shadowRadius: 20 }}>
                  <Image style={{ width: 44, height: 44 }} source={require('./icon/go-more.png')} />
                </View>
                <Text style={{ fontSize: 13, color: 'black', fontWeight: 'bold', marginTop: 5 }} >GO-MORE</Text>
              </View>
            </View>
          </View>
          {/* end of main menu */}

          {/* horizontal line */}
          <View style={{ backgroundColor: '#F2F2F4', height: 17, marginTop: 20 }} >
          </View>
          {/* end of horizontal line */}

          {/* News Section */}
          <View style={{ paddingTop: 16, paddingHorizontal: jarakRL }}>
            {/* images */}
            <View style={{ position: 'relative' }}>
              <Image source={require('./icon/kn.jpg')} style={{ height: 170, width: '100%', borderRadius: 10, }} />
              <View style={{ height: '100%', width: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: 0.2, borderRadius: 10 }} ></View>
              <View style={{ height: 15, width: 55, position: 'absolute', top: 16, left: 16 }}>
                <Image source={require('./logo/white.png')} style={{ height: undefined, width: undefined, resizeMode: 'contain', flex: 1 }} />
              </View>
            </View>
            {/* end of images */}
            {/* title */}
            <View style={{ paddingTop: 16, paddingBottom: 20, borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginBottom: 20 }} >
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1C1C1C' }} >Go-News</Text>
              <Text style={{ fontSize: 14, fontWeight: 'normal', color: '#7A7A7A', marginBottom: 11 }}>Khabib Nurmagomedov menjadi juara UFC Lighweight</Text>
              <TouchableOpacity style={{ backgroundColor: '#61A756', paddingHorizontal: 12, paddingVertical: 11, alignSelf: 'flex-end', borderRadius: 4 }}>
                <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>Read</Text>
              </TouchableOpacity>
            </View>
            {/* end of title */}
          </View>
          {/* End of News Section */}
        </ScrollView>
        {/* section bottom navigation */}
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
        {/* end of section bottom navigation */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
