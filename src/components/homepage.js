import React, { Component } from 'react'
//import './plyr.css';
import Plyr from './plyr.js';
import Right from './rightCorner.js';

const style_1= {
    padding: "10px 15px"
};

const style_2= {
    padding: " 10px 23px"
};

const style_3_sidebar= {
    background:"#A33434",
    width:"10%"
};

export default class homepage extends Component {
    render() {
        return (
            <div>
                <div class="fadeIn first">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-2">
                                <br/><button type="button" class="btn btn-light" style={style_1}>MEPTUBE</button>
				            </div>
                            <div class="col-md-6 text-center">
                                <form>
                                    <br/>
                                    <input type="text" name="search" placeholder="Search.."></input>
					            </form>
				            </div>
                            <div class="col-md-4 text-right">
                               <Right/>
				            </div>
                        </div>
		            </div>
                </div>
                <div class="container-fluid">
                    <div class="row">
                        <div class="w3-sidebar w3-bar-block w3-border-right	" style={style_3_sidebar }id="mySidebar">
                            <div class="col-md-6 text-right">
                                <br/><button type="button" class="btn btn-warning custom-button-width .navbar-right" style={style_1} >Trends</button>
                                <br/>
                                <br/><button type="button" class="btn btn-danger custom-button-width .navbar-right " style={style_2}>Q&A </button>
				             </div>
                        </div>
                    </div>
                 </div>
                 
                 <Plyr/>
                
            </div>
        )
    }
}
