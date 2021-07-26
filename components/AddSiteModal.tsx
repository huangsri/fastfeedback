import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react'
import { Fragment } from 'react'
import { useForm } from 'react-hook-form'

import { createSite } from '@/lib/db'

export const AddSiteModal = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const { register, handleSubmit } = useForm<SiteForm>()

  const onSubmit = async (data: SiteForm) => {
    console.log(data)
    const res = await createSite(data)
    console.log(res)
  }

  return (
    <Fragment>
      <Button sx={{ maxW: '200px' }} onClick={onOpen}>
        Add your first site
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalContent>
            <ModalHeader sx={{ fontWeight: 'bold' }}>Add Site</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                  autoFocus
                  placeholder="My site"
                  {...register('site', {
                    required: 'Required',
                  })}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Link</FormLabel>
                <Input
                  placeholder="https://website.com"
                  {...register('url', {
                    required: 'Required',
                  })}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button onClick={onClose} mr={3}>
                Cancel
              </Button>
              <Button colorScheme="teal" type="submit">
                Save
              </Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </Fragment>
  )
}
