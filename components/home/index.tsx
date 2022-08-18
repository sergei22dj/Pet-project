import { MenuItem } from "../layouts/header/menu-items";
import { homeMenuItems } from "./constants";
import { MenuBar, MenuTitle, TitleMain, Wrapper } from "./views";

const HomePage = () => {
  return (
    <Wrapper>
      <TitleMain>TEXT</TitleMain>
      <MenuBar>
        {homeMenuItems.map(({ l, h }) => (
          <MenuTitle key={l}>
            <MenuItem href={h} label={l} />
          </MenuTitle>
        ))}
      </MenuBar>
    </Wrapper>
  );
};
export default HomePage;
