import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

export default function SimpleEmail() {
  return (
    <Html>
      <Preview>Test Button</Preview>
      <Tailwind>
        <Head />
        <Body>
          <Container className="border border-black">
            <Heading>Simple Email</Heading>
            <Text>simple text</Text>
          </Container>
          <Section className="border border-black">
            <Column>
              <Row>Name</Row>
              <Row>Bob</Row>
              <Row>Mikey</Row>
            </Column>
            <Column>
              <Row>Species</Row>
              <Row>Human</Row>
              <Row>Cow</Row>
            </Column>
            <Column>
              <Row>Race</Row>
              <Row>Human</Row>
              <Row>Black</Row>
            </Column>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  );
}
