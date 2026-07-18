import { useEffect, useState } from "react";
import type { ToasterToast } from "./toast.types";

const TOAST_LIMIT = 3;
const TOAST_REMOVE_DELAY = 4000;

type State = {
  toasts: ToasterToast[];
};

// Стор существует вне React — обычный модульный объект + подписчики.
// Так toast() можно вызывать откуда угодно, не только из компонента.
let memoryState: State = { toasts: [] };
const listeners: Array<(state: State) => void> = [];

function emitChange(state: State) {
  memoryState = state;
  listeners.forEach((listener) => listener(memoryState));
}

function genId() {
  return Math.random().toString(36).slice(2, 10);
}

interface ToastInput extends Omit<ToasterToast, "id"> {}

function toast(input: ToastInput) {
  const id = genId();

  const dismiss = () =>
    emitChange({
      toasts: memoryState.toasts.filter((t) => t.id !== id),
    });

  const update = (next: ToastInput) =>
    emitChange({
      toasts: memoryState.toasts.map((t) => (t.id === id ? { ...t, ...next, id } : t)),
    });

  emitChange({
    toasts: [{ ...input, id, open: true }, ...memoryState.toasts].slice(0, TOAST_LIMIT),
  });

  setTimeout(dismiss, TOAST_REMOVE_DELAY);

  return { id, dismiss, update };
}

function useToast() {
  const [state, setState] = useState<State>(memoryState);

  useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) listeners.splice(index, 1);
    };
  }, []);

  return { ...state, toast };
}

export { useToast, toast };
