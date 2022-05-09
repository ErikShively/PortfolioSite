import './Navbar.css';
import './../index.css';
import { NavLink } from 'react-router-dom';

function HeaderLink(link_name, path){
  return(
    <NavLink className='link header-link' to = {path}>{link_name}</NavLink>
// Navlink goes here
  );
}

function SubLink(link_name, path){
  return(
    <NavLink className='link sub-link' to = {path}>{link_name}</NavLink>
// Navlink goes here
  );
}

function Navbar(props){
  //Props aren't being inhereted correctly. Look into that
  var header_links = [];
  var sub_links = [];
  console.log(props.link_names.length)
  if((props.link_names.length == props.paths.length)){
    for(var i = 0; i < props.link_names.length; i++){
      if(i<props.ratio){
        header_links.push(HeaderLink(props.link_names[i], props.paths[i]));
      }
      else{
        sub_links.push(SubLink(props.link_names[i], props.paths[i]));
      }
    }

  }
  return (

      <nav>
        <div className='nav-bar'>
          <div className='link-group'>
            {/* <NavLink>Test</NavLink> */}
            {header_links}
          </div>
          <div className='link-group'>
            {sub_links}
          </div>
        </div>
      </nav>

      // {/* <div className='link-group'>
      //   {header_links}
      // </div>
      // <div className='link-group'>
      //   {sub_links}
      // </div> */}
  );
}

export default Navbar;
