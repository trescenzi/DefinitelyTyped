import {
    ActivationCard,
    Avatar,
    AvatarGroup,
    AvatarPair,
    Badge,
    Box,
    BoxProps,
    Button,
    ButtonGroup,
    Callout,
    Card,
    Checkbox,
    Collage,
    ColorSchemeProvider,
    Column,
    ComboBox,
    CompositeZIndex,
    Container,
    Datapoint,
    Divider,
    Dropdown,
    Fieldset,
    FixedZIndex,
    Flex,
    Heading,
    Icon,
    IconButton,
    Image,
    Label,
    Layer,
    Letterbox,
    Link,
    Mask,
    Masonry,
    Modal,
    Module,
    NumberField,
    OnLinkNavigationProvider,
    PageHeader,
    Pog,
    Popover,
    Pulsar,
    RadioButton,
    Row,
    ScrollBoundaryContainer,
    SearchField,
    SegmentedControl,
    SelectList,
    Sheet,
    Spinner,
    Stack,
    Status,
    Sticky,
    Switch,
    Table,
    Tabs,
    Tag,
    TapArea,
    Text,
    TextArea,
    TextField,
    Toast,
    Tooltip,
    Upsell,
    useFocusVisible,
    useReducedMotion,
    Video,
} from 'gestalt';
import * as React from 'react';

const MasonryComponent = ({}) => {
    return <div>Masonry</div>;
};

const CheckUseFocusVisible = () => {
    const { isFocusVisible } = useFocusVisible();
    return <>{isFocusVisible ? 'is visible' : 'no visible'}</>;
};

const CheckUseReducedMotion = () => {
    const shouldReduceMotion = useReducedMotion();
    return <>{shouldReduceMotion ? 'reduced' : 'not reduced'}</>;
};

<ActivationCard
    status="notStarted"
    statusMessage="Not started"
    title="Claim your website"
    message="Grow distribution and track Pins linked to your website"
    link={{
        href: 'foo',
        label: 'foo',
        accessibilityLabel: 'foo',
        onClick: ({ event }) => {
            event.stopPropagation();
        },
        rel: 'nofollow',
        target: 'blank',
    }}
/>;
<Avatar name="Nicolas" />;
<AvatarGroup accessibilityLabel="test-example" collaborators={[{ name: 'nicolas' }]} />;
<AvatarPair
    size="md"
    collaborators={[
        {
            name: 'Keerthi',
            src: 'https://i.ibb.co/ZfCZrY8/keerthi.jpg',
        },
        {
            name: 'Shanice',
            src: 'https://i.ibb.co/7tGKGvb/shanice.jpg',
        },
    ]}
/>;
<Badge text="Nicolas" />;
<Box ref={React.createRef<HTMLDivElement>()} />;

<Box aria-colspan={1} />;
// $ExpectError
<Box aria-colspan="foo" />;

<Box
    onDrag={event => {
        event.movementX;
    }}
/>;

<Box
    onDrag={event => {
        // $ExpectError
        event.__nonExistentProperty__;
    }}
/>;

// Test Box accepts Ref.
() => {
    const ref = React.useRef<HTMLDivElement>(null);
    return <Box ref={ref} />;
};
// Test BoxProps can be forwarded to Box.
(props: BoxProps) => <Box {...props} />;

<Button ref={React.createRef<HTMLAnchorElement>()} text={'Click me'} />;
<Button text="" />;
<ButtonGroup>
    <Button text={'Click me'} />
    <Button text={'Click me'} />
</ButtonGroup>;
<Card />;
<ComboBox
    accessibilityClearButtonLabel="combobox"
    id="combobox"
    label="combobox"
    noResultText="combobox"
    options={[{ label: 'combobox', value: 'combobox' }]}
/>;
<Callout
    type="info"
    iconAccessibilityLabel="Info icon"
    title="Your business account was successfully created!"
    message="Get a badge, show up in more shopping experiences and more. Apply to the Verified Merchant Program—it’s free!"
    primaryAction={{ accessibilityLabel: 'primary-callout', href: 'https://pinterest.com', label: 'Get started' }}
    secondaryAction={{ accessibilityLabel: 'secondary-callout', href: 'https://pinterest.com', label: 'Learn more' }}
    dismissButton={{
        accessibilityLabel: 'Dismiss banner',
        onDismiss: () => {},
    }}
