import {Component, OnDestroy} from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  templateUrl: 'carousels.component.html',
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: false } },
  ]
})
export class CarouselsComponent implements OnDestroy {

  myInterval: number | false = 3500;
  slides: any[] = [];
  //slides=['https://www.acs-ami.com/fr/blog/wp-content/uploads/2015/07/inspiration-voyage.jpg',
  //        "https://www.autourdublog.fr/wp-content/uploads/2016/10/famous-buildings-round-the-world-travel-wallpaper.jpg",
  //        "https://cdn-s-www.ledauphine.com/images/1451BFB9-4185-4218-963F-F07634E33794/NW_raw/les-500-employes-vont-recevoir-deux-billets-d-avion-en-premiere-classe-chacun-et-un-gros-cheque-pour-faire-de-leur-sejour-un-souvenir-inoubliable-free-photos-de-pixabay-1635243680.jpg"]
  activeSlideIndex: number = 0;
  noWrapSlides: boolean = false;
  

  constructor() {
    /*for (let i = 0; i < 4; i++) {
      this.addSlide();
    }*/
    this.slides.push({image:'https://www.acs-ami.com/fr/blog/wp-content/uploads/2015/07/inspiration-voyage.jpg'});
    this.slides.push({image:'https://www.autourdublog.fr/wp-content/uploads/2016/10/famous-buildings-round-the-world-travel-wallpaper.jpg'});
    this.slides.push({image:'https://cdn-s-www.ledauphine.com/images/1451BFB9-4185-4218-963F-F07634E33794/NW_raw/les-500-employes-vont-recevoir-deux-billets-d-avion-en-premiere-classe-chacun-et-un-gros-cheque-pour-faire-de-leur-sejour-un-souvenir-inoubliable-free-photos-de-pixabay-1635243680.jpg'});
  }

  ngOnDestroy(): void {
    this.myInterval = 0;
    this.noWrapSlides = true;
    this.myInterval = false;
  }

  /*addSlide(): void {
    setTimeout( () => {
      const seed = Math.random().toString(36).slice(-6);
      this.slides.push({
        image: `https://picsum.photos/seed/${seed}/900/500`
      });
    }, 500);
  }*/

  removeSlide(index?: number): void {
    const toRemove = index ? index : this.activeSlideIndex;
    this.slides.splice(toRemove, 1);
  }

}
