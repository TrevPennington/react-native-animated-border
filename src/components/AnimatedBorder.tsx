import {
  Canvas,
  Group,
  Mask,
  Rect,
  vec,
  SweepGradient,
  RoundedRect,
} from '@shopify/react-native-skia';
import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Easing,
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

interface AnimatedBorderProps {
  width: number;
  height: number;
  borderRadius?: number;
  colors?: string[];
  duration?: number;
}

export const AnimatedBorder: React.FC<AnimatedBorderProps> = ({
  width,
  height,
  borderRadius,
  colors = ['orage', 'orange', 'blue', 'orange'],
  duration = 5000,
}) => {
  const rotation = useSharedValue(0);

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(2, {
        duration,
        easing: Easing.linear,
      }),
      -1,
      false
    );
  }, [duration, rotation]);

  const animatedRotation = useDerivedValue(() => {
    return [{ rotate: Math.PI * rotation.value }];
  });
  return (
    <View style={{ ...StyleSheet.absoluteFillObject }}>
      <Canvas style={[{ width, height }]}>
        <Mask
          mode="luminance"
          mask={
            <Group>
              <RoundedRect
                x={0}
                y={0}
                width={width - 1}
                height={height - 1}
                r={borderRadius ?? height / 2}
                color="white"
              />
              <RoundedRect
                x={1}
                y={1}
                width={width - 3}
                height={height - 3}
                r={borderRadius ?? height / 2}
                color="black"
              />
            </Group>
          }
        >
          <Rect x={0} y={0} width={width} height={height}>
            <SweepGradient
              transform={animatedRotation}
              origin={vec(width / 2, height / 2)}
              c={vec(width / 2, height / 2)}
              colors={colors}
            />
          </Rect>
        </Mask>
      </Canvas>
    </View>
  );
};
