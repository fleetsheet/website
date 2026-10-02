const dateFormatter = new Intl.DateTimeFormat('en-US', { dateStyle: 'long', timeZone: 'UTC' })

export const formatDate = (date: Date) => dateFormatter.format(date)
