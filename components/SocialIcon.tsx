import * as React from 'react';
import { Image, TouchableOpacity, StyleSheet, ImageSourcePropType } from 'react-native';


interface SocialIconProps {
    imageUrl: ImageSourcePropType ;
    alt: string;
    onPress: () => void;
  }
  

export const SocialIcon: React.FC<SocialIconProps> = ({ imageUrl, alt, onPress }) => (
  <TouchableOpacity 
    onPress={onPress}
    accessibilityRole="button"
    accessibilityLabel={`Sign in with ${alt}`}
  >
    <Image
      resizeMode="contain"
      source={imageUrl}
      style={styles.icon}
      accessibilityLabel={alt}
    />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  icon: {
    position: 'relative',
    display: 'flex',
    width: 30,
    aspectRatio: 1,
  }
});