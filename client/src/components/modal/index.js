import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Textarea,
    Button
  } from '@chakra-ui/react'
import React from 'react'
function PrivateModal({isOpen, onClose, handleSubmitForm, address, setAddress}) {
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Adress</FormLabel>
              <Textarea onChange={(e)=> setAddress(e.target.value)} value={address} ref={initialRef} placeholder='Adress' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={handleSubmitForm} colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default PrivateModal