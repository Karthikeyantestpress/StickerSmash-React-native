import { StyleSheet, Image } from 'react-native';

const PlaceholderImage = require('../assets/images/background-image.png')

export default function ImageViewer() {
  return (
    <Image source={PlaceholderImage} style={styles.image} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
