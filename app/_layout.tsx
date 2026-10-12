import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FavoritesProvider } from '../lib/favorites';
import { t } from '../lib/i18n';
import { colors } from '../lib/theme';

export default function RootLayout() {
  return (
    <FavoritesProvider>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: colors.paper },
          headerTintColor: colors.ink,
          headerTitleStyle: { fontWeight: '800' },
          contentStyle: { backgroundColor: colors.paper },
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="event/[id]" options={{ title: t('detail'), headerBackTitle: t('tabProgramm') }} />
      </Stack>
    </FavoritesProvider>
  );
}
