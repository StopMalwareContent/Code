import "./style.css"
import browser from "webextension-polyfill"

const root = document.getElementById("app")!
root.innerHTML = `
  <h1>Extension</h1>
  <p id="count">Loading…</p>
  <div style="display:flex;gap:.5rem">
    <button id="inc">Increment</button>
    <button id="ping">Ping background</button>
  </div>
`

async function getCounter(): Promise<number> {
  const data = await browser.storage.local.get("counter")
  return typeof data.counter === "number" ? data.counter : 0
}

async function setCounter(n: number): Promise<void> {
  await browser.storage.local.set({ counter: n })
}

async function updateCountUI() {
  const c = await getCounter()
  document.getElementById("count")!.textContent = `Counter: ${c}`
}

document.getElementById("inc")!.addEventListener("click", async () => {
  const cur = await getCounter()
  await setCounter(cur + 1)
  updateCountUI()
})

document.getElementById("ping")!.addEventListener("click", async () => {
  try {
    // send a message to the background/service worker and show its reply
    const reply = await browser.runtime.sendMessage({ type: "ping" })
    alert("Background replied: " + JSON.stringify(reply))
  } catch (err) {
    alert("No background or error: " + String(err))
  }
})

// keep UI in sync if storage changes (other pages/background update it)
browser.storage.onChanged.addListener((changes) => {
  if ("counter" in changes) updateCountUI()
})

updateCountUI().catch((e) => {
  document.getElementById("count")!.textContent = "Error"
  // eslint-disable-next-line no-console
  console.error(e)
})
