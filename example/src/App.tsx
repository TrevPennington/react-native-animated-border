import { AnimatedBorderView } from 'react-native-animated-gradient-border';
import { Text, View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <AnimatedBorderView
          style={styles.borderView}
          borderRadius={18}
          borderWidth={16}
          colors={['green', 'blue', 'green']}
        >
          <Text style={styles.buttonText}>
            Howdy this is a test to see what happens
          </Text>
        </AnimatedBorderView>

        <View
          style={styles.borderViewReg}
          // borderRadius={18}
          // borderWidth={6}
          // colors={['green', 'blue', 'green']}
        >
          <Text style={styles.buttonText}>
            Howdy this is a test to see what happens
          </Text>
        </View>

        <AnimatedBorderView
          style={styles.smallButton}
          borderRadius={40}
          borderWidth={4}
        >
          <Text style={styles.buttonText}>Sign up</Text>
        </AnimatedBorderView>

        <AnimatedBorderView
          style={styles.smallButton}
          borderRadius={40}
          borderWidth={4}
          colors={['darkorchid', 'lavenderblush', 'darkorchid']}
        >
          <Text style={[styles.buttonText]}>Subscribe</Text>
        </AnimatedBorderView>

        <AnimatedBorderView
          style={styles.smallButton}
          borderRadius={12}
          borderWidth={2}
          colors={['slategray', 'silver', 'slategray']}
        >
          <Text style={styles.buttonText}>Register now!</Text>
        </AnimatedBorderView>

        <AnimatedBorderView
          style={styles.circleButton}
          borderRadius={50}
          borderWidth={8}
          colors={['lightcoral', 'mistyrose', 'lightcoral']}
        >
          <Text style={styles.buttonText}>Hi</Text>
        </AnimatedBorderView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: 600,
    fontSize: 16,
  },
  borderView: {
    marginTop: 10,
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'skyblue',
  },
  borderViewReg: {
    marginTop: 10,
    alignItems: 'center',
    padding: 20,
    borderRadius: 18,
    borderWidth: 16,
    backgroundColor: 'skyblue',
  },
  smallButton: {
    marginTop: 20,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  circleButton: {
    marginTop: 20,
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
