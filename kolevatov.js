 // the x3dom runtime object
    var runtime = null;
    var drag = false;


    // on button press
    function start(event) 
    {
        if (!drag) {
            document.getElementById('moveEvent').innerHTML = "Down: [" + event.layerX + " | " + event.layerY + "]";
            drag = true;
        }
    }

    // on mouse move
    function moveCallback(elem, trans)
    {
        document.getElementById('moveEvent').innerHTML = "Move " + elem.id + ": [" + trans + "]";
    }

    // on button release
    function stop(event)
    {
        if (drag) {
            document.getElementById('moveEvent').innerHTML = "Up: [" + event.layerX + " | " + event.layerY + "]";
            drag = false;
        }
    }
    
    // viewpoint changed
    function viewFunc(evt)
    {
        // show viewpoint values
        if (evt)
        {
        	var pos = evt.position;
        	var rot = evt.orientation;
    		var mat = evt.matrix;
		
            var camPos = pos.x.toFixed(4)+' '+pos.y.toFixed(4)+' '+pos.z.toFixed(4);
            var camRot = rot[0].x.toFixed(4)+' '+rot[0].y.toFixed(4)+' '+rot[0].z.toFixed(4)+' '+rot[1].toFixed(4);
        
            document.getElementById("viewMat").innerHTML = "&ltViewpoint position='" + 
                                                            camPos + "' orientation='" + camRot + "'&gt";
        }
        
        // update 2d marker also if camera changes since projection is now wrong
        var trans = x3dom.fields.SFVec3f.parse(document.getElementById('bar').getAttribute("translation"));
	    var pos2d = runtime.calcPagePos(trans.x, trans.y, trans.z);
        var anno = document.getElementById("anno2d");
        
        anno.innerHTML = "(" + pos2d[0] + ", " + pos2d[1] + ")";
        anno.style.left = (pos2d[0]+1) + "px";
        anno.style.top = (pos2d[1]+1) + "px";
    }
    
    // update position and orientation of line according to picked position and surface direction
    function updateStuff(event)
    {
        var norm = new x3dom.fields.SFVec3f(event.normalX, event.normalY, event.normalZ);
        var qDir = x3dom.fields.Quaternion.rotateFromTo(new x3dom.fields.SFVec3f(0, -1, 0), norm);
        var rot = qDir.toAxisAngle();
        
        var t = document.getElementById('bar');
        t.setAttribute('rotation', rot[0].x+' '+rot[0].y+' '+rot[0].z+' '+rot[1]);
        t.setAttribute('translation', event.worldX+' '+event.worldY+' '+event.worldZ);
        
        var pos2d = runtime.calcPagePos(event.worldX, event.worldY, event.worldZ);
        var anno = document.getElementById("anno2d");
        
        anno.innerHTML = "(" + pos2d[0] + ", " + pos2d[1] + ")";
        anno.style.left = (pos2d[0]+1) + "px";
        anno.style.top = (pos2d[1]+1) + "px";
    }

    // some inits to attach listeners etc.
    document.onload = function() 
    {
        var boxes = document.getElementById("boxes");
        runtime = boxes.runtime;
        boxes.addEventListener('mouseup', stop, false);
        
        var redBox = document.getElementById("box_2_id");
        redBox.addEventListener('mousedown', start, false);

        // Moveable wrapper requires x3dom-full.js, its signature is:
        // x3dom.Moveable(x3domElement, transformNode, callback, snapToGridSize)
        new x3dom.Moveable(boxes, redBox, moveCallback, 0);
        
        document.getElementById('aView').addEventListener('viewpointChanged', viewFunc, false);
        viewFunc(null);
    }