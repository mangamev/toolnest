function copyText(id) {
  const el = document.getElementById(id);
  const text = el.value !== undefined ? el.value : el.textContent;
  navigator.clipboard.writeText(text).then(() => showToast('Copied!'));
}
function copyRaw(text) {
  navigator.clipboard.writeText(text).then(() => showToast('Copied!'));
}
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 1800);
}
