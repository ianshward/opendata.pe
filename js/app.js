$(function() {

        var m,
        legend,
        interaction,
        mm = com.modestmaps,
        layers_all = [
            'control-room'].join(',');

    if ($('#map').length > 0) {
        wax.tilejson('http://tiles.mapbox.com/mapbox/api/Tileset/'+layers_all, function(tilejson)
 {
         m = new mm.Map('map', new wax.mm.connector(tilejson), null, [ new mm.MouseHandler(), new mm.TouchHandler()]);

            m.setCenterZoom(new mm.Location(1.845384,-42.275391), 4);


          myTooltip = new wax.tooltip;


            myTooltip.getTooltip = function(feature, context)
		{
                return $('#tooltips').html(feature).get(0);

            }


            myTooltip.hideTooltip = function(feature, context) {
                $('#tooltips').empty();
           $(texto).appendTo(document.getElementById('tooltips'));

            }

            interaction = wax.mm.interaction(m, tilejson, { callbacks: myTooltip });

            wax.mm.zoomer(m, tilejson).appendTo(m.parent);

            var bw = wax.mm.bwdetect(m, {
                auto: true,
                png: '.png64?'
            });
        });
    }




});