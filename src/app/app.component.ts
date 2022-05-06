import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PMG Systems';
  public loading: boolean = true;
  year: number = new Date().getUTCFullYear();

  constructor() { 
    this.loadScripts(); 
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  loadScripts() {
    const dynamicScripts = [
      "dependencies/popper.js/popper.min.js",
      "dependencies/jquery/jquery.min.js",
      "dependencies/bootstrap/js/bootstrap.min.js",
      "dependencies/jquery.appear/jquery.appear.js",
      "dependencies/jquery.parallax-scroll/jquery.parallax-scroll.js",
      "dependencies/gmap3/js/gmap3.min.js",
      "dependencies/owl.carousel/js/owl.carousel.min.js",
      "dependencies/slick/js/slick.min.js",
      "dependencies/counter-up/jquery.counterup.min.js",
      "dependencies/waypoints/jquery.waypoints.min.js",
      "dependencies/select2/js/select2.min.js",
      "dependencies/isotope-layout/isotope.pkgd.min.js",
      "dependencies/imagesloaded/imagesloaded.pkgd.min.js",
      "dependencies/meanmenu/js/jquery.meanmenu.min.js",
      "dependencies/Parallaxie-master/parallaxie.js",
      "dependencies/nivo-slider/js/jquery.nivo.slider.js",
      "dependencies/nivo-slider/js/home.js",
      "dependencies/wow/js/wow.min.js",
      "dependencies/knob/jquery.knob.js",
      "dependencies/countdown/jquery.countdown.min.js",
      "dependencies/page-piling/js/jquery.pagepiling.min.js",
      "dependencies/tilt/tilt.jquery.min.js",
      "dependencies/theia-sticky-sidebar/theia-sticky-sidebar.min.js",
      "dependencies/theia-sticky-sidebar/resize-sensor.min.js",
      "dependencies/magnific-popup/js/jquery.magnific-popup.min.js",
      "dependencies/validator/validator.min.js",
      "assets/js/app.js"
    ];

    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }
}
