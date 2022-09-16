import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';

import { Styles, COLORS, CONSTANTS } from '../../../Themes';

export default function Statusbar(props) {
  return (
    <View
      style={[
        Styles.row,
        Styles.paddingHorizontal16,
        Styles.paddingVertical16,
        { backgroundColor: props.backgroundColor },
      ]}>
      {/* primary section */}
      <View style={[Styles.row, Styles.alignItemsCenter]}>
        {/* navigation icon */}
          <TouchableOpacity
            activeOpacity={CONSTANTS.activeOpacity}
            onPress={() => props.onPressBack()}>
            <Image
              source={require('../../../Assets/Image/backArr.png')}
              style={[Styles.Width24, Styles.height24]}
            />
          </TouchableOpacity>

        {/* menu bar label */}
        <Text
          style={[
            Styles.colorBlack,
            Styles.fontSize15,
            Styles.marginLeft16,
          ]}
          numberOfLines={1}
          ellipsizeMode={'tail'}>
          {props.label}
        </Text>
      </View>
    </View>
  );
}
