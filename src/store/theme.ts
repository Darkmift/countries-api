import create from 'zustand';

type State = {
  isDarkMode: boolean;
  setIsDarkMode: () => void;
};

export default create<State>((set) => ({
  isDarkMode: false,
  setIsDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));
