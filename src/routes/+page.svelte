<script>
	import title from "$lib/images/wordart.png"
	import imac from "$lib/images/imac.jpg"
	import burger from "$lib/images/burgermouse.jpg"
	import burgercat from "$lib/images/burgercat.jpg"
	import nokia from "$lib/images/nokia.jpg"
	import cube from "$lib/images/nextcube.jpg"
	import clippy from "$lib/images/clippyconfused.gif"
	import home from "$lib/images/home.gif"
	import winter from "$lib/images/winter.gif"
	import catslove from "$lib/images/catslove.gif"
	import ie from "$lib/images/ie.jpg"
	import "../app.css"
</script>

<div id="page-content">
	<div id="title-div">
		<img id="title" src={title} alt="90'S TECH IS THE PLACE TO BE!">
	</div>
	<p>Here at <span class="add">nineties.tech</span> we appreciate tech from the 90s, in all its chunky, weird, and optimistic glory. 
		Back when the dot com bubble was only on the horizon...and everyone downloaded strange monkeys off the internet...
	</p>
	<p> In no particular order, here are my favourites from the era.</p>
	
	<div class="image-bar">
		<img class="image-bar-img" src="{winter}" alt="A gif that says I love winter">
		<img class="image-bar-img" src="{home}" alt="a spinning gif of a house">
		<img class="image-bar-img" src="{catslove}" alt="A gif that says I love cats">
	</div>

	<h2>Computers</h2>
		<div class="item">
			<div class="item-image">
				<img class="item-image-img" src={imac} alt="A blue iMac g3">
			</div>
			<div class="item-desc">
				<h3>iMac G3</h3>
				<p>It's colourful! And it looks edible!</p>
			</div>
		</div>
		<div class="item">
			<div class="item-image">
				<img class="item-image-img" src={cube} alt="A NeXTcube computer">
			</div>
			<div class="item-desc">
				<h3>NeXTcube</h3>
				<p>IT'S A CUBE! IT'S A COMPUTER! Wow!</p>
			</div>
		</div>
	<h2>Computer Mice</h2>
		<div class="item">
			<div class="item-image">
				<img class="item-image-img" src={burger} alt="A mouse shaped like a burger">
			</div>
			<div class="item-desc">
				<h3>Burger Mouse</h3>
				<p>A mouse shaped like a burger...</p>
			</div>
		</div>
		<div class="item">
			<div class="item-image">
				<img class="item-image-img" src={burgercat} alt="A grey cat wearing an alien hat">
			</div>
			<div class="item-desc">
				<h3>Burger (Cat)</h3>
				<p>This is not a mouse. This is my cat who is named Burger.</p>
			</div>
		</div>
	<h2>Mobile Phones</h2>
		<div class="item">
			<div class="item-image">
				<img class="item-image-img" src={nokia} alt="A grey cat wearing an alien hat">
			</div>
			<div class="item-desc">
				<h3>Nokia 3310</h3>
				<p>This came out in the year 2000, but I think it's too iconic to not include.</p>
			</div>
		</div>
	<h2>Desktop Assistants</h2>
		<div class="item">
			<div class="item-image">
				<img class="item-image-img" src={clippy} alt="The desktop assistant Clippy">
			</div>
			<div class="item-desc">
				<h3>Clippy</h3>
				<p>This was the first AI. The grandfather of ChatGPT. Almighty and all-knowing.</p>
			</div>
		</div>
	<h2>Audio Players</h2>
	<h2>Toys</h2>
	<h2>Video Games</h2>
	<h2>Misc.</h2>
</div>

