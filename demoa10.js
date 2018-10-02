var bindScriptOnloadEvent = function(script, onload) {

    var done = false;

    script.onload = script.onreadystatechange = function() {

    if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {

        done = true;

        script.onload = script.onreadystatechange = null;

        onload();

        }

    };

};

bindScriptOnloadEvent(script, function(){
    /*.. logic here..*/
});
