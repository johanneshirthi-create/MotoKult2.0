import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../lib/theme';

// Logo des Events: Kennzeichen VS-MK 1206 H
export function Plate({ scale = 1 }: { scale?: number }) {
  return (
    <View
      accessible
      accessibilityLabel="Logo: Kennzeichen VS MK 1206 H"
      style={[styles.plate, { borderRadius: 10 * scale, borderWidth: 4 * scale }]}
    >
      <View style={[styles.eu, { width: 38 * scale }]}>
        <View style={[styles.ring, { width: 16 * scale, height: 16 * scale, borderRadius: 8 * scale }]} />
        <Text style={[styles.euText, { fontSize: 15 * scale }]}>D</Text>
      </View>
      <View style={styles.no}>
        <Text style={[styles.noText, { fontSize: 44 * scale }]}>VS‑MK 1206 H</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  plate: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: colors.plate,
    borderColor: '#111111',
    overflow: 'hidden',
  },
  eu: { backgroundColor: colors.eu, alignItems: 'center', justifyContent: 'flex-end', paddingVertical: 4 },
  ring: { borderWidth: 2, borderColor: '#FFD83A', borderStyle: 'dotted', marginBottom: 6 },
  euText: { color: '#FFFFFF', fontWeight: '800' },
  no: { paddingHorizontal: 12, justifyContent: 'center' },
  noText: { color: '#111111', fontWeight: '800', letterSpacing: 1.5 },
});
