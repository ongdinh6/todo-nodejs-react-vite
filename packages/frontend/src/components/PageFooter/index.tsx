import React, { ReactElement, ReactNode } from "react";
import {
  Box,
  Button,
  FormControl,
  List,
  ListItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import classNames from "classnames";

interface ExternalLink {
  icon: ReactNode;
}

const externalLinks: ExternalLink[] = [
  { icon: <InstagramIcon /> },
  { icon: <FacebookIcon /> },
  { icon: <YouTubeIcon /> },
  { icon: <TwitterIcon /> },
  { icon: <PinterestIcon /> },
];

interface FooterMenuProps {
  menuTitle: ReactNode;
  menuItems: ReactNode[];
  customListItemStyle?: string;
}

const FooterMenu = ({ menuTitle, menuItems, customListItemStyle }: FooterMenuProps): ReactElement => {
  return (
    <Stack direction={"column"} className={"space-y-5"}>
      {menuTitle}
      <List className={"space-y-5"}>
        {menuItems.map((item) => (
          <ListItem className={classNames("p-0", customListItemStyle)}>{item}</ListItem>
        ))}
      </List>
    </Stack>
  );
};

const footersMenu: FooterMenuProps[] = [
  { menuTitle: "Explore", menuItems: ["About as", "Sitemap", "Bookmarks", "Sign in/Join"] },
  {
    menuTitle: "Customer Service",
    menuItems: ["Help Center", "Returns", "Product Recalls", "Accessibility", "Contact Us", "Store Pickup"],
  },
  { menuTitle: "Policy", menuItems: ["Return Policy", "Terms Of Use", "Security", "Privacy"] },
  { menuTitle: "Categories", menuItems: ["Action", "Comedy", "Drama", "Horror", "Kids", "Romantic Comedy"] },
];

interface PageFooterProps {
  className?: string;
}

const PageFooter = ({ className }: PageFooterProps): ReactElement => {
  return (
    <Stack className={classNames(className)} direction={"column"} spacing={10}>
      <Stack direction={"column"} className={"items-center space-x-3"}>
        <Typography variant={"h4"}>Join Our Newsletter</Typography>
        <Typography className={"text-gray-400"}>
          Signup to be the first to hear about exclusive deals, special offers and upcoming collections
        </Typography>
        <FormControl className={"flex flex-row justify-between mt-5"} sx={{ width: "60%" }}>
          <TextField
            id="outlined-basic"
            placeholder="Enter email for weekly newsletter."
            variant="outlined"
            sx={{ width: "80%", marginRight: "20px" }}
          />
          <Button className={"bg-black text-white px-10 normal-case"}>Subscribe</Button>
        </FormControl>
      </Stack>
      <Stack direction={"row"} className={"justify-between my-5"}>
        <Stack direction={"column"} className={"space-y-5"}>
          <FooterMenu
            menuTitle={<Typography variant={"h4"}>BOOKWORM</Typography>}
            menuItems={[
              <Box className={"flex flex-col"}>
                <Typography>1418 River Drive, Suite 35 Cottonhall, CA 9622</Typography>
                <Typography>United States</Typography>
              </Box>,
              <Box className={"flex flex-col"}>
                <Typography>sale@bookworm.com</Typography>
                <Typography>+1 246-345-0695</Typography>
              </Box>,
              <Stack direction={"row"} spacing={4}>
                {externalLinks.map((link) => (
                  <>{link.icon}</>
                ))}
              </Stack>,
            ]}
            customListItemStyle={"space-y-5"}
          />
        </Stack>
        <Stack direction={"row"} className={"justify-between"} sx={{ width: "60%" }}>
          {footersMenu.map((menu) => (
            <FooterMenu
              menuTitle={<Typography variant={"h6"}>{menu.menuTitle}</Typography>}
              menuItems={menu.menuItems}
            />
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PageFooter;
