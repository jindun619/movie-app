export interface Theme {
  mainBg: string;
  mainText: string;
  neutralText: string;
}

export const light: Theme = {
  mainBg: '#ffffff',
  mainText: '#000000',
  neutralText: '#888888',
};

export const dark: Theme = {
  mainBg: '#000000',
  mainText: '#ffffff',
  neutralText: '#777777',
};
