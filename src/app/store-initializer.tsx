'use client';
import { useRef } from 'react';
import { useStore } from './store';
function StoreInitializer({ isVisible }: { isVisible: boolean }) {
  const initialized = useRef(false);
  if (!initialized.current) {
    useStore.setState({ isVisible });
    initialized.current = true;
  }

  return null;
}
export default StoreInitializer;
