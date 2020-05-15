(function() {
	let styleguideNav = {
		nav: document.querySelector('.nav'),
		navToggle: document.querySelector('.nav .nav-toggle'),

		initialize() {
			this.navToggle.addEventListener('click', () => this.navToggleClick());
		},

		navToggleClick() {
			this.nav.classList.toggle('active');
		},
	};

	styleguideNav.initialize();
})();
