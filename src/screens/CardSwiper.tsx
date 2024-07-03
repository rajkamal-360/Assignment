import {SafeAreaView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {useSharedValue} from 'react-native-reanimated';
import {cardImages} from '../assets/dashboard';
import Card from '../components/dashboard/Card';
import {AppColors} from '../constants/colors';
import {hp} from '../utils/resDimensions';

const CardSwiper = () => {
  const [newData, setNewData] = useState(cardImages || []); // Ensure newData is always an array
  console.log('🚀 ~ CardSwiper ~ newData:', newData);
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log('🚀 ~ CardSwiper ~ currentIndex:', currentIndex);
  const animatedValue = useSharedValue(0);
  const MAX = 3;

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView style={styles.container}>
        <View style={styles.cardContainer}>
          {Array.isArray(newData) &&
            newData.map((item, index) => {
              console.log('🚀 ~ newData.map ~ index:', index);
              if (index > currentIndex + MAX || index < currentIndex) {
                null;
              }
              return (
                <Card
                  newData={newData}
                  setNewData={setNewData}
                  maxVisibleItems={MAX}
                  item={item}
                  index={index}
                  dataLength={newData.length}
                  animatedValue={animatedValue}
                  currentIndex={currentIndex}
                  setCurrentIndex={setCurrentIndex}
                  key={index}
                />
              );
            })}
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default CardSwiper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.grey,
    marginTop: hp(4),
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
