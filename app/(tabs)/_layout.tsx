import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, StyleSheet } from 'react-native';


import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="home" 
        options={{
          tabBarStyle: { display: 'none' }, // Oculta as tabs nesta rota
        }}
      />
      <Tabs.Screen
        name="schedule"
        options={{
          tabBarStyle: { display: 'none' }, // Oculta as tabs nesta rota
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabs: {

  }
})
