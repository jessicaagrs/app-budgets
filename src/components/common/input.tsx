import Icon from '@expo/vector-icons/FontAwesome6';
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';

import { theme } from '@/theme/theme';

type InputProps = TextInputProps & {
  showIcon?: boolean;
  value: string;
};

export const Input = ({
  showIcon = true,
  placeholder = 'Título ou cliente',
  onChangeText,
  value,
  ...props
}: InputProps) => {
  return (
    <View style={styles.container}>
      {showIcon && (
        <Icon
          name='magnifying-glass'
          size={20}
          color={theme.colors.gray_600}
          style={styles.icon}
        />
      )}

      <TextInput
        style={showIcon ? styles.input : [styles.input, { paddingLeft: 16 }]}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.gray_500}
        onChangeText={onChangeText}
        value={value}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    minHeight: 48,
    flex: 1,
  },
  icon: {
    position: 'absolute',
    top: 14,
    left: 16,
    zIndex: 1,
    pointerEvents: 'none',
  },
  input: {
    flex: 1,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: theme.colors.gray_300,
    paddingTop: 12,
    paddingRight: 16,
    paddingBottom: 12,
    paddingLeft: 48,
    fontSize: 16,
  },
});
