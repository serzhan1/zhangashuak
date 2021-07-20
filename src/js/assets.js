function importAll(r) {
  r.keys().forEach(r)
}
importAll(require.context('../assets/', false, /\.(ico|pdf)$/i))