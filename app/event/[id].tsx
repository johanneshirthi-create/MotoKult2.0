import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useFavorites } from '../../lib/favorites';
import { t } from '../../lib/i18n';
import { findePunkt, kategorieInfo } from '../../lib/program';
import { colors } from '../../lib/theme';

export default function DetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const { isFav, toggle } = useFavorites();
  const punkt = findePunkt(id);

  if (!punkt) {
    return (
      <View style={styles.content}>
        <Text style={styles.empty}>{t('keineTreffer')}</Text>
        <Pressable onPress={() => router.back()} style={styles.back} accessibilityRole="button">
          <Text style={styles.backText}>{t('zurueckZurListe')}</Text>
        </Pressable>
      </View>
    );
  }

  const kat = kategorieInfo(punkt.kategorie);
  const fav = isFav(punkt.id);

  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
      <Text style={[styles.tag, { color: kat.color }]}>{t(kat.textKey)}</Text>
      <Text style={styles.title}>{punkt.titel}</Text>
      <Text style={styles.meta}>
        {punkt.tag}, {punkt.start} {t('bis')} {punkt.ende} {t('uhr')}
      </Text>
      <Text style={styles.meta}>{t('ort')}</Text>
      <Text style={styles.text}>{punkt.beschreibung}</Text>

      <Pressable
        onPress={() => toggle(punkt.id)}
        accessibilityRole="button"
        style={[styles.favButton, fav && { backgroundColor: colors.show, borderColor: colors.show }]}
      >
        <Text style={[styles.favText, fav && { color: '#FFFFFF' }]}>
          {fav ? '★ ' : '☆ '}
          {fav ? t('favoritEntfernen') : t('favoritSetzen')}
        </Text>
      </Pressable>

      <Pressable onPress={() => router.back()} style={styles.back} accessibilityRole="button">
        <Text style={styles.backText}>{t('zurueckZurListe')}</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: { flex: 1, backgroundColor: colors.paper },
  content: { padding: 20, paddingBottom: 40 },
  tag: { fontSize: 15, fontWeight: '700' },
  title: { fontSize: 30, fontWeight: '800', color: colors.ink, marginTop: 4, lineHeight: 34 },
  meta: { fontSize: 16, color: colors.muted, marginTop: 6 },
  text: { fontSize: 17, lineHeight: 26, color: colors.ink, marginTop: 20 },
  favButton: {
    borderColor: colors.ink,
    borderWidth: 2,
    borderRadius: 6,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 28,
  },
  favText: { fontSize: 17, fontWeight: '700', color: colors.ink },
  back: { backgroundColor: colors.ink, borderRadius: 6, paddingVertical: 14, alignItems: 'center', marginTop: 12 },
  backText: { color: colors.paper, fontSize: 17, fontWeight: '700' },
  empty: { fontSize: 16, color: colors.muted },
});
