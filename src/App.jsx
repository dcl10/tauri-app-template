import { useState } from 'react'
import { 
  Button,
  Container,
  Heading,
  HStack,
  Input,
  Text,
} from '@chakra-ui/react'
import { invoke } from '@tauri-apps/api'

function App() {
  const [count, setCount] = useState(0)

  const rustIncrease = async () => {
    newNumber = await invoke('increase', {num: count})
    setCount(newNumber)
  }

  const rustDecrease = async () => {
    newNumber = await invoke('decrease', {num: count})
    setCount(newNumber)
  }

  return (
    <Container className='App'>
      <Heading>This is a template Tauri app.</Heading>
      <Text>It combines a fast and safe Rust backend with a React frontend.</Text>
      <HStack>
        <Button onClick={rustDecrease}>-</Button>
        <Input value={count} isReadOnly></Input>
        <Button onClick={rustIncrease}>+</Button>
      </HStack>
    </Container>
  )
}

export default App
