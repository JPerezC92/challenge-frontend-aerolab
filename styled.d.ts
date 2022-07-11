// import original module declarations
import { InternalTheme } from "src/modules/shared/theming/theme";
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme extends InternalTheme {}
}
