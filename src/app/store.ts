import { create } from 'zustand'
type State = {
    isVisible:boolean
}
type Action = {
    updateIsVisible: (isVisible: State['isVisible']) => void
  }
  
export const useStore = create<State & Action>((set) => ({
    isVisible: false,
    updateIsVisible: (isVisible) => set(() => ({ isVisible: isVisible })),

  }));
  