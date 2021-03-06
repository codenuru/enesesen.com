import { Box, Flex, Icon, Link } from '@chakra-ui/react';
import { FaSignature } from 'react-icons/fa';

import socialAccounts from '@/constants/socialAccounts';

import { Container } from '@/components/Container';
import { SocialButton } from '@/components/SocialButton';

export function Footer() {
  return (
    <Flex as="footer" my="16px" display={['none', 'flex']}>
      <Container>
        <Flex justify="space-between" align="center">
          <Flex align="center">
            <Icon as={FaSignature} mr="8px" color="red.500" />
            <Box as="span" fontSize="sm">
              coded by
              <Link href="https://github.com/codenuru/enesesen.com" isExternal pl="4px">
                enes esen
              </Link>
            </Box>
          </Flex>
          <Flex>
            {socialAccounts.map((socialAccount, index) => (
              <SocialButton
                key={String(index)}
                text={socialAccount.text}
                icon={socialAccount.icon}
                ariaLabel={socialAccount.ariaLabel}
                href={socialAccount.href}
              />
            ))}
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
}
