# React Native Animated Gradient Border

Performant animated border gradients for react native using reanimated and skia

## Installation

1. Install

```sh
npm install react-native-animated-gradient-border
```

```sh
yarn add react-native-animated-gradient-border
```

2. Ensure peer dependencies are installed:  
   [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started/)  
   [@shopify/react-native-skia](https://shopify.github.io/react-native-skia/docs/getting-started/installation)

## Usage

```js
import { AnimatedBorderView } from 'react-native-animated-gradient-border';

// ...

<AnimatedBorderView
  style={styles.circleButton}
  borderRadius={50}
  borderWidth={2}
  colors={['lightcoral', 'mistyrose', 'lightcoral']}
>
  <Text>Submit</Text>
</AnimatedBorderView>;
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
