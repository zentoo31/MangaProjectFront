import { trigger, transition, style, animate, query } from '@angular/animations';
export const fadeAnimation = trigger('fadeAnimation', [
    transition('* <=> *', [
      style({ opacity: 0 }),
      animate('500ms', style({ opacity: 1 }))
    ])
]);