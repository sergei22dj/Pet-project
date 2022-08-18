import { MenuItem } from "../layouts/header/menu-items";
import { homeMenuItems } from "./constants";
import { Description, MenuBar, MenuTitle, TitleMain, Wrapper } from "./views";

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
      <Description>
        This is not the final version. the project is under development...
      </Description>
    </Wrapper>
  );
};
export default HomePage;
