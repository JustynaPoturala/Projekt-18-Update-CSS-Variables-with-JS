const inputs = document.querySelectorAll('.controls input');

function updateEffect() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', updateEffect));
inputs.forEach(input => input.addEventListener('mousemove', updateEffect));