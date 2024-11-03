import { create } from 'zustand';

type Store = {
  soundOn: boolean;
  toggle: () => void;
};

export const useStore = create<Store>((set) => ({
  soundOn: true,
  toggle: () => set((state) => ({ soundOn: !state.soundOn })),
}));
