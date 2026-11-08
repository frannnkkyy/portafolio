/**
 * Small helper for bilingual strings.
 * Every piece of copy lives as { es, en } so the language switch never needs
 * to touch the DOM or keep a large translation table in sync.
 */
export const bi = (es, en) => ({ es, en });
