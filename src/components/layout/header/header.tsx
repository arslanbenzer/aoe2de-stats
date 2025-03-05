import { Burger, Group, Image, Tooltip } from "@mantine/core";
import "./header.css";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "react-router-dom";

const links = [
  { link: "/leaderboard", label: "Leaderboards" },
  { link: "/pricing", label: "Pricing" },
  { link: "/learn", label: "Learn" },
  { link: "/community", label: "Community" },
];

export const Header = () => {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className="link"
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </a>
  ));

  return (
    <header className="header">
      <div className="inner">
        <Link to="/">
          <Tooltip label="Home  ">
            <Image src="/images/aoe2.png" height={40} width={40} />
          </Tooltip>
        </Link>
        <Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </Group>

        <Group>
          <Group ml={50} gap={5} visibleFrom="sm">
            {items}
          </Group>
        </Group>
      </div>
    </header>
  );
};
