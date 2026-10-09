type FormStatus = 'pending' | 'success' | 'error' | 'captcha'

type HCaptcha = {
  render: (container: HTMLElement, params: { sitekey: string; hl?: string }) => string
  reset: (widgetId?: string) => void
}

declare global {
  interface Window {
    hcaptcha?: HCaptcha
    onHCaptchaLoad?: () => void
  }
}

const HCAPTCHA_API =
  'https://js.hcaptcha.com/1/api.js?render=explicit&onload=onHCaptchaLoad&recaptchacompat=off'

const captchaWidgets = new WeakMap<HTMLFormElement, string>()

function renderCaptchas() {
  const { hcaptcha } = window
  if (!hcaptcha) return
  document.querySelectorAll<HTMLFormElement>('form[data-formspark]').forEach((form) => {
    const container = form.querySelector<HTMLElement>('[data-hcaptcha]')
    const sitekey = container?.dataset.sitekey
    if (!container || !sitekey || container.childElementCount > 0) return
    captchaWidgets.set(form, hcaptcha.render(container, { sitekey, hl: container.dataset.hl }))
  })
}

function loadCaptcha() {
  if (!document.querySelector('form[data-formspark] [data-hcaptcha]')) return
  if (window.hcaptcha) {
    renderCaptchas()
    return
  }
  if (document.querySelector('script[data-hcaptcha-api]')) return
  window.onHCaptchaLoad = renderCaptchas
  const script = document.createElement('script')
  script.src = HCAPTCHA_API
  script.async = true
  script.dataset.hcaptchaApi = ''
  document.head.append(script)
}

function resetCaptcha(form: HTMLFormElement) {
  const widgetId = captchaWidgets.get(form)
  if (widgetId !== undefined) window.hcaptcha?.reset(widgetId)
}

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
  message.dataset.status = status === 'captcha' ? 'error' : status
}

async function submit(event: SubmitEvent) {
  const form = event.currentTarget
  if (!(form instanceof HTMLFormElement)) return
  event.preventDefault()
  const data = new FormData(form)
  if (form.querySelector('[data-hcaptcha]') && !data.get('h-captcha-response')) {
    setStatus(form, 'captcha')
    return
  }
  setStatus(form, 'pending')
  try {
    const response = await fetch(form.action, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(Object.fromEntries(data)),
    })
    if (!response.ok) throw new Error(`Form submission failed: ${response.status}`)
    form.reset()
    setStatus(form, 'success')
  } catch {
    setStatus(form, 'error')
  } finally {
    resetCaptcha(form)
  }
}

document.addEventListener('astro:page-load', () => {
  document.querySelectorAll<HTMLFormElement>('form[data-formspark]').forEach((form) => {
    form.addEventListener('submit', submit)
  })
  loadCaptcha()
})
export {}
