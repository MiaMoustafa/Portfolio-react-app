import ProjectGrid from "../pages/Projects";

class Grid extends Component {
  constructor(props) {
    super(props);
    this.props = {
      projects: PROJECTS,
    };
  }

  onProjectSelect(projectId) {
    this.setprops({ selectedProject: projectId });
  }

  render() {
    return (
      <ProjectGrid
        project={this.props.projects.filter((project) => project)[0]}
      />
    );
  }
}

export default Grid;
