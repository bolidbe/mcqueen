import { useState } from "react"
import classNames from "classnames"
import { includes, filter } from "lodash"
import { GetServerSideProps } from 'next'
import { useForm } from "react-hook-form";
import {
  AccountFillIcon,
  AccountOutlineIcon,
  AirConditioningIcon,
  AnalyticsIcon,
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  AtIcon,
  BadgeIcon,
  BodyworkIcon,
  BrakeIcon,
  BrowserIcon,
  BucketIcon,
  CalendarIcon,
  CarIcon,
  CardIcon,
  ChargeIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  ClockIcon,
  ClutchIcon,
  CoinIcon,
  CompassIcon,
  CrossIcon,
  DiagnosticIcon,
  EditIcon,
  EngineIcon,
  ExhaustIcon,
  FilterIcon,
  GalleryIcon,
  HomeIcon,
  InfoFillIcon,
  InfoOutlineIcon,
  LinkIcon,
  ListIcon,
  LockIcon,
  LogoutIcon,
  MailIcon,
  MapMarkerFillIcon,
  MapMarkerOutlineIcon,
  MinusIcon,
  OilIcon,
  ParallelismIcon,
  PhoneIcon,
  PlusIcon,
  QuestionFillIcon,
  QuestionOutlineIcon,
  SearchIcon,
  SettingsIcon,
  ShockAbsorberIcon,
  StarFillIcon,
  StarOutlineIcon,
  SteeringIcon,
  StopFillIcon,
  TimingBeltIcon,
  TowTruckIcon,
  UnlockedIcon,
  UserIcon,
  UsersIcon,
  VisionIcon,
  WarningFillIcon,
  WarningOutlineIcon,
  WheelIcon
} from '@bolid/mcqueen-icons'
import {
  Title,
  Text,
  Button,
  TextInput,
  TextArea,
  Select,
  Radio,
  Checkbox,
  Switch,
  StarRating,
  StarRatingInput,
  BannerAlert,
  Alert,
  Image,
  UserAvatar,
  EntityAvatar,
  FilterChip,
  ToggleChip,
  Modal,
  Tooltip,
  Breadcrumbs,
  HtmlContent,
  ShowMore,
  QueryPagination,
  StatePagination,
  PathPagination,
  Pill,
  Autocomplete
} from "@bolid/mcqueen-react"
const colors: any = require("@bolid/mcqueen-scss/config/colors.json")

const Card = ({ children, title }: any) => (
  <div className="max-w-6 rounded-big mx-auto bg-white shadow-1 p-5 mb-5">
    <Title heading={2} size={2} className="mb-5">{ title }</Title>
    { children }
  </div>
)

const Section = ({ children, title }: any) => (
  <div className="mb-5">
    <Title heading={2} size={3} className="mb-3">{ title }</Title>
    { children }
  </div>
)

const SubSection = ({ children, title }: any) => (
  <div className="my-3">
    <Title heading={2} size={4} className="mb-2">{ title }</Title>
    { children }
  </div>
)

const ColorCard = ({ hex, name }: any) => (
  <div className="border rounded overflow-hidden mr-3" style={{ width: "130px" }}>
    <div className="mx-auto" style={{ backgroundColor: hex, height: "130px" }}></div>
    <Text className="border-t  py-2 text-center" size={3}> { name }</Text>
  </div>
)

type AvatarSizeType = "small" | "medium" | "large" | "xlarge" | "xsmall"
const avatarSizes: AvatarSizeType[] = ["xlarge", "large", "medium", "small", "xsmall"]

type ButtonThemeType = "primary" | "secondary" | "tertiary" | "caution" | "solid"
const buttonThemes: ButtonThemeType[] = ['primary', 'secondary', 'tertiary', 'caution']

type TextSizeType = 1 | 2 | 3 | 4
const textSizes: TextSizeType[] = [1, 2, 3, 4]

type TitleSizeType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
const titleSizes: TitleSizeType[] = [1, 2, 3, 4, 5, 6, 7, 8]

const SUGGESTIONS = [{
  label: "First",
  value: "1"
}, {
  label: "Second",
  value: "2"
}, {
  label: "Third",
  value: "3"
}]

