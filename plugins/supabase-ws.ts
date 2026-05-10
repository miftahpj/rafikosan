import ws from 'ws'

export default defineNuxtPlugin(() => {
  // @ts-ignore
  if (typeof globalThis.WebSocket === 'undefined') {
    // @ts-ignore
    globalThis.WebSocket = ws
  }
})