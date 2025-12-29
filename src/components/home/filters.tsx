import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { theme } from '@/theme/theme';
import { Input } from '../common';
import { IconFilter } from './iconFilter';

export function Filters() {
  return (
    <View style={styles.container}>
      <Input />
      <TouchableOpacity style={styles.button}>
        <IconFilter />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  button: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    borderRadius: 50,
    backgroundColor: theme.colors.gray_100,
  },
});
