import React from 'react'
import { Layout } from '../components/Layout'
import { Box } from '../components/Box'
import { PseudoBox } from '../components/PseudoBox'

const Button = props => (
  <PseudoBox
    as="button"
    color="foreground.50"
    borderRadius="full"
    textTransform="uppercase"
    boxShadow="outside.lg"
    background="linear-gradient(165.64deg, #26272B 9.53%, #34393F 95.92%)"
    minWidth="228px"
    height="64px"
    fontSize="xl"
    display="flex"
    justifyContent="center"
    alignItems="center"
    border="0"
    letterSpacing="1.5px"
    transition=".2s ease all"
    cursor="pointer"
    outline="0"
    _hover={{
      boxShadow: 'inside.md',
    }}
    _focus={{
      boxShadow: 'inside.md',
    }}
    {...props}
  />
)

const Index = () => {
  return (
    <Layout>
      <h2>Release 1.2</h2>
      <Box pt={4} display="grid" gridTemplateColumns="1fr 1fr 1fr" gridGap={5}>
        <Box
          display="flex"
          width="100px"
          height="100px"
          borderRadius="lg"
          justifyContent="center"
          alignItems="center"
          boxShadow="outside.lg"
          overflow="hidden"
          background="linear-gradient(128.11deg, #26272B 6.67%, #34393F 97.78%)"
        />
        <Box
          display="flex"
          width="100px"
          height="100px"
          borderRadius="lg"
          justifyContent="center"
          alignItems="center"
          boxShadow="outside.md"
          overflow="hidden"
          background="linear-gradient(128.11deg, #26272B 6.67%, #34393F 97.78%)"
        />
        <Box
          display="flex"
          width="100px"
          height="100px"
          borderRadius="lg"
          justifyContent="center"
          alignItems="center"
          boxShadow="outside.sm"
          overflow="hidden"
          background="linear-gradient(128.11deg, #26272B 6.67%, #34393F 97.78%)"
        />

        <Box
          display="flex"
          width="100px"
          height="100px"
          borderRadius="lg"
          justifyContent="center"
          alignItems="center"
          boxShadow="inside.lg"
          overflow="hidden"
          background="linear-gradient(128.11deg, #26272B 6.67%, #34393F 97.78%)"
        />
        <Box
          display="flex"
          width="100px"
          height="100px"
          borderRadius="lg"
          justifyContent="center"
          alignItems="center"
          boxShadow="inside.md"
          overflow="hidden"
          background="linear-gradient(128.11deg, #26272B 6.67%, #34393F 97.78%)"
        />
        <Box
          display="flex"
          width="100px"
          height="100px"
          borderRadius="lg"
          justifyContent="center"
          alignItems="center"
          boxShadow="inside.sm"
          overflow="hidden"
          background="linear-gradient(128.11deg, #26272B 6.67%, #34393F 97.78%)"
        />
      </Box>
      <Box pt={5} display="grid" gridGap={5}>
        <Button id="button">Sign Up</Button>
      </Box>
    </Layout>
  )
}

export default Index
