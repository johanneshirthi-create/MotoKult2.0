import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Plate } from '../../components/Plate';
import { t } from '../../lib/i18n';
import { colors } from '../../lib/theme';

export default function StartScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView contentContainerStyle={styles.content}>
        <Plate scale={0.9} />
        <Text style={styles.title}>{t('appName')}</Text>
        <Text style={styles.lead}>{t('tagline')}</Text>

        <View style={styles.facts}>
          <View style={styles.fact}>
            <Text style={styles.factTitle}>{t('datum')}</Text>
            <Text style={styles.factSub}>{t('zeiten')}</Text>
          </View>
          <View style={styles.fact}>
            <Text style={styles.factTitle}>{t('ort')}</Text>
          </View>
        </View>

        <Pressable
          onPress={() => router.push('/program')}
          accessibilityRole="button"
          style={({ pressed }) => [styles.button, pressed && { opacity: 0.8 }]}
        >
          <Text style={styles.buttonText}>{t('zumProgramm')}</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.paper },
  content: { padding: 20, paddingTop: 36 },
  title: { fontSize: 38, fontWeight: '800', color: colors.ink, marginTop: 24, lineHeight: 42 },
  lead: { fontSize: 17, color: colors.muted, marginTop: 6 },
  facts: { marginTop: 28, gap: 12 },
  fact: { backgroundColor: colors.surface, borderColor: colors.line, borderWidth: 1, borderRadius: 6, padding: 14 },
  factTitle: { fontSize: 19, fontWeight: '800', color: colors.ink },
  factSub: { fontSize: 15, color: colors.muted, marginTop: 2 },
  button: { backgroundColor: colors.ink, borderRadius: 6, paddingVertical: 14, alignItems: 'center', marginTop: 28 },
  buttonText: { color: colors.paper, fontSize: 17, fontWeight: '700' },
});
