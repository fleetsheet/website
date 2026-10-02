type FormStatus = 'pending' | 'success' | 'error'

function setStatus(form: HTMLFormElement, status: FormStatus) {
  const message = form.querySelector<HTMLElement>('[data-form-message]')
  const button = form.querySelector<HTMLButtonElement>('button[type="submit"]')
  if (button) {
    button.disabled = status === 'pending'
    const label = status === 'pending' ? button.dataset.pendingLabel : button.dataset.label
    if (label) button.textContent = label
  }
  if (!message) return
  const text = status === 'pending' ? '' : form.dataset[`${status}Message`]
  message.textContent = text ?? ''
  message.dataset.status = status
}

async function submit(event: SubmitEvent) {
  const form = event.currentTarget
  if (!(form instanceof HTMLFormElement)) return
  event.preventDefault()
  setStatus(form, 'pending')
  try {
    const response = await fetch(form.action, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(Object.fromEntries(new FormData(form))),
    })
    if (!response.ok) throw new Error(`Form submission failed: ${response.status}`)
    form.reset()
    setStatus(form, 'success')
  } catch {
    setStatus(form, 'error')
  }
}

document.addEventListener('astro:page-load', () => {
  document.querySelectorAll<HTMLFormElement>('form[data-formspark]').forEach((form) => {
    form.addEventListener('submit', submit)
  })
})
