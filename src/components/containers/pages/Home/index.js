import React from 'react'
import {
    ScrollView,
    View,
    Dimensions
} from 'react-native';

// molecules
import SearchFeature from "../../../molecules/SearchFeature";
import GoNews from "../../../molecules/GoNews";
import GoInfo from "../../../molecules/GoInfo";
import GoBanner from "../../../molecules/GoBanner";

// organisms
import ScrollableProducts from "../../../containers/organisms/ScrollableProducts";
import NavBar from "../../../containers/organisms/NavBar";
import HomeMainFeature from "../../../containers/organisms/HomeMainFeature";
import HomeGopay from "../../../containers/organisms/HomeGopay";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const jarakRL = windowWidth - (windowWidth - 17);
const Home = () => {
    return (
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
                <GoNews image={require('../../../../assets/icon/kn.jpg')} title="Khabib Nurmagomedov menjadi juara UFC Lighweight" />
                {/* End of News Section */}

                {/* Internal Information */}
                <GoInfo title="Complete your profile" subTitle="Connect with facebook" desc="Log in faster without verification code" image={require('../../../../assets/dummy/facebook-connect.png')} />
                {/* End of Internal Information */}

                {/* gofood banner section */}
                <GoBanner image={require('../../../../assets/dummy/food-banner.jpg')} title="Free GO-FOOD vouchers" subTitle="Quick, Before they run out" />
                {/* end of gofood banner section */}

                {/* Nearby Go-Food */}
                <ScrollableProducts />
                {/* end of Nearby Go-Food */}

            </ScrollView>

            {/* section bottom navigation */}
            <NavBar />
            {/* end of section bottom navigation */}
        </View>
    )
}

export default Home
