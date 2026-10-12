import { Tabs } from 'expo-router';
import React from 'react';
import { Text, type ColorValue } from 'react-native';
import { t } from '../../lib/i18n';
import { colors } from '../../lib/theme';

const icon = (symbol: string) =>
  function TabIcon({ color }: { color: ColorValue }) {
    return <Text style={{ fontSize: 20, color }}>{symbol}</Text>;
  };

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: colors.paper },
        headerTintColor: colors.ink,
        headerTitleStyle: { fontWeight: '800' },
        tabBarActiveTintColor: colors.ink,
        tabBarInactiveTintColor: colors.muted,
        tabBarStyle: { backgroundColor: colors.surface, borderTopColor: colors.line },
        sceneStyle: { backgroundColor: colors.paper },
      }}
    >
      <Tabs.Screen name="index" options={{ title: t('tabStart'), headerShown: false, tabBarIcon: icon('⌂') }} />
      <Tabs.Screen name="program" options={{ title: t('tabProgramm'), tabBarIcon: icon('☰') }} />
      <Tabs.Screen name="favorites" options={{ title: t('tabFavoriten'), tabBarIcon: icon('★') }} />
    </Tabs>
  );
}
