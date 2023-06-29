import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
  import React from 'react'

  const PlacementExample = () =>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('right')
  
    return (
      <>
        <button colorScheme='blue' onClick={onOpen}>
        </button>
        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
            <DrawerBody>
              <span ></span>
              <span ></span>
              <span ></span>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default PlacementExample