export const isDuplicatedById = <T extends { id: string }>(
  filteredArray: T[],
  data: T
) => filteredArray.filter((e) => e.id === data.id).length;
