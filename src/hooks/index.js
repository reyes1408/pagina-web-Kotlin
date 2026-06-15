import { useState, useEffect, useCallback } from 'react';
import { allTopicIds } from '../data/courseData';

// ── Theme hook ────────────────────────────────────────────
export function useTheme() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  const toggle = useCallback(() => setIsDark(prev => !prev), []);
  return { isDark, toggle };
}

// ── Font size hook ────────────────────────────────────────
const FONT_SIZES = [14, 16, 18, 20, 22];

export function useFontSize() {
  const [sizeIdx, setSizeIdx] = useState(1);

  const increase = useCallback(() =>
    setSizeIdx(prev => Math.min(prev + 1, FONT_SIZES.length - 1)), []);

  const decrease = useCallback(() =>
    setSizeIdx(prev => Math.max(prev - 1, 0)), []);

  return { fontSize: FONT_SIZES[sizeIdx], increase, decrease };
}

// ── Navigation & progress hook ────────────────────────────
export function useNavigation() {
  const [currentTopic, setCurrentTopic] = useState('intro');

  const currentIndex = allTopicIds.indexOf(currentTopic);
  const total = allTopicIds.length;
  const progress = Math.round(((currentIndex + 1) / total) * 100);

  const goTo = useCallback((id) => {
    setCurrentTopic(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const goNext = useCallback(() => {
    if (currentIndex < total - 1) goTo(allTopicIds[currentIndex + 1]);
  }, [currentIndex, total, goTo]);

  const goPrev = useCallback(() => {
    if (currentIndex > 0) goTo(allTopicIds[currentIndex - 1]);
  }, [currentIndex, goTo]);

  return {
    currentTopic,
    goTo,
    goNext,
    goPrev,
    currentIndex,
    total,
    progress,
    hasNext: currentIndex < total - 1,
    hasPrev: currentIndex > 0,
  };
}

// ── Sidebar collapse hook ─────────────────────────────────
export function useSidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = useCallback(() => setIsOpen(prev => !prev), []);
  return { isOpen, toggle };
}
