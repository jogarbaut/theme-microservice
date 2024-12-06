const express = require("express")
const cors = require("cors") // Import the cors package
const themeManager = require("./themeManager")

const app = express()
const PORT = 3002

// Enable CORS for all origins
app.use(cors())

// Parse JSON request bodies
app.use(express.json())

// Endpoint to get the current theme
app.get("/theme", (req, res) => {
  res.json({ theme: themeManager.getTheme() })
})

// Endpoint to set a specific theme
app.post("/theme", (req, res) => {
  const { theme } = req.body
  const response = themeManager.setTheme(theme)
  res.json(response)
})

// Endpoint to toggle the theme
app.post("/theme/toggle", (req, res) => {
  const response = themeManager.toggleTheme()
  res.json(response)
})

// Start the server
app.listen(PORT, () => {
  console.log(`Theme Manager Microservice running on http://localhost:${PORT}`)
})
