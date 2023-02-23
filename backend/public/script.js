const { use } = require("../routes/trackRoutes")

const button = document.querySelector("button")
button.addEventListener("click", () => {
  fetch("http://localhost:3001/create-checkout-session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      items: [
        { id: 1, quantity: 1 }
      ],
    }),
  })
    .then(async res => {
      if (res.ok) return res.json()
      const json = await res.json()
      return await Promise.reject(json)
    })
    .then(({ url }) => {
      window.location = url
    })
    .catch(e => {
      console.error(e.error)
    })
})