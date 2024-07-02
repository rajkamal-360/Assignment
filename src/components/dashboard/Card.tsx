import {StyleSheet, useWindowDimensions} from 'react-native';
import React from 'react';
import Animated, {
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import {hp, wp} from '../../utils/resDimensions';
import {CardProps} from '../../types/types';

const Card = ({
  newData,
  setNewData,
  maxVisibleItems,
  item,
  index,
  dataLength,
  animatedValue,
  currentIndex,
  setCurrentIndex,
}: CardProps) => {
  const {width} = useWindowDimensions();
  const translateX = useSharedValue(0); // for horizontal translation
  const direction = useSharedValue(0); //for swipe direction

  const pan = Gesture.Pan()
    .onUpdate(e => {
      const isSwipeRight = e.translationX > 0; // Check if swipe is to right.
      direction.value = isSwipeRight ? 1 : -1; // set swipe direction

      if (currentIndex === index) {
        translateX.value = e.translationX;
        animatedValue.value = interpolate(
          Math.abs(e.translationX),
          [0, width],
          [index, index + 1],
        );
      }
    })
    .onEnd(e => {
      if (currentIndex === index) {
        console.log(newData, 'newData just after chekingg index');
        if (Math.abs(e.translationX) > 150 || Math.abs(e.velocityX) > 1000) {
          translateX.value = withTiming(width * direction.value, {}, () => {
            const nextIndex = (currentIndex + 1) % dataLength;
            runOnJS(setCurrentIndex)(nextIndex);
            // const updatedData = [...newData.slice(1), newData[currentIndex]]; // Remove the first item and add the current item
            // runOnJSsetNewData(updatedData);
            runOnJS(setNewData)([...newData, newData[currentIndex]]);
          });
          animatedValue.value = withTiming(currentIndex + 1);
        } else {
          translateX.value = withTiming(0, {duration: 500});
          animatedValue.value = withTiming(currentIndex, {duration: 500});
        }
      }
    });

  const animatedStyle = useAnimatedStyle(() => {
    const currentItem = index === currentIndex;

    const translateY = interpolate(
      animatedValue.value,
      [index - 1, index],
      [-30, 0],
    );

    const scale = interpolate(
      animatedValue.value,
      [index - 1, index],
      [0.9, 1],
    );

    const rotateZ = interpolate(
      Math.abs(translateX.value),
      [0, width],
      [0, 20],
    );

    const opacity = interpolate(
      animatedValue.value + maxVisibleItems,
      [index, index + 1],
      [0, 1],
    );

    return {
      transform: [
        {translateY: currentItem ? 0 : translateY},
        {scale: currentItem ? 1 : scale},
        {translateX: translateX.value},
        {
          rotateZ: currentItem ? `${direction.value * rotateZ}deg` : '0deg',
        },
      ],
      opacity: index < currentIndex + maxVisibleItems ? 1 : opacity,
    };
  });

  return (
    <GestureDetector gesture={pan}>
      <Animated.Image
        source={item}
        style={[
          styles.container,
          {
            height: hp(30),
            width: wp(90),
            alignSelf: 'center',
            zIndex: dataLength - index,
          },
          animatedStyle,
        ]}
        resizeMode="cover"
      />
    </GestureDetector>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 360,
    height: 200,
    borderRadius: 28,
    padding: 16,
  },
  top: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textName: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
  },
  imageContainer: {
    width: 80,
    height: 40,
  },
  image: {
    width: 80,
    height: 40,
    resizeMode: 'contain',
  },
  middle: {
    flex: 2,
    justifyContent: 'center',
  },
  textNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
  bottom: {
    flex: 1,
    flexDirection: 'row',
    gap: 56,
  },
});
