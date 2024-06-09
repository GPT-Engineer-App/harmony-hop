import { useState } from "react";
import { Container, VStack, Text, Heading, Box, Button, Image, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, FormControl, FormLabel, Input, useDisclosure } from "@chakra-ui/react";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";

const Index = () => {
  const [playlists, setPlaylists] = useState([]);
  const [playlistName, setPlaylistName] = useState("");
  const [playlistDescription, setPlaylistDescription] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSavePlaylist = () => {
    setPlaylists([...playlists, { name: playlistName, description: playlistDescription }]);
    setPlaylistName("");
    setPlaylistDescription("");
    onClose();
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" mb={6}>Music Streaming Service</Heading>
        <Box boxSize="sm">
          <Image src="/images/music-streaming.jpg" alt="Music Streaming" borderRadius="md" />
        </Box>
        <Text fontSize="lg" textAlign="center">
          Welcome to the best music streaming service. Enjoy unlimited music, curated playlists, and more.
        </Text>
        <VStack spacing={4} direction="row" align="center">
          <Button leftIcon={<FaBackward />} colorScheme="teal" variant="solid">
            Previous
          </Button>
          <Button leftIcon={<FaPlay />} colorScheme="teal" variant="solid">
            Play
          </Button>
          <Button leftIcon={<FaPause />} colorScheme="teal" variant="solid">
            Pause
          </Button>
          <Button leftIcon={<FaForward />} colorScheme="teal" variant="solid">
            Next
          </Button>
        </VStack>
        <Button colorScheme="teal" onClick={onOpen}>Create Playlist</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create New Playlist</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl>
                <FormLabel>Playlist Name</FormLabel>
                <Input value={playlistName} onChange={(e) => setPlaylistName(e.target.value)} />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Playlist Description</FormLabel>
                <Input value={playlistDescription} onChange={(e) => setPlaylistDescription(e.target.value)} />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handleSavePlaylist}>Save</Button>
              <Button variant="ghost" onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        {playlists.length > 0 && (
          <Box mt={8} width="100%">
            <Heading as="h2" size="lg" mb={4}>Your Playlists</Heading>
            {playlists.map((playlist, index) => (
              <Box key={index} p={4} borderWidth="1px" borderRadius="md" mb={4}>
                <Heading as="h3" size="md">{playlist.name}</Heading>
                <Text mt={2}>{playlist.description}</Text>
              </Box>
            ))}
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;