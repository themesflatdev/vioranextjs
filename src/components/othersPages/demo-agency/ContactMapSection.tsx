// Mapbox token dùng chung của theme (shared demo token trong assets/js/map.js)
// bị từ chối (401 invalid access token) nên đổi sang Google Maps embed — không
// cần API key, không còn lỗi console. Cùng toạ độ với map.js gốc.
export default function ContactMapSection() {
  return (
    <div className="map-box position-relative">
      <iframe
        src="https://www.google.com/maps?q=51.492933,-0.108968&z=14&output=embed"
        title="map"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        style={{ position: "absolute", top: 0, bottom: 0, left: 0, width: "100%", height: "100%", border: 0 }}
      />
    </div>
  );
}
