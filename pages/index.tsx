import InfoCard from '@/components/InfoCard';
import { Button, Col, Container, Grid, Navbar, Text } from '@nextui-org/react';

export default function Home() {
  return (
    <Container>
      {/* Navbar */}
      <Navbar isCompact variant={'static'}>
        <Navbar.Brand>
          <Text b color='inherit'>
            LearnToCode
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn='md'>
          <Navbar.Link href='#'>Learning Platform</Navbar.Link>
          <Navbar.Link href='#'>Community</Navbar.Link>
          <Navbar.Link href='#'>Contact Us</Navbar.Link>
        </Navbar.Content>

        <Navbar.Content>
          <Navbar.Link href='#'>Login</Navbar.Link>
          <Navbar.Item>
            <Button auto flat href='#'>
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>

      {/* Jumbotron */}
      <Grid.Container
        justify='center'
        css={{
          height: '500px',
          backgroundImage: 'url(https://littlevisuals.co/images/sunset.jpg)',
        }}
      >
        <Grid xs={12} sm={6} alignContent='center'>
          <Col css={{ width: '100%' }}>
            <Text weight={'bold'} size={70} css={{ textAlign: 'center' }}>
              The Education Platform
            </Text>
            <Text weight={'bold'} size={70} css={{ textAlign: 'center' }}>
              Of The Future
            </Text>
            <Button
              size='md'
              shadow
              color='gradient'
              css={{ width: '100%', marginTop: '10px' }}
            >
              Join for Free
            </Button>
          </Col>
        </Grid>
      </Grid.Container>

      {/* Displaying product cards */}
      <Grid.Container gap={2}>
        <Grid xs={12} sm={4}>
          <InfoCard
            label='Course'
            title='Learn Next.js'
            imageURL='https://littlevisuals.co/images/red_dawn.jpg'
            studentCount='3,500'
          />
        </Grid>
        <Grid xs={12} sm={4}>
          <InfoCard
            label='Course'
            title='Learn React.js'
            imageURL='https://littlevisuals.co/images/tail.jpg'
            studentCount='1,500'
          />
        </Grid>
        <Grid xs={12} sm={4}>
          <InfoCard
            label='Course'
            title='Learn Python'
            imageURL='https://littlevisuals.co/images/beam.jpg'
            studentCount='3,900'
          />
        </Grid>
      </Grid.Container>
    </Container>
  );
}
