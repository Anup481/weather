import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, ActivityIndicator, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import { Styles, CONSTANTS, COLORS } from '../../../Themes';
import { StatusBar } from '../../Components/StatusBar';
import { NavigationBar } from '../../Components/Header';

export default function WeatherDetail(props) {
  const navigation = useNavigation();

  const [weatherDetail, setWeatherDetail] = useState(null);
  const [capital, setCapital] = useState(props.route.params.capital);

  useEffect(() => {
    _initialApiCall();
  }, []);

  // handle on back button pressed
  function _onHandleGoBack() {
    navigation.goBack();
  }

  // handle weather navigation
  function _initialApiCall() {
    let accessKey = '3b3806642352794b4ed9a8f99e74a834';
    let url =
      'http://api.weatherstack.com/current?access_key=' +
      accessKey +
      '&query=' +
      capital;
    try {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          if (data.length != 0) {
            setWeatherDetail(data);
          }
        });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <SafeAreaView style={Styles.flexOne} forceInset={CONSTANTS.forceInset}>
      {/* status bar */}
      <StatusBar />

      {/* navigation bar */}
      <NavigationBar
        label={'Weather'}
        backgroundColor={COLORS.WHITE}
        onPressBack={_onHandleGoBack}
      />

      {weatherDetail == null ? (
        <View style={[Styles.flexOne, Styles.center]}>
          <ActivityIndicator size={'large'} />
        </View>
      ) : (
        <ScrollView style={Styles.paddingHorizontal16}>
          <View style={[Styles.center, Styles.marginTop20]}>
            <Text style={Styles.fontSize20}>Weather Details</Text>
          </View>
          <View style={Styles.marginTop100}>
            <Image
              resizeMode="contain"
              source={{ uri: weatherDetail.current.weather_icons[0] }}
              style={[Styles.Width50, Styles.height100]}
            />
          </View>

          <View style={Styles.marginTop24}>
            <Text style={[Styles.marginTop20, Styles.fontSize15]}>
              Temperature: {weatherDetail.current.temperature}
            </Text>
            <Text style={[Styles.marginTop20, Styles.fontSize15]}>
              Percipitation: {weatherDetail.current.precip} %
            </Text>
            <Text style={[Styles.marginTop20, Styles.fontSize15]}>
              Wind Speed: {weatherDetail.current.wind_speed} kmph
            </Text>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
