import React from 'react';
import $ from 'jquery';
import Experience from './components/Experience';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import Projects from './components/Projects';
import './styles/App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      resumeData: {},
      info_loaded: false
    }
  }

  getResumeData(){
    $.ajax({
      url:'/website-data.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data, info_loaded: true});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render () {

    if (this.state.info_loaded) {

      return (
        <div className="App">
          
          {/* Mainpage */}
          <LandingPage data={this.state.resumeData.LandingPageInfo}/>
          {/* About Me */}
          {/* <AboutMe /> */}
          {/* Projects */}
          <Projects />
          {/* Experience */}
          <Experience />
          {/* Footer */}
          <Footer />
        </div>
      );
    } else {
      return (
        <p>Loading...</p>
      )
    }
  }
}

export default App;
