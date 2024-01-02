import {
  AppShell,
  Burger,
  Button,
  Checkbox,
  Group,
  Slider,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  useGirtSpacing,
  useGlobalState,
  useHiddenLayers,
  useLengthposts,
  useWidthposts,
} from "./StateHooks";
import { Scene } from "./components/Scene";
import {
  MaterialType,
  construct,
  costCalcMap,
  purposes,
} from "./construct/construct";
import { fromFeet, toFeet } from "./construct/util";

function App() {
  const [opened, { toggle }] = useDisclosure();
  const [widthposts, setWidthposts] = useWidthposts();
  const [lengthposts, setLengthposts] = useLengthposts();
  const [hiddenLayers, setHiddenLayers] = useHiddenLayers();
  const [girtSpacing, setGirtSpacing] = useGirtSpacing();
  const state = useGlobalState();
  const construction = construct(state);
  const price = construction.reduce(
    (a, b) => a + costCalcMap[b.type](b.width, b.length, b.height).price,
    0
  );
  console.log(price);

  const addHiddenLayer = (layer: MaterialType) => {
    setHiddenLayers([...new Set([...hiddenLayers, layer])]);
  };

  const removeHiddenLayer = (layer: MaterialType) => {
    setHiddenLayers(hiddenLayers.filter((x) => x !== layer));
  };

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <Button />
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          post Barn Builder
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <Text>Width: {widthposts * 8}</Text>
        <Slider
          min={16}
          max={120}
          defaultValue={16}
          step={16}
          value={widthposts * 8}
          onChange={(x) => setWidthposts(x / 8)}
        />
        <Text>Length: {lengthposts * 8}</Text>
        <Slider
          min={16}
          max={120}
          defaultValue={32}
          step={16}
          value={lengthposts * 8}
          onChange={(x) => setLengthposts(x / 8)}
        />
        <Text>Girt Spacing: {toFeet(girtSpacing)}</Text>
        <Slider
          min={2}
          max={8}
          defaultValue={4}
          step={2}
          value={toFeet(girtSpacing)}
          onChange={(x) => setGirtSpacing(fromFeet(x))}
        />

        {Object.keys(purposes).map((x) => (
          <Checkbox
            label={x}
            onChange={(e) =>
              e.target.checked
                ? addHiddenLayer(x as MaterialType)
                : removeHiddenLayer(x as MaterialType)
            }
            checked={hiddenLayers.includes(x as MaterialType)}
          />
        ))}
      </AppShell.Navbar>
      <AppShell.Main>
        <Scene construction={construction} hiddenLayers={hiddenLayers} />
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
