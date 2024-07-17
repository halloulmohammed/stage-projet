import React from "react";
import "../style/mediaheader.css";
import { Tifo } from "../media/Tifo";
import { VideoPlayer } from "../media/VideoPlayer";
import { Songs } from "../media/Songs";
export const Mediaheader = () => {
  return (
  <div class="wrapper pre">
   <div className="wrapper">
	<div className="tab-container">
	  <div className="tab-card tabs">
		<input id="tab-1" type="radio" className="tab tab-selector" checked="checked" name="tab" />
		<label for="tab-1" className="tab tab-primary">Product</label>
		<input id="tab-2" type="radio" className="tab tab-selector" name="tab" />
		<label for="tab-2" className="tab tab-success">Options</label>
		<input id="tab-3" type="radio" className="tab tab-selector" name="tab" />
		<label for="tab-3" className="tab tab-default">Shipping</label>
		<div className="tabsShadow"></div>
		<div className="glider"></div>
		<section className="content">
		  <div className="item" id="content-1">
			<h2 className="tab-title tab-primary">Sweep + Slide Dog Toy</h2>
			<p>
			  <span class = "numit">1</span> The Sweep + Slide is an indoor dog toy with a sleek base designed to glide across any floor. Not only does this toy stimulate your dog's natural chase instincts, but it also sweeps away floor dust and grime with a replaceable sweeper bottom cover.
			</p>
		  </div>
		  <div className="item" id="content-2">
			<h2 className="tab-title tab-success">Tab 2</h2>
			<p>
			  <span class = "numit">2</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor </p>
		  </div>
		  <div className="item" id="content-3">
			<h2 className="tab-title tab-default">Tab 3</h2>
			<p>
			  <span class = "numit">3</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis </p>
		  </div>
		  <div className="item" id="content-4">
			<h2 className="tab-title tab-warning">Tab 4</h2>
			<p>
			  <span class = "numit">4</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
		  </div>
		</section>
  
	  </div>
	</div>
  </div>
</div>
    
  );
};
