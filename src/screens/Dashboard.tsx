import {Image, SafeAreaView, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {AppColors} from '../constants/colors';
import {fp, hp, wp} from '../utils/resDimensions';
import {dashboardAssets} from '../assets/dashboard';
import DashboardItemGrid from '../components/dashboard/DashboardItemGrid';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import CardSwiper from './CardSwiper';
import AddButton from '../components/buttons/AddButton';

const Dashboard = () => {
  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
        backgroundColor: AppColors.black,
      }}>
      <SafeAreaView style={{marginHorizontal: wp(5)}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Image
            source={dashboardAssets?.ball}
            style={{height: fp(6), width: fp(6), alignSelf: 'center'}}
            resizeMode="contain"
          />
          <View style={{flex: 1}} />
          <Image
            source={dashboardAssets?.tipsBtn}
            style={{height: fp(8), width: fp(8), alignSelf: 'center'}}
            resizeMode="contain"
          />
        </View>
        <Text style={{fontSize: fp(4), color: AppColors.white}}>
          All your credit cards
        </Text>
        <Text
          style={{fontSize: fp(2), color: AppColors.white, marginTop: hp(1)}}>
          Find your credit cards here
        </Text>
      </SafeAreaView>

      <DashboardItemGrid />
      <CardSwiper />
      <AddButton />
    </GestureHandlerRootView>
  );
};

export default Dashboard;

// const styles = StyleSheet.create({
//   card: {
//     width: 300,
//     height: 150,
//     position: 'absolute',
//     bottom: 0,
//     opacity: 1,
//   },
// });
