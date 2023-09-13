export const parseTransactionMessage = (message: string) => {
  const regex = /\/transaction (\d+) (.+)/;
  const match = message.match(regex);

  if (match) {
    const command = match[0];
    const sum = parseInt(match[1]);
    const category = match[2];

    return {
      command,
      sum,
      category,
    };
  } else {
    return null;
  }
}
