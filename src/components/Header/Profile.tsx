import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Lucas Vieira</Text>
          <Text color="gray.300" fontSize="small">
            lucasav2005@hotmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Lucas Vieira"
        src="https://github.com/Bilusca.png"
      />
    </Flex>
  );
}
