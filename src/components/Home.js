import './Home.css';
import './../index.css'

function Btn(name, path){
  return(
    <button className='landing-btn'>{name}</button>
  );
}

function Home() {
  const btn_names = ["About", "Projects", "Resume", "Contact"];
  const btn_paths = ["/about", "/projects", "/resume", "/contact"];
  var btns = [];
  if(btn_names.length == btn_paths.length){
    for(var i = 0; i< btn_names.length; i++){
      btns.push(Btn(btn_names[i], btn_paths[i]));
    }
  }
  //I want to make this explicit in case a path isn't deterministic from the button name.
  //Iterate through the lists and generate/assign buttons dynamically
  //Maybe throw and error if the lists aren't the same size
  return (
    <div className='home'>
      <div className='landing' >
        <div className='title'>
          <h1 className='title-text'>Hey, I'm Erik</h1>
        </div>
        <div className='btn-group'>
          {btns}
          {/* <button className='landing-btn'>About</button>
          <button className='landing-btn'>Projects</button>
          <button className='landing-btn'>Resume</button>
          <button className='landing-btn'>Contact</button> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
