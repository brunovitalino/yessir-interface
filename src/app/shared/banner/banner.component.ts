import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  @Input() src: String = '' // 'assets/imagens/banner-homepage.png'
  @Input() alt: String = '' // 'Banner da Aplicação YesSir'
    
}
