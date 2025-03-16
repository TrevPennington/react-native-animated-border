import {
  Canvas,
  Group,
  Mask,
  Rect,
  vec,
  SweepGradient,
  RoundedRect,
} from '@shopify/react-native-skia';
import { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View, type ViewProps } from 'react-native';
import {
  Easing,
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

interface AnimatedBorderViewProps extends ViewProps {
  borderRadius?: number;
  borderWidth?: number;
  // Possibly add base color and splash color so that it's always smooth
  // Could still have a colors prop
  colors?: string[];
  duration?: number;
  children?: React.ReactNode;
}

export const AnimatedBorderView: React.FC<AnimatedBorderViewProps> = ({
  borderRadius,
  colors = ['darkslategray', 'lightgreen', 'darkslategray'],
  duration = 5000,
  borderWidth = 1,
  children,
  ...rest
}) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const { width, height } = dimensions;
  const rotation = useSharedValue(0);

  // const calculatedBorderRadiusPerf = useCallback(() => {
  //   if (!borderRadius) return;
  //   const percent = borderRadius / height;
  //   const adjusted = (height - borderWidth * 2) * percent;
  //   return adjusted;
  // }, [height, borderRadius, borderWidth]);

  const calculatedBorderRadiusCss = useCallback(() => {
    if (!borderRadius) return;
    // const percent = borderRadius / height;
    // const adjusted = (height - borderWidth * 2) * percent;
    return borderRadius - borderWidth;
  }, [borderRadius, borderWidth]);

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
    <View
      onLayout={(e) => {
        const width = e.nativeEvent.layout.width;
        const height = e.nativeEvent.layout.height;

        console.log(width, height);
        setDimensions({
          width,
          height,
        });
      }}
      {...rest}
      style={[
        rest.style,
        {
          borderWidth,
          borderRadius,
          borderColor: 'transparent',
        },
      ]}
    >
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          top: -borderWidth,
          left: -borderWidth,
        }}
      >
        <Canvas style={[{ width: width + 1, height }]}>
          <Mask
            mode="luminance"
            mask={
              <Group>
                <RoundedRect
                  x={0}
                  y={0}
                  width={width}
                  height={height}
                  r={borderRadius ?? 0}
                  color="white"
                />
                {/* Clip */}
                <RoundedRect
                  x={borderWidth}
                  y={borderWidth}
                  width={width - borderWidth * 2}
                  height={height - borderWidth * 2}
                  r={calculatedBorderRadiusCss() ?? 0}
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
      {children}
    </View>
  );
};
