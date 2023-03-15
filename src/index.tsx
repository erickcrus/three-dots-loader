import React, { useEffect, useRef } from 'react';
import { View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withRepeat, withSequence, withTiming } from 'react-native-reanimated';

type Props = {
  size: number,
  color?: string,
  spacing?: number,
  animationDuration?: number
}

const Loader = (props: Props) => {
  const { size, animationDuration, color, spacing } = props;
  const sizeList = [
    useSharedValue(1),
    useSharedValue(1),
    useSharedValue(1)
  ];
  const count = sizeList.length;

  const circleColor = color ?? '#00b9fc';

  useEffect(() => {
    for (let i = 0; i < count; i++) {
      if (sizeList) {
        let d = animationDuration ?? 600;
        sizeList[i].value = withRepeat(withDelay(d * i / 2, withSequence(withTiming(1.3, { duration: d }), withTiming(1, { duration: d }))), -1, true) ?? 1;
      }
    }
  }, [sizeList, animationDuration, count]);

  const animated = useRef<{ transform: { scale: number }[] }[]>([]);
  const listItems = useRef([<Animated.View />]);
  for (let i = 0; i < count; i++) {
    animated.current[i] = useAnimatedStyle(() => {
      const scale = sizeList[i]?.value ?? 1;
      return {
        transform: [{ scale }]
      }
    }, [sizeList]);
    listItems.current[i] = <Animated.View key={'ball' + i} style={[{
      width: size,
      height: size,
      marginHorizontal: spacing ?? 3,
      borderRadius: size / 2,
      backgroundColor: circleColor,
    }, animated.current[i]]} />
  }

  return <View style={{
    flexGrow: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }}>
    {listItems.current}
  </View>
}

export default Loader;