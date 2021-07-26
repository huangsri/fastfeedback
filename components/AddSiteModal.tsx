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
  useToast,
} from '@chakra-ui/react'
import React, { Fragment } from 'react'
import { useForm } from 'react-hook-form'
import { mutate } from 'swr'

import { createSite } from '@/lib/db'
import { useAuthContext } from '@/lib/auth'

export const AddSiteModal = ({
  children,
}: {
  children: React.ReactNode
}): JSX.Element => {
  const toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const auth = useAuthContext()

  // const { data } = useSWR<{ sites: Site[] }>('/api/sites', fetcher)

  const { register, handleSubmit, reset } = useForm<SiteForm>()

  const onSubmit = async ({ name, url }: SiteForm) => {
    const newSite = {
      authorId: auth.user?.uid,
      createdAt: new Date().toISOString(),
      name,
      url,
    }

    await createSite(newSite)

    mutate('/api/sites', async (data: { sites: Site[] }) => {
      return { sites: [...(data.sites ?? []), newSite] }
    })
    toast({
      title: 'Success',
      description: `We've added your site.`,
      status: 'success',
    })
    onClose()
    reset()
  }

  return (
    <Fragment>
      <Button colorScheme="blackAlpha" sx={{ maxW: '200px' }} onClick={onOpen}>
        {children}
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
                  {...register('name', {
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
