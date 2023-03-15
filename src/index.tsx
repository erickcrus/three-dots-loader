import React, { useEffect, useRef } from 'react';
import { View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withRepeat, withSequence, withTiming } from 'react-native-reanimated';

type Props = {
  size: number,
  duration?: number,
  color?: string,
  spacing?: number,
  animationDuration?: number
}

const Loader = (props: Props) => {
  const { size, animationDuration, color, spacing } = props;
  const sizeList = useRef([useSharedValue(1), useSharedValue(1), useSharedValue(1)]);
  const count = sizeList.current.length;

  const circleColor = color ?? '#00b9fc';

  useEffect(() => {
    for (let i = 0; i < count; i++) {
      let d = animationDuration ?? 600;
      sizeList.current[i].value = withRepeat(withDelay(d * i / 2, withSequence(withTiming(1.3, { duration: d }), withTiming(1, { duration: d }))), -1, true);
    }
  }, []);

  const animated = useRef([]);
  const listItems = useRef([]);
  for (let i = 0; i < count; i++) {
    animated.current[i] = useAnimatedStyle(() => ({
      transform: [{ scale: sizeList.current[i].value }]
    }));
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