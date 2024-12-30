// //------------------------------------------------ chart.js ------------------------------------------------ //
// //---------------------------------------- https://www.chartjs.org/ ---------------------------------------- //

// import { Chart } from 'chart.js';

// new Chart( ctx, {
//   type: 'bar',
//   data: {
//     labels: [ 'Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange' ],
//     datasets: [ {
//       label: '# of Votes',
//       data: [ 12, 19, 3, 5, 2, 3 ],
//       borderWidth: 1
//     } ]
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true
//       }
//     }
//   }
// } );

// //--------------------------------------------------- d3 --------------------------------------------------- //
// //-------------------------------------------- https://d3js.org/ ------------------------------------------- //

// import { scaleUtc, scaleLinear, create, axisBottom, axisLeft } from 'd3';

// const width = 640;
// const height = 400;
// const marginTop = 20;
// const marginRight = 20;
// const marginBottom = 30;
// const marginLeft = 40;

// const x = scaleUtc()
//   .domain( [ new Date( '2023-01-01' ), new Date( '2024-01-01' ) ] )
//   .range( [ marginLeft, width - marginRight ] );

// const y = scaleLinear()
//   .domain( [ 0, 100 ] )
//   .range( [ height - marginBottom, marginTop ] );

// const svg = create( 'svg' )
//   .attr( 'width', width )
//   .attr( 'height', height );

// svg.append( 'g' )
//   .attr( 'transform', `translate(0,${ height - marginBottom })` )
//   .call( axisBottom( x ) );

// svg.append( 'g' )
//   .attr( 'transform', `translate(${ marginLeft },0)` )
//   .call( axisLeft( y ) );

// container.append( svg.node() );

// //---------------------------------------------- handsontable ---------------------------------------------- //
// //---------------------------------------- https://handsontable.com/ --------------------------------------- //

// import Handsontable from 'handsontable';

// const container = document.querySelector( '#example' );

// new Handsontable( container, {
//   data: [
//     [ '', 'Tesla', 'Volvo', 'Toyota', 'Ford' ],
//     [ '2019', 10, 11, 12, 13 ],
//     [ '2020', 20, 11, 14, 13 ],
//     [ '2021', 30, 15, 12, 13 ]
//   ],
//   rowHeaders: true,
//   colHeaders: true,
//   height: 'auto',
//   autoWrapRow: true,
//   autoWrapCol: true,
//   licenseKey: 'non-commercial-and-evaluation'
// } );

// //-------------------------------------------------- luxon ------------------------------------------------- //
// //------------------------------------- https://moment.github.io/luxon/ ------------------------------------ //

// import { DateTime } from 'luxon';

// DateTime.now().toString();

// //------------------------------------------------ ckeditor5 ----------------------------------------------- //
// //------------------------------------------ https://ckeditor.com/ ----------------------------------------- //

// import { ClassicEditor, Essentials, Bold, Italic, Font, Paragraph } from 'ckeditor5';

// ClassicEditor.create( document.querySelector( '#editor' ), {
//   licenseKey: 'GPL',
//   plugins: [ Essentials, Bold, Italic, Font, Paragraph ],
//   toolbar: [
//     'undo', 'redo', '|', 'bold', 'italic', '|',
//     'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor'
//   ]
// } );

// //--------------------------------------- ckeditor5 - optimized build -------------------------------------- //
// //------------------------------------------ https://ckeditor.com/ ----------------------------------------- //

// import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic/dist/index.js';
// import { Essentials } from '@ckeditor/ckeditor5-essentials/dist/index.js';
// import { Bold, Italic } from '@ckeditor/ckeditor5-basic-styles/dist/index.js';
// import { Font } from '@ckeditor/ckeditor5-font/dist/index.js';
// import { Paragraph } from '@ckeditor/ckeditor5-paragraph/dist/index.js';

// ClassicEditor.create( document.querySelector( '#editor' ), {
//   licenseKey: 'GPL',
//   plugins: [ Essentials, Bold, Italic, Font, Paragraph ],
//   toolbar: [
//     'undo', 'redo', '|', 'bold', 'italic', '|',
//     'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor'
//   ]
// } );

// //-------------------------------------------------- mobx -------------------------------------------------- //
// //------------------------------------------- https://mobx.js.org/ ----------------------------------------- //

// import { makeObservable, observable, action } from 'mobx'

// class Todo {
//   id = Math.random()
//   title = ''
//   finished = false

//   constructor( title ) {
//     makeObservable( this, {
//       title: observable,
//       finished: observable,
//       toggle: action
//     } )
//     this.title = title
//   }

//   toggle () {
//     this.finished = !this.finished
//   }
// }

// new Todo( 'title' );

// //------------------------------------------------ tippy.js ------------------------------------------------ //
// //---------------------------------------- https://atomiks.github.io/ -------------------------------------- //

// import tippy from 'tippy.js';

// tippy( '#myButton', {
//   content: 'My tooltip!',
// } );

// //--------------------------------------------------- zod -------------------------------------------------- //
// //--------------------------------------------- https://zod.dev/ ------------------------------------------- //

// import { z } from 'zod';

// const mySchema = z.string();

// mySchema.parse( 'tuna' );
