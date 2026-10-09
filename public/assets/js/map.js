if (document.getElementById("map")) {
    mapboxgl.accessToken =
        "YOUR_MAPBOX_ACCESS_TOKEN";
    const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/outdoors-v12",
        center: [-0.108968, 51.492933],
        zoom: 14,
        cooperativeGestures: true 
    });

    const geojson = {
        type: "FeatureCollection",
        features: [
            {
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [-0.108968, 51.492933],
                },
            },
        ],
    };
    for (const feature of geojson.features) {
        // create a HTML element for each feature
        const el = document.createElement("div");
        el.className = "marker";
        el.innerHTML = `<i class="icon-house-mapping"></i>`;

        // make a marker for each feature and add to the map
        new mapboxgl.Marker(el)
            .setLngLat(feature.geometry.coordinates)
            .addTo(map);
    }
}
