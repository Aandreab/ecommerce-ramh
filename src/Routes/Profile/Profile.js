import { Box, Container, SimpleGrid, Divider, Stack, Text, useBreakpointValue,  Heading,
    Img, Button} from '@chakra-ui/react'
// import Footer from "../Footer/Footer.jsx"
// import "../Footer/Footer.css"
import * as React from 'react'
import Stat from './ProfileContent'
const stats = [
  {
    label: 'Recent Orders',
    value: 'The Batman Who Laughs',
  },
  {
    label: 'Recently Viewed',
    value: 'Superman: Last son of Krypton',
  },
  {
    label: 'Cart',
    value: 'Click here for your Cart',
  },
]

export const Profile = () => (
  <Box zIndex={"1"}>
    <Box
    as="section"
    bg="bg-surface"
    pt={{
      base: '4',
      md: '8',
    }}
    pb={{
      base: '12',
      md: '24',
    }}
  >
    <Container>
      <Stack spacing="5">
        <Text fontSize="lg" fontWeight="medium">
          Member overview
        </Text>
        <Divider />
      </Stack>
    </Container>
  </Box><Box
    as="section"
    py={{
      base: '4',
      md: '8',
    }}
  >
    <Container>
      <SimpleGrid
        columns={{
          base: 1,
          md: 3,
        }}
        gap={{
          base: '5',
          md: '6',
        }}
      >
        {stats.map(({ label, value }) => (
          <Stat key={label} label={label} value={value} />
        ))}
      </SimpleGrid>
    </Container>
  </Box>
  <Box as="section" bg="bg-surface">
    <Box position="relative" height={{ lg: '720px' }}>
      <Container py={{ base: '16', md: '24' }} height="full">
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          spacing={{ base: '16' }}
          align={{ lg: 'center' }}
          height="full"
        >
          <Stack spacing={{ base: '8', md: '12' }}>
            <Stack spacing="4">
              
              <Stack spacing={{ base: '4', md: '6' }} maxW={{ md: 'xl', lg: 'md', xl: 'xl' }}>
                <Heading size={useBreakpointValue({ base: 'md', md: 'xl' })}>
                 Ready to get back out there? 
                </Heading>
                <Text fontSize={{ base: 'lg', md: 'xl' }} color="muted">
                Choose from over 200 Comics on our Products Page
                </Text>
              </Stack>
            </Stack>
            <Stack direction={{ base: 'column', md: 'row' }} spacing="3">
              <Button variant="primary" size={useBreakpointValue({ base: 'lg', md: 'xl' })}>
                Buy our most popular comic now 
              </Button>
              <Button variant="secondary" size={useBreakpointValue({ base: 'lg', md: 'xl' })}>
                Learn more
              </Button>
            </Stack>
          </Stack>
          <Box
            pos={{ lg: 'absolute' }}
            right="0"
            bottom="0"
            w={{ base: 'full', lg: '50%' }}
            height={{ base: '96', lg: 'full' }}
            sx={{
              clipPath: { lg: 'polygon(7% 0%, 100% 0%, 100% 100%, 0% 100%)' },
            }}
          >
            <Img
              boxSize="full"
              objectFit="cover"
              src="https://d1466nnw0ex81e.cloudfront.net/n_iv/600/5131953.jpg"
              alt="The Batman Who Laughs"
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  </Box>
  {/* <Footer zIndex={"-1"}/> */}
  </Box>
)
export default Profile; 