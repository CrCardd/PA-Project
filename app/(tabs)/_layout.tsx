import { router, Tabs } from 'expo-router';
import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';


import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions = {({route}) => ({
        tabBarActiveTintColor: '#ebc812',
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarLabelStyle: {
          fontFamily: 'RobotoSlab-Bold',
          fontSize: 15
        },
        tabBarStyle: {
          backgroundColor: 'rgba(0,0,2,1)',
          height: 65,
          padding: 5,
        },

        tabBarButton: ['schedule', '(tabs)/schedule'].includes(route.name)
        ? () => {
            return null;
          }
        : undefined,
        
      })}>
        <Tabs.Screen
          name="home" 
          options={{
              tabBarIcon: ({color, size}) => (
              <Ionicons name="home" color={color} size={size}/>
            )
          }}
        />
        <Tabs.Screen
          name="schedule"
          options={{
            tabBarIcon: ({color, size}) => (
              <Ionicons name="calendar" color={color} size={size}/>
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({color, size}) => (
              <Ionicons name="person" color={color} size={size}/>
            ),
          }}
        />

    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabs: {

  }
})
