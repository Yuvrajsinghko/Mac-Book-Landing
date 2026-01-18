import { create } from "zustand";

const INITIAL_TEXTURE = "/videos/feature-1.mp4";

const useMacbookStore = create((set) => ({
  color: "#2e2c2e",
  setColor: (color) => set({ color }),

  scale: 0.08,
  setScale: (scale) => set({ scale }),

  texture: INITIAL_TEXTURE,
  setTexture: (texture) => set({ texture }),

  reset: () =>
    set({
      color: "#2e2e2e",
      scale: 0.08,
      texture: INITIAL_TEXTURE,
    }),
}));

export default useMacbookStore;