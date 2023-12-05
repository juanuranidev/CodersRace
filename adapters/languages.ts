export const fromGetLanguagesApi = (data: any) => {
  return data.map((language: any) => ({
    name: language.name,
    id: language.id,
  }));
};
