const themeManager = (() => {
  let currentTheme = "light"

  return {
    getTheme() {
      return currentTheme
    },
    setTheme(theme) {
      if (["light", "dark"].includes(theme)) {
        currentTheme = theme
        return { status: "success", theme: currentTheme }
      } else {
        return { status: "error", message: "Invalid theme" }
      }
    },
    toggleTheme() {
      currentTheme = currentTheme === "light" ? "dark" : "light"
      return { status: "success", theme: currentTheme }
    },
  }
})()

module.exports = themeManager
