import { useStorage,useSessionStorage } from '@vueuse/core'

export const panelState = useSessionStorage('panelState', 'panel_0')