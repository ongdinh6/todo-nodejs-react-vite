import React, { ReactElement, ReactNode } from "react";
import { Box, Stack } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

interface IconLabelProps {
  icon: ReactNode;
  label: string;
}

const IconLabel = ({ icon, label }: IconLabelProps) => {
  return (
    <Box className={"text-base space-x-2"}>
      {icon}
      <span>{label}</span>
    </Box>
  );
};

export const SubHeader = (): ReactElement => {
  return (
    <Stack direction={"row"} className={"p-2 items-center"}>
      <Box className={"flex float-left space-x-6 text-left"} sx={{ width: "50%" }}>
        <IconLabel icon={<HelpIcon />} label={"Can we help you?"} />
        <IconLabel icon={<PhoneAndroidIcon />} label={"+1 246-345-0695"} />
      </Box>
      <Box className={"float-right space-x-6 text-right"} sx={{ width: "50%" }}>
        <LocationOnIcon />
        <SyncAltIcon />
        <FavoriteIcon />
        <PersonIcon />
        <ShoppingBagIcon />
      </Box>
    </Stack>
  );
};
