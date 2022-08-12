import "semantic-ui-css/semantic.min.css";
import {
  List,
  Loader,
  Dimmer,
  Placeholder,
  Segment,
  Grid,
  Divider,
  Header,
  Icon,
  Search,
  Button,
  Image,
} from "semantic-ui-react";

function App() {
  return (
    <>
      <br />
      <Segment placeholder>
        <Grid columns={2} stackable textAlign="center">
          <Divider vertical>Or</Divider>

          <Grid.Row verticalAlign="middle">
            <Grid.Column>
              <Header icon>
                <Icon name="search" />
                Cari document
              </Header>
              <Search placeholder="Search document..." />
            </Grid.Column>

            <Grid.Column>
              <Header icon>
                <Icon name="pdf file outline" />
                Tambah Document Baru
              </Header>
              <Button primary>Create Document</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment>
        <Dimmer active>
          <Loader content="Loading" />
        </Dimmer>
        <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
      </Segment>

      <br />
      <Grid columns={3}>
        <Grid.Column width={5}>
            <Segment>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line length="medium" />
                <Placeholder.Line length="short" />
              </Placeholder.Paragraph>
            </Placeholder>
          </Segment>
        </Grid.Column>
        <Grid.Column width={7}>
          <Segment>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line length="medium" />
                <Placeholder.Line length="short" />
              </Placeholder.Paragraph>
            </Placeholder>
          </Segment>
        </Grid.Column>
        <Grid.Column width={4}>
          <Segment>
            <List>
              <List.Item>
                <List.Icon name='linkify' />
                <List.Content>
                  <a href="https://google.com" target="_blank" rel="noreferrer">Google</a>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="linkify"/>
                <List.Content>
                  <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="linkify"/>
                <List.Content>
                  <a href="https://semantic-ui.com" target="_blank" rel="noreferrer">Semantic UI</a>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="linkify"/>
                <List.Content>
                  <a href="https://niomic.id" target="_blank" rel="noreferrer">Niomic</a>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="linkify"/>
                <List.Content>
                  <a href="https://reactjs.org" target="_blank" rel="noreferrer">React</a>
                </List.Content>
              </List.Item>
            </List>
          </Segment>
        </Grid.Column>
      </Grid>
  
    </>
  );
}

export default App;
