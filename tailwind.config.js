// tailwind.config.js
module.exports = {
  mode: 'jit', // <— убедись, что есть это (не обязательно в Tailwind 3+, но проверь)
  theme: {
    extend: {
      colors: {
        'my-primary': 'var(--my-primary)',
      },
    },
  },
}
