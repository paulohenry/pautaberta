import 'styled-components';


declare module 'styled-components' {

  interface DefaultTheme{
    title:string,    
    colors:{       
      priority_colors:{
        normals:string,      
        urgents:string,
        important:string,
        high_priority:string
      },
      status_colors:{
        progress:string,
        opens:string,
        waitings:string,
        solveds:string
      },
      layout_colors:{
        primary:string,
        secondary:string,
        tertiary:string,
        black_texts:string,
        light_texts:string
      },
      others:{
        normals:string,
        light_texts:string,
        gradient:string;
        line_color:string;
        hover_menu:string;
      }
    }
  }

}