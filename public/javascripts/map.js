var tilejson = {
    "tilejson": "2.0.0",
    "scheme": "xyz",
    "bounds": [ -123.2419,41.9901,-122.2751,43.0127 ],
    "center": [ 122.9604,42.1878,10 ],
    "minzoom": 8,
    "maxzoom": 17,
    "name": "Jackson County Lots",
    "template": "{{STREETNAME}} {{ACREAGE}} acres, valued at ${{LANDVALUE}}.  ${{IMPVALUE}} of improvements.  Owned by {{FEEOWNER}}.",
    "version": "1.0.0",
    "tiles": [
        "http://tiles.alexose.com/v2/jackson/{z}/{x}/{y}.png"
    ],
    "grids": [
        "http://tiles.alexose.com/v2/jackson/{z}/{x}/{y}.grid.json"
    ]
} ;

L.mapbox.accessToken = 'pk.eyJ1IjoiYWxleG9zZSIsImEiOiJmZy1rQ1VBIn0.gyExB7jljQYa26ERP7ZOIQ';

L.Browser.retina = false;

var map = L.mapbox.map('map');
var tiles = L.mapbox.tileLayer(tilejson, { autoScale : false }).addTo(map);
var grid = L.mapbox.gridLayer(tilejson).addTo(map);
var myGridControl = L.mapbox.gridControl(grid).addTo(map);

map.setView([42.1878,-122.9604], 10);
