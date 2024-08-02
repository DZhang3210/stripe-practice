import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
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
          <Container>
            <Heading>Simple Email</Heading>
            <Text>simple text</Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
