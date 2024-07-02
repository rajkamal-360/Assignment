import {ImageSourcePropType} from 'react-native';
import Animated from 'react-native-reanimated';
import {Image} from 'react-native-reanimated/lib/typescript/Animated';

export interface CardProps {
  newData: Array<string>; // Assuming newData is an array of strings representing image sources
  setNewData: React.Dispatch<React.SetStateAction<Array<string>>>;
  maxVisibleItems: number;
  item: ImageSourcePropType; // Assuming item is a string representing the current image source
  index: number;
  dataLength: number;
  animatedValue: Animated.SharedValue<number>; // Assuming animatedValue is a shared value from 'react-native-reanimated'
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}
