import { StyleSheet } from 'react-native';

import COLOURS from './colors';
import CONSTANTS from './constants';

export default StyleSheet.create({
  flexOne: {
    flex: 1,
  },
  flexGrowOne: {
    flexGrow: 1,
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyFlexStart: {
    justifyContent: 'flex-start',
  },
  justifyFlexEnd: {
    justifyContent: 'flex-end',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  alignItemsFlexEnd: {
    alignItems: 'flex-end',
  },
  alignItemsFlexStart: {
    alignItems: 'flex-start',
  },
  alignContentStart: {
    alignContent: 'flex-start',
  },
  alignContentCenter: {
    alignContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  overFlow: {
    overflow: 'hidden',
  },
  alignSelfFlexEnd: {
    alignSelf: 'flex-end',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  // font size
  fontSize15: {
    fontSize: CONSTANTS.Width15,
  },
  fontSize20: {
    fontSize: CONSTANTS.Width20,
  },

  // margin top
  marginTop20: {
    marginTop: CONSTANTS.Width20,
  },
  marginTop24: {
    marginTop: CONSTANTS.Width24,
  },
  marginTop100: {
    marginTop: CONSTANTS.Width100
  },
  
  // margin left
  marginLeft16: {
    marginLeft: CONSTANTS.Width16,
  },

  // padding
  paddingVertical8: {
    paddingVertical: CONSTANTS.Width8
  },
  paddingVertical10: {
    paddingVertical: CONSTANTS.Width10,
  },
  paddingHorizontal16: {
    paddingHorizontal: CONSTANTS.Width16,
  },
  paddingVertical16: {
    paddingVertical: CONSTANTS.Width16,
  },
  paddingHorizontal40: {
    paddingHorizontal: CONSTANTS.Width40,
  },

  // width
  Width24: {
    width: CONSTANTS.Width24,
  },
  Width50: {
    width: CONSTANTS.Width50
  },
  Width200: {
    width: CONSTANTS.Width200
  },
  Width300: {
    width: CONSTANTS.Width300
  },

  // height
  height24: {
    height: CONSTANTS.Width24,
  },
  height100: {
    height: CONSTANTS.Width50,
  },
  height200: {
    height: CONSTANTS.Width200
  },

  // color
  colorWhite: {
    color: COLOURS.WHITE,
  },
  colorBlack: {
    color: COLOURS.BLACK,
  },
  colorGreen: {
    color: COLOURS.GREEN
  },

  // background color
  backgroundColorWhite: {
    backgroundColor: COLOURS.WHITE,
  },
  backgroundColorBlueGem: {
    backgroundColor: COLOURS.BLUE_GEM,
  },
  backgroundColorGrey: {
    backgroundColor: COLOURS.GREY,
  },
  backgroundColorBlack: {
    backgroundColor: COLOURS.BLACK,
  },
  
  // border radius
  borderRadius3: {
    borderRadius: CONSTANTS.Width3,
  },
});
