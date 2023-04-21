import * as React from "react";

const ResizableDiv = (children: any) => {
    const [size, setSize] = React.useState({ x: 400, y: 300 });

    const handler = (mouseDownEvent: { pageX: any; pageY: any; }) => {
        const startSize = size;
        const startPosition = { x: mouseDownEvent.pageX, y: mouseDownEvent.pageY };
        
        function onMouseMove(mouseMoveEvent: { pageX: number; pageY: number; }) {
          setSize(currentSize => ({ 
            x: startSize.x - startPosition.x + mouseMoveEvent.pageX, 
            y: startSize.y - startPosition.y + mouseMoveEvent.pageY 
          }));
          let xvalue = startSize.x - startPosition.x + mouseMoveEvent.pageX;
          let yvalue = startSize.y - startPosition.y + mouseMoveEvent.pageY;
            console.log('X position:'+ xvalue);
            console.log('Y position:'+yvalue);
        }

        function onMouseUp() {
          document.body.removeEventListener("mousemove", onMouseMove);
          // uncomment the following line if not using `{ once: true }`
          // document.body.removeEventListener("mouseup", onMouseUp);
        }
        
        document.body.addEventListener("mousemove", onMouseMove);
        document.body.addEventListener("mouseup", onMouseUp, { once: true });
     
      };
    
  

    return(
        <div id="container" style={{ width: size.x, height: size.y, background: 'blue' }}>
        <button id="draghandle" type="button" onMouseDown={handler} >Push me to resize</button>
      </div>
    );
    
}

export default ResizableDiv;
