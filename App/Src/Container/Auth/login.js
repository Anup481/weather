import React, { Component, useState, Fragment } from 'react';
import {
  ScrollView,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import { FloatingInput } from '../../Components/Form/floating-input';
import { Styles, CONSTANTS } from '../../../Themes';
import { StatusBar } from '../../Components/StatusBar';

export default function Login() {
  const navigation = useNavigation();

  const [countryName, setCountryName] = useState('');

  // update a country name
  function _updateCountryName(updatedName) {
    if (updatedName != undefined) {
      setCountryName(updatedName);
    }
  }

  // handle submittion on country name
  function _handleSubmit() {
    navigation.navigate('CountryDetail', {
      countryName: countryName
      });
  }

  return (
    <SafeAreaView style={Styles.container} forceInset={CONSTANTS.forceInset}>
      {/* status bar */}
      <StatusBar />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        enabled={true}
        style={Styles.flexOne}>
        <ScrollView
          bounces={false}
          overScrollMode={'never'}
          contentContainerStyle={[Styles.flexGrowOne, Styles.center]}
          keyboardShouldPersistTaps={'always'}
          showsVerticalScrollIndicator={false}>
          {/* Floating text label */}
          <FloatingInput
            attrName="countryName"
            title="Enter Country"
            value={countryName}
            updateMasterState={_updateCountryName}
            textInputStyles={[
              Styles.alignContentCenter,
              Styles.fontSize15,
              Styles.Width200,
              Styles.colorBlack,
            ]}
            otherTextInputProps={{
              maxLength: CONSTANTS.Width12,
            }}
          />

          {/* submit button */}
          <TouchableOpacity
            disabled={countryName.length == 0}
            style={[
              Styles.borderRadius3,
              Styles.paddingVertical8,
              Styles.paddingHorizontal16,
              Styles.marginTop24,
              Styles.borderRadius3,
              countryName.length != 0
                ? Styles.backgroundColorBlack
                : Styles.backgroundColorGrey,
            ]}
            onPress={() => _handleSubmit()}>
            <Text style={Styles.colorWhite}>Submit</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
