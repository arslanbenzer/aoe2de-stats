import { Button, Container, Group, Text, Title } from "@mantine/core";

import "./not-found.page.css";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Container className="not-found-root">
      <div className="not-found-inner">
        <div className="not-found-content">
          <Title className="not-found-title">
            <h1>404</h1>Nothing to see here
          </Title>
          <Text c="dimmed" size="lg" ta="center" className="description">
            Page you are looking for does not exist.
          </Text>
          <Group justify="center">
            <Button onClick={() => navigate("/")} size="md">
              Homepage
            </Button>
          </Group>
        </div>
      </div>
    </Container>
  );
};
