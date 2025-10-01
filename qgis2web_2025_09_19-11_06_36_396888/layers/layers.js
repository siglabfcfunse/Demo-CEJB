var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_PermetroCEJB_1 = new ol.format.GeoJSON();
var features_PermetroCEJB_1 = format_PermetroCEJB_1.readFeatures(json_PermetroCEJB_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PermetroCEJB_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PermetroCEJB_1.addFeatures(features_PermetroCEJB_1);
var lyr_PermetroCEJB_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PermetroCEJB_1, 
                style: style_PermetroCEJB_1,
                popuplayertitle: 'Perímetro CEJB',
                interactive: true,
                title: '<img src="styles/legend/PermetroCEJB_1.png" /> Perímetro CEJB'
            });
var format_Vegetacin_2 = new ol.format.GeoJSON();
var features_Vegetacin_2 = format_Vegetacin_2.readFeatures(json_Vegetacin_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vegetacin_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vegetacin_2.addFeatures(features_Vegetacin_2);
var lyr_Vegetacin_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vegetacin_2, 
                style: style_Vegetacin_2,
                popuplayertitle: 'Vegetación ',
                interactive: true,
    title: 'Vegetación <br />\
    <img src="styles/legend/Vegetacin_2_0.png" /> Acacia furcatispina<br />\
    <img src="styles/legend/Vegetacin_2_1.png" /> Agave<br />\
    <img src="styles/legend/Vegetacin_2_2.png" /> Ceiba speciosa<br />\
    <img src="styles/legend/Vegetacin_2_3.png" /> Cupressus macrocarpa<br />\
    <img src="styles/legend/Vegetacin_2_4.png" /> Fraxinus papillosa<br />\
    <img src="styles/legend/Vegetacin_2_5.png" /> Geoffroea decorticans<br />\
    <img src="styles/legend/Vegetacin_2_6.png" /> Grevillea robusta<br />\
    <img src="styles/legend/Vegetacin_2_7.png" /> Handroanthus impetiginosus<br />\
    <img src="styles/legend/Vegetacin_2_8.png" /> Jacaranda mimosifolia<br />\
    <img src="styles/legend/Vegetacin_2_9.png" /> Juniperus virginiana<br />\
    <img src="styles/legend/Vegetacin_2_10.png" /> Lycium cestroides<br />\
    <img src="styles/legend/Vegetacin_2_11.png" /> Neltuma alba<br />\
    <img src="styles/legend/Vegetacin_2_12.png" /> Opuntia ficus-indica<br />\
    <img src="styles/legend/Vegetacin_2_13.png" /> Parkinsonia aculeata<br />\
    <img src="styles/legend/Vegetacin_2_14.png" /> Parkinsonia praecox<br />\
    <img src="styles/legend/Vegetacin_2_15.png" /> Peltophorum dubium<br />\
    <img src="styles/legend/Vegetacin_2_16.png" /> Populus alba<br />\
    <img src="styles/legend/Vegetacin_2_17.png" /> Prosopis vinalillo<br />\
    <img src="styles/legend/Vegetacin_2_18.png" /> Robinia pseudoacacia<br />\
    <img src="styles/legend/Vegetacin_2_19.png" /> Schinus molle<br />\
    <img src="styles/legend/Vegetacin_2_20.png" /> Senna spectabilis<br />\
    <img src="styles/legend/Vegetacin_2_21.png" /> Sophora sp.<br />\
    <img src="styles/legend/Vegetacin_2_22.png" /> Tecoma stans<br />\
    <img src="styles/legend/Vegetacin_2_23.png" /> Thuja<br />\
    <img src="styles/legend/Vegetacin_2_24.png" /> Tipuana tipu<br />\
    <img src="styles/legend/Vegetacin_2_25.png" /> Vachellia aroma<br />\
    <img src="styles/legend/Vegetacin_2_26.png" /> Vallesia glabra<br />\
    <img src="styles/legend/Vegetacin_2_27.png" /> Yucca filamentosa<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_PermetroCEJB_1.setVisible(true);lyr_Vegetacin_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_PermetroCEJB_1,lyr_Vegetacin_2];
lyr_PermetroCEJB_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_Vegetacin_2.set('fieldAliases', {'fid': 'fid', 'Especie': 'Especie', 'Est San': 'Est San', 'Dap': 'Dap', 'Observaciones': 'Observaciones', 'Nombre cientifico ': 'Nombre cientifico ', });
lyr_PermetroCEJB_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', });
lyr_Vegetacin_2.set('fieldImages', {'fid': 'TextEdit', 'Especie': 'TextEdit', 'Est San': 'TextEdit', 'Dap': 'TextEdit', 'Observaciones': 'TextEdit', 'Nombre cientifico ': 'TextEdit', });
lyr_PermetroCEJB_1.set('fieldLabels', {'fid': 'hidden field', 'id': 'inline label - always visible', });
lyr_Vegetacin_2.set('fieldLabels', {'fid': 'hidden field', 'Especie': 'inline label - always visible', 'Est San': 'hidden field', 'Dap': 'hidden field', 'Observaciones': 'hidden field', 'Nombre cientifico ': 'inline label - always visible', });
lyr_Vegetacin_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});