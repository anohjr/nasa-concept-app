function NavBar() {
  return (
    <div id="navbar_container">
      <div id="navtitle_container">
        <div id="nav_topics" className="section_container">
          <div className="losange_vector" />
          <h4 className="nav_title">Topics</h4>
        </div>
        <div id="nav_gallery" className="section_container">
          <div className="losange_vector" />
          <h4 className="nav_title">Gallery</h4>
        </div>
        <div id="nav_solar" className="section_container">
          <div className="losange_vector" />
          <h4 className="nav_title">Solar System</h4>
        </div>
        <div id="nav_ISS" className="section_container">
          <div className="losange_vector" />
          <h4 className="nav_title">ISS Tracker</h4>
        </div>
      </div>
      <div id="progression_bar" />
    </div>
  );
}

export default NavBar;