const SUGGESTIONS_SECTIONS = [{
  section: "Section 1",
  suggestions: [{
    label: "First",
    value: "1"
  }, {
    label: "Second",
    value: "2"
  }, {
    label: "Third",
    value: "3"
  }]
}, {
  section: "Section 2",
  suggestions: [{
    label: "First",
    value: "1"
  }, {
    label: "Second",
    value: "2"
  }]
}]

const SearchAutocomplete = ({
  className,
  hasSections,
  isLoading,
  hasError,
  isDisabled
}) => {
  const [suggestions, setSuggestions] = useState(hasSections ? SUGGESTIONS_SECTIONS : SUGGESTIONS)
  const [value, setValue] = useState(null)

  const handleFetchRequested = (value) => {
    if(!hasSections){
      setSuggestions(filter(
        SUGGESTIONS,
        option => value === "" || includes(option.label.toLowerCase(), value)
      ))
    }
  }

  const handleSelect = (value, suggestion) => {
    setValue(value)
  }

  return (
    <div className={className}>
      <Autocomplete
        label="Search for something"
        iconLeft="search"
        placeholder="Placeholder"
        suggestions={suggestions}
        onFetchRequested={handleFetchRequested}
        onSelect={handleSelect}
        isLoading={isLoading}
        hasError={hasError}
        isDisabled={isDisabled}
        name="search"
      />
      <Text size={4} className="mt-1">
      Selected value : { value ? value : "Nothing yet..." }
      </Text>
    </div>
  )
}

const Form = () => {
  const { register, handleSubmit, watch, errors } = useForm({
    defaultValues: {
      textinput: "Lala",
      textarea: "Lala",
      select: "",
      checkbox1: false,
      checkbox2: false,
      switch1: "",
      switch2: true,
      radio: "",
      starrating: "0"
    }
  })
  const onSubmit = data => console.log(data);

  const textinput = watch("textinput")
  const textarea = watch("textarea")
  const select = watch("select")
  const starrating = watch("starrating")
  const radio = watch("radio")
  const switch1 = watch("switch1")
  const checkbox1 = watch("checkbox1")

  /*
  console.log("TEXTINPUT", textinput)
  console.log("TEXTAREA", textarea)
  console.log("SELECT", select)
  console.log("RATING", starrating)
  console.log("CHECKBOX 1", checkbox1)
  console.log("SWITCH 1", switch1)
  console.log("RADIO", radio)
  */

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        ref={register}
        label="Text Input"
        name="textinput"
      />
      <TextArea
        ref={register}
        label="Text Area"
        name="textarea"
      />
      <Select
        ref={register}
        label="Select"
        name="select"
      >
        <option value="">Empty</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </Select>
      <Checkbox
        ref={register}
        name="checkbox1"
      >
        Checkbox 1
      </Checkbox>
      <Checkbox
        ref={register}
        name="checkbox2"
      >
        Checkbox 2
      </Checkbox>
      <Switch
        ref={register}
        name="switch1"
      >
        Switch 1
      </Switch>
      <Switch
        ref={register}
        name="switch2"
      >
        Switch 2
      </Switch>
      <Radio
        ref={register}
        name="radio"
        value="1"
      >
        Radio 1
      </Radio>
      <Radio
        ref={register}
        name="radio"
        value="2"
      >
        Radio 2
      </Radio>
      <StarRatingInput
        ref={register}
        name="starrating"
        size="large"
      />
      // Autocomplete
      <Button type="submit">
        Envoyer
      </Button>
    </form>
  );
}

