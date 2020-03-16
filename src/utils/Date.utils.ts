/**
 * Añade n dias a una fecha dada
 * @param fromDate fecha a la que añadir
 * @param amount cantidad de dias a añadir
 */
export const addDay = (fromDate: Date, amount: number): Date => {
  const msDay = 1000 * 3600 * 24;
  return new Date(fromDate.getTime() + msDay * amount);
};
