import * as React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import loader from "../helpers/loader";
const ArticleViewOptions = loader(() => import("./ArticleViewOptions"));
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Fade from "@material-ui/core/Fade";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import CollectionsBookmark from "@material-ui/icons/CollectionsBookmark";
import List from "@material-ui/icons/List";
import Person from "@material-ui/icons/Person";
import Timeline from "@material-ui/icons/Timeline";

interface IProps {
  user: any;
  classes: any;
  history: any;
  location: any;
  match: any;
  lastArticleId?: string;
}

interface IState {
  smallDevice: boolean;
}

class LabelBottomNavigation extends React.Component<IProps, IState> {
  public constructor(props: IProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      smallDevice: window.matchMedia("(max-width: 992px)").matches
    };
  }

  public componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }
  public componentWillUnmount() {
    window.addEventListener("resize", this.handleResize);
  }
  public render() {
    const { classes, location, user } = this.props;
    const { smallDevice } = this.state;
    const { displayName } = user;
    const initials = displayName ? displayName.match(/\b\w/g).join("") : "";
    const value = location.pathname;

    console.log(smallDevice);
    return (
      <BottomNavigation
        className={classes.root}
        showLabels={true}
        value={value}
        onChange={this.handleChange}
      >
        <BottomNavigationAction label="List" value="/list" icon={<List />} />
        <BottomNavigationAction
          label="Article"
          value={"/article/" + this.props.lastArticleId}
          icon={<CollectionsBookmark />}
        />
        <BottomNavigationAction
          label="Stats"
          value="/stats"
          icon={<Timeline />}
        />
        <BottomNavigationAction
          label={initials}
          value="/me"
          icon={<Person />}
        />
        {value === "/article/" + this.props.lastArticleId && (
          <Fade in={value === "/article/" + this.props.lastArticleId}>
            <Toolbar
              className={smallDevice ? classes.smallDevice : classes.rightSide}
            >
              <ArticleViewOptions />
            </Toolbar>
          </Fade>
        )}{" "}
      </BottomNavigation>
    );
  }

  private handleChange(event: any, value: string) {
    this.props.history.push(value);
  }
  private handleResize = () =>
    this.setState({
      smallDevice: window.matchMedia("(max-width: 992px)").matches
    });
}

const styles = {
  rightSide: { position: "absolute", right: 0 },
  root: {
    backgroundColor: "#F4ECD8",
    borderTop: "inset 1px",
    height: "10vh",
    justifyContent: "center",
    padding: 0,
    width: "100%",
    zIndex: 100
  }
} as any;

const mapStateToProps = (state: any) => {
  return {
    lastArticleId: state.ui.lastArticle ? state.ui.lastArticle.id : undefined,
    user: state.user
  };
};

const connected = connect(mapStateToProps)(LabelBottomNavigation);

export default withRouter(withStyles(styles)(connected));
