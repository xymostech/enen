import * as React from "react";
import { Link } from "react-router-dom";
import { IArticle } from "../../reducers/articles";
import FollowLink from "../actionDispatchers/FollowLink";
import ToggleCompleted from "../actionDispatchers/ToggleCompleted";
import {
  Avatar,
  CircularProgress,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Fade,
  Grid,
  Icon,
  IconButton,
  LinearProgress,
  ListItem,
  ListItemText,
  Typography,
  withStyles
} from "@material-ui/core";
import { ChromeReaderMode, DateRange, Delete } from "@material-ui/icons";

interface IProps {
  article: IArticle;
  classes: any;
  expanded: boolean;
  handler: (event: any, expanded: any) => void;
  deleteArticle: (id: string) => (dispatch: any, getState: any) => Promise<any>;
}

interface IState {
  showRead: boolean;
}

class Article extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { showRead: false };
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleShowRead = this.toggleShowRead.bind(this);
  }

  public render() {
    const { article, classes } = this.props;
    const { progress, metadata, url } = article;
    const title = (metadata && metadata.title) || url;
    const siteName = metadata && (metadata.siteName || metadata.ogSiteName);
    const description = metadata && metadata.excerpt;
    const secondary = `${siteName ? siteName : ""} ${
      description ? "-" + description : ""
    }`;

    const image =
      article.metadata && (article.metadata.image || article.metadata.logo)
        ? article.metadata.image || article.metadata.logo
        : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/N_cursiva.gif/400px-N_cursiva.gif";
    return (
      <>
        <ListItem
          divider={true}
          className={classes.root}
          onMouseEnter={this.toggleShowRead}
          onMouseLeave={this.toggleShowRead}
        >
          <ExpansionPanel
            className={article.completedOn ? classes.completed : classes.card}
            expanded={this.props.expanded}
            onChange={this.props.handler}
          >
            <ExpansionPanelSummary>
              <Grid container={true}>
                <Grid item={true} xs={4} sm={2} md={1} lg={1}>
                  {article.fetching && <CircularProgress />}
                  <Avatar src={image} />
                </Grid>
                <Grid item={true} xs={7} sm={8} md={10} lg={10}>
                  <ListItemText primary={title} secondary={secondary} />
                </Grid>
                <Grid item={true} xs={1} sm={2} md={1} lg={1}>
                  <Fade in={this.state.showRead || this.props.expanded}>
                    <Link to={`/article/${article.id}`}>
                      <IconButton
                        disabled={true}
                        className={classes.button}
                        aria-label="Delete"
                      >
                        <ChromeReaderMode />
                      </IconButton>
                    </Link>
                  </Fade>
                </Grid>
                {typeof progress === "number" && progress > 0 && (
                  <Grid item={true} xs={12} sm={12} md={12} lg={12}>
                    <div style={{ width: "100%" }}>
                      <LinearProgress variant="determinate" value={progress} />
                    </div>
                  </Grid>
                )}
              </Grid>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Icon>
                <DateRange />
              </Icon>
              <Typography>
                {new Date(article.addedAt).toLocaleDateString()}
              </Typography>
              <Grid container={true} alignItems="flex-end" justify="flex-end">
                <ToggleCompleted id={article.id} />
                <FollowLink url={article.url} />
                <IconButton
                  className={classes.button}
                  color="secondary"
                  aria-label="Delete"
                  onClick={this.handleDelete}
                >
                  <Delete />
                </IconButton>
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </ListItem>
      </>
    );
  }

  private toggleShowRead() {
    this.setState({ showRead: !this.state.showRead });
  }

  private handleDelete() {
    this.props.deleteArticle(this.props.article.id);
  }
}

const styles = {
  button: {
    colorPrimary: "#ff0000",
    colorSecondary: "#ff0000",
    margin: 5
  },
  card: {
    textOverflow: "ellipsis",
    width: "100%"
  },
  completed: {
    backgroundColor: "#F4ECD8",
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: "100%"
  },
  root: {
    width: "100%"
  }
};

export default withStyles(styles)(Article);
