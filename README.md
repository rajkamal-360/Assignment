This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.

<!--
 <View
        style={{
          marginTop: hp(30),
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Animated.View
          style={[
            {width: 300, height: 150, position: 'absolute'},
            {
              zIndex: 1,
              bottom: cardsStackedAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [40, 20],
              }),
              transform: [
                {
                  scale: cardsStackedAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.8, 0.9],
                  }),
                },
              ],
              opacity: cardsStackedAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0.3, 0.6],
              }),
            },
          ]}>
          <Animated.Image
            source={cardImages?.card_3}
            style={{height: hp(30), width: wp(90), alignSelf: 'center'}}
            resizeMode="cover"
          />
        </Animated.View>
        <Animated.View
          style={[
            {width: 300, height: 150, position: 'absolute'},
            {
              zIndex: 2,
              bottom: cardsStackedAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [20, 0],
              }),
              transform: [
                {
                  scale: cardsStackedAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.9, 1.0],
                  }),
                },
              ],
              opacity: cardsStackedAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0.6, 1],
              }),
            },
          ]}>
          <Animated.Image
            source={cardImages?.card_2}
            style={{height: hp(30), width: wp(90), alignSelf: 'center'}}
            resizeMode="cover"
          />
        </Animated.View>
        {/* Frontmost View with PanResponder */}
        {/* <Animated.View */}

        {/* // style=> */}
        <Animated.Image
          {...cardsPanResponder.panHandlers}
          source={cardImages?.card_1}
          style={{
            height: hp(30),
            width: wp(90),
            alignSelf: 'center',

            // width: 300,
            // height: 150,
            position: 'absolute',
            zIndex: cardsStackedAnim.interpolate({
              inputRange: [0, 0.5, 1],
              outputRange: [3, 2, 0],
            }),
            bottom: cardsStackedAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 40],
            }),
            opacity: cardsStackedAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0.3],
            }),
            transform: [
              {translateX: cardsPan.x},
              {
                scale: cardsStackedAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0.8],
                }),
              },
            ],
          }}
          resizeMode="cover"
        />
      </View> -->

<!--

  const cardsPan = useRef(new Animated.ValueXY()).current;
  const [cardsStackedAnim, setCardsStackedAnim] = useState(
    new Animated.Value(0),
  );
  // const cardsStackedAnim = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPanResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderMove: Animated.event(
        [
          null,
          {
            dx: cardsPan.x,
            dy: cardsPan.y,
          },
        ],
        {useNativeDriver: false},
      ),
      onPanResponderTerminationRequest: () => false,
      onPanResponderRelease: (event, gestureState) => {
        // Reset translationX to 0
        Animated.timing(cardsPan.x, {
          toValue: 0,
          duration: 300,
          useNativeDriver: false,
        }).start();

        // Animate cardsStackedAnim
        Animated.timing(cardsStackedAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: false,
        }).start(() => {
          // Reset cardsStackedAnim's value
          // setCardsStackedAnim(0);
          cardsStackedAnim.setValue(0);
          // Increment currentIndex
          setCurrentIndex(currentIndex - 1);
        });
      },
    }),
  ).current; -->
# Assignment
