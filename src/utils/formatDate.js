export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('tr-TR', {
    timeZone: 'UTC',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}
