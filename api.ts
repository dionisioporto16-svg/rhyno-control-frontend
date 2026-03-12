// URL do backend (Railway)
export const API_URL = "https://rhyno-control-backend-production.up.railway.app/"

// -----------------------------
// Health check
// -----------------------------
export async function healthCheck() {
  const res = await fetch(`${API_URL}/api/health`)
  if (!res.ok) throw new Error("API offline")
  return res.json()
}

// -----------------------------
// Sincronizar escala
// -----------------------------
export async function syncEscala() {
  const res = await fetch(`${API_URL}/api/sync`)

  if (!res.ok) {
    throw new Error("Erro ao sincronizar escala")
  }

  return res.json()
}

// -----------------------------
// Upload de planilha
// -----------------------------
export async function uploadPlanilha(file: File) {

  const formData = new FormData()
  formData.append("file", file)

  const res = await fetch(`${API_URL}/api/upload`, {
    method: "POST",
    body: formData
  })

  if (!res.ok) {
    throw new Error("Erro ao enviar planilha")
  }

  return res.json()
}
