import React, { useState, useEffect, Suspense } from 'libs/react';
import { ChakraProvider } from 'libs/@chakra-ui/react'
import Squad1Component from 'squad1/Squad1Component';
import Squad2Component from 'squad2/Squad2Component';

import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from 'libs/@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from 'libs/@chakra-ui/icons';
import { BrowserRouter as Router, Switch, Route, Link } from 'libs/react-router-dom';


const Links = [
  { name: 'Squad 1', path: '/squad1' },
  { name: 'Squad 2', path: '/squad2' },
  { name: 'Squad 3', path: '/squad3' }
];

const App = () => {
  const [squadData, setSquadData] = useState('NoSquadsComplete');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const parentState = (squadData) => {
    setSquadData(squadData);
  }

  useEffect(() => {

  }, []);

  return (
    <ChakraProvider>
      <Router>
        <main>
          <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
              <IconButton
                size={'md'}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label={'Open Menu'}
                display={{ md: 'none' }}
                onClick={isOpen ? onClose : onOpen}
              />
              <HStack spacing={8} alignItems={'center'}>
                <Box>My App</Box>
                <HStack
                  as={'nav'}
                  spacing={4}
                  display={{ base: 'none', md: 'flex' }}>
                  {Links.map((link) => (
                    <Link key={link.name} to={link.path}>{link.name}</Link>
                  ))}
                </HStack>
              </HStack>
              <Flex alignItems={'center'}>
                <Button
                  variant={'solid'}
                  colorScheme={'teal'}
                  size={'sm'}
                  mr={4}
                  leftIcon={<AddIcon />}>
                  Action
                </Button>
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={'full'}
                    variant={'link'}
                    cursor={'pointer'}
                    minW={0}>
                    <Avatar
                      size={'sm'}
                      src={
                        'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                      }
                    />
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Link 1</MenuItem>
                    <MenuItem>Link 2</MenuItem>
                    <MenuDivider />
                    <MenuItem>Link 3</MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
            </Flex>
          </Box>

        </main>
        <Suspense fallback={'loading...'}>
          <Switch>

            <Route path="/squad1">
              <Box p={4}>
                Content from squad1
                <Squad1Component squadData={squadData} callParent={parentState} />
              </Box>
            </Route>
            <Route path="/squad2">
              <Box p={4}>
                <div>Content from squad2</div>
                <Squad2Component squadData={squadData} callParent={parentState} />
              </Box>
            </Route>
            <Route path="/squad3">
              <Box p={4}>
                Content from squad3
              </Box>
            </Route>
          </Switch>
        </Suspense>
      </Router>


    </ChakraProvider>

  );
};

export default App;
