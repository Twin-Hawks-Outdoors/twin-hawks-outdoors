export const formatDate = (str: string) => {
  const formatter = new Intl.DateTimeFormat('en-us', {
    dateStyle: 'short',
    timeStyle: 'short',
  });

  return formatter.format(new Date(str));
};
