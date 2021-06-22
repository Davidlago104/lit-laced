//create the props from sneakerlist, to create another functional component that
//use lines 15 on to map.
import React from 'react';
import { Route, Link } from "react-router-dom";
import Sneaker from "./Sneaker";

const SneakerListItem = (props) => {
  console.log(props)
    return (
          <li class="button" key={props.sneakers.id}>
            <Link to={`/sneakers/${props.sneakers.id}`}>{props.sneakers.name}</Link>
          </li>
          )
        }
        

export default SneakerListItem