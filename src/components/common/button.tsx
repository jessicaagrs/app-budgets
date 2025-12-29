import Icon from '@expo/vector-icons/FontAwesome6';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import { theme } from '@/theme/theme';

type ButtonProps = TouchableOpacityProps & {
  iconName?: string;
  label?: string;
  showIcon?: boolean;
};

export function Button({
  iconName = 'plus',
  label = 'Novo',
  showIcon = true,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      {...props}
    >
      {showIcon && (
        <Icon
          name={iconName}
          size={16}
          color={theme.colors.white}
        />
      )}
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    padding: 12,
    backgroundColor: theme.colors.purple_base,
    borderRadius: 20,
    minWidth: 98,
  },
  label: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 700,
    color: theme.colors.white,
  },
});
