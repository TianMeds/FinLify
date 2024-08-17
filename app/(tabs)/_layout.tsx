import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { useColorScheme } from '@/hooks/useColorScheme';
import { View, Text, Image, ImageSourcePropType } from 'react-native';
import { Slot, Stack } from 'expo-router';
import {icons} from '../../constants/'

interface TabIconProps {
  icon: ImageSourcePropType;
  color: string;
  name: string;
  focused: boolean;
}

export const TabIcon: React.FC<TabIconProps> = ({ icon, color, name, focused }) => {
  return (
    <View className='items-center justify-center gap-2'>
      <Image
        source={icon}
        resizeMode="contain"
        className='w-6 h-6'
        tintColor={color}
      />
      <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs color-white`}>
        {name}
      </Text>
    </View>
  );
};


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#FAB440',
          tabBarInactiveTintColor: '#F8F8FF',
          tabBarStyle: {
            backgroundColor: '#07143F',
            borderTopWidth: 1,
            borderTopColor: '#232533',
            height: 84,
            borderRadius: 70,
            margin: 10
          }
        }}
      >
        <Tabs.Screen
          name="tracking"
          options={{
            title: 'Tracking',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.chart}
                color={color}
                name="Tracking"
                focused={focused}
              />
            )
          }}
        />
        <Tabs.Screen
          name="budget"
          options={{
            title: 'Budget',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.wallet}
                color={color}
                name="Budget"
                focused={focused}
              />
            )
          }}
        />
        <Tabs.Screen
          name="learn"
          options={{
            title: 'Learn',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.trend}
                color={color}
                name="Learn"
                focused={focused}
              />
            )
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.profile}
                color={color}
                name="Profile"
                focused={focused}
              />
            )
          }}
        />

      </Tabs>
    </>
  );
}
