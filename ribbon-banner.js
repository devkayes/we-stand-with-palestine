(function () {
  const currentScript = document.currentScript || {};
  const onDOMReady = (callback) => {
    if (
      document.readyState === "interactive" ||
      document.readyState === "complete"
    ) {
      callback();
    } else {
      document.addEventListener("DOMContentLoaded", callback);
    }
  };

  onDOMReady(() => {
    const title = currentScript.getAttribute("title");

    const banner = document.createElement("div");

    Object.assign(banner.style, {
      width: "100%",
      height: "15px",
      position: "fixed",
      top: "0",
      left: "0",
      zIndex: "9999",
      background: `linear-gradient(to bottom,
      #333333 0%, #333333 50%,
      #4CAF50 50%, #4CAF50 100%)`,

      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "600",
      fontSize: "14px",
      fontFamily:
        "Segoe UI, -apple-system, BlinkMacSystemFont, Arial, sans-serif",
      color: "#000",
      cursor: "pointer",
      textAlign: "center",
    });

    banner.textContent = title;
    banner.title = "I stand with the people of palestine (Tap to remove)";

    banner.addEventListener("click", () => {
      banner.remove();
    });

    document.body.appendChild(banner);
  });
})();
