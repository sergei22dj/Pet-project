import { globalMenuItems, inst, linkedin, tg } from "./constants";
import { MenuItem } from "./menu-items";
import { ContactsBar, SocialLogo, Wrapper } from "./views";

const Header = () => {
  return (
    <Wrapper>
      {globalMenuItems.map(({ l, h }) => (
        <MenuItem key={l} href={h} label={l}></MenuItem>
      ))}
      <ContactsBar>
        <a href={linkedin}>
          <SocialLogo src="linkedin.png" />
        </a>
        <a href={tg}>
          <SocialLogo src="telegram.png" />
        </a>
        <a href={inst}>
          <SocialLogo src="instagram.png" />
        </a>
      </ContactsBar>
    </Wrapper>
  );
};
export default Header;