/>;
<Checkbox id={'1'} onChange={() => {}} />;
<Collage columns={1} height={1} renderImage={({ height, index, width }) => null} width={1} />;
<ColorSchemeProvider colorScheme="dark" id="docsExample" />;
<Column span={1} />;
<Container />;
<ScrollBoundaryContainer />;
<ScrollBoundaryContainer height={1} overflow="scroll" />;
<Divider />;
<Dropdown id="dropdown-example" onDismiss={() => {}}>
    <Dropdown.Section label="View options">
        <Dropdown.Item
            option={{ value: 'item 1', label: 'Custom link 1' }}
            onSelect={({ item }) => {}}
            selected={undefined}
        >
            <Text>Dropdown</Text>
        </Dropdown.Item>
        <Dropdown.Link href="#" option={{ value: 'item 2', label: 'Url Link' }}></Dropdown.Link>
    </Dropdown.Section>
</Dropdown>;
<Fieldset legend="Fieldset Example">
    <RadioButton id="id1" onChange={() => {}} />;
    <RadioButton id="id2" onChange={() => {}} />;
    <RadioButton id="id3" onChange={() => {}} />;
</Fieldset>;
<Flex>
    <Flex.Item>
        <Text>Flex</Text>
    </Flex.Item>
</Flex>;
<Heading />;
<Icon accessibilityLabel="icon" />;
<IconButton
    accessibilityLabel="icon"
    tooltip={{
        text: 'foo',
        idealDirection: 'down',
    }}
/>;
<Image alt="image" color="#ffff" naturalHeight={1} naturalWidth={1} src="http" />;
<Label htmlFor="id" />;
<Layer>
    <div />
</Layer>;
<Letterbox contentAspectRatio={1} height={1} width={1} />;
<Link href="#" />;
<Mask />;
<Masonry comp={MasonryComponent} items={[{}]} />;
<Modal accessibilityModalLabel="modal" onDismiss={() => {}} heading={<Text>Header</Text>} subHeading="header" />;
<Module id="foo" icon="add" iconAccessibilityLabel="hello" title="world" type="info" />;
<Module.Expandable
    id="ModuleExample1"
    accessibilityExpandLabel="Expand the module"
    accessibilityCollapseLabel="Collapse the module"
    items={[
        {
            title: 'Title',
            summary: ['summary1', 'summary2', 'summary3'],
            children: <Text size="md">Children1</Text>,
        },
    ]}
    expandedIndex={1}
    onExpandedChange={index => {}}
></Module.Expandable>;
<NumberField id="number" onChange={({ value }) => value} step={1} />;
<OnLinkNavigationProvider
    onNavigation={() => {
        return undefined;
    }}
/>;
<PageHeader title="Home" />;
<Pog />;
<Popover
    onDismiss={() => {}}
    anchor={React.useRef<HTMLAnchorElement>().current!}
    onKeyDown={({ event }) => {
        event.preventDefault();
    }}
/>;

<Pulsar />;
<RadioButton id="id" onChange={() => {}} />;
<Row gap={1}>
    <div />
</Row>;
<SearchField accessibilityLabel="Demo Search Field" id="searchField" onChange={({ value }) => value} />;
<SegmentedControl items={[]} selectedItemIndex={1} onChange={() => {}} />;
<SelectList id="city" onChange={({ value }) => value} options={[]} />;
<Sheet
    accessibilityDismissButtonLabel="Dismiss"
    accessibilitySheetLabel="Example sheet to demonstrate different sizes"
    onDismiss={() => {}}
    footer={<Heading>Footer</Heading>}
>
    {({ onDismissStart }) => (
        <Heading>
            Content <button onClick={onDismissStart} />
        </Heading>
    )}
</Sheet>;
<Spinner show={true} accessibilityLabel="Example spinner" />;
<Stack alignItems="center" gap={2}>
    <div />
    <div />
    <div />
</Stack>;
<Status type="problem" />;
<Sticky top={0}>
    <div>Hello World</div>
