const Header = () => {
    const view = `
        <div class="Header-main">
            <div class="Header-logo">
            <h1>
                Reto 2
            </h1>
            </div>
            <div class="Header-summary">
            <p>
                Instrucciones:<br>
                Dado esta URL, usar Fetch para renderizar todos los posts ordenados por userId de mayor a menor, y agregar un interior del post<br>                
            </p>

            <p>Hecho con <i class="fa-solid fa-heart"></i></p>
            </div>
            </div>
        </div>
    `;
    return view;
};

export default Header;
