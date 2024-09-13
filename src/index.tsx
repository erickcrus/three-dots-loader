import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

type Props = {
  size: number;
  color?: string;
  spacing?: number;
  animationDuration?: number;
};

const Loader = (props: Props) => {
  const { size, animationDuration, color, spacing } = props;
  const dot_1 = useSharedValue(1);
  const dot_2 = useSharedValue(1);
  const dot_3 = useSharedValue(1);

  const circleColor = color ?? '#00b9fc';

  useEffect(() => {
    let d = animationDuration ?? 600;
    dot_1.value =
      withRepeat(
        withSequence(
          withTiming(1.3, { duration: d }),
          withTiming(1, { duration: d })
        ),
        -1,
        true
      ) ?? 1;
    dot_2.value =
      withRepeat(
        withDelay(
          d / 2,
          withSequence(
            withTiming(1.3, { duration: d }),
            withTiming(1, { duration: d })
          )
        ),
        -1,
        true
      ) ?? 1;
    dot_3.value =
      withRepeat(
        withDelay(
          d,
          withSequence(
            withTiming(1.3, { duration: d }),
            withTiming(1, { duration: d })
          )
        ),
        -1,
        true
      ) ?? 1;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const animated_1 = useAnimatedStyle(() => ({
    transform: [{ scale: dot_1.value }],
  }));
  const animated_2 = useAnimatedStyle(() => ({
    transform: [{ scale: dot_2.value }],
  }));
  const animated_3 = useAnimatedStyle(() => ({
    transform: [{ scale: dot_3.value }],
  }));

  const style = {
    width: size,
    height: size,
    marginHorizontal: spacing ?? 3,
    borderRadius: size / 2,
    backgroundColor: circleColor,
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[style, animated_1]} />
      <Animated.View style={[style, animated_2]} />
      <Animated.View style={[style, animated_3]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Loader;
