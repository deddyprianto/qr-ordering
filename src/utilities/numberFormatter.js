export const numberFormatter = (value) => {
  if(!value) return 0
  return Math.round((value + Number.EPSILON) * 100) / 100
}