export interface Theme {
  mainBg: string;
  lightNeutralBg: string;
  mainText: string;
  neutralText: string;
  defaultBtn: string;
}

export const light: Theme = {
  mainBg: '#ffffff',
  lightNeutralBg: '#F8F8F8',
  mainText: '#000000',
  neutralText: '#888888',
  defaultBtn: '#007AFF',
};

export const dark: Theme = {
  mainBg: '#000000',
  lightNeutralBg: '#111111',
  mainText: '#ffffff',
  neutralText: '#777777',
  defaultBtn: '#007AFF',
};
