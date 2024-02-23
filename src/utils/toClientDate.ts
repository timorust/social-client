export const FormatToClientDate = (date?: Date) => {
  if (!date) {
    return ""
  }

  return new Date(date).toLocaleDateString()
}
