import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {

  // Variable qui retient si le menu est ouvert ou fermé : is MenuOpen: boolean = false;
  isMenuOpen: boolean = false;

  constructor(private eRef: ElementRef) {}
// Alterne l'état (ouvert/fermé)
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Ferme le menu quand on clique sur un lien
  closeMenu(): void {
    this.isMenuOpen = false;
  }

  // Écoute tous les clics sur la page
  @HostListener('document:click', ['$event'])
  clickout(event: Event) {
    // Si le clic se fait en dehors du composant header, on ferme le menu
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.closeMenu();
    }
  }
}