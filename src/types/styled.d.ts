import 'styled-components/native';
import {Theme} from '../utils/theme';

declare module 'styled-components/native' {
  export interface DefaultTheme extends Theme {}
}
