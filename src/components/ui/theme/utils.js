const STORAGE_KEY = 'theme'

export function getStoredTheme() {
  return localStorage.getItem(STORAGE_KEY)
}

export function setStoredTheme(theme) {
  localStorage.setItem(STORAGE_KEY, theme)
}

export function applyTheme(theme) {
  // DaisyUI nutzt data-theme am <html>
  document.documentElement.setAttribute('data-theme', theme)
}

export function initTheme(defaultTheme = 'light') {
  const stored = getStoredTheme()
  const theme = stored || defaultTheme
  applyTheme(theme)
  return theme
}
