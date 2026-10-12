import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const KEY = 'motokult.favoriten.v1';

type FavCtx = {
  ids: string[];
  ready: boolean;
  isFav: (id: string) => boolean;
  toggle: (id: string) => void;
};

const Ctx = createContext<FavCtx>({ ids: [], ready: false, isFav: () => false, toggle: () => {} });

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [ids, setIds] = useState<string[]>([]);
  const [ready, setReady] = useState(false);

  // Beim Start gespeicherte Favoriten laden
  useEffect(() => {
    let aktiv = true;
    AsyncStorage.getItem(KEY)
      .then((raw) => {
        if (!aktiv) return;
        if (raw) {
          const parsed: unknown = JSON.parse(raw);
          if (Array.isArray(parsed)) setIds(parsed.filter((x): x is string => typeof x === 'string'));
        }
      })
      .catch(() => {})
      .finally(() => {
        if (aktiv) setReady(true);
      });
    return () => {
      aktiv = false;
    };
  }, []);

  const toggle = useCallback((id: string) => {
    setIds((alt) => {
      const neu = alt.includes(id) ? alt.filter((x) => x !== id) : [...alt, id];
      AsyncStorage.setItem(KEY, JSON.stringify(neu)).catch(() => {});
      return neu;
    });
  }, []);

  const isFav = useCallback((id: string) => ids.includes(id), [ids]);
  const value = useMemo(() => ({ ids, ready, isFav, toggle }), [ids, ready, isFav, toggle]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useFavorites(): FavCtx {
  return useContext(Ctx);
}
