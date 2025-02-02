// Function to insert selected widget into the customize page
function addWidget(widgetType) {
    const selectedSlot = sessionStorage.getItem("selectedSlot");

    if (!selectedSlot) return;

    let widgetHTML = "";
    if (widgetType === "hourly") {
        widgetHTML = `
            <div class="widget-box widget-medium">
                <h3>Hourly Forecast</h3>
                <img src="images/cloud.png" alt="Cloud">
            </div>`;
    } else if (widgetType === "ten-day") {
        widgetHTML = `
            <div class="widget-box widget-medium">
                <h3>10-Day Weather</h3>
                <img src="images/sun.webp" alt="Sunny">
            </div>`;
    } else if (widgetType === "sunrise") {
        widgetHTML = `
            <div class="widget-box widget-small">
                <h3>Sunrise & Sunset</h3>
                <p>🌅 Sunrise: 7:00 AM</p>
                <p>🌇 Sunset: 5:21 PM</p>
            </div>`;
    } else if (widgetType === "current-weather") {
        widgetHTML = `
            <div class="widget-box widget-small">
                <h3>Current Weather</h3>
                <p>63° - Sunny</p>
                <img src="images/sun.webp" alt="Sunny">
            </div>`;
    } else if (widgetType === "wind-speed") {
        widgetHTML = `
            <div class="widget-box widget-small">
                <h3>Wind Speed</h3>
                <p>10mph</p>
                <img src="images/wind.png" alt="Wind">
            </div>`;
    } else if (widgetType === "uv-index") {
        widgetHTML = `
            <div class="widget-box widget-small">
                <h3>UV Index</h3>
                <p>2 - Low</p>
                <img src="images/uv.webp" alt="UV Index">
            </div>`;
    }

    // Save the selected widget into sessionStorage
    sessionStorage.setItem(`widget-slot-${selectedSlot}`, widgetHTML);

    // Redirect back to customize page
    window.location.href = "customize.html";
}
