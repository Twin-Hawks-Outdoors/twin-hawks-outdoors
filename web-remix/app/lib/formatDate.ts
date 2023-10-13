export const formatDate = (
  str: string,
  { includeTime = true }: { includeTime?: boolean }
) => {
  const formatter = new Intl.DateTimeFormat("en-us", {
    dateStyle: "short",
    timeStyle: includeTime ? "short" : undefined,
  });

  return formatter.format(new Date(str));
};
