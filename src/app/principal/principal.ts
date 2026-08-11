import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-principal',
  imports: [HeaderComponent,  CommonModule],
  templateUrl: './principal.html',
  styleUrl: './principal.css',
})
export class Principal {

// tous vos plats chakun avec sa categories


 menuItems = [

{name: 'Lobster Bisique', price: '$5,95', desc: 'Lorem, deren, trataro, filede, nerada', category: 'starters', img:'/tailwindresponsive/img/menu/lobster-bisque.jpg'},
{name: 'Lobster Roll', price: '$7,95', desc: 'Lorem, deren, trataro, filede, nerada.', category: 'starters', img:'/tailwindresponsive/img/menu/lobster-roll.jpg'},
{name: 'Caesar Salad', price: '$5,95', desc: 'Lorem, deren, trataro, filede, nerada.', category: 'salads', img:'/tailwindresponsive/img/menu/caesar.jpg'},
{name: 'Greek Salad', price: '$7,95', desc: 'Lorem, deren, trataro, filede, nerada.', category: 'salads', img:'/tailwindresponsive/img/menu/greek-salad.jpg'},
{name: 'Bread-barell', price: '$3,95', desc: 'Lorem, deren, trataro, filede, nerada.', category: 'starters', img:'/tailwindresponsive/img/menu/bread-barrel.jpg'},
{name: 'Mozarella Stick', price: '$4,95', desc: 'Lorem, deren, trataro, filede, nerada.', category: 'starters', img:'/tailwindresponsive/img/menu/mozzarella.jpg'},
{name:'Tuscan-grilled', price: '$7,95', desc: 'Lorem, deren, trataro, filede, nerada', category: 'specialty', img:'/tailwindresponsive/img/menu/tuscan-grilled.jpg'},
{name: 'Spinach Salad', price: '$5,95', desc: 'Lorem, deren, trataro, filede, nerada.', category: 'salads', img:'/tailwindresponsive/img/menu/spinach-salad.jpg'},
{name: 'Cake', price: '$8,95', desc: 'Lorem, deren, trataro, filede, nerada.', category: 'specialty', img:'/tailwindresponsive/img/menu/cake.jpg'}, 

 ];    
 
 
//la categorie actuellement sélectionnée;

selectedCategory: string = 'all';


// Methode appelé au click sur un filtre

filterMenu(category: string , event: Event) {

  event.preventDefault();  // empêche le lien "#" de faire remonter la page en haut

this.selectedCategory = category;


}


// Getter qui retourne les plats filtrés selon la catégorie choisie


get filteredItems(){
  if (this.selectedCategory== 'all'){


    return this.menuItems;   // aucune filtre, on affiche tout
  }

  return this.menuItems.filter(item => item.category === this.selectedCategory);  // on filtre selon la categorie choisie
}







// autre cas
 // ===== Carrousel "Specials" =====
  slides = [
    {
      title: 'Birthday Parties',
      price: '$189',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      img: '',
      points: [
        'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Duis aute irure dolor in reprehenderit in voluptate velit.',
        'Ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      ]
    },
    {
      title: 'Wedding Events',
      price: '$250',
      desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      img: '',
      points: [
        'Excepteur sint occaecat cupidatat non proident.',
        'Sed ut perspiciatis unde omnis iste natus error.',
        'Ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      ]
    },
    {
      title: 'Corporate Events',
      price: '$320',
      desc: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.',
      img: '/tailwindresponsive/img/specials-3.png',
      points: [
        'Neque porro quisquam est qui dolorem ipsum quia.',
        'Duis aute irure dolor in reprehenderit in voluptate velit.',
        'Ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      ]
    },
  ];

  currentSlide: number = 0;

  goToSlide(index: number) {
    this.currentSlide = index;
  }















// effet pour que sa survol de gauche comme a droite 

    // ... votre code existant (slides, currentSlide, goToSlide) ...

  private touchStartX: number = 0;
  private touchEndX: number = 0;

  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  onTouchEnd(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].screenX;
    this.handleSwipe();
  }

  private handleSwipe() {
    const swipeDistance = this.touchEndX - this.touchStartX;
    const minSwipeDistance = 50; // distance minimale en pixels pour considérer que c'est un swipe

    if (swipeDistance > minSwipeDistance) {
      // Balayage vers la DROITE → slide précédente
      this.previousSlide();
    } else if (swipeDistance < -minSwipeDistance) {
      // Balayage vers la GAUCHE → slide suivante
      this.nextSlide();
    }
  }

  previousSlide() {
    this.currentSlide = this.currentSlide === 0 
      ? this.slides.length - 1 
      : this.currentSlide - 1;
  }

  nextSlide() {
    this.currentSlide = this.currentSlide === this.slides.length - 1 
      ? 0 
      : this.currentSlide + 1;
  }

};
