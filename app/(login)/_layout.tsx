import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';


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
        name="index" 
        options={{
          tabBarStyle: { display: 'none' }, // Oculta as tabs nesta rota
        }}
      />
      <Tabs.Screen
        name="register"
        options={{
          tabBarStyle: { display: 'none' }, // Oculta as tabs nesta rota
        }}
      />
      <Tabs.Screen
        name="forgive"
        options={{
          tabBarStyle: { display: 'none' }, // Oculta as tabs nesta rota
        }}
      />
      <Tabs.Screen
        name="login"
        options={{
          tabBarStyle: { display: 'none' }, // Oculta as tabs nesta rota
        }}
      />
      <Tabs.Screen
        name="code"
        options={{
          tabBarStyle: { display: 'none' }, // Oculta as tabs nesta rota
        }}
      />
      <Tabs.Screen
        name="redefine"
        options={{
          tabBarStyle: { display: 'none' }, // Oculta as tabs nesta rota
        }}
      />
    </Tabs>
  );
}