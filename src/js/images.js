function importAll(r) {
  r.keys().forEach(r)
}
importAll(require.context('../img/', true, /\.(gif|png|jpe?g|svg)$/i))