// store.js
import { create } from 'zustand';

export const useStore = create((set) => ({
    anime: null,
    updateAnime: (anime) => set(() => ({ anime: anime })), // Fix the key name here
}));
