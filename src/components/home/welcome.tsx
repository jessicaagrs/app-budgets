import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';

import { theme } from '@/theme/theme';

export const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Budget App</Text>
      <Text style={styles.subtitle}>
        Gerencie seus orçamentos de forma fácil e eficiente
      </Text>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.purple_base,
  },
  title: {
    color: theme.colors.white,
    fontSize: 28,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    marginBottom: 10,
    width: '80%',
    textAlign: 'center',
  },
  subtitle: {
    color: theme.colors.white,
    fontSize: 16,
  },
  image: {
    width: 300,
    height: 300,
    objectFit: 'cover',
  },
});
