import { StyleSheet, Text, View } from 'react-native';

import { theme } from '@/theme/theme';

import { Button } from '@/components/common';

export const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Orçamentos</Text>
        <Text style={styles.subtitle}>Você tem 1 item em rascunho</Text>
      </View>
      <Button />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.gray_200,
  },
  title: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: 700,
    color: theme.colors.purple_base,
  },
  subtitle: {
    fontSize: 14,
    color: theme.colors.gray_500,
  },
});
