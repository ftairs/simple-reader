import { create } from "zustand";
import { persist } from "zustand/middleware";
const useViewerStore = create(
  persist(
    (set: any, get: any) => ({
      bookId: "2149",
      storyIndex: 0,
      zoomLevel: 1,
      scrollSpeed: 1,
      updateBookId: (id: any) => {
        set((state: any) => ({ bookId: id.toString() }));
      },
      updateStoryIndex: (index: any) => {
        set((state: any) => ({ storyIndex: index }));
      },
      increaseZoomLevel: () => {
        console.log(get().zoomLevel);
        if (get().zoomLevel < 2) {
          set((state: any) => ({
            zoomLevel: parseFloat((get().zoomLevel + 0.2).toFixed(3)),
          }));
        }
      },
      decreaseZoomLevel: () => {
        if (get().zoomLevel > 0.2) {
          set((state: any) => ({
            zoomLevel: parseFloat((get().zoomLevel - 0.2).toFixed(3)),
          }));
        }
      },
    }),
    {
      name: "viewer-storage",
    }
  )
);

export default useViewerStore;
