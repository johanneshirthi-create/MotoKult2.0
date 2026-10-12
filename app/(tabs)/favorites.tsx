import React, { useMemo } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { EventCard } from '../../components/EventCard';
import { useFavorites } from '../../lib/favorites';
import { t } from '../../lib/i18n';
import { PROGRAMM, TAGE } from '../../lib/program';
import { colors } from '../../lib/theme';

// Mein Tagesplan: Favoriten als chronologische Agenda, nach Tagen gegliedert
export default function FavoritesScreen() {
  const { ids } = useFavorites();
  const favs = useMemo(() => PROGRAMM.filter((p) => ids.includes(p.id)), [ids]);

  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
      <Text style={styles.title}>{t('meinTagesplan')}</Text>
      {favs.length === 0 ? <Text style={styles.empty}>{t('keineFavoriten')}</Text> : null}
      {TAGE.map((tag) => {
        const tagesListe = favs.filter((p) => p.tag === tag);
        if (tagesListe.length === 0) return null;
        return (
          <React.Fragment key={tag}>
            <Text style={styles.day}>{tag}</Text>
            {tagesListe.map((p) => (
              <EventCard key={p.id} punkt={p} />
            ))}
          </React.Fragment>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: { flex: 1, backgroundColor: colors.paper },
  content: { padding: 16, paddingBottom: 32 },
  title: { fontSize: 28, fontWeight: '800', color: colors.ink },
  day: { fontSize: 22, fontWeight: '800', color: colors.ink, marginTop: 18, marginBottom: 8 },
  empty: { fontSize: 16, color: colors.muted, marginTop: 12 },
});
