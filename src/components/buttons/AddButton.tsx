import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppColors} from '../../constants/colors';
import {fp, hp, wp} from '../../utils/resDimensions';

const AddButton = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        backgroundColor: AppColors?.white,
        height: fp(6),
        width: fp(6),
        borderRadius: fp(3),
        position: 'absolute',
        bottom: hp(7),
        right: wp(10),
      }}>
      <Text
        style={{
          fontSize: fp(4.2),
        }}>
        +
      </Text>
    </View>
  );
};

export default AddButton;

const styles = StyleSheet.create({});
