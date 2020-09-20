window.onload = init;

function init(){
    const map = new ol.Map({
        view: new ol.View({
            center: [-8461544.39564057, -1205139.2559162863],
            zoom: 7,
            maxzoom:10,
            minZoom: 4,
            rotation: 0.5
    
        }),
        
        target: 'js-map'
    })

    //Basemaps layers

    const openStreetMapStandard = new ol.layer.Tile({
        source: new ol.source.OSM(),
        visible: true,
        title: 'OSMStandard'
    })

const openStreetMapHumanitarian = new ol.layer.Tile({
    source: new ol.source.OSM({
        url: 'https://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png.'
    }),
    visible: false,
    title: 'OSMHumanitarian'
})

const stamenTerrain = new ol.layer.Tile({
    source: new ol.source.XYZ({
        url: 'http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg',
        attributions: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
    }),
    visible: false,
    title: 'StamenTerrain'
})

// Layer Group
const baseLayerGroup = new ol.layer.Group({
    layers: [openStreetMapStandard ,openStreetMapHumanitarian, stamenTerrain

    ]
})
map.addLayer(baseLayerGroup);

//Layer switcing logic for Basemaps
const baseLayerElements = document.querySelectorAll('.sidebar > input[type=radio]');
for(let baseLayerElement of baseLayerElements){
    baseLayerElement.addEventListener('change', function(){
let baseLayerElementValue = this.value;
baseLayerGroup.getLayers().forEach(function(element, index, array){
    let baseLayerTitle= element.get('title');
    element.setVisible(baseLayerTitle === baseLayerElementValue);
    //console.log('baseLayerTitle:' + baseLayerTitle, 'baseLayerElementValue: ' + baseLayerElement); 
    //console.log(baseLayerTitle === baseLayerElementValue);
    console.log(element.get('title'), element.get('visible'));
})

 })

}

}