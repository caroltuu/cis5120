// Function to store which slot was selected and navigate to addwidget page
function selectSlot(slotNumber) {
    sessionStorage.setItem("selectedSlot", slotNumber);
    window.location.href = "addwidget.html";
}

// Function to load widgets correctly into slots
function loadWidgets() {
    // Reset widgets on refresh
    if (performance.navigation.type === 1) {
        sessionStorage.clear();
    }

    document.querySelectorAll(".empty-slot").forEach(slot => {
        const slotNumber = slot.getAttribute("data-slot");
        const widgetHTML = sessionStorage.getItem(`widget-slot-${slotNumber}`);

        if (widgetHTML) {
            slot.outerHTML = widgetHTML; // Fully replace the slot with the stored widget
        }
    });
}

// Function to store the selected widget and redirect back to customize page
function addWidget(widgetType) {
    const selectedSlot = sessionStorage.getItem("selectedSlot");
    if (!selectedSlot) return;

    let widgetHTML = getWidgetHTML(widgetType);
    sessionStorage.setItem(`widget-slot-${selectedSlot}`, widgetHTML);

    // Redirect back to customize page
    window.location.href = "customize.html";
}

// Function to return widget HTML
function getWidgetHTML(widgetType) {
    const widgetTemplates = {
        "hourly": `
            <div class="widget-box widget-medium">
                <h3>Hourly Forecast</h3>
                <div class="hourly-container">
                    <div class="hourly-list scrollable">
                        <div class="hourly-row">
                            <img src="images/cloud.png" alt="Cloud">
                            <span>12PM</span>
                            <span>30°</span>
                            <span>5%</span>
                        </div>
                        <div class="hourly-row">
                            <img src="images/cloud.png" alt="Cloud">
                            <span>1PM</span>
                            <span>32°</span>
                            <span>10%</span>
                        </div>
                        <div class="hourly-row">
                            <img src="images/sun.webp" alt="Partly Cloudy">
                            <span>2PM</span>
                            <span>34°</span>
                            <span>0%</span>
                        </div>
                        <div class="hourly-row">
                            <img src="images/sun.webp" alt="Sunny">
                            <span>3PM</span>
                            <span>36°</span>
                            <span>0%</span>
                        </div>
                    </div>
                </div>
            </div>`,
        "ten-day": `
            <div class="widget-box widget-medium">
                <h3>10-Day Weather</h3>
                <div class="daily-container">
                    <div class="daily-list scrollable">
                        <div class="daily-row">
                            <img src="images/rain.png" alt="Rain">
                            <span>Mon</span>
                            <span>23°/31°</span>
                            <span>70%</span>
                        </div>
                        <div class="daily-row">
                            <img src="images/sun.webp" alt="Partly Cloudy">
                            <span>Tue</span>
                            <span>30°/35°</span>
                            <span>10%</span>
                        </div>
                        <div class="daily-row">
                            <img src="images/sun.webp" alt="Sunny">
                            <span>Wed</span>
                            <span>32°/45°</span>
                            <span>0%</span>
                        </div>
                        <div class="daily-row">
                            <img src="images/cloud.png" alt="Cloudy">
                            <span>Thu</span>
                            <span>28°/39°</span>
                            <span>15%</span>
                        </div>
                    </div>
                </div>
            </div>`,
        "sunrise": `
            <div class="widget-box widget-small">
                <h3>Sunrise & Sunset</h3>
                <p>🌅 Sunrise: 7:00 AM</p>
                <p>🌇 Sunset: 5:21 PM</p>
            </div>`,
        "current-weather": `
            <div class="widget-box widget-small">
                <h3>Current Weather</h3>
                <p>63° - Sunny</p>
                <img src="images/sun.webp" alt="Sunny">
            </div>`,
        "wind-speed": `
            <div class="widget-box widget-small">
                <h3>Wind Speed</h3>
                <p>10mph</p>
                <img src="images/wind.png" alt="Wind">
            </div>`,
        "uv-index": `
            <div class="widget-box widget-small">
                <h3>UV Index</h3>
                <p>2 - Low</p>
                <img src="images/uv.webp" alt="UV Index">
            </div>`
    };

    return widgetTemplates[widgetType] || "";
}

document.addEventListener("DOMContentLoaded", loadWidgets);
