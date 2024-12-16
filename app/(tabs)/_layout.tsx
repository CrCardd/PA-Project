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
        tabBarActiveTintColor: '#ebc812',
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarIconStyle: {display: 'none'},
        tabBarLabelStyle: {
          fontFamily: 'RobotoSlab-Bold',
          fontSize: 15
        },
        // tabBarStyle: Platform.select({
        //   ios: {
        //     // Use a transparent background on iOS to show the blur effect
        //     position: 'absolute',
        //   },
        //   android: {
            
        //   },
        //   default: {},
        // }),
        tabBarStyle: {
          backgroundColor: 'rgba(0,0,2,1)',
          
        }
      }}>
      <Tabs.Screen
        name="home" 
        options={{
        }}
      />
      <Tabs.Screen
        name="schedule"
        options={{
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabs: {

  }
})
