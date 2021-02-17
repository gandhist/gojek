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
import GopayFeature from './src/components/molecules/GopayFeature';
import MainFeature from './src/components/molecules/MainFeature';
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
                source={require('./src/assets/icon/search.png')}
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
                <Image source={require('./src/assets/icon/promo.png')} />
              </View>
              {/* end of icon promo */}
            </View>
          </View>
          {/* end section of search bar */}
          {/* section gopay */}
          <View style={{ marginHorizontal: jarakRL, paddingTop: 8 }}>
            {/* header */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#2C5FB8', borderTopLeftRadius: 4, borderTopRightRadius: 4, padding: 14 }}>
              <Image source={require('./src/assets/icon/gopay.png')} />
              <Text style={{ fontSize: 17, fontWeight: "bold", color: 'white' }} >RP 130.000</Text>
            </View>
            {/* end of header */}
            {/* details */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#2F65BD', borderBottomRightRadius: 4, borderBottomLeftRadius: 4, paddingTop: 20, paddingBottom: 14 }}>
              <GopayFeature title="Pay" img={require('./src/assets/icon/pay.png')} />
              <GopayFeature title="Nearby" img={require('./src/assets/icon/nearby.png')} />
              <GopayFeature title="Top Up" img={require('./src/assets/icon/topup.png')} />
              <GopayFeature title="More" img={require('./src/assets/icon/more.png')} />
            </View>
            {/* end of details */}
          </View>
          {/* end of section gopay */}

          {/* main menu */}
          <View style={{ marginHorizontal: jarakRL, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', }}>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '100%', paddingTop: 18 }}>
              <MainFeature title="GO-RIDE" icon={require('./src/assets/icon/go-ride.png')} />
              <MainFeature title="GO-CAR" icon={require('./src/assets/icon/go-car.png')} />
              <MainFeature title="GO-BLUEBIRD" icon={require('./src/assets/icon/go-bluebird.png')} />
              <MainFeature title="GO-SEND" icon={require('./src/assets/icon/go-send.png')} />
            </View>
            {/* </View>
          <View style={{ marginHorizontal: jarakRL, paddingTop: 20, flexDirection: 'row', justifyContent: 'space-between', }}> */}
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '100%', paddingTop: 18 }}>
              <MainFeature title="GO-DEALS" icon={require('./src/assets/icon/go-deals.png')} />
              <MainFeature title="GO-PULSA" icon={require('./src/assets/icon/go-pulsa.png')} />
              <MainFeature title="GO-FOOD" icon={require('./src/assets/icon/go-food.png')} />
              <MainFeature title="GO-MORE" icon={require('./src/assets/icon/go-more.png')} />
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
              <Image source={require('./src/assets/icon/kn.jpg')} style={{ height: 170, width: '100%', borderRadius: 10, }} />
              <View style={{ height: '100%', width: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: 0.2, borderRadius: 10 }} ></View>
              <View style={{ height: 15, width: 55, position: 'absolute', top: 16, left: 16 }}>
                <Image source={require('./src/assets/logo/white.png')} style={{ height: undefined, width: undefined, resizeMode: 'contain', flex: 1 }} />
              </View>
            </View>
            {/* end of images */}
            {/* title */}
            <View style={{ paddingTop: 16, paddingBottom: 20, borderBottomColor: '#E8E9ED', borderBottomWidth: 1}} >
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1C1C1C' }} >Go-News</Text>
              <Text style={{ fontSize: 14, fontWeight: 'normal', color: '#7A7A7A', marginBottom: 11 }}>Khabib Nurmagomedov menjadi juara UFC Lighweight</Text>
              <TouchableOpacity style={{ backgroundColor: '#61A756', paddingHorizontal: 12, paddingVertical: 11, alignSelf: 'flex-end', borderRadius: 4 }}>
                <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>Read</Text>
              </TouchableOpacity>
            </View>
            {/* end of title */}
          </View>
          {/* End of News Section */}

          {/* Internal Information */}
          <View style={{ padding: jarakRL, paddingBottom: 0 }}>
            <View style={{ height: 15, width: 55 }} >
              <Image source={require('./src/assets/logo/gojek.png')}  />
            </View>
            <View style={{ paddingVertical:10 }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1C1C1C' }} >Complete your profile</Text>
            </View>
            <View style={{ flexDirection: 'row'}}>
              <View style={{ marginRight: 15 }} >
                <Image source={require('./src/assets/dummy/facebook-connect.png')} />
              </View>
              <View style={{ flex:1 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1C1C1C' }} >Connect with facebook</Text>
                <Text style={{ fontSize: 14, fontWeight: 'normal', color: '#7A7A7A', marginBottom: 11, width: '60%' }}>Log in faster without verification code</Text>
              </View>
            </View>
            <View>
              <TouchableOpacity style={{ backgroundColor: '#61A756', paddingHorizontal: 12, paddingVertical: 11, alignSelf: 'flex-end', borderRadius: 4 }}>
                <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>Connect</Text>
              </TouchableOpacity>
            </View>
            <View style={{ borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginTop: 16}}>
            </View>
          </View>
          {/* End of Internal Information */}

          {/* gofood banner section */}
          <View style={{ padding:16, paddingBottom: 0 }} >
            <View style={{ position: 'relative'}}>
              <Image source={require('./src/assets/dummy/food-banner.jpg')} style={{ height: 170, width: '100%', borderRadius: 10, }} />
              <View style={{ height: '100%', width: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: 0.15, borderRadius: 10 }} ></View>
              <View style={{ height: 15, width: 55, position: 'absolute', top: 16, left: 16 }}>
                <Image source={require('./src/assets/logo/white.png')} style={{ height: undefined, width: undefined, resizeMode: 'contain', flex: 1 }} />
              </View>
              <View style={{ position: 'absolute', bottom: 0, left:0, width: '100%', flexDirection:'row', alignItems: 'center', paddingHorizontal: jarakRL, paddingBottom: jarakRL }} >
                <View>
                  <Text style={{ fontSize:18, fontWeight: 'bold', color: 'white', marginBottom:8}} >Free GO-FOOD vouchers</Text>
                  <Text style={{ fontSize:12, fontWeight: '500', color: 'white' }} >Quick, Before they run out</Text>
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
          {/* end of gofood banner section */}

          {/* Nearby Go-Food */}
          <View style={{ padding: jarakRL }} >
            <View style={{ height: 15, width: 55, marginBottom:10 }} >
              <Image source={require('./src/assets/logo/go-food.png')}  />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1C1C1C' }} >Nearby Restaurant</Text>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#61A756' }} >See All</Text>
             
            </View>
            <View style={{ flexDirection : 'row', paddingTop:16 }} >
              <ScrollView horizontal={true}>
                <View style={{ paddingRight:16 }}>
                  <Image source={require('./src/assets/dummy/go-food-gm.jpg')} style={{ height:170, width: 170,  borderRadius: 10, borderColor: '#E8E9ED', resizeMode: 'cover', flex:1 }} />
                  <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#1C1C1C', paddingTop: 16 }}>Bakmi GM</Text>
                </View>
                <View style={{ paddingRight:16 }}>
                  <Image source={require('./src/assets/dummy/go-food-banka.jpg')} style={{ height:170, width: 170,  borderRadius: 10, borderColor: '#E8E9ED' }} />
                  <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#1C1C1C', paddingTop: 16 }}>Martabak Bangka</Text>
                </View>
                <View style={{ paddingRight:16 }}>
                  <Image source={require('./src/assets/dummy/go-food-kfc.jpg')} style={{ height:170, width: 170,  borderRadius: 10, borderColor: '#E8E9ED' }} />
                  <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#1C1C1C', paddingTop: 16 }}>KFC</Text>
                </View>
                <View style={{ paddingRight:16 }}>
                  <Image source={require('./src/assets/dummy/go-food-orins.jpg')} style={{ height:170, width: 170,  borderRadius: 10, borderColor: '#E8E9ED' }} />
                  <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#1C1C1C', paddingTop: 16 }}>Martabak Orins</Text>
                </View>
                <View style={{ paddingRight:16 }}>
                  <Image source={require('./src/assets/dummy/go-food-pak-boss.jpg')} style={{ height:170, width: 170,  borderRadius: 10, borderColor: '#E8E9ED' }} />
                  <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#1C1C1C', paddingTop: 16 }}>Geprek Pak Boss</Text>
                </View>
              </ScrollView>
              <View style={{ borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginTop: 16 }}>
              </View>
            </View>
          </View>
          {/* end of Nearby Go-Food */}
        </ScrollView>
        {/* section bottom navigation */}
        <View style={{ height: 54, flexDirection: 'row', backgroundColor: 'white' }}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{ height: 26, width: 26 }} source={require('./src/assets/icon/home-active.png')} />
            <Text style={{ fontSize: 10, color: '#545454', marginTop: 4, color: '#43AB4A' }}>Home</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{ height: 26, width: 26 }} source={require('./src/assets/icon/order.png')} />
            <Text style={{ fontSize: 10, color: '#545454', marginTop: 4 }}>Orders</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{ height: 26, width: 26 }} source={require('./src/assets/icon/help.png')} />
            <Text style={{ fontSize: 10, color: '#545454', marginTop: 4 }}>Help</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{ height: 26, width: 26 }} source={require('./src/assets/icon/inbox.png')} />
            <Text style={{ fontSize: 10, color: '#545454', marginTop: 4 }}>Inbox</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{ height: 26, width: 26 }} source={require('./src/assets/icon/inbox.png')} />
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


/**
 * atomic design
 * atom > molecules > organisms > template > Screen
 */