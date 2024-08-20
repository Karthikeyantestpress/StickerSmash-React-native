import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";

function PrimaryButton({ label, onPress }) {
  return (
    <View style={[styles.buttonContainer, styles.primaryButtonContainer]}>
      <Pressable
        style={[styles.button, styles.primaryButton]}
        onPress={onPress}
      >
        <FontAwesome
          name="picture-o"
          size={18}
          color="#25292e"
          style={styles.buttonIcon}
        />
        <Text style={[styles.buttonLabel, styles.primaryButtonLabel]}>{label}</Text>
      </Pressable>
    </View>
  );
}

function DefaultButton({ label }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

function Button({ label, theme, onPress }) {
  return theme === "primary" ? (
    <PrimaryButton label={label} onPress={onPress} />
  ) : (
    <DefaultButton label={label} onPress={onPress} />
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
  primaryButtonContainer: {
    borderWidth: 4,
    borderColor: "#ffd33d",
    borderRadius: 18,
  },
  primaryButton: {
    backgroundColor: "#fff",
  },
  primaryButtonLabel: {
    color: "#25292e",
  },
});

export default Button;
