import React, { useMemo, useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { EventCard } from '../../components/EventCard';
import { t } from '../../lib/i18n';
import { KATEGORIEN, PROGRAMM, TAGE, type Kategorie, type Tag } from '../../lib/program';
import { colors } from '../../lib/theme';

function Chip({ label, aktiv, onPress, color }: { label: string; aktiv: boolean; onPress: () => void; color?: string }) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityState={{ selected: aktiv }}
      style={[styles.chip, aktiv && styles.chipAktiv]}
    >
      {color ? <View style={[styles.dot, { backgroundColor: color }]} /> : null}
      <Text style={[styles.chipText, aktiv && styles.chipTextAktiv]}>{label}</Text>
    </Pressable>
  );
}

export default function ProgramScreen() {
  const [tag, setTag] = useState<Tag | 'alle'>('alle');
  const [kat, setKat] = useState<Kategorie | 'alle'>('alle');
  const [suche, setSuche] = useState('');

  const liste = useMemo(() => {
    const q = suche.trim().toLowerCase();
    return PROGRAMM.filter(
      (p) =>
        (tag === 'alle' || p.tag === tag) &&
        (kat === 'alle' || p.kategorie === kat) &&
        (q === '' || p.titel.toLowerCase().includes(q) || p.beschreibung.toLowerCase().includes(q)),
    );
  }, [tag, kat, suche]);

  const gefiltert = tag !== 'alle' || kat !== 'alle' || suche.trim() !== '';
  const reset = () => {
    setTag('alle');
    setKat('alle');
    setSuche('');
  };

  return (
    <FlatList
      style={styles.list}
      contentContainerStyle={styles.content}
      data={liste}
      keyExtractor={(p) => p.id}
      keyboardShouldPersistTaps="handled"
      renderItem={({ item }) => <EventCard punkt={item} zeigeTag={tag === 'alle'} />}
      ListHeaderComponent={
        <View style={styles.header}>
          <TextInput
            value={suche}
            onChangeText={setSuche}
            placeholder={t('suchen')}
            placeholderTextColor={colors.muted}
            style={styles.input}
            returnKeyType="search"
            clearButtonMode="while-editing"
          />
          <Text style={styles.label}>{t('filterTag')}</Text>
          <View style={styles.row}>
            <Chip label={t('alle')} aktiv={tag === 'alle'} onPress={() => setTag('alle')} />
            {TAGE.map((x) => (
              <Chip key={x} label={x} aktiv={tag === x} onPress={() => setTag(x)} />
            ))}
          </View>
          <Text style={styles.label}>{t('filterKategorie')}</Text>
          <View style={styles.row}>
            <Chip label={t('alle')} aktiv={kat === 'alle'} onPress={() => setKat('alle')} />
            {KATEGORIEN.map((k) => (
              <Chip key={k.key} label={t(k.textKey)} color={k.color} aktiv={kat === k.key} onPress={() => setKat(k.key)} />
            ))}
          </View>
          <View style={styles.countRow}>
            <Text style={styles.count}>
              {liste.length} {t('treffer')}
            </Text>
            {gefiltert ? (
              <Pressable onPress={reset} accessibilityRole="button">
                <Text style={styles.reset}>{t('zuruecksetzen')}</Text>
              </Pressable>
            ) : null}
          </View>
        </View>
      }
      ListEmptyComponent={<Text style={styles.empty}>{t('keineTreffer')}</Text>}
    />
  );
}

const styles = StyleSheet.create({
  list: { flex: 1, backgroundColor: colors.paper },
  content: { padding: 16, paddingBottom: 32 },
  header: { marginBottom: 8 },
  input: {
    backgroundColor: colors.surface,
    borderColor: colors.line,
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    color: colors.ink,
  },
  label: { fontSize: 14, fontWeight: '700', color: colors.muted, marginTop: 14, marginBottom: 6 },
  row: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.line,
    borderWidth: 1,
    borderRadius: 999,
    backgroundColor: colors.surface,
    paddingHorizontal: 14,
    paddingVertical: 7,
  },
  chipAktiv: { backgroundColor: colors.ink, borderColor: colors.ink },
  chipText: { fontSize: 15, fontWeight: '600', color: colors.ink },
  chipTextAktiv: { color: colors.paper },
  dot: { width: 10, height: 10, borderRadius: 5, marginRight: 7 },
  countRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 16 },
  count: { fontSize: 14, color: colors.muted },
  reset: { fontSize: 15, fontWeight: '700', color: colors.show },
  empty: { fontSize: 16, color: colors.muted, textAlign: 'center', marginTop: 24 },
});
