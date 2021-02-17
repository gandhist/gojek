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

// molecules
import SearchFeature from "./src/components/molecules/SearchFeature";
import GoNews from "./src/components/molecules/GoNews";
import GoInfo from "./src/components/molecules/GoInfo";
import GoBanner from "./src/components/molecules/GoBanner";


// organisms
import ScrollableProducts from "./src/components/containers/organisms/ScrollableProducts";
import NavBar from "./src/components/containers/organisms/NavBar";
import HomeMainFeature from "./src/components/containers/organisms/HomeMainFeature";
import HomeGopay from "./src/components/containers/organisms/HomeGopay";



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const jarakRL = windowWidth - (windowWidth - 17);
const App = () => {
  return (
    <>
      <View style={{ flex: 1 }} >
        <ScrollView style={{ flex: 1, backgroundColor: 'white', paddingTop: windowHeight - (windowHeight - 15) }}>
          {/* section search bar */}
          <SearchFeature />
          {/* end section of search bar */}

          {/* section gopay */}
          <HomeGopay />
          {/* end of section gopay */}

          {/* main menu */}
          <HomeMainFeature />
          {/* end of main menu */}

          {/* horizontal line */}
          <View style={{ backgroundColor: '#F2F2F4', height: 17, marginTop: 20 }} >
          </View>
          {/* end of horizontal line */}

          {/* News Section */}
          <GoNews image={require('./src/assets/icon/kn.jpg')} title="Khabib Nurmagomedov menjadi juara UFC Lighweight" />
          {/* End of News Section */}

          {/* Internal Information */}
          <GoInfo title="Complete your profile" subTitle="Connect with facebook" desc="Log in faster without verification code" image={require('./src/assets/dummy/facebook-connect.png')} />
          {/* End of Internal Information */}

          {/* gofood banner section */}
          <GoBanner image={require('./src/assets/dummy/food-banner.jpg')} title="Free GO-FOOD vouchers" subTitle="Quick, Before they run out" />
          {/* end of gofood banner section */}

          {/* Nearby Go-Food */}
          <ScrollableProducts />
          {/* end of Nearby Go-Food */}

        </ScrollView>

        {/* section bottom navigation */}
        <NavBar />
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