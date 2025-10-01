import {createStore} from 'zustand'

interface IdeaModalStore {
    isOpen : boolean;
    openModal : () => void;
    closeModal : () => void;
}

export const ideaModalStore =  createStore<IdeaModalStore>((set) => ({
    isOpen: false,
    openModal: () => set({ isOpen: true }),
    closeModal: () => set({ isOpen: false}),
  }));
  