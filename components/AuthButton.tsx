import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';


interface AuthButtonProps {
    label: string;
    variant: 'primary' | 'secondary';
    onPress: () => void;
  }

export const AuthButton: React.FC<AuthButtonProps> = ({ label, variant, onPress }) => (
  <TouchableOpacity 
    style={[styles.button, variant === 'secondary' ? styles.secondaryButton : styles.primaryButton]}
    onPress={onPress}
    accessibilityRole="button"
    accessibilityLabel={label}
  >
    <Text style={[styles.buttonText, variant === 'secondary' ? styles.secondaryText : styles.primaryText]}>
      {label}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    borderRadius: 19,
    paddingHorizontal: 70,
    paddingVertical: 14,
    width: 251,
    maxWidth: '100%',
    marginBottom: 10
  },
  primaryButton: {
    backgroundColor: '#FFD60A',
  },
  secondaryButton: {
    borderColor: '#FFD60A',
    borderWidth: 1,
  },
  buttonText: {
    fontFamily: 'Viga',
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
  },
  primaryText: {
    color: '#000000',
  },
  secondaryText: {
    color: '#FFD60A',
  }
});