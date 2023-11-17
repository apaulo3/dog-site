export default function imgLoader({ src, width, quality }) {
  return `${src}?w=${width}&q=${quality || 75}`
}