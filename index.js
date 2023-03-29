// Import stylesheets
import './style.css';
import { fromEvent } from 'rxjs'

// Write Javascript code!

const buttons = document.getElementById('button');

const button$ = fromEvent(buttons, 'click');

button$.subscribe(() => {
  console.log('Clicked now!')
})
