import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NavigationIcon: React.FC<NavigationIconProps> = ({ icon, label, isActive }) => (
  <View style={styles.navIconContainer}>
    <Text style={[styles.navLabel, isActive && styles.activeNavLabel]}>{label}</Text>
  </View>
);

interface NavigationIconProps {
    icon: string;
    label: string;
    isActive?: boolean;
  }

  
export const NavigationBar: React.FC = () => {
  return (
    <View style={styles.navigationContainer}>
      <NavigationIcon icon="favorite" label="Favorite" />
      <NavigationIcon icon="news" label="News" />
      <NavigationIcon icon="home" label="Home" isActive />
      <NavigationIcon icon="stats" label="Statics" />
      <NavigationIcon icon="profile" label="Profile" />
    </View>
  );
};

const styles = StyleSheet.create({
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    maxWidth: 316,
    paddingVertical: 10,
  },
  navIconContainer: {
    alignItems: 'center',
  },
  navLabel: {
    fontFamily: 'Abel',
    fontSize: 15,
    color: '#636A73',
  },
  activeNavLabel: {
    color: '#FFD60A',
  },
});