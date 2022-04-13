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

const Sidebar = () => {
  return (
    <Box width="100%" height="calc(100vh - 100px)" bg="black" color="gray" paddingX="5px">
      <Box paddingY="20px">
        <Box width="120px" marginBottom="20px" paddingX="20px">
          <NextImage src="/logo.svg" height={60} width = {120} />
        </Box>
      </Box>
    </Box>
  )

};

export default Sidebar;