export default function Home() {
  const [textInput, setTextInput] = useState("")
  const [smallWidthModalIsOpen, setSmallWidthModalIsOpen] = useState(false)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [largeWidthModalIsOpen, setLargeWidthModalIsOpen] = useState(false)
  const [mediumHeightModalIsOpen, setMediumHeightModalIsOpen] = useState(false)
  const [largeHeightModalIsOpen, setLargeHeightModalIsOpen] = useState(false)
  const [showMoreIsExpanded, setShowMoreIsExpanded] = useState(false)

  return (
    <div className="min-h-screen bg-gray-200 pb-5 pt-6">
      <div className="wrap">
        <Title className="text-center mb-6" heading={1}>McQueen Playground</Title>
        <Card title="Form">
          <Form/>
        </Card>
        <Card title="Icon">
          {
            [
              AccountFillIcon,
              AccountOutlineIcon,
              AirConditioningIcon,
              AnalyticsIcon,
              ArrowDownIcon,
              ArrowLeftIcon,
              ArrowRightIcon,
              ArrowUpIcon,
              AtIcon,
              BadgeIcon,
              BodyworkIcon,
              BrakeIcon,
              BrowserIcon,
              BucketIcon,
              CalendarIcon,
              CarIcon,
              CardIcon,
              ChargeIcon,
              CheckIcon,
              ChevronDownIcon,
              ChevronLeftIcon,
              ChevronRightIcon,
              ChevronUpIcon,
              ClockIcon,
              ClutchIcon,
              CoinIcon,
              CompassIcon,
              CrossIcon,
              DiagnosticIcon,
              EditIcon,
              EngineIcon,
              ExhaustIcon,
              FilterIcon,
              GalleryIcon,
              HomeIcon,
              InfoFillIcon,
              InfoOutlineIcon,
              LinkIcon,
              ListIcon,
              LockIcon,
              LogoutIcon,
              MailIcon,
              MapMarkerFillIcon,
              MapMarkerOutlineIcon,
              MinusIcon,
              OilIcon,
              ParallelismIcon,
              PhoneIcon,
              PlusIcon,
              QuestionFillIcon,
              QuestionOutlineIcon,
              SearchIcon,
              SettingsIcon,
              ShockAbsorberIcon,
              StarFillIcon,
              StarOutlineIcon,
              SteeringIcon,
              StopFillIcon,
              TimingBeltIcon,
              TowTruckIcon,
              UnlockedIcon,
              UserIcon,
              UsersIcon,
              VisionIcon,
              WarningFillIcon,
              WarningOutlineIcon,
              WheelIcon
            ].map((icon, i) => <span key={i}>{ icon({ size: 40 }) }</span>)
          }
        </Card>


        <Card title="Typography">
          <div className="flex">
            <div className="w-1/2">
            {
              titleSizes.map(i => (
                <Title key={i} size={i}>Heading {i}</Title>
              ))
            }
            </div>
            <div className="w-1/2">
            {
              textSizes.map(i => (
                <Text key={i} size={i} isBold={true}>Bold body {i}</Text>
              ))
            }
            {
              textSizes.map(i => (
                <Text key={i} size={i}>Body {i}</Text>
              ))
            }
            </div>
          </div>
        </Card>


        <Card title="Color">
        {
          Object.keys(colors).filter((c: string) => c !== "transparent" && c !== "white").map((color: string, i) => (
            <div key={i} className="mb-5">
              <Title className="mb-3" size={3}>{ color.charAt(0).toUpperCase() + color.slice(1) }</Title>
              <div className="flex">
                {
                  typeof colors[color] === "string" ? (
                    <ColorCard hex={colors[color]} name="default"/>
                  ) : Object.keys(colors[color]).map((c, j) => (
                    <ColorCard key={j} hex={colors[color][c]} name={c}/>
                  ))
                }
              </div>
            </div>
          ))
        }
        </Card>

        <Card title="Image">
          <Image
            src="https://d1vg1gqh4nkuns.cloudfront.net/i/356206765797793818/width/768.jpeg"
            containerAspectRatio={728 / 485}
            sources={[
              {
                type: 'image/webp',
                srcSet: `
                  https://d1vg1gqh4nkuns.cloudfront.net/i/356206765797793818/width/120.webp 120w,
                  https://d1vg1gqh4nkuns.cloudfront.net/i/356206765797793818/width/320.webp 320w,
                  https://d1vg1gqh4nkuns.cloudfront.net/i/356206765797793818/width/400.webp 400w,
                  https://d1vg1gqh4nkuns.cloudfront.net/i/356206765797793818/width/640.webp 640w,
                  https://d1vg1gqh4nkuns.cloudfront.net/i/356206765797793818/width/768.webp 768w,
                  https://d1vg1gqh4nkuns.cloudfront.net/i/356206765797793818/width/1024.webp 1024w,
                  https://d1vg1gqh4nkuns.cloudfront.net/i/356206765797793818/width/1366.webp 1366w,
                  https://d1vg1gqh4nkuns.cloudfront.net/i/356206765797793818/width/1600.webp 1600w,
                  https://d1vg1gqh4nkuns.cloudfront.net/i/356206765797793818/width/1920.webp 1920w,
                  https://d1vg1gqh4nkuns.cloudfront.net/i/356206765797793818/width/2200.webp 2200w,
                  https://d1vg1gqh4nkuns.cloudfront.net/i/356206765797793818/width/2350.webp 2350w,
                  https://d1vg1gqh4nkuns.cloudfront.net/i/356206765797793818/width/2560.webp 2560w
                `,
              },
              {
                type: 'image/jpeg',
                srcSet: `
                  https://d1vg1gqh4nkuns.cloudfront.net/i/356206765797793818/width/120.jpeg 120w,
                  https://d1vg1gqh4nkuns.cloudfront.net/i/356206765797793818/width/320.jpeg 320w,
                  https://d1vg1gqh4nkuns.cloudfront.net/i/356206765797793818/width/400.jpeg 400w,
                  https://d1vg1gqh4nkuns.cloudfront.net/i/356206765797793818/width/640.jpeg 640w,
                  https://d1vg1gqh4nkuns.cloudfront.net/i/356206765797793818/width/768.jpeg 768w,
                  https://d1vg1gqh4nkuns.cloudfront.net/i/356206765797793818/width/1024.jpeg 1024w,
                  https://d1vg1gqh4nkuns.cloudfront.net/i/356206765797793818/width/1366.jpeg 1366w,
                  https://d1vg1gqh4nkuns.cloudfront.net/i/356206765797793818/width/1600.jpeg 1600w,
                  https://d1vg1gqh4nkuns.cloudfront.net/i/356206765797793818/width/1920.jpeg 1920w,
                  https://d1vg1gqh4nkuns.cloudfront.net/i/356206765797793818/width/2200.jpeg 2200w,
                  https://d1vg1gqh4nkuns.cloudfront.net/i/356206765797793818/width/2350.jpeg 2350w,
                  https://d1vg1gqh4nkuns.cloudfront.net/i/356206765797793818/width/2560.jpeg 2560w
                `,
              },
            ]}
            alt="Cat laying in the sun"
          />
        </Card>


        <Card title="Button">
          <Section title="Sizes">
            <div className="flex items-end">
              <Button>Large button</Button>
              <Button className="ml-3" size="small">Small button</Button>
            </div>
          </Section>

          <Section title="Themes">
            <div className="flex flex-wrap">
              {
                buttonThemes.map((theme, i) => (
                  <Button key={i} className="mr-3 mb-3" theme={theme}>{ theme.charAt(0).toUpperCase() + theme.slice(1) }</Button>
                ))
              }
              <div className="bg-purple p-3">
                <Button theme="solid">Solid</Button>
              </div>
            </div>
          </Section>

          <Section title="Variants">
            <SubSection title="Loading">
              <div className="flex flex-wrap">
                {
                  buttonThemes.map((theme, i) => (
                    <Button key={i} className="mr-3 mb-3" theme={theme} isLoading>{ theme.charAt(0).toUpperCase() + theme.slice(1) }</Button>
                  ))
                }
              </div>
            </SubSection>
            <SubSection title="States">
              <div className="flex flex-wrap">
                {
                  buttonThemes.map((theme, i) => (
                    <Button key={i} className="mr-3 mb-3" theme={theme} isDisabled>{ theme.charAt(0).toUpperCase() + theme.slice(1) }</Button>
                  ))
                }
                <div className="bg-purple p-3">
                  <Button theme="solid" isDisabled>Solid</Button>
                </div>
              </div>
            </SubSection>
            <SubSection title="With icon">
              <div className="flex items-end">
                <Button iconLeft="calendar" size="large">Large button</Button>
                <Button className="ml-3" size="small" iconLeft="calendar">Small button</Button>
              </div>
            </SubSection>
          </Section>
        </Card>


        <Card title="Text Input">
          <Section title="With or without icon">
            <div className="flex">
              <TextInput
                value={textInput}
                onChange={setTextInput}
                placeholder="example@example.com"
                iconLeft="search"
                className="w-full"
              />
              <TextInput
                value={textInput}
                onChange={setTextInput}
                placeholder="example@example.com"
                className="ml-3 w-full"
              />
            </div>
          </Section>
          <Section title="Sizes">
            <div className="flex items-end">
              <TextInput
                value={textInput}
                onChange={setTextInput}
                placeholder="example@example.com"
                iconLeft="search"
                size="large"
                className="w-full"
              />
              <TextInput
                value={textInput}
                onChange={setTextInput}
                placeholder="example@example.com"
                className="ml-3 w-full"
                iconLeft="search"
                size="small"
              />
            </div>
          </Section>
          <Section title="States">
            <div className="flex items-end">
              <TextInput
                value={textInput}
                onChange={setTextInput}
                placeholder="example@example.com"
                iconLeft="search"
                size="large"
                isDisabled
              />
              <TextInput
                value={textInput}
                onChange={setTextInput}
                placeholder="example@example.com"
                className="ml-3"
                iconLeft="search"
                isReadOnly
              />
              <TextInput
                value={textInput}
                onChange={setTextInput}
                placeholder="example@example.com"
                className="ml-3"
                iconLeft="search"
                hasError
              />
            </div>
          </Section>
          <Section title="Label & Note">
            <div className="flex items-end">
              <TextInput
                label="Label"
                value={textInput}
                onChange={setTextInput}
                placeholder="example@example.com"
                className="w-full"
                size="large"
                note="This field should contain @"
              />
              <TextInput
                label="Label"
                value={textInput}
                onChange={setTextInput}
                placeholder="example@example.com"
                className="ml-3 w-full"
                size="small"
                note="This field should contain @"
              />
            </div>
          </Section>
        </Card>
        <Card title="Text Area">
          <Section title="States">
            <TextArea
              value={textInput}
              onChange={setTextInput}
              placeholder="example@example.com"
              label="Label"
              note="This is a note"
            />
            <TextArea
              value={textInput}
              onChange={setTextInput}
              placeholder="example@example.com"
              label="Label"
              note="This is a note"
              isDisabled
              className="mt-3"
            />
            <TextArea
              value={textInput}
              onChange={setTextInput}
              placeholder="example@example.com"
              label="Label"
              note="This is a note"
              hasError
              className="mt-3"
            />
          </Section>
        </Card>
        <Card title="Select">
          <Section title="Sizes">
            <div className="flex items-end">
              <Select onChange={() => {}} value={""} label="Label" note="Note" className="w-full">
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </Select>
              <Select onChange={() => {}} value={""} label="Label" note="Note" size="small" className="w-full ml-3">
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </Select>
            </div>
          </Section>
          <Section title="States">
            <div className="flex items-end">
              <Select onChange={() => {}} value={""} label="Label" note="Note" hasError className="w-full">
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </Select>
              <Select onChange={() => {}} value={""} label="Label" note="Note" isDisabled className="w-full ml-3">
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </Select>
            </div>
          </Section>
        </Card>
        <Card title="Checkbox">
          <Section title="Checked and not checked">
            <div className="flex items-end">
              <Checkbox onChange={() => {}} isChecked>This is a checkbox</Checkbox>
              <Checkbox onChange={() => {}} className="ml-3">This is a checkbox</Checkbox>
            </div>
          </Section>
          <Section title="States">
            <div className="flex items-end">
              <Checkbox onChange={() => {}} isDisabled>This is a checkbox</Checkbox>
              <Checkbox onChange={() => {}} hasError className="ml-3">This is a checkbox</Checkbox>
              <Checkbox onChange={() => {}} isIndeterminate className="ml-3">This is a checkbox</Checkbox>
            </div>
          </Section>
        </Card>
        <Card title="Switch">
          <Section title="Checked and not checked">
            <div className="flex items-end">
              <Switch onChange={() => {}} isChecked>This is a switch</Switch>
              <Switch onChange={() => {}} className="ml-3">This is a switch</Switch>
            </div>
          </Section>
          <Section title="States">
            <div className="flex items-end">
              <Switch onChange={() => {}} isDisabled>This is a switch</Switch>
              <Switch onChange={() => {}} hasError className="ml-3">This is a switch</Switch>
            </div>
          </Section>
        </Card>
        <Card title="Radio">
          <Section title="Checked and not checked">
            <div className="flex items-end">
              <Radio name="radio" onChange={() => {}} isChecked>This is a radio</Radio>
              <Radio name="radio" onChange={() => {}} className="ml-3">This is a radio</Radio>
            </div>
          </Section>
          <Section title="States">
            <div className="flex items-end">
              <Radio name="radio" onChange={() => {}} isDisabled>This is a radio</Radio>
              <Radio name="radio" onChange={() => {}} hasError className="ml-3">This is a radio</Radio>
            </div>
          </Section>
        </Card>
        <Card title="Avatar">
          <Section title="Variants">
            <div className="flex">
              <EntityAvatar className="mr-3" imageUrl="https://www.placecage.com/640/480" size="xlarge" />
              <UserAvatar imageUrl="https://www.placecage.com/640/480" size="xlarge" />
            </div>
          </Section>
          <Section title="Sizes">
            <div className="flex items-end">
              {avatarSizes.map((size, i) => (
                <EntityAvatar key={i} className="mr-3" imageUrl="https://www.placecage.com/640/480" size={size} />
              ))}
            </div>
          </Section>
          <Section title="Without image">
            <div className="flex items-end">
              <EntityAvatar className="mr-3" initial="A" size="xlarge" />
              <UserAvatar initials="BB" size="xlarge" />
            </div>
          </Section>
        </Card>
        <Card title="Star Rating">
          <Section title="Sizes">
            <div className="flex items-end">
              <StarRating rating={0} reviewsCount={5} showRating/>
              <StarRating className="ml-3" size="medium" rating={2.5} reviewsCount={5} showRating/>
              <StarRating className="ml-3" size="large" rating={5} reviewsCount={5} showRating/>
            </div>
          </Section>
        </Card>
        <Card title="Alert">
          <Section title="Themes">
            <Alert className="mb-3" theme="success">Alert Success</Alert>
            <Alert className="mb-3" theme="info">Alert Info</Alert>
            <Alert className="mb-3" theme="warning">Alert Warning</Alert>
            <Alert theme="caution">Alert Caution</Alert>
          </Section>
        </Card>
        <Card title="Banner Alert">
          <Section title="Themes">
            <BannerAlert className="mb-3" theme="info">Banner Info</BannerAlert>
            <BannerAlert className="mb-3" theme="warning">Banner Warning</BannerAlert>
            <BannerAlert theme="caution">Banner Caution</BannerAlert>
          </Section>
        </Card>
        <Card title="Chip">
          <Section title="Themes">
            <div className="mb-3">
              <FilterChip isSelected={false} className="mr-3">Filter Chip</FilterChip>
              <FilterChip isSelected={true}>Filter Chip</FilterChip>
            </div>
            <div>
              <ToggleChip isSelected={false} className="mr-3">Toggle Chip</ToggleChip>
              <ToggleChip isSelected={true}>Toggle Chip</ToggleChip>
            </div>
          </Section>
          <Section title="With Icon">
            <ToggleChip isSelected={true} iconRight="plus">Toggle Chip</ToggleChip>
          </Section>
        </Card>
        <Card title="Pill">
          <Section title="Colors">
            {["orange", "red", "pink", "purple", "yellow", "blue", "green"].map((color, i) => (
              <Pill key={i} className="mr-2" color={color}>Pill { color }</Pill>
            ))}
          </Section>
          <Section title="Sizes">
          {["large", "medium", "small"].map((size, i) => (
            <Pill key={i} className="mr-2" color="orange" size={size}>Pill ({size})</Pill>
          ))}
          </Section>
          <Section title="With Icon">
            <Pill color="orange" icon="plus">Pill with an icon</Pill>
          </Section>
        </Card>
        <Card title="Modal">
          <Section title="Width">
            <Button className="mr-3 mb-3" onClick={() => setModalIsOpen(true)}>Default width modal</Button>
            <Button className="mr-3 mb-3" onClick={() => setSmallWidthModalIsOpen(true)}>Small width modal</Button>
            <Button className="mr-3 mb-3" onClick={() => setLargeWidthModalIsOpen(true)}>Large width modal</Button>
          </Section>
          <Section title="Height">
            <Button className="mr-3 mb-3" onClick={() => setMediumHeightModalIsOpen(true)}>Medium height modal</Button>
            <Button className="mr-3 mb-3" onClick={() => setLargeHeightModalIsOpen(true)}>Large height modal</Button>
          </Section>
          <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
            <Title size={4}>This is a default width modal</Title>
          </Modal>
          <Modal width="small" isOpen={smallWidthModalIsOpen} onClose={() => setSmallWidthModalIsOpen(false)}>
            <Title size={4}>This is a small width modal</Title>
          </Modal>
          <Modal width="large" isOpen={largeWidthModalIsOpen} onClose={() => setLargeWidthModalIsOpen(false)}>
            <Title size={4}>This is a large width modal</Title>
          </Modal>
          <Modal height="medium" isOpen={mediumHeightModalIsOpen} onClose={() => setMediumHeightModalIsOpen(false)}>
            <Title size={4}>This is a medium height modal</Title>
          </Modal>
          <Modal height="large" isOpen={largeHeightModalIsOpen} onClose={() => setLargeHeightModalIsOpen(false)}>
            <Title size={4}>This is a large height modal</Title>
          </Modal>
        </Card>
        <Card title="Tooltip">
          <Section title="Position">
            <div className="flex">
              <Tooltip className="mr-3" text="This is a tooltip">
                <div className="flex items-center">
                  <InfoOutlineIcon size="medium"/>
                  <Title className="ml-2" size={5}>Top</Title>
                </div>
              </Tooltip>
              <Tooltip position="bottom" className="mr-3" text="This is a tooltip">
                <div className="flex items-center">
                  <InfoOutlineIcon size="medium"/>
                  <Title className="ml-2" size={5}>Bottom</Title>
                </div>
              </Tooltip>
            </div>
          </Section>
          <Section title="Theme">
            <div className="bg-purple flex items-center justify-center text-white p-6">
              <Tooltip theme="light" text="This is a tooltip">
                <InfoOutlineIcon size="medium"/>
              </Tooltip>
            </div>
          </Section>
        </Card>
        <Card title="Breadcrumbs">
          <Breadcrumbs breadcrumbs={[{
            name: "First item",
            path: "/"
          }, {
            name: "Second item",
            path: "/second"
          }, {
            name: "Third item",
            path: "/third"
          }]}/>
        </Card>
        <Card title="HTML Content and Longread">
          <div className="longread">
            <HtmlContent>
            {`
              <h1>Lorem ipsum dolor sit amet</h1>
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eleifend posuere venenatis.
                  Cras est mi, porta a suscipit id, vehicula at sem. Phasellus malesuada est non magna mollis,
                  sit amet molestie odio tincidunt. Nulla ex urna, tristique non massa consequat, eleifend
                  interdum magna.
              </p>
              <h2>Morbi sagittis, dolor et molestie rhoncus</h2>
              <ul>
                  <li>Phasellus at quam lacus</li>
                  <li>Aenean quis est neque</li>
                  <li>Maecenas a tincidunt risus</li>
              </ul>
              <h2>Duis pretium viverra leo ac sagittis?</h2>
              <p>
                  Vivamus a consectetur libero, sit amet sagittis neque. Etiam non elit nec purus tempus
                  tincidunt id sit amet ipsum. Sed scelerisque enim viverra vehicula hendrerit.
              </p>
              <p>
                  Proin sit amet metus eu augue suscipit blandit at eu massa. Suspendisse semper sed lectus
                  quis suscipit. Praesent finibus lobortis facilisis. Maecenas est leo, tincidunt id fermentum
                  non, varius ac turpis. Quisque a nibh egestas, commodo dui a, malesuada felis. Etiam dolor
                  urna, eleifend sed placerat ac, tempor vestibulum quam.
              </p>
              <h3>Integer nunc nibh, vestibulum vel lorem ac</h3>
              <p>
                  In et turpis fringilla, posuere metus at, pellentesque lectus. Ut vulputate magna in velit
                  aliquam, eu egestas ante dignissim. Sed pellentesque dolor a interdum vehicula. Donec vitae
                  tellus finibus, blandit nunc eu, maximus dui. In molestie rhoncus sapien. Curabitur ornare
                  nisl sollicitudin magna placerat, eget ullamcorper libero cursus. Nunc aliquet erat ut
                  elementum fermentum. Integer eleifend varius tempus. Etiam sed pellentesque lorem, eget
                  varius felis.
              </p>
              <ol>
                  <li>Ut vehicula felis magna, sit amet tincidunt urna tristique euismod.</li>
                  <li>Integer posuere velit et nibh sollicitudin aliquam.</li>
                  <li>Vestibulum quis neque tellus.</li>
              </ol>
              <p>
                  Cras varius dui quis efficitur posuere. Duis vel lacinia orci. Donec pharetra nisl vel
                  tortor interdum, id suscipit felis venenatis. Phasellus accumsan blandit euismod. Nullam
                  ipsum nisi, sagittis vel cursus sed, feugiat eget ipsum. Quisque quis enim vel justo
                  vestibulum laoreet consequat ut nibh. In luctus augue sit amet leo fermentum, et vulputate
                  sapien placerat. Nulla et pellentesque magna. Fusce elit enim, facilisis et urna sed,
                  eleifend ultrices diam. Nam a fringilla ipsum. Nulla vitae hendrerit orci, sit amet faucibus
                  mi.
              </p>
            `}
            </HtmlContent>
          </div>
        </Card>
        <Card title="Show More">
          <Section title="Default">
            <ShowMore
              isExpanded={showMoreIsExpanded}
              onClick={() => setShowMoreIsExpanded(!showMoreIsExpanded)}
              size={3}
            >
              <div>This is a paragraph inside my component.</div>
              <div className={classNames({"hidden": !showMoreIsExpanded})}>This is a second paragraph inside my component what was hidden.</div>
            </ShowMore>
          </Section>
          <Section title="Variants">
            <ShowMore
              className="mb-5"
              isShrinkable={false}
              isExpanded={showMoreIsExpanded}
              onClick={() => setShowMoreIsExpanded(!showMoreIsExpanded)}
              size={3}
            >
              <div>This is a paragraph inside my component and I won't be able to shrink it afterwards.</div>
              <div className={classNames({"hidden": !showMoreIsExpanded})}>This is a second paragraph inside my component what was hidden.</div>
            </ShowMore>
            <ShowMore
              isShrinkable={false}
              hideChevron={true}
              isExpanded={showMoreIsExpanded}
              onClick={() => setShowMoreIsExpanded(!showMoreIsExpanded)}
              size={3}
            >
              <div>This is a paragraph inside my component and I don't have a chevron.</div>
              <div className={classNames({"hidden": !showMoreIsExpanded})}>This is a second paragraph inside my component what was hidden.</div>
            </ShowMore>
          </Section>
        </Card>
        <Card title="Pagination">
          <Section title="Using local state">
            <StatePagination page={1} pagesCount={10} onClick={() => {}}/>
          </Section>
          <Section className="mt-5" title="Using query string parameter">
            <QueryPagination pagesCount={10}/>
          </Section>
          <Section className="mt-5" title="Using url path">
            <PathPagination page={1} path="" pagesCount={10}/>
          </Section>
        </Card>
        <Card title="Autocomplete">
          <Section title="Simple autocomplete">
            <SearchAutocomplete/>
          </Section>
          <Section title="With sections">
            <SearchAutocomplete hasSections/>
          </Section>
          <Section title="States">
            <SearchAutocomplete className="mb-3" isLoading={true} />
            <SearchAutocomplete className="mb-3" hasError={true} />
            <SearchAutocomplete className="mb-3" isDisabled={true} />
          </Section>
        </Card>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {}
  }
}
