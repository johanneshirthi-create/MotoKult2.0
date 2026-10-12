import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useFavorites } from '../lib/favorites';
import { t } from '../lib/i18n';
import { kategorieInfo, type Programmpunkt } from '../lib/program';
import { colors } from '../lib/theme';

export function EventCard({ punkt, zeigeTag = false }: { punkt: Programmpunkt; zeigeTag?: boolean }) {
  const router = useRouter();
  const { isFav, toggle } = useFavorites();
  const kat = kategorieInfo(punkt.kategorie);
  const fav = isFav(punkt.id);

  return (
    <Pressable
      onPress={() => router.push({ pathname: '/event/[id]', params: { id: punkt.id } })}
      accessibilityRole="button"
      accessibilityLabel={`${punkt.titel}, ${punkt.start} ${t('uhr')}`}
      style={[styles.card, { borderLeftColor: kat.color }]}
    >
      <View style={styles.time}>
        <Text style={styles.timeText}>{punkt.start}</Text>
        <Text style={styles.timeSub}>
          {t('bis')} {punkt.ende}
        </Text>
        {zeigeTag ? <Text style={styles.timeSub}>{punkt.tag}</Text> : null}
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>{punkt.titel}</Text>
        <Text style={[styles.tag, { color: kat.color }]}>{t(kat.textKey)}</Text>
      </View>
      <Pressable
        onPress={() => toggle(punkt.id)}
        hitSlop={10}
        accessibilityRole="button"
        accessibilityLabel={fav ? t('favoritEntfernen') : t('favoritSetzen')}
        style={styles.star}
      >
        <Text style={[styles.starText, { color: fav ? colors.show : colors.muted }]}>{fav ? '★' : '☆'}</Text>
      </Pressable>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderColor: colors.line,
    borderWidth: 1,
    borderLeftWidth: 8,
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginBottom: 10,
  },
  time: { width: 76 },
  timeText: { fontSize: 20, fontWeight: '800', color: colors.ink },
  timeSub: { fontSize: 12, color: colors.muted },
  body: { flex: 1, paddingHorizontal: 8 },
  title: { fontSize: 16, fontWeight: '700', color: colors.ink },
  tag: { fontSize: 13, fontWeight: '600', marginTop: 2 },
  star: { paddingHorizontal: 4 },
  starText: { fontSize: 28 },
});
