import React, { Component } from "react";
import { Consumer, consumerHandle } from "../AppContext";

// const consumerHandle = Cmp => props => {
//     return <Consumer>{ctx=><Cmp {...props} {...ctx}></Cmp>}</Consumer>
// }

// export default class Home extends Component {
//     render() {
//         return (
//             <Consumer>
//                 {ctx=><UserHandle {...ctx}></UserHandle>}
//             </Consumer>
//         )
//     }
// }
function UserHandle(props) {
  console.log("hah", props);
  return <div>UserHandle</div>;
}
export default consumerHandle(UserHandle);
