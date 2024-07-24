export interface Theme {
  mainBg: string;
  mainTheme: string;
  neutralBg: string;
  lightNeutralBg: string;
  mainText: string;
  neutralText: string;
  defaultBtn: string;
}

export const light: Theme = {
  mainBg: '#ffffff',
  mainTheme: '#2E8B57',
  neutralBg: '#e5e5e5',
  lightNeutralBg: '#F8F8F8',
  mainText: '#000000',
  neutralText: '#888888',
  defaultBtn: '#03CF5D',
};

export const dark: Theme = {
  mainBg: '#000000',
  mainTheme: '#2E8B57',
  neutralBg: '#1A1A1A',
  lightNeutralBg: '#111111',
  mainText: '#ffffff',
  neutralText: '#777777',
  defaultBtn: '#03CF5D',
};
