import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  Center,
  LinkBox,
  LinkOverlay
} from '@chakra-ui/layout'
import { calc } from '@chakra-ui/react'
import { MdHome, MdSearch, MdLibraryMusic, MdPlaylistAdd, MdFavourite } from 'react-icons/md'
import NextImage from 'next/image'
import NextLink from 'next/link'

const navMenu = [
  {
    name: 'Home',
    icon: MdHome,
    route: '/'
  },
  {
    name: 'Search',
    icon: MdSearch,
    route: '/search'
  },
  {
    name: 'Your Library',
    icon: MdLibraryMusic,
    route: '/library'
  }
]

const Sidebar = () => {
  return (
    <Box width="100%" height="calc(100vh - 100px)" bg="black" color="gray" paddingX="5px">
      <Box paddingY="20px">
        <Box width="120px" marginBottom="20px" paddingX="20px">
          <NextImage src="/logo.svg" height={60} width={120} />
        </Box>
        <Box marginBottom="20px">
          <List spacing={2}>
            {navMenu.map(menu => (
              <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
                <LinkBox>
                  <NextLink href={menu.route} passHref>
                    <LinkOverlay>
                      <ListIcon as={menu.icon} color="white" marginRight="20px" />
                      {menu.name}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box >
  )

};

export default Sidebar
