import { StyleSheet } from 'react-native';

import CONSTANTS from './constants';
import BASE from './base';

export default StyleSheet.create({
  container: {
    ...BASE.flexOne,
    backgroundColor: 'fff',
  },
  flexOne: {
    ...BASE.flexOne,
  },

  flexGrowOne: {
    ...BASE.flexGrowOne,
  },
  row: {
    ...BASE.row,
  },
  column: {
    ...BASE.column,
  },
  flexWrap: {
    ...BASE.flexWrap,
  },

  spaceBetween: {
    ...BASE.spaceBetween,
  },
  justifyCenter: {
    ...BASE.justifyCenter,
  },
  alignItemsCenter: {
    ...BASE.alignItemsCenter,
  },
  alignItemsFlexStart: {
    ...BASE.alignItemsFlexStart,
  },
  alignContentStart: {
    ...BASE.alignContentStart,
  },
  alignContentCenter: {
    ...BASE.alignContentCenter,
  },
  alignItemsFlexEnd: {
    ...BASE.alignItemsFlexEnd,
  },
  alignSelfFlexEnd: {
    ...BASE.alignSelfFlexEnd,
  },
  justifyFlexEnd: {
    ...BASE.justifyFlexEnd,
  },
  justifyFlexStart: {
    ...BASE.justifyFlexStart,
  },
  center: {
    ...BASE.center,
  },
  overFlow: {
    ...BASE.overFlow,
  },

  // font size
  fontSize15: {
    ...BASE.fontSize15,
  },
  fontSize20: {
    ...BASE.fontSize20,
  },

  // Width
  width200: {
    ...BASE.Width200,
  },

  // margin top
  marginTop20: {
    ...BASE.marginTop20,
  },
  marginTop24: {
    ...BASE.marginTop24,
  },
  marginTop100: {
    ...BASE.marginTop100
  },

  //  margin left
  marginLeft16: {
    ...BASE.marginLeft16,
  },

  // padding horizontal
  paddingVertical8: {
    ...BASE.paddingVertical8
  },
  paddingVertical10: {
    ...BASE.paddingVertical10,
  },
  paddingHorizontal16: {
    ...BASE.paddingHorizontal16,
  },
  paddingVertical16: {
    ...BASE.paddingVertical16,
  },
  paddingHorizontal40: {
    ...BASE.paddingHorizontal40,
  },

  // width
  Width24: {
    ...BASE.Width24,
  },
  Width50: {
    ...BASE.Width50
  },
  Width200: {
    ...BASE.Width200
  },
  Width300: {
    ...BASE.Width300
  },

  // height
  height24: {
    ...BASE.height24,
  },
  height100: {
    ...BASE.height100
  },
  height200: {
    ...BASE.height200
  },

  // text color
  colorWhite: {
    ...BASE.colorWhite,
  },
  colorBlack: {
    ...BASE.colorBlack,
  },
  colorGreen: {
    ...BASE.colorGreen
  },

  // background color white
  backgroundColorWhite: {
    ...BASE.backgroundColorWhite,
  },
  backgroundColorBlueGem: {
    ...BASE.backgroundColorBlueGem,
  },
  backgroundColorGrey: {
    ...BASE.backgroundColorGrey,
  },
  backgroundColorBlack: {
    ...BASE.backgroundColorBlack,
  },

  // border radius
  borderRadius3: {
    ...BASE.borderRadius3
  },
});
