/**
 * Alterna entre dos clases a un elemento
 * @param {string} target - Id del elemento que se alternará las clases
 * @param {string} lightTheme - Clase css para tema claro
 * @param {string} darkTheme - Clase css para tema oscuro
 */
const alternateTheme = (target, lightTheme, darkTheme) => {
    const t = document.getElementById(target);
    if (!t) return
    if (t.classList.contains(lightTheme)) {
        t.classList.remove(lightTheme)
        t.classList.add(darkTheme)
    } else {
        t.classList.remove(darkTheme)
        t.classList.add(lightTheme)
    }
}
export default alternateTheme