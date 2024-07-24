const departmentTranslations = {
  Acting: '연기',
  Directing: '감독',
  Writing: '각본',
  Production: '제작',
  Camera: '촬영',
  Editing: '편집',
  Art: '미술',
  Sound: '음향',
  'Costume & Make-Up': '의상 및 분장',
  'Visual Effects': '시각 효과',
};
type Department = keyof typeof departmentTranslations;
export const translate = {
  department: (department: string) => {
    return departmentTranslations[department as Department] || department;
  },
};