</Sticky>;
<Switch id="id" onChange={() => {}} />;
<Table accessibilityLabel="max height test" maxHeight={1} />;
<Table accessibilityLabel="max height test 2" maxHeight="75vh" />;
<Table accessibilityLabel="complex table">
    <Table.Header>
        <Table.Row>
            <Table.SortableHeaderCell onSortChange={() => {}} sortOrder={'asc'} status={'active'}>
                <Text weight="bold">Name</Text>
            </Table.SortableHeaderCell>
            <Table.HeaderCell>
                <Text weight="bold">House</Text>
            </Table.HeaderCell>
            <Table.HeaderCell>
                <Text weight="bold">Birthday</Text>
            </Table.HeaderCell>
        </Table.Row>
    </Table.Header>
    <Table.Body>
        <Table.Row>
            <Table.Cell>
                <Text>Hermione Granger</Text>
            </Table.Cell>
            <Table.Cell>
                <Text>Gryffindor</Text>
            </Table.Cell>
            <Table.Cell>
                <Text>September 19, 1979</Text>
            </Table.Cell>
        </Table.Row>
        <Table.RowExpandable
            accessibilityExpandLabel="Expand"
            accessibilityCollapseLabel="Collapse"
            id="row1"
            onExpand={() => {}}
            expandedContents={
                <Box maxWidth={236} padding={2} column={12}>
                    <Card image={<Avatar name="luna avatar" src="https://i.ibb.co/QY9qR7h/luna.png" />}>
                        <Text align="center" weight="bold">
                            <Link href="https://pinterest.com">
                                <Box paddingX={3} paddingY={2}>
                                    Luna's Info
                                </Box>
                            </Link>
                        </Text>
                        <Text>Row expanded</Text>
                    </Card>
                </Box>
            }
        >
            <Table.Cell>
                <Text>Luna Lovegood</Text>
            </Table.Cell>
            <Table.Cell>
                <Text>Ravenclaw</Text>
            </Table.Cell>
            <Table.Cell>
                <Text>June 25, 1993</Text>
            </Table.Cell>
        </Table.RowExpandable>
    </Table.Body>
    <Table.Footer>The end</Table.Footer>
</Table>;
<TapArea mouseCursor="zoomIn" onTap={() => {}} rounding={2}>
    Hello
</TapArea>;
<Tabs
    tabs={[
        {
            text: 'Boards',
            href: '#',
        },
        {
            text: 'Pins',
            href: '#',
        },
        {
            text: 'Topics',
            href: '#',
        },
    ]}
    activeTabIndex={1}
    onChange={() => {}}
/>;
<Tag disabled text="New" />;
<Text />;
<TextArea id="id" onChange={() => {}} />;
<TextField id="email" onChange={({ value }) => value} tags={[<Tag text="Foo" />, <Tag text="Bar" />]} />;

<Toast variant="error" text={<>Oops! Something went wrong. Please try again later.</>} />;
<Tooltip text="tooltip">
    <div />
</Tooltip>;
<Upsell
    message="Hello world"
    imageData={{
        component: <Icon icon="pinterest" accessibilityLabel="Pin" color="darkGray" size={32} />,
    }}
/>;
<Upsell
    title="Give $30, get $60 in ads credit"
    message="Earn $60 of ads credit, and give $30 of ads credit to a friend"
    dismissButton={{
        accessibilityLabel: 'Dismiss banner',
        onDismiss: () => {},
    }}
    imageData={{
        component: <Icon icon="pinterest" accessibilityLabel="Pin" color="darkGray" size={32} />,
    }}
>
    <Upsell.Form
        onSubmit={({ event }) => {
            event.preventDefault();
        }}
        submitButtonText="Submit"
        submitButtonAccessibilityLabel="Submit name for ads credit"
    />
</Upsell>;
<Video
    aspectRatio={853 / 480}
    captions=""
    poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
    src="http://media.w3.org/2010/05/bunny/movie.mp4"
/>;
<Icon accessibilityLabel={'sup'} icon={'add'} dangerouslySetSvgPath={{ __path: 'something' }} />;
<IconButton accessibilityLabel={'something'} icon={'add-pin'} />;

new FixedZIndex(1);
new CompositeZIndex([new FixedZIndex(1), new CompositeZIndex([new FixedZIndex(1)])]);

<Datapoint
    title="Test Value"
    value="100"
    trend={{ accesibilityLabel: 'Trending up', value: 50 }}
    trendSentiment="good"
/>;
