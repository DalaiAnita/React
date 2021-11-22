import React from 'react';
import logo from '../../../src/image-fmg.jpeg';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from '../NavbarElements';

export class HeaderComponent extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        return (
            <>
                <Nav>
                    <Bars />
    
                    <NavMenu>
                        <NavLink to='' activeStyle>
                            Dashboard
                        </NavLink>
                        <NavLink to='/events' activeStyle>
                            Events
                        </NavLink>
                        <NavLink to='/annual' activeStyle>
                            Annual Report
                        </NavLink>
                        <NavLink to='/team' activeStyle>
                            Teams
                        </NavLink>
                        <NavLink to='/blogs' activeStyle>
                            Blogs
                        </NavLink>
                        {/* Second Nav */}
                        {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                    </NavMenu>
                </Nav>
            </>
        );
    }
   
};

export default HeaderComponent;


// export class HeaderComponent extends React.Component {
//     constructor(props) {
//         super(props)
//     }
//     render() {
//         return (
//             <>
//                 <header className="row">
//                     <div className="col-md-5">
//                         <img scr={logo} alt="Logo"></img>
//                     </div>
//                     <div className="col-md-7 mt-5 subtitle" onClick={()=>this.props.onTest(this.props.test)}>
//                         Pravat Kumar Dalai
//                     </div>
//                 </header>
//             </>
//         );
//     };

// }
// export default HeaderComponent