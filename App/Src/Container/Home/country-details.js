import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import { Styles, CONSTANTS, COLORS } from '../../../Themes';
import { StatusBar } from '../../Components/StatusBar';
import { NavigationBar } from '../../Components/Header';

export default function CountryDetail(props) {
  const navigation = useNavigation();

  const [countryDetail, setCountryDetail] = useState(null);
  const [countryName, setCountryName] = useState(
    props.route.params.countryName
  );

  useEffect(() => {
    _initialApiCall();
  }, []);

  // handle on back button pressed
  function _onHandleGoBack() {
    navigation.goBack();
  }

  function _initialApiCall() {
    let url = 'https://restcountries.com/v3.1/name/' + countryName;
    try {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          if (data.length != 0) {
            setCountryDetail(data);
          }
        });
    } catch (err) {
      console.log(err);
    }
  }

  // handle weather navigation
  function _handleWeather() {
    navigation.navigate('WeatherDetail', {
      capital: countryDetail[0].capital,
    });
  }

  return (
    <SafeAreaView style={Styles.flexOne} forceInset={CONSTANTS.forceInset}>
      {/* status bar */}
      <StatusBar />

      {/* navigation bar */}
      <NavigationBar
        label={'Country'}
        backgroundColor={COLORS.WHITE}
        onPressBack={_onHandleGoBack}
      />

      {countryDetail == null ? (
        <View style={[Styles.flexOne, Styles.center]}>
          <ActivityIndicator size={'large'} />
        </View>
      ) : (
        <ScrollView style={Styles.paddingHorizontal16}>
          <View style={[Styles.center, Styles.marginTop20]}>
            <Text style={Styles.fontSize20}>Countries Details</Text>
          </View>
          <View style={Styles.marginTop24}>
            <Image
              resizeMode="contain"
              source={{ uri: countryDetail[0].flags.png }}
              style={[Styles.Width300, Styles.height200]}
            />
          </View>

          <View style={Styles.marginTop24}>
            <Text style={[Styles.marginTop20, Styles.fontSize15]}>
              Capital: {countryDetail[0].capital}
            </Text>
            <Text style={[Styles.marginTop20, Styles.fontSize15]}>
              Country's population: {countryDetail[0].population}
            </Text>
            <Text style={[Styles.marginTop20, Styles.fontSize15]}>
              latitude: {countryDetail[0].latlng[0]} deg
            </Text>
            <Text style={[Styles.marginTop20, Styles.fontSize15]}>
              longitude: {countryDetail[0].latlng[1]} deg
            </Text>
          </View>

          {/* button to check weather */}
          <View style={Styles.row}>
            <TouchableOpacity
              style={[
                Styles.marginTop20,
                Styles.paddingHorizontal40,
                Styles.paddingVertical10,
                Styles.backgroundColorBlueGem,
              ]}
              onPress={_handleWeather}>
              <Text style={[Styles.fontSize15, Styles.colorWhite]}>
                Capital weather
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
