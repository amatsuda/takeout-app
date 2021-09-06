import React from "react";
import { Colors } from "./theme";
import { HStack, Flex, Heading, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

import { EventNoteIcon } from "./EventNoteIcon";
import { AccountCircleIcon } from "./AccountCircleIcon";

import Api from "./Api";

export const Navbar: React.FC = () => {
  const { data: conferenceData } = Api.useConference();

  // TODO: bgImage...

  return (
    <>
      <Flex as="nav" justify="space-between" alignItems="center" w="100%" h="56px" px="18px" bgColor={Colors.bg}>
        <Heading as="h1" size="lg" fontSize="22px">
          {conferenceData?.conference ? (
            <Link as={RouterLink} to={`/tracks/${conferenceData.conference.default_track}`} color={Colors.main}>
              RubyKaigi Takeout 2021
            </Link>
          ) : (
            <Text as="span" color={Colors.main}>
              RubyKaigi Takeout 2021
            </Text>
          )}
        </Heading>
        <HStack spacing="14px">
          <Link href="https://rubykaigi.org/2021-takeout/schedule" isExternal>
            <EventNoteIcon boxSize="20px" color={Colors.defaultAvatarBg} />
          </Link>
          <Link as={RouterLink} to="/attendee">
            <AccountCircleIcon boxSize="20px" color={Colors.defaultAvatarBg} />
          </Link>
        </HStack>
      </Flex>
    </>
  );
};
export default Navbar;
