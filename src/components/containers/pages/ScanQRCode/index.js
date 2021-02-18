import React, {useState} from 'react'
import { Text, View, Dimensions, StatusBar, StyleSheet } from "react-native";
import { RNCamera } from 'react-native-camera';

const {height, width} = Dimensions.get('window');
const CamHeight = (height/100) * 27
const jarakRL = width -  (width - 16)
const IconWithText = (props) => {
    return (
        <View style={{  alignItems: 'center' }}>
            <View style={{ height:60, width:60,  borderRadius: 70, backgroundColor: '#61A756' }} />
            <Text style={{ maxWidth:70, textAlign: 'center', marginTop: 10 }} >{props.title}</Text>
        </View>
    );
}

const IconAction = () => {
    return (
        <View style={{ width:35, height: 35, backgroundColor: 'white', borderRadius: 35 }} />
    );
}

  
const ScanQRCode = () => {
    
    const [result, setResult] = useState("");
    const isJson = (string) => {
        try {
            JSON.parse(string)
        } catch (error) {
            return false
        }
        return true;
    }
    const barcodeRecognized = ({barcodes}) => {
        barcodes.forEach(el => {
            if(typeof el.rawData){
                let data = isJson(el.data)
                console.log(`${el.data} adalah ${data} json`)
                if(!data){
                    setResult(el.data);
                }
            }
        });
    }

    return (
        // wrapper
        <View style={{ flex:1 }}>
            <StatusBar backgroundColor="grey" />
            {/* camera scanner */}
            <View style={{ flex:1, flexDirection: 'row', backgroundColor: 'grey', justifyContent: 'space-between' }}>
                <RNCamera
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.on}
                    androidCameraPermissionOptions={{
                        title: 'Permission to use camera',
                        message: 'We need your permission to use your camera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                    onGoogleVisionBarcodesDetected={barcodeRecognized}
                    >
                    
                </RNCamera>
                <IconAction />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 80 }}>
                    <IconAction />
                    <IconAction />
                </View>
                    
                
            </View>
            {/* shortcut */}
            <View style={{ height : CamHeight, backgroundColor: 'white', paddingHorizontal: jarakRL }}>
                <View style={{ alignItems: 'center', marginTop:8, marginBottom: 18}}>
                    <View style={{ backgroundColor: '#E0E0E0', height: 3, width: 50, marginVertical: 1 }} />
                    <View style={{ backgroundColor: '#E0E0E0', height: 3, width: 50, marginVertical: 1 }} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black' }}>{result == '' ? 'More Options' : result}</Text>
                    <Text style={{ fontSize: 14, color: '#61A756', fontWeight: 'bold' }} >SHORTCUT</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginTop: 14, width: '100%' }} >
                    <View style={{ flexDirection: 'row', alignItems: 'flex-start', width: 170, justifyContent: 'space-between', paddingRight: 12 }}>
                        <IconWithText title="Phone Number" />
                        <IconWithText title="GoPay Code" />
                    </View>
                    <View style={{ height:60, width:1, backgroundColor: '#E0E0E0', marginHorizontal: 1 }} />
                    <View style={{ flex: 1, paddingLeft: 16  }}>
                        <Text style={{ width: '100%' }}>Your recent GoPay receivers will show here. no admin fees!</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    preview: {
        width: '100%',
        height: '100%',
        position : 'absolute',
        top: 0,
        left: 0,
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    capture: {
      flex: 0,
      backgroundColor: '#fff',
      borderRadius: 5,
      padding: 15,
      paddingHorizontal: 20,
      alignSelf: 'center',
      margin: 20,
    },
  });

export default ScanQRCode
